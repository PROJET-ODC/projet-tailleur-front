import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import LoginSchemaValidation from "../validations/LoginSchemaValidation.js";
import { loginApi } from "../api/auth.js";
import { useState } from "react";
import { toast } from "react-toastify";
import decodedToken from "../utils/decryptJWT.js"; // Importez le nouveau composant

function LoginPage() {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const [token, setToken] = useState(null); // État pour stocker le token

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setIsPending(true);
      const result = await loginApi(values);
      console.log("Réponse complète de connexion:", result);
      
      if (result.status === "KO") {
        toast.error(result.message);
        setIsPending(false);
      } else {
        toast.success(result.message);
        const newToken = result.token;
        localStorage.setItem("token", newToken);
    setToken(newToken); // Mettez à jour l'état du token
    const decoded = decodedToken(newToken); // Utilisation correcte de la fonction
    console.log('Token décodé:', decoded); // Affichez le token décodé dans la console
        setIsPending(false);
        navigate("/home");
      }
    },
    validationSchema: LoginSchemaValidation,
  });

  return (
    <div className="is-white">
      <div className="login-wrapper">
        <div className="login-wrapper columns is-gapless">
          <div className="column is-6 is-hidden-mobile hero-banner">
            <div className="hero is-fullheight is-login">
              <div className="hero-body">
                <div className="container">
                  <div className="left-caption">
                    <h2>Les nouvelles tendance de la mode</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-6">
            <div className="hero form-hero is-fullheight">
              <div className="logo-wrap">
                <div className="wrap-inner">
                  <img
                    src="assets/img/vector/logo/friendkit-white.svg"
                    alt=""
                  />
                </div>
              </div>
              <form onSubmit={loginFormik.handleSubmit} className="hero-body">
                <div className="form-wrapper">
                  <div className="avatar">
                    <div className="badge">
                      <i data-feather="check"></i>
                    </div>
                    <img
                      src="https://www.placeholder.com/128x128"
                      data-demo-src="assets/img/avatars/jenna.png"
                      alt=""
                    />
                  </div>
                  <div className="login-form">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input email-input"
                          type="text"
                          placeholder="jennadavis@gmail.com"
                          name="email"
                          value={loginFormik.values.email}
                          onChange={loginFormik.handleChange}
                          onBlur={loginFormik.handleBlur}
                        />
                        <div className="input-icon">
                          <i data-feather="user"></i>
                        </div>
                      </div>
                      {loginFormik.touched.email &&
                        loginFormik.errors.email && (
                          <p className="text-red-500">
                            {loginFormik.errors.email}
                          </p>
                        )}
                    </div>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input password-input"
                          type="password"
                          placeholder="●●●●●●●"
                          name="password"
                          value={loginFormik.values.password}
                          onChange={loginFormik.handleChange}
                          onBlur={loginFormik.handleBlur}
                        />
                        <div className="input-icon">
                          <i data-feather="lock"></i>
                        </div>
                      </div>
                      {loginFormik.touched.password &&
                        loginFormik.errors.password && (
                          <p className="text-red-500">
                            {loginFormik.errors.password}
                          </p>
                        )}
                    </div>
                    <div className="field">
                      <div className="control">
                        <button
                          type="submit"
                          className={
                            "button is-solid primary-button raised is-rounded is-fullwidth " +
                            (isPending ? "is-loading" : "")
                          }
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="section forgot-password">
                    <div className="has-text-centered">
                      <Link to="/register" className="underline !text-xl">
                        S'inscrire
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
