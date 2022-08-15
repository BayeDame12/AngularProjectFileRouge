export interface Listcomande {

  id: number,
  numeroCommande: string,

  client: {
    adresse: string,
    email: string,
    prenom: string,
    nom: string,
    telephone: string
  },
  Produits: [
    {
      id: number,
      quantite: number,
      produit: {
        image: string,
        nom: string,
        prix: number
      }
    }
  ]
}

