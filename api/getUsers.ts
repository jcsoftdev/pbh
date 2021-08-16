import axios from "axios";
import { getAnimalTypes } from "./getAnimalType";
import { Post, UserI } from "./types";


export const getUsers = async () => {
  try {
    const users: UserI[] = (await axios.get("http://localhost:1337/users")).data;
    const responseAnimalType = await getAnimalTypes();
    console.log("La respuesta", users);
    const newUserList = users.map((user) => {
      const posts = user.posts.map((post: Post) => {
        const animal_type = responseAnimalType.find((animaltype)=>animaltype.id===post.animal_type)
        return {...post, anymal_type_data: animal_type};
      });
      return { ...user, posts };
    });
    console.log('userList',newUserList)
    return [...newUserList];
  } catch (err) {
    throw new Error(err);
  }
};
