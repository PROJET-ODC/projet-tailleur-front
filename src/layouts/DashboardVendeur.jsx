import { Link, Navigate, NavLink, Outlet, useLocation } from "react-router-dom";
import useScriptLoader from "../hooks/useScriptLoader";
import scriptUrls from "../utils/scriptsUrl";
import decodedToken from "../utils/decryptJWT";
import {
  Button,
  Checkbox,
  Label,
  Modal,
  TextInput,
  Select,
} from "flowbite-react";
import { useState } from "react";

function DashboardVendeur() {
  useScriptLoader(scriptUrls);
  const location = useLocation();
  const authFromToken = decodedToken();
  const [openModal, setOpenModal] = useState(false);
  if (authFromToken.role != "vendeur") return <Navigate to="/home" />;

  return (
    <>
      <div className="dashboard-aside !w-[126px]">
        <Link to="/home" className="dashboard-aside-brand">
          <img
            className="logo light-image"
            src="/src/assets/img/vector/logo/friendkit-bold.svg"
            width="112"
            height="28"
            alt=""
          />
          <img
            className="logo dark-image"
            src="/src/assets/img/vector/logo/friendkit-white.svg"
            width="112"
            height="28"
            alt=""
          />
        </Link>
        <div className="dashboard-aside-body">
          <NavLink
            to="/vendeur/articles"
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

              <span className="font-bold">Mes Articles</span>
            </div>
          </NavLink>

          <NavLink
            to="/vendeur/commande"
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
              <span className="font-bold">Mes Commandes</span>
            </div>
          </NavLink>
        </div>

        <div className="dashboard-aside-end">
          <Link to="/home" className="dashboard-aside-link">
            <img className="link-avatar" src={authFromToken.picture} alt="" />
          </Link>
        </div>
      </div>

      <div className="view-wrapper is-dashboard">
        <div id="creator-dashboard" className="dashboard-container">
          <div className="dashboard-toolbar">
            <h1 className="title is-4">Tableau de bord</h1>
            <div className="actions !gap-3">
              <div
                className={`buttons ${
                  location.pathname == "/vendeur/articles" ? "" : "hidden"
                } !m-0`}
              >
                <Link
                  onClick={() => setOpenModal(true)}
                  className="button is-solid primary-button is-raised has-icon !m-0 "
                >
                  <i data-feather="plus"></i>
                  <span>Ajouter Article</span>
                </Link>
              </div>
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

      <Modal
        show={openModal}
        size="4xl"
        popup
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Ajouter un article
            </h3>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div className="">
                <div className="mb-2 block">
                  <Label htmlFor="libelle" value="Le libelle" />
                </div>
                <TextInput id="libelle" placeholder="" required />
              </div>
              <div className="">
                couleurs
              </div>
              <div className="">
                <div className="mb-2 block">
                  <Label htmlFor="unite" value="Choisir unite" />
                </div>
                <Select id="custom-select" name="options">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>{" "}
              </div>
              <div className="">
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput id="password" type="password" required />
              </div>
            </div>
            <div className="w-full">
              <Button className="w-full">Créer</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DashboardVendeur;
