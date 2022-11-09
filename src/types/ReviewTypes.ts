export interface ReviewInputTypes {
  review: string;
  userImage: number;
  userEmail: string;
  serviceId: string;
}

export interface ReviewDataTypes extends ReviewInputTypes {
  _id: string;
}
