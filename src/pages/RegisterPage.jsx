import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { registerApi } from "../api/auth";
import RegisterSchemaValidation from "../validations/RegisterSchemaValidation";

function RegisterPage() {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);

  const registerFormik = useFormik({
    initialValues: {
      lastname: "",
      firstname: "",
      email: "",
      password: "",
      confirm_password: "",
      identifiant: "",
      role: "",
      phone: "",
      city: "",
      picture: "",
      bio: "",
    },
    onSubmit: async (values) => {
      setIsPending(true);
      const result = await registerApi(values);
      console.log(result);

      if (result.status == "KO") {
        toast.error(result.message);
        setIsPending(false);
      } else {
        toast.success(result.message);
        setIsPending(false);
        navigate("/login");
      }
    },
    validationSchema: RegisterSchemaValidation,
  });

  return (
    <form onSubmit={registerFormik.handleSubmit} className="signup-wrapper">
      <div className="fake-nav">
        <a href="index.html" className="logo">
          <img
            src="assets/img/vector/logo/friendkit-bold.svg"
            width="112"
            height="28"
            alt=""
          />
        </a>
      </div>

      <div className="process-bar-wrap">
        <div className="process-bar">
          <div className="progress-wrap">
            <div className="track"></div>
            <div className="bar"></div>
            <div
              id="step-dot-1"
              className="dot is-first is-active is-current"
              data-step="0"
            >
              <i data-feather="smile"></i>
            </div>
            <div id="step-dot-2" className="dot is-second" data-step="25">
              <i data-feather="user"></i>
            </div>
            <div id="step-dot-3" className="dot is-third" data-step="50">
              <i data-feather="image"></i>
            </div>
            <div id="step-dot-4" className="dot is-fourth" data-step="75">
              <i data-feather="lock"></i>
            </div>
            <div id="step-dot-5" className="dot is-fifth" data-step="100">
              <i data-feather="flag"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="outer-panel">
        <div className="outer-panel-inner">
          <div className="process-title !font-bold">
            <h2 id="step-title-1" className="step-title is-active ">
              Bienvenue, selectionnez le type de compte.
            </h2>
            <h2 id="step-title-2" className="step-title">
              Dites nous plus sur vous.
            </h2>
            <h2 id="step-title-3" className="step-title">
              Mettez votre photo.
            </h2>
            <h2 id="step-title-4" className="step-title">
              Sécurisez votre compte.
            </h2>
            <h2 id="step-title-5" className="step-title">
              Tout est en place. Prêt?
            </h2>
          </div>

          <div id="signup-panel-1" className="process-panel-wrap is-active">
            <div className="columns mt-4">
              <div className="column is-4">
                <div className="account-type">
                  <div className="type-image">
                    <img
                      className="type-illustration"
                      src="/src/assets/img/illustrations/signup/type-1.svg"
                      alt=""
                    />
                    <img
                      className="type-bg light-image"
                      src="/src/assets/img/illustrations/signup/type-1-bg.svg"
                      alt=""
                    />
                    <img
                      className="type-bg dark-image"
                      src="/src/assets/img/illustrations/signup/type-1-bg-dark.svg"
                      alt=""
                    />
                  </div>
                  <h3>Vendeur Accessoir</h3>
                  <p>Créer un compte pour exposer vos accessoires</p>
                  <a
                    className="button is-fullwidth process-button"
                    data-step="step-dot-2"
                  >
                    Continuer
                  </a>
                </div>
              </div>
              <div className="column is-4">
                <div className="account-type">
                  <div className="type-image">
                    <img
                      className="type-illustration"
                      src="/src/assets/img/illustrations/signup/type-2.svg"
                      alt=""
                    />
                    <img
                      className="type-bg light-image"
                      src="/src/assets/img/illustrations/signup/type-2-bg.svg"
                      alt=""
                    />
                    <img
                      className="type-bg dark-image"
                      src="/src/assets/img/illustrations/signup/type-2-bg-dark.svg"
                      alt=""
                    />
                  </div>
                  <h3>Tailleur</h3>
                  <p>
                    Créer un compte pour exposer vos modèles au public et les
                    vendres
                  </p>
                  <a
                    className="button is-fullwidth process-button"
                    data-step="step-dot-2"
                  >
                    Continue
                  </a>
                </div>
              </div>
              <div className="column is-4">
                <div className="account-type">
                  <div className="type-image">
                    <img
                      className="type-illustration"
                      src="/src/assets/img/illustrations/signup/type-3.svg"
                      alt=""
                    />
                    <img
                      className="type-bg light-image"
                      src="/src/assets/img/illustrations/signup/type-3-bg.svg"
                      alt=""
                    />
                    <img
                      className="type-bg dark-image"
                      src="/src/assets/img/illustrations/signup/type-3-bg-dark.svg"
                      alt=""
                    />
                  </div>

                  <h3>Client</h3>
                  <p>Créer un compte pour voir les models, et commander.</p>
                  <a
                    className="button is-fullwidth process-button"
                    data-step="step-dot-2"
                  >
                    Continue
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="signup-panel-2" className="process-panel-wrap is-narrow">
            <div className="form-panel">
              <div className="field">
                <label>Prénom</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Entrer votre Prénom"
                    name="firstname"
                    value={registerFormik.values.firstname}
                    onChange={registerFormik.handleChange}
                    onBlur={registerFormik.handleBlur}
                  />
                </div>
                {registerFormik.touched.email &&
                  registerFormik.errors.email && (
                    <p className="text-red-500">
                      {registerFormik.errors.email}
                    </p>
                  )}
              </div>
              <div className="field">
                <label>Nom</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Entrer votre nom"
                    name="nom"
                    value={registerFormik.values.nom}
                    onChange={registerFormik.handleChange}
                    onBlur={registerFormik.handleBlur}
                  />
                </div>
              </div>
              <div className="field">
                <label>Email</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Entrer votre Email"
                    name="email"
                    value={registerFormik.values.email}
                    onChange={registerFormik.handleChange}
                    onBlur={registerFormik.handleBlur}
                  />
                </div>
              </div>
            </div>

            <div className="buttons">
              <a className="button process-button" data-step="step-dot-1">
                Précédent
              </a>
              <a
                className="button process-button is-next"
                data-step="step-dot-3"
              >
                Suivant
              </a>
            </div>
          </div>

          <div id="signup-panel-3" className="process-panel-wrap is-narrow">
            <div className="form-panel">
              <div className="photo-upload">
                <div className="preview">
                  <a className="upload-button">
                    <i data-feather="plus"></i>
                  </a>
                  <img
                    id="upload-preview"
                    src="../via.placeholder.com/150x150.png"
                    data-demo-src="assets/img/avatars/avatar-w.png"
                    alt=""
                  />
                  <form
                    id="profile-pic-dz"
                    className="dropzone is-hidden"
                    action="https://friendkit.cssninja.io/"
                  ></form>
                </div>
                <div className="limitation">
                  <small>
                    Only images with a size lower than 3MB are allowed.
                  </small>
                </div>
              </div>
            </div>

            <div className="buttons">
              <a className="button process-button" data-step="step-dot-2">
                Précédent
              </a>
              <a
                className="button process-button is-next"
                data-step="step-dot-4"
              >
                Suivant
              </a>
            </div>
          </div>

          <div id="signup-panel-4" className="process-panel-wrap is-narrow">
            <div className="form-panel">
              <div className="field">
                <label>Mot de passe</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    placeholder="Entrer votre mot de passe"
                    name="password"
                    value={registerFormik.values.password}
                    onChange={registerFormik.handleChange}
                    onBlur={registerFormik.handleBlur}
                  />
                </div>
              </div>
              <div className="field">
                <label>Confirmer mot de passe</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    placeholder="Confirmer votre mot de passe"
                    name="confirm_password"
                    value={registerFormik.values.confirm_password}
                    onChange={registerFormik.handleChange}
                    onBlur={registerFormik.handleBlur}
                  />
                </div>
              </div>
              <div className="field">
                <label>Phone Number</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Entrez votre numéro de téléphone"
                    name="confirm_password"
                    value={registerFormik.values.confirm_password}
                    onChange={registerFormik.handleChange}
                    onBlur={registerFormik.handleBlur}
                  />
                </div>
              </div>
            </div>

            <div className="buttons">
              <a className="button process-button" data-step="step-dot-3">
                Back
              </a>
              <a
                className="button process-button is-next"
                data-step="step-dot-5"
              >
                Next
              </a>
            </div>
          </div>

          <div id="signup-panel-5" className="process-panel-wrap is-narrow">
            <div className="form-panel">
              <img
                className="success-image"
                src="assets/img/illustrations/signup/mailbox.svg"
                alt=""
              />
              <div className="success-text">
                <h3>Congratz, you successfully created your account.</h3>
                <p>
                  We just sent you a confirmation email. PLease confirm your
                  account within 24 hours.
                </p>
                <a id="signup-finish" className="button is-fullwidth">
                  Let Me In
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="crop-modal" className="modal is-small crop-modal is-animated">
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="modal-card">
            <header className="modal-card-head">
              <h3>Crop your picture</h3>
              <div className="close-wrap">
                <button className="close-modal" aria-label="close">
                  <i data-feather="x"></i>
                </button>
              </div>
            </header>
            <div className="modal-card-body">
              <div id="cropper-wrapper" className="cropper-wrapper"></div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default RegisterPage;
