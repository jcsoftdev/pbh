import { Post } from "@api/types";
import { CoordinatesType } from "@components/Molecules/types";

export type CustomMarkerTypes = {
  position: CoordinatesType;
  onLoad?: () => void;
  icon?: string;
  data: Post[];
  cellphone: number;
};
