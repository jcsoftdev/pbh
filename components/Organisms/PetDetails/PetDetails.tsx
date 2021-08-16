import { ImageType, Pet } from "@api/types";
import Button from "@components/Atoms/Button";
import React, { useEffect, useState } from "react";

const PetDetails = (pet: Pet) => {
  const [currentImg, setCurrentImg] = useState("");

  useEffect(() => {
    if (pet) setCurrentImg(pet.imgUrl[0].url);
  }, []);

  const handleImage = (img: ImageType) => setCurrentImg(img.url);

  

  return (
    <div className="container">
      <h1 className="petdetails-title">adoptalos ya!</h1>
      <div className="petdetails-container">
        <div className="petdetails-hero">
          <figure className="petdetails-figure">
            <img src={`http://127.0.0.1:1337${currentImg}`} alt="principal" />
          </figure>
          <div className="petdetails-figure-alternatives">
            {pet?.imgUrl?.map((img) => (
              <img
                key={img.hash}
                src={`http://127.0.0.1:1337${img.url}`}
                alt={img.name}
                onClick={()=>{handleImage(img)}}
              />
            ))}
          </div>
        </div>
        <div className="petdetails-info">
          <h2 className="petdetails-name">{pet.petName}</h2>
          <p className="petdetails-description">{pet.description}</p>
          <Button href={`tel:${pet.donor.cellphone}`}>Llamar</Button>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
