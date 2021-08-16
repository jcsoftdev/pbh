// import { Marker } from '@react-google-maps/api'
import { Post } from "@api/types";
import { useMapContext } from "@context/useMapContext";
import React, { useEffect, useRef } from "react";
import mapboxgl from "utils/mapboxgl";
import Alert from "../Alert";
import Button from "../Button";
import { PopUpType } from "./types";

interface ItemI extends Post {
  cellphone: number;
}



const Item = (post: ItemI) => {
  console.log(post.cellphone);


  const handleDetails = () => {
    console.log('click')
  }

  return (
    <div>
      <h1 className="popUpTitle">{post.anymal_type_data?.name}</h1>
      <p className="popUpDescription">{post.description}</p>
      {post.state ? (
        <>
          <div className="button-container">
            <Button size="small" href={`/pet/${post.id}`} onClick={handleDetails}>
                Ver Detalles  
            </Button>
            <Button inverse size="small"  href={`tel:${post.cellphone}`}>
                Llamar
            </Button>
          </div>
        </>
      ) : (
        <div className="alert-container">
          <Alert>Adoptado</Alert>
        </div>
      )}
    </div>
  );
};

const PopUp = ({ coordinates, data, cellphone }: PopUpType) => {
  const popupRef = useRef(null);
  const { map } = useMapContext();
  useEffect(() => {
    if (popupRef.current)
      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setDOMContent(popupRef.current)
        .addTo(map);
  }, [popupRef.current]);
  return (
    <div className="popUp-container">
      <div ref={popupRef} className="popUp">
        {data.map((post: Post, indx: number) => {
          console.log(cellphone)
          return (
            <div key={post.id}>
              <Item {...post} cellphone={cellphone} />
              {indx !== data.length - 1 && <hr />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopUp;
