import React, { useState, useEffect, useRef } from "react";
import Input from "../../Atoms/Input";
import Button from "../../Atoms/Button";
import Modal from "../../Atoms/Modal";
import Card from "../../Atoms/Card";
import CheckBox from "../../Atoms/Checkbox";
import { useForm } from "../../../hooks/form-hook";
import { VALIDATOR_REQUIRE } from "../../../utils/validators";
import { CSSTransition } from "react-transition-group";

const FormHelp = (props) => {
  const API_KEY = "AIzaSyAyJ821gbXvSLBEGuS0W51orqQq5YCZCLo";
  const inputProvince = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);
  const [isDonor, setIsDonor] = useState(false);
  const [footerMessage, setFooterMessage] = useState(
    "Pulse el botón bajar para seleccionar su ubicación exacta"
  );
  const [buttonOn, setButtonOn] = useState(true);

  const [formState, inputHandler] = useForm(
    {
      province: {
        value: "",
        isValid: false,
      },
      name: {
        value: "",
        isValid: false,
      },
      dni: {
        value: "",
        isValid: false,
      },
      productName: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const submit = async (e) => {
    e.preventDefault();
    // console.log(e);
    setSending(true);
    try {
      const data = await fetch(`https://back-dona.herokuapp.com/users/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isDonor: isDonor,
          dni: formState.inputs.dni.value,
          location: props.location,
          province: !isDonor ? formState.inputs.province.value : "==",
          name: !isDonor ? formState.inputs.name.value : "==",
          cellphone: !isDonor ? formState.inputs.cellphone.value : "000000000",
          products: [
            {
              productName: formState.inputs.productName.value,
              description: formState.inputs.description.value,
            },
          ],
        }),
      });

      if (data.status === 400) {
        setSuccess(false);
        throw new Error(await data.text());
      } else {
        setFooterMessage("Gracias por ayudar al necesitado");
        setTimeout(() => {
        }, 1000);
        setError(false);
        setSuccess(true);
      }
    } catch (Error) {
      setError(true);
      setFooterMessage(`${Error}`);
    }
    setSending(false);
  };

  // Searh in Google Maps
  const searchInMaps = async () => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          formState.inputs.province.value
        )}&key=${API_KEY}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    isDonor?
    setFooterMessage("Ud. puede ayudar al más necesitado")
    :
    setFooterMessage("Pulse el botón bajar para seleccionar su ubicación exacta")
    return () => {
      
    };
  }, [isDonor]);

  // Changing the pin in the map
  useEffect(() => {
      let setTime = null;
      if (loaded) {
        const getData = async () => {
          setTime = setTimeout(async () => {
            if (
              formState.inputs.province.value === inputProvince.current.value
            ) {
              const geolocation = await searchInMaps();
              if (geolocation) {
                if (geolocation.results.length > 0) {
                  props.handleLocation(
                    geolocation.results[0].geometry.location.lat,
                    geolocation.results[0].geometry.location.lng
                  );
                }
              } else {
                // console.log("cant load gmaps");
                setError(true);
              }
            }
          }, 500);
        };
        getData();
      }
      setLoaded(true);
      return () => {
        clearTimeout(setTime);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formState.inputs.province.value]
  );

  return (
    <CSSTransition
        in={true}
        mountOnEnter
        unmountOnExit
        appear={true}
        timeout={800}
        classNames="fade"
      >

    <Modal
      show={loaded}
      header={<CheckBox setChecked={setIsDonor} checked={isDonor} message=""/>}
      onCancel={false}
      footer={footerMessage}
      className="modal_container-start"
      success={success}
      error={error}
      buttonOn={buttonOn}
      setButtonOn={setButtonOn}
      showButton={!isDonor}
      footerRightMessage={"Gracias"}
      backdrop={!formState.inputs.province.value}
    >
      <Card className="d-flex" style={{borderRadius:0}}>
        {!isDonor && (
          <Input
            element="input"
            id="province"
            ref={inputProvince}
            label="Distrito / Provincia / Departamento / Pais"
            name="province"
            value={formState.inputs.province.value}
            onInput={inputHandler}
            validators={[]}
          />
        )}
        {!isDonor && (
          <Input
            element="input"
            id="name"
            label="Nombre o nickname del donante"
            name="name"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
          />
        )}
        <Input
          element="input"
          id="dni"
          label="DNI"
          className={!isDonor && "dm-6"}
          name="dni"
          onInput={inputHandler}
          validators={[]}
        />
        {!isDonor && (
          <Input
            element="input"
            id="cellphone"
            label="Nro celular"
            type="number"
            name="cellphone"
            className="dm-6"
            onInput={inputHandler}
            validators={[]}
          />
        )}
        <Input
          element="input"
          id="productName"
          label="Nombre de la mascota"
          type="text"
          name="productName"
          onInput={inputHandler}
          validators={[]}
        />
        <Input
          id="description"
          label="Descripción del animal"
          type="textarea"
          name="description"
          onInput={inputHandler}
          validators={[]}
        />
        <Button className="mt-2" disabled={sending} onClick={submit}>
          {sending ? "Sending" : "Donar"}
        </Button>
      </Card>
    </Modal>
  
      </CSSTransition>
  );
};

export default FormHelp;
