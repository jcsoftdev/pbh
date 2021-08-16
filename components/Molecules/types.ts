export type CoordinatesType = {
  lat: number;
  lng: number;
} 
export type MapType = {
  center: CoordinatesType;
  children?: React.ReactNode;
  zoom: number;
}