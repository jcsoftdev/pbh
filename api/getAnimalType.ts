import axios from "axios";
import { AnimalTypeI } from "./types";


export const getAnimalType = async (id: number) => {
  const response = await axios.get("http://localhost:1337/animal-types/" + id);

  const data: AnimalTypeI = response.data;
  return data;
};
export const getAnimalTypes = async () => {
  const response = await axios.get("http://localhost:1337/animal-types");
  const data: AnimalTypeI[] = response.data;
  return data;
};
