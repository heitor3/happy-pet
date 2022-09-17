export declare global {
  interface PetList {
    id: number;
    name: string;
    id_animalSpecies: number;
    size: string;
    age: string;
    city: string;
    uf: string;
    description: string;
    whatsapp: string;
    user: string;
    animalSpecies: {
      id: number;
      name: string;
      screenShot: string;
    }
  }
}