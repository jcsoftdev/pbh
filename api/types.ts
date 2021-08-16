// this is similar to post, just the donor comes from the backend in json
export interface Pet {
  id: number;
  petName: string;
  description: string;
  state: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
  donor: Donor;
  animal_type: AnimalType;
  imgUrl: ImageType[];
}

export interface AnimalType {
  id: number;
  published_at: string;
  created_at: string;
  updated_at: string;
  name: string;
  icon_up: ImageType;
  icon_down: ImageType;
}

export interface UserI {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  role: Role;
  location: Location;
  cellphone: number | null;
  dni: string;
  name: string;
  created_at: string;
  updated_at: string;
  posts: Post[];
}

export interface Location {
  lat: number;
  lng: number;
}

export interface ImgURL {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  created_at: string;
  updated_at: string;
}

export interface Formats {
  thumbnail: Medium;
  small: Medium;
  medium?: Medium;
}

export interface Medium {
  name: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  width: number;
  height: number;
  size: number;
  path: null;
  url: string;
}

export interface Role {
  id: number;
  name: string;
  description: string;
  type: string;
}

export interface ImageType {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats | null;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: Provider;
  provider_metadata: null;
  created_at: string;
  updated_at: string;
}

export enum EXT {
  Jpg = ".jpg",
  PNG = ".png",
  SVG = ".svg",
}

export interface Formats {
  thumbnail: Medium;
  small: Medium;
  medium?: Medium;
}

export interface Medium {
  name: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  width: number;
  height: number;
  size: number;
  path: null;
  url: string;
}

export enum MIME {
  ImageJPEG = "image/jpeg",
  ImagePNG = "image/png",
  ImageSVGXML = "image/svg+xml",
}

export enum Provider {
  Local = "local",
}

export interface Donor {
  id: number;
  username: string;
  email: string;
  provider: Provider;
  confirmed: boolean;
  blocked: boolean;
  role: number;
  location: Location;
  cellphone: number | null;
  dni: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Location {
  lat: number;
  lng: number;
}

export interface AnimalTypeI {
  id: number;
  published_at: string;
  created_at: string;
  updated_at: string;
  name: string;
  icon_up: ImageType | null;
  icon_down: ImageType | null;
  posts: Post[];
}

export interface Formats {
  thumbnail: Small;
  small: Small;
}

export interface Small {
  name: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  width: number;
  height: number;
  size: number;
  path: null;
  url: string;
}

export interface Post {
  id: number;
  petName: string;
  description: string;
  state: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
  donor: number;
  anymal_type_data: AnimalTypeI;
  animal_type: number;
  imgUrl: ImageType[] | ImgURL[];
}
