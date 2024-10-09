import * as Yup from "yup";

const LoginSchemaValidation = Yup.object().shape({
  email: Yup.string()
    .email("L'adresse email doit être valide")
    .required("L'email est requis"),
  password: Yup.string().required("Le mot de passe est requis"),
});

export default LoginSchemaValidation;
