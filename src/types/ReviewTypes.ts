export interface ReviewInputTypes {
  review: string;
  userName:string
  userImage: string;
  userEmail: string;
  serviceName:string;
  serviceId: string;
}

export interface ReviewDataTypes extends ReviewInputTypes {
  _id: string;
}
