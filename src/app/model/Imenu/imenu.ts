export interface Imenu
{
  Burgers: [
    {
      quantiteBurger: number,
      burger: {
        id: number,
        image: string,
        nom: string,
        prix:number
      }
    }
  ],
  Frites: [
    {
      quantiteFrite: number,
      frite: {
        id: number,
        image: string,
        nom: string,
        prix:number
      }
    }
  ],
  menutailles: [
    {
      quantity: number,
      taille: {
        id: number,
        prix: number,
        libelle: string
      }
    }
  ],
  id: number,
  image: string,
  nom: string,
  prix:number

}
