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


export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      search: undefined;
      createPet: undefined;
      detailsPet: PetDetailsParams;
    }
  }
}