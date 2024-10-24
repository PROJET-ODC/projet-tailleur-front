import { Link, Navigate, NavLink, Outlet } from "react-router-dom";
import useScriptLoader from "../hooks/useScriptLoader";
import scriptUrls from "../utils/scriptsUrl";
import decodedToken from "../utils/decryptJWT";

function DashboardTailleur() {
  useScriptLoader(scriptUrls);

  const authFromToken = decodedToken();
  if (authFromToken.role != "tailleur") return <Navigate to="/home" />;
  return (
    <>
      <div className="dashboard-aside !w-[126px]">
        <Link to="/home" className="dashboard-aside-brand">
          <img
            className="logo light-image !max-h-24 !max-w-16"
            src="/src/assets/logo1-origin.png"
            width="112"
            height="28"
            alt=""
          />
          <img
            className="logo dark-image"
            src="/src/assets/logo1-origin.png"
            width="112"
            height="28"
            alt=""
          />
        </Link>
        <div className="dashboard-aside-body">
          <NavLink
            to="/tailleur/articles"
            className={({ isActive }) =>
              `dashboard-aside-link ${isActive ? "bg-[aliceblue]" : ""}`
            }
          >
            <div className="flex flex-col items-center">
              <svg
                className="!h-[47px] !w-[35px]"
                width="68"
                height="68"
                viewBox="0 0 48 48"
              >
                <path
                  className="vi-primary"
                  d="M6.008,27.205L25.215,8,41,8V23L22,43Z"
                  style={{ fill: "rgb(61, 112, 178)" }}
                ></path>
                <path
                  className="vi-accent"
                  d="M9.8,27.205l2.526-2.526,12,12L21.795,39.2ZM30.951,13.629a3.126,3.126,0,1,1,0,4.42A3.126,3.126,0,0,1,30.951,13.629Z"
                  style={{ fill: "rgb(12, 0, 88)" }}
                ></path>
              </svg>

              <span className="font-bold">Articles</span>
            </div>
          </NavLink>

          <NavLink
            to="/tailleur/appro"
            className={({ isActive }) =>
              `dashboard-aside-link ${isActive ? "bg-[aliceblue]" : ""}`
            }
          >
            <div className="flex flex-col items-center">
              <svg
                className="!h-[47px] !w-[35px]"
                width="68"
                height="68"
                viewBox="0 0 48 48"
              >
                {" "}
                <path
                  className="vi-primary"
                  d="M41,11V41H7V11H5V7H43v4H41Z"
                  style={{ fill: "rgb(61, 112, 178)" }}
                ></path>{" "}
                <path
                  className="vi-accent"
                  d="M38.5,18c-4.3,0-4.5-5-4.5-5a5,5,0,0,1-10,0,5,5,0,0,1-10,0s-0.2,5-4.5,5A4.5,4.5,0,0,1,5,13.5V11H43v2.5A4.5,4.5,0,0,1,38.5,18ZM22.01,35.01h-9V25.99h9v9.02ZM34.993,41h-8V25.99h8V41Z"
                  style={{ fill: "rgb(12, 0, 88)" }}
                ></path>
              </svg>
              <span className="font-bold">Approvisionnement</span>
            </div>
          </NavLink>

          <NavLink
            to="/tailleur/commande"
            className={({ isActive }) =>
              `dashboard-aside-link ${isActive ? "bg-[aliceblue]" : ""}`
            }
          >
            <div className="flex flex-col items-center">
              <svg
                className="!h-[47px] !w-[35px]"
                width="68"
                height="68"
                viewBox="0 0 48 48"
              >
                {" "}
                <path
                  className="vi-primary"
                  d="M13.394,15H34.606L38,41H10Z"
                  style={{ fill: "rgb(61, 112, 178)" }}
                ></path>{" "}
                <path
                  className="vi-accent"
                  d="M10,41h0l0.522-4H37.478L38,41H10ZM28,14c0-1.516-.737-5-4-5s-4,3.484-4,5v1H17l0.01-2.951C17.01,9.017,20.053,6,24,6s6.99,3.017,6.99,6.049L31,15H28V14Z"
                  style={{ fill: "rgb(12, 0, 88)" }}
                ></path>{" "}
                <path
                  className="vi-prop"
                  d="M17,15L17.009,17l3,0V15H17Zm10.989,0v1.989l3,0L31,15H27.991Z"
                  style={{ fill: "rgb(255, 255, 255)" }}
                ></path>
              </svg>
              <span className="font-bold">Commandes</span>
            </div>
          </NavLink>

          <NavLink
                  to="/tailleur/achatCredit"
                  className={({ isActive }) =>
                    `dashboard-aside-link ${isActive ? "bg-[aliceblue]" : ""}`
                  }
                >
                  <div className="flex flex-col items-center">
                    <svg
                      className="!h-[47px] !w-[35px]"
                      width="68"
                      height="68"
                      viewBox="0 0 48 48"
                    >
                      <rect
                        x="6"
                        y="12"
                        width="36"
                        height="24"
                        rx="3"
                        ry="3"
                        style={{ fill: "rgb(61, 112, 178)" }} // Background color of the card
                      ></rect>
                      <rect
                        x="6"
                        y="20"
                        width="36"
                        height="4"
                        style={{ fill: "rgb(255, 255, 255)" }} // White stripe
                      ></rect>
                      <rect
                        x="10"
                        y="28"
                        width="16"
                        height="2"
                        style={{ fill: "rgb(255, 255, 255)" }} // Placeholder for card number
                      ></rect>
                      <circle
                        cx="32"
                        cy="29"
                        r="2"
                        style={{ fill: "rgb(255, 255, 255)" }} // Small icon or chip
                      ></circle>
                    </svg>
                    <span className="font-bold">Acheter Crédit</span>
                  </div>
                </NavLink>

          
        </div>

        <div className="dashboard-aside-end">
          <Link to="/profile" className="dashboard-aside-link">
            <img className="link-avatar" src={authFromToken.picture} alt="" />
          </Link>
        </div>
      </div>

      <div className="view-wrapper is-dashboard">
        <div id="creator-dashboard" className="dashboard-container">
          <div className="dashboard-toolbar">
            <h1 className="title is-4">Tableau de bord</h1>
            <div className="actions">
              <label className="theme-toggle">
                <input type="checkbox" />
                <span className="toggler">
                  <span className="dark">
                    <i data-feather="moon"></i>
                  </span>
                  <span className="light">
                    <i data-feather="sun"></i>
                  </span>
                </span>
              </label>
            </div>
          </div>

          <div className="dashboard-body">
            <div className="columns">
              <div className="column is-12">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardTailleur;
