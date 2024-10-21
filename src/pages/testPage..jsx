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

  const articleFormik = useFormik({
    initialValues: {
      libelle: "",
      couleurs: [],
      unites: [{ prix: "", qte: "", unite_id: "" }],
      qte: "",
      prix: "",
      categorie_id: "",
      description: "",
      images: null,
    },
    validationSchema: ArticleSchemaValidation,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("libelle", values.libelle);
      formData.append("couleurs", JSON.stringify(values.couleurs)); // Ajoute la sélection de couleurs en JSON
      formData.append(
        "unites",
        JSON.stringify(values.unites.map(unite => ({
          prix: unite.prix,
          qte: unite.qte,
          unite_id: unite.unite_id,
        })))
      );
      formData.append("qte", values.qte);
      formData.append("prix", values.prix);
      formData.append("categorie_id", values.categorie_id);
      formData.append("description", values.description);
      if (values.images) {
        formData.append("images", values.images);
      }

      const result = await ArticleVendeur(formData);
      if (result.success) {
        console.log("Article créé avec succès", result.data);
        setOpenModal(false); // Ferme la modal après le succès
      } else {
        console.log("Erreur de création d'article", result.error);
      }
    },
  });

  if (authFromToken.role !== "vendeur") return <Navigate to="/home" />;

  return (
    <>
      <div className="dashboard-aside !w-[126px]">
        {/* Sidebar */}
        <Link to="/home" className="dashboard-aside-brand">
          <img
            className="logo light-image !max-h-24 !max-w-16"
            src="/src/assets/logo1-origin.png"
            alt="Logo"
          />
        </Link>
        <div className="dashboard-aside-body">
          <NavLink
            to="/vendeur/articles"
            className={({ isActive }) => `dashboard-aside-link ${isActive ? "bg-[aliceblue]" : ""}`}
          >
            <div className="flex flex-col items-center">
              <span className="font-bold">Mes Articles</span>
            </div>
          </NavLink>
          <NavLink
            to="/vendeur/commande"
            className={({ isActive }) => `dashboard-aside-link ${isActive ? "bg-[aliceblue]" : ""}`}
          >
            <div className="flex flex-col items-center">
              <span className="font-bold">Mes Commandes</span>
            </div>
          </NavLink>
        </div>
        <div className="dashboard-aside-end">
          <Link to="/profile" className="dashboard-aside-link">
            <img className="link-avatar" src={authFromToken.picture} alt="Avatar" />
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
                  <span>Ajouter Article</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="dashboard-body">
            <Outlet />
          </div>
        </div>
      </div>

      <Modal show={openModal} size="4xl" popup onClose={() => setOpenModal(false)}>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={articleFormik.handleSubmit} className="space-y-6">
            <h3 className="text-xl font-medium">Ajouter un article</h3>

            <Label htmlFor="libelle" value="Libelle" />
            <TextInput
              id="libelle"
              value={articleFormik.values.libelle}
              onChange={articleFormik.handleChange}
              required
            />

            <Label htmlFor="couleurs" value="Couleurs" />
            <Select
              multiple
              id="couleurs"
              value={articleFormik.values.couleurs}
              onChange={articleFormik.handleChange}
              required
            >
              <option value="1">Rouge</option>
              <option value="2">Bleu</option>
              <option value="3">Blanc</option>
            </Select>

            <Label htmlFor="unites" value="Unité et Prix" />
            {articleFormik.values.unites.map((_, index) => (
              <div key={index}>
                <TextInput
                  name={`unites.${index}.prix`}
                  placeholder="Prix"
                  value={articleFormik.values.unites[index].prix}
                  onChange={articleFormik.handleChange}
                />
                <TextInput
                  name={`unites.${index}.qte`}
                  placeholder="Quantité"
                  value={articleFormik.values.unites[index].qte}
                  onChange={articleFormik.handleChange}
                />
              </div>
            ))}

            <Label htmlFor="categorie_id" value="Catégorie" />
            <Select
              id="categorie_id"
              value={articleFormik.values.categorie_id}
              onChange={articleFormik.handleChange}
              required
            >
              <option value="">Sélectionner une catégorie</option>
              <option value="1">Catégorie 1</option>
            </Select>

            <Label htmlFor="description" value="Description" />
            <Textarea
              id="description"
              value={articleFormik.values.description}
              onChange={articleFormik.handleChange}
              required
            />

            <Label htmlFor="images" value="Image" />
            <FileInput
              id="images"
              onChange={(event) => articleFormik.setFieldValue("images", event.currentTarget.files[0])}
              required
            />

            <Button type="submit">Créer</Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DashboardVendeur;
