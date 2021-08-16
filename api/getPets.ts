import axios from "axios";
import { Pet } from "./types";

export const getPets = async () => {
  const pets: Pet[] = (await axios.get("http://localhost:1337/posts")).data;
  return pets;
};

export const getPetById = async (id: string) => {
  const pet: Pet = (await axios.get(`http://localhost:1337/posts/${id}`)).data;
  return pet;
};
