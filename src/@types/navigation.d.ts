export interface PetDetailsParams {
  name: string;
  size: string;
  age: string;
  city: string;
  uf: string;
  description: string;
  whatsapp: string;
  animalSpecies: {
    screenShot: string;
  }
}

export interface DonationOng{
  name: string;
  street: string;
  number: string;
  district: string;
  city: string;
  uf: string;
  donationCode: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      search: undefined;
      createPet: undefined;
      detailsPet: PetDetailsParams;
      myPets: undefined;
      donation: undefined;
    }
  }
}