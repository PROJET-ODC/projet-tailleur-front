import { useFormik } from "formik";
import { Link, replace, useNavigate } from "react-router-dom";
import LoginSchemaValidation from "../validations/LoginSchemaValidation.js";
import { loginApi } from "../api/auth.js";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import scriptUrls from "../utils/scriptsUrl";
import useScriptLoader from "../hooks/useScriptLoader";
import { AuthContext } from "../context/AuthContext.jsx";
import { isAuth } from "../utils/decryptJWT.js";

function LoginPage() {
  const navigate = useNavigate();
  const { updateAuthStatus } = useContext(AuthContext);
  const isLoggedIn = isAuth();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  useScriptLoader(scriptUrls);

  const [isPending, setIsPending] = useState(false);

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setIsPending(true);
      const result = await loginApi(values);

      if (result.status == "KO") {
        toast.error(result.message);
        setIsPending(false);
      } else {
        toast.success(result.message);

        localStorage.setItem("panier", JSON.stringify([]));
        localStorage.setItem("token", result.token);
        console.log(localStorage.getItem("token"));

        updateAuthStatus();
        setIsPending(false);

        navigate("/home", { replace: true });
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
                    <h2>Les nouvelles tendance de la mode </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-6">
            <div className="hero form-hero is-fullheight">
              <div className="logo-wrap !transform-none !bg-transparent">
                <div className="wrap-inner !bg-none">
                  <img
                    src="/src/assets/logo1-origin.png"
                    className="!max-w-52"
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
