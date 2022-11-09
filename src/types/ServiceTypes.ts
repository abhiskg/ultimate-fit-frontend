export interface ServiceInputTypes {
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface ServiceDataTypes extends ServiceInputTypes {
  _id: string;
}

