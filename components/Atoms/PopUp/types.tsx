import { Post } from "@api/types";
import { CoordinatesType } from "@components/Molecules/types";

export type PopUpType = {
  coordinates: CoordinatesType;
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  data: Post[];
  cellphone: number;
};
