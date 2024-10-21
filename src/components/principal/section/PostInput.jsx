import { useState, useRef } from "react";
import { UserApi } from "../../../api/UserApi";
import { FaPhotoVideo } from "react-icons/fa";
import InputColor from "react-input-color";
import { toast } from "react-toastify";

function PostInput({ onPostCreated }) {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  const [useCredit, setUseCredit] = useState(false); // Default to false
  const [status, setStatus] = useState("PUBLIE"); // Default value
  const [categorie, setCategorie] = useState("IMAGE"); // Default value

  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handlePostClick = () => {
    setShowPostModal((prevState) => !prevState);
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  //   const handleFileChange = (e) => {
  //     setFiles([...e.target.files]);
  // };

  // const handleClearAll = () => {
  //   setFiles([]);
  //   fileInputRef.current.value = "";
  // };

  const handleClearAll = () => {
    setFiles([]);
    fileInputRef.current.value = ""; // Clear file input
    setContent(""); // Clear content
    setTitle(""); // Clear title
    setPrice(""); // Clear title
    setUseCredit(false); // Reset useCredit
    setStatus("PUBLIE"); // Reset status to default
    setCategorie("IMAGE"); // Reset category to default
  };

  const handleRemoveFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async () => {
    // const response = await UserApi(formData);
    setIsLoading(true); // Start loading when submitting
    setShowPostModal(false);
    setErrorMessage("");
    setSuccessMessage("");


    if (!content || !title || files.length === 0) {
      setErrorMessage(
        "Tous les champs doivent être remplis, y compris le fichier."
      );
      return;
    }

    const formData = new FormData();
    formData.append("content", content);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("useCredit", useCredit);
    formData.append("status", status);
    formData.append("categorie", categorie);
    formData.append("files", files);

    // Ajouter les fichiers
    files.forEach((file) => {
      formData.append("files", file);
    });

    // Appeler l'API pour poster les données
    const response = await UserApi(formData);

    

    if (response.status === "OK") {

      // Réinitialiser les champs du formulaire si nécessaire
      handleClearAll();
      setContent("");
      setTitle("");
      setPrice("");
      setUseCredit(false);
      setStatus("PUBLIE");
      setCategorie("IMAGE");
      onPostCreated(response)
      toast.success("Post crée avec succès !");


    } else {
      setErrorMessage(response.message || "Une erreur est survenue.");
      toast.error("echec de l'ajout du post  !");

    }

  };

  // onClick={handlePostClick}

  return (
    <>
      <div className="tabs-wrapper cursor-pointer" onClick={handlePostClick}>
        <div className="tabs is-boxed is-fullwidth">
          <ul>
            <li className="w-full">
              <a className="modal-trigger w-full" data-modal="albums-modal">
                <span className="icon is-small">
                  <FaPhotoVideo className="w-[100px]" />
                </span>
                <span>Poster</span>
              </a>
            </li>

            <li className="close-wrap" onClick={handlePostClick}>
              <span className="close-publish">
                <i data-feather="x"></i>
              </span>
            </li>
          </ul>
        </div>

        <div className="tab-content">
          <div className="compose">
            <div className="compose-htmlForm">
              <div
                className="control"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <textarea
                  id="publish"
                  className="textarea"
                  rows="3"
                  placeholder="Write something about you..."
                  style={{
                    border: "1px solid #ccc",
                    width: "100%",
                    maxWidth: "500px",
                    padding: "10px",
                    // marginBottom: "20px",
                    borderRadius: "4px",
                    marginRight: "40px",
                    height: "50px",
                    pointerEvents: "none",
                  }}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="more-wrap">
            <button
              id="show-compose-friends"
              type="button"
              className="button is-more"
              aria-haspopup="true"
            >
              <i data-feather="more-vertical"></i>
              <span>View More</span>
            </button>

            <button
              id="publish-button"
              type="button"
              className="button is-solid accent-button is-fullwidth is-disabled"
            >
              Publish
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        id="albums-modal"
        className={`modal albums-modal is-xxl has-light-bg ${
          showPostModal ? " is-active" : ""
        }`}
      >
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="card">
            <div className="card-heading">
              <h3>Nouveau album</h3>

              <div
                className="button is-solid accent-button fileinput-button"
                onClick={handleFileInputClick}
              >
                <i className="mdi mdi-plus"></i>
                Ajouter photos/vidéos
              </div>

              <div className="close-wrap">
                <span className="close-modal">
                  <i data-feather="x"></i>
                </span>
              </div>
            </div>

            <div className="card-body">
              {/* Hidden input to handle file selection */}
              {/* <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                multiple
                accept="image/*,video/*"
                onChange={handleFileChange}
              /> */}
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                multiple
                accept={categorie === "IMAGE" ? "image/*" : "video/*"}
                onChange={handleFileChange}
              />

              <div className="left-section">
                <div className="product-form">
                  <div className="control">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      id="title"
                      className="input is-sm no-radius is-fade"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Entrez le titre de votre produit"
                    />
                  </div>
                  <div className="control">
                    <label htmlFor="title">prix</label>
                    <input
                      type="text"
                      id="title"
                      className="input is-sm no-radius is-fade"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="Entrez le titre de votre produit"
                    />
                  </div>

                  <div className="control">
                    <label htmlFor="content">Description</label>
                    <textarea
                      id="content"
                      className="textarea is-fade no-radius is-sm"
                      rows="3"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Décrivez votre produit..."
                    ></textarea>
                  </div>

                  <div className="control">
                    <label htmlFor="useCredit">Use Credit</label>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        type="checkbox"
                        id="useCredit"
                        checked={useCredit}
                        onChange={(e) => setUseCredit(e.target.checked)}
                        style={{ marginRight: "10px" }} // Optional for better spacing
                      />
                      <span>{useCredit ? "Yes" : "No"}</span>{" "}
                      {/* Shows Yes/No for visual feedback */}
                    </div>
                  </div>

                  <div className="control">
                    <label htmlFor="status">Status</label>
                    <div className="select is-fullwidth">
                      <select
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="PUBLIE">PUBLIE</option>
                        <option value="ARCHIVE">ARCHIVE</option>
                        <option value="PAS_PUBLIE">PAS_PUBLIE</option>
                      </select>
                    </div>
                  </div>

                  <div className="control">
                    <label htmlFor="categorie">Categorie</label>
                    <div className="select is-fullwidth">
                      <select
                        id="categorie"
                        value={categorie}
                        onChange={(e) => setCategorie(e.target.value)}
                      >
                        <option value="IMAGE">IMAGE</option>
                        <option value="VIDEO">VIDEO</option>
                      </select>
                    </div>
                  </div>

                  {/* Show loading indicator */}
                  {isLoading && (
                    <div className="loading-message">Chargement...</div>
                  )}

                  {/* Display success or error messages */}
                  {errorMessage && (
                    <div className="notification is-danger">{errorMessage}</div>
                  )}
                  {successMessage && (
                    <div className="notification is-success">
                      {successMessage}
                    </div>
                  )}
                </div>
              </div>

              <div className="right-section has-slimscroll">
                <div className="modal-uploader">
                  <div id="actions" className="columns is-multiline no-mb">
                    <div className="column is-12">
                      <span
                        className="button has-icon is-solid grey-button fileinput-button"
                        onClick={handleFileInputClick}
                      >
                        <i data-feather="plus"></i>
                      </span>

                      <button
                        type="reset"
                        className="button is-solid grey-button cancel"
                        onClick={handleClearAll}
                      >
                        <span>Clear all</span>
                      </button>

                      <span className="file-count">
                        <span id="modal-uploader-file-count">
                          {files.length}
                        </span>{" "}
                        file(s) selected
                      </span>
                    </div>
                  </div>

                  {/* Preview Section */}
                  <div className="columns is-multiline" id="previews">
                    {files.length > 0 &&
                      files.map((file, index) => (
                        <div key={index} className="column is-4 is-template">
                          <div className="preview-box">
                            <div
                              className="remove-button"
                              onClick={() => handleRemoveFile(index)}
                            >
                              <i className="mdi mdi-close"></i>
                            </div>
                            <div>
                              <span className="preview">
                                {file.type.startsWith("image/") ? (
                                  <img
                                    src={URL.createObjectURL(file)}
                                    alt={file.name}
                                    width="120"
                                    height="120"
                                  />
                                ) : (
                                  <video
                                    src={URL.createObjectURL(file)}
                                    controls
                                    width="120"
                                    height="120"
                                  ></video>
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-footer">
              {/* Menu Dropdown */}
              <div className="dropdown is-up is-spaced is-modern is-neutral is-right dropdown-trigger">
                <div>
                  <button className="button" aria-haspopup="true">
                    <span onClick={handlePostClick}>Annuler</span>
                  </button>
                </div>
                <div className="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <a href="#" className="dropdown-item">
                      <div className="media">
                        <i data-feather="globe"></i>
                        <div className="media-content">
                          <h3>Public</h3>
                          <small>
                            Tout le monde peut voir cette publication.
                          </small>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item">
                      <div className="media">
                        <i data-feather="users"></i>
                        <div className="media-content">
                          <h3>Amies</h3>
                          <small>
                            Seuls les amis peuvent voir cette publication.
                          </small>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item">
                      <div className="media">
                        <i data-feather="user"></i>
                        <div className="media-content">
                          <h3>Amis spécifiques</h3>
                          <small>Ne le montre pas à certains amis.</small>
                        </div>
                      </div>
                    </a>
                    <hr className="dropdown-divider" />
                    <a className="dropdown-item">
                      <div className="media">
                        <i data-feather="lock"></i>
                        <div className="media-content">
                          <h3>Seulement moi</h3>
                          <small>Seul moi peut voir cette publication.</small>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="button is-solid accent-button"
                onClick={handleSubmit} >
                Publier
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostInput;
