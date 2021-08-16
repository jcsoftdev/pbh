import React, { useEffect, useState } from "react";
import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { getPetById } from "@api/getPets";
import Header from "@components/Organisms/Header";
import PetDetails from "@components/Organisms/PetDetails";
import { Pet as PetI } from "@api/types";

export async function getServerSideProps(context) {
  const { id } = context.query;

  if (id && typeof id === "string") {
    try {
      
      const petData: PetI = await getPetById(id);
      // console.log(pet)

    const pet = petData.state ? petData : null
      if (!pet) {
        return {
          notFound: true,
        };
      }
      return {
        props: { pet },
      };
    } catch (error) {
      return {
        notFound: true,
      };
    }
  }

  return {
    notFound: true,
  };
}

const Pet = ({pet}: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  // console.log(pet)

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div id="backdrop-hook"></div>
      <Header />

      <main>{pet && <PetDetails {...pet} />}</main>
    </div>
  );
};

export default Pet;
