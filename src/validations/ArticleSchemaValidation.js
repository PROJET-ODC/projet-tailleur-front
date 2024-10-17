import * as Yup from "yup";

const ArticleSchemaValidation = Yup.object().shape({
  libelle: Yup.string()
    .required("Le libellé est requis")
    .min(2, "Le libellé doit contenir au moins 2 caractères"),

  couleur: Yup.string()
    .required("La couleur est requise")
    .oneOf(["1", "2", "3", "4"], "Couleur invalide"), // correspond to rouge, bleu, blanc, noir options

  unite: Yup.string()
    .required("L'unité est requise")
    .oneOf(["option1", "option2", "option3"], "Unité invalide"), // corresponds to yard, mètre, boite options

  qte: Yup.number()
    .required("La quantité est requise")
    .positive("La quantité doit être un nombre positif")
    .integer("La quantité doit être un nombre entier"),

  prixU: Yup.number()
    .required("Le prix unitaire est requis")
    .positive("Le prix unitaire doit être un nombre positif"),

  description: Yup.string()
    .required("La description est requise")
    .max(500, "La description ne doit pas dépasser 500 caractères"),

  // You can add file validation here if needed, such as:
  // image: Yup.mixed().required("L'image est requise"),
});

export default ArticleSchemaValidation;
