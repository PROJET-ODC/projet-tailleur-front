import { Link, Navigate, NavLink, Outlet, useLocation } from "react-router-dom";
import useScriptLoader from "../hooks/useScriptLoader";
import scriptUrls from "../utils/scriptsUrl";
import decodedToken from "../utils/decryptJWT";
import { Button, Label, Modal, TextInput, Select, Textarea, FileInput } from "flowbite-react";
import { useState } from "react";
import { useFormik } from "formik";
import { ArticleVendeur } from "../api/ArticleVendeur";
import ArticleSchemaValidation from "../validations/ArticleSchemaValidation";

function DashboardVendeur() {
  useScriptLoader(scriptUrls);
  const location = useLocation();
  const authFromToken = decodedToken();
  const [openModal, setOpenModal] = useState(false);

  const articleFromik = useFormik({
    initialValues: {
      libelle: "",
      couleurs: [],
      unites: [],
      qte: "",
      prix: "",
      categorie_id: "",
      description: "",
      images: null,
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("libelle", values.libelle);
      formData.append("couleurs", JSON.stringify(values.couleurs));
      formData.append("unites", JSON.stringify(values.unites.map(unite => ({
        prix: unite.prix,
        qte: unite.qte,
        unite_id: unite.unite_id
      }))));
      formData.append("qte", values.qte);
      formData.append("prix", values.prix);
      formData.append("categorie_id", values.categorie_id);
      formData.append("description", values.description);
      if (values.images) {
        formData.append("image", values.images);
      }

      const result = await ArticleVendeur(formData);
      
      if (result.success) {
        console.log("Article created successfully", result.data);
        setOpenModal(false); // Close the modal after successful submission
        // Optionally, you can reset the form or perform other actions
      } else {
        console.log("Failed to create article", result.error);
      }
    },
    validationSchema: ArticleSchemaValidation,
  });

  if (authFromToken.role !== "vendeur") return <Navigate to="/home" />;

  return (
    <>
      <div className="dashboard-aside !w-[126px]">
        {/* Sidebar menu */}
        <Link to="/home" className="dashboard-aside-brand">
          <img
            className="logo light-image !max-h-24 !max-w-16"
            src="/src/assets/logo1-origin.png"
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
              <svg className="!h-[47px] !w-[35px]" width="68" height="68" viewBox="0 0 48 48">
                <path className="vi-primary" d="M6.008,27.205L25.215,8,41,8V23L22,43Z" style={{ fill: "rgb(61, 112, 178)" }}></path>
                <path className="vi-accent" d="M9.8,27.205l2.526-2.526,12,12L21.795,39.2ZM30.951,13.629a3.126,3.126,0,1,1,0,4.42A3.126,3.126,0,0,1,30.951,13.629Z" style={{ fill: "rgb(12, 0, 88)" }}></path>
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
              <svg className="!h-[47px] !w-[35px]" width="68" height="68" viewBox="0 0 48 48">
                <path className="vi-primary" d="M13.394,15H34.606L38,41H10Z" style={{ fill: "rgb(61, 112, 178)" }}></path>
                <path className="vi-accent" d="M10,41h0l0.522-4H37.478L38,41H10ZM28,14c0-1.516-.737-5-4-5s-4,3.484-4,5v1H17l0.01-2.951C17.01,9.017,20.053,6,24,6s6.99,3.017,6.99,6.049L31,15H28V14Z" style={{ fill: "rgb(12, 0, 88)" }}></path>
              </svg>
              <span className="font-bold">Mes Commandes</span>
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
            <div className="actions !gap-3">
              <div className={`buttons ${location.pathname === "/vendeur/articles" ? "" : "hidden"} !m-0`}>
                <Link onClick={() => setOpenModal(true)} className="button is-solid primary-button is-raised has-icon !m-0">
                  <i data-feather="plus"></i>
                  <span>Ajouter Article</span>
                </Link>
              </div>
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

      {/* Modal for adding an article */}
      <Modal show={openModal} size="4xl" popup onClose={() => setOpenModal(false)}>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={articleFromik.handleSubmit} className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Ajouter un article</h3>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <Label htmlFor="libelle" value="Le libelle" />
                <TextInput
                  id="libelle"
                  value={articleFromik.values.libelle}
                  onChange={articleFromik.handleChange}
                  onBlur={articleFromik.handleBlur}
                  required
                />
                {articleFromik.touched.libelle && articleFromik.errors.libelle && (
                  <span className="text-red-500">{articleFromik.errors.libelle}</span>
                )}
              </div>

              <div>
                <Label htmlFor="couleur" value="Choisir une couleur" />
                <Select
                  id="couleurs"
                  value={articleFromik.values.couleurs}
                  onChange={articleFromik.handleChange}
                  onBlur={articleFromik.handleBlur}
                  name="couleurs"
                  required
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="1">Rouge</option>
                  <option value="2">Bleue</option>
                  <option value="3">Blanc</option>
                  <option value="4">Noir</option>
                </Select>
                {articleFromik.touched.couleurs && articleFromik.errors.couleurs && (
                  <span className="text-red-500">{articleFromik.errors.couleurs}</span>
                )}
              </div>

              <div>
                <Label htmlFor="unites" value="Choisir unite" />
                <Select
                  id="unites"
                  value={articleFromik.values.unites}
                  onChange={articleFromik.handleChange}
                  onBlur={articleFromik.handleBlur}
                  name="unites"
                  required
                >
                  <option value="" disabled>
                    Selectinner l'unité
                  </option>
                  <option value="option1">yard</option>
                  <option value="option2">metre</option>
                  <option value="option3">boite</option>
                </Select>
                {articleFromik.touched.unites && articleFromik.errors.unites && (
                  <span className="text-red-500">{articleFromik.errors.unites}</span>
                )}
              </div>

              <div>
                <Label htmlFor="qte" value="Quantité" />
                <TextInput
                  id="qte"
                  type="number"
                  value={articleFromik.values.qte}
                  onChange={articleFromik.handleChange}
                  onBlur={articleFromik.handleBlur}
                  required
                />
                {articleFromik.touched.qte && articleFromik.errors.qte && (
                  <span className="text-red-500">{articleFromik.errors.qte}</span>
                )}
              </div>

              <div>
                <Label htmlFor="categorie_id" value="Catégorie" />
                <Select
                  id="categorie_id"
                  name="categorie_id"
                  value={articleFromik.values.categorie_id}
                  onChange={articleFromik.handleChange}
                  onBlur={articleFromik.handleBlur}
                  required
                >
                  <option value="" disabled>
                    Select la catégorie
                  </option>
                  <option value="1">Catégorie 1</option>
                  <option value="2">Catégorie 2</option>
                  <option value="3">Catégorie 3</option>
                  <option value="4">Catégorie 4</option>
                </Select>
                {articleFromik.touched.categorie_id && articleFromik.errors.categorie_id && (
                  <span className="text-red-500">{articleFromik.errors.categorie_id}</span>
                )}
              </div>

              <div>
                <Label htmlFor="prix" value="Prix unitaire" />
                <TextInput
                  id="prix"
                  type="number"
                  value={articleFromik.values.prix}
                  onChange={articleFromik.handleChange}
                  onBlur={articleFromik.handleBlur}
                  required
                />
                {articleFromik.touched.prix && articleFromik.errors.prix && (
                  <span className="text-red-500">{articleFromik.errors.prix}</span>
                )}
              </div>

              <div className="col-span-full">
                <Label htmlFor="description" value="Description" />
                <Textarea
                  id="description"
                  value={articleFromik.values.description}
                  onChange={articleFromik.handleChange}
                  onBlur={articleFromik.handleBlur}
                  required
                />
                {articleFromik.touched.description && articleFromik.errors.description && (
                  <span className="text-red-500">{articleFromik.errors.description}</span>
                )}
              </div>

              <div className="col-span-full">
                <Label htmlFor="image" value="Image" />
                <FileInput
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={(event) => {
                    articleFromik.setFieldValue("image", event.currentTarget.files[0]);
                  }}
                  required
                />
                {articleFromik.touched.images && articleFromik.errors.images && (
                  <span className="text-red-500">{articleFromik.errors.images}</span>
                )}
              </div>
            </div>

            <div className="w-full">
              <Button type="submit">Créer</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DashboardVendeur;
