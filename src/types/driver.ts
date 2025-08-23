export interface Driver {
  id: number;
  firstName: string;
  lastName: string;
  isEstonianResident: boolean;
  personalID: number | null;
  dateOfBirth: string;
  phoneNumber: string;
  email: string;
  livingAddress: string;
  driversLicenseNumber: string;
  currentVehicle: string | null;
  createdAt: string;
  lastEditedAt: string;
}

export interface SimpleDriver {
  firstName: string;
  lastName: string;
  personalID?: number;
  currentVehicle?: string;
}
