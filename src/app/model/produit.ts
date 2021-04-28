import { abat } from "./abat";
export class produit {
    id: number;
    nom: string;
    disponible: number;
    prix: number;
    quantite: number;
    qty: number;
    abat: abat;
    type: number;
    static fromJson(json: any) {
    if (!json) {
        return null;
    }
    else {
          const p = new produit();
          p.id = json.id;
          p.nom = json.nom;
          p.disponible = json.disponible;
          p.prix = json.prix;
          p.quantite = json.quantite;
          p.qty = json.qty;
          p.abat = json.abat;
          p.type = json.type
          return p;
    }
}

}