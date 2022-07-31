export interface Boissons {
  nom:      string;
  image:    string;
  Boissons: Boisson[];
  Burgers:  Burger[];
  Frites:   Frite[];
}

export interface Boisson {
  quantiteBoisson: number;
  boisson:         string;
}

export interface Burger {
  quantiteBurger: number;
  burger:         string;
}

export interface Frite {
  quantiteFrite: number;
  frite:         string;
}
