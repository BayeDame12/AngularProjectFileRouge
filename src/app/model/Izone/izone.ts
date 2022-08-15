export interface Izone
{
  
    id: number,
    nomZone: string,
    commandes: [
      {
        statutCommande: string,
        client: {
          adresse: string,
          prenom: string,
          nom: string,
          telephone: string
        },
        Produits: [
          {
            quantite: number,
            produit: {
              id: number,
              nom: string
            }
          }
        ]
      }
    ]
  
}

