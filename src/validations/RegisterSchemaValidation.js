import * as Yup from "yup";

const RegisterSchemaValidation = Yup.object().shape({
    lastname: Yup.string()
        .required("Le nom est requis")
        .min(2, "Le nom doit contenir au moins 2 caractères"),
    firstname: Yup.string()
        .required("Le prénom est requis")
        .min(2, "Le prénom doit contenir au moins 2 caractères"),
    email: Yup.string()
        .email("L'email n'est pas valide")
        .required("L'email est requis"),
    password: Yup.string()
        .required("Le mot de passe est requis")
        .matches(
            /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}:;<>,.?~\-\\/[\]])[A-Za-z\d!@#$%^&*()_+{}:;<>,.?~\-\\/[\]]{6,}$/,
            "Le mot de passe doit contenir au moins 6 caractères, une majuscule et un caractère spécial"
        ),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('password'), null], "Les mots de passe ne correspondent pas")
        .required("La confirmation du mot de passe est requise"),
    identifiant: Yup.string()
        .required("L'identifiant est requis")
        .min(4, "L'identifiant doit contenir au moins 4 caractères"),
    role: Yup.string()
        .required("Le rôle est requis")
        .oneOf(["ADMIN", "USER", "TAILLEUR", "VENDEUR"], "Rôle invalide"), // vous pouvez adapter les valeurs de rôle si nécessaire
    phone: Yup.string()
        .required("Le numéro de téléphone est requis")
        .matches(
            /^(77|78|76)\d{7}$/,
            "Invalid phone number format (77|78|76)7777777"
        ),
    city: Yup.string()
        .required("La ville est requise")
        .min(2, "Le nom de la ville doit contenir au moins 2 caractères"),
    picture: Yup.string()
        .url("L'URL de l'image n'est pas valide")
        .nullable(),
    bio: Yup.string()
        .max(500, "La bio ne doit pas dépasser 500 caractères")
        .nullable(),
});

export default RegisterSchemaValidation;
