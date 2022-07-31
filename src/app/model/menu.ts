export interface Menu {
  id: number;
  nom: string,
  image: string,
  quantity:number,
  prix:number;
  Boissons: [
    {
      quantiteBoisson: number,
      boisson: string
    }
  ],
  Burgers: [
    {
      quantiteBurger: number,
      burger: string
    }
  ],
  Frites: [
    {
      quantiteFrite: number,
      frite: string
    }
  ]

}
