import { useState, useRef } from "react";

function PostInput() {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);
  const [showPostModal, setShowPostModal] = useState(false);

  const handlePostClick = () => {
    setShowPostModal((prevState) => !prevState);
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleClearAll = () => {
    setFiles([]);
    fileInputRef.current.value = "";
  };

  const handleRemoveFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div className="tabs-wrapper">
        <div className="tabs is-boxed is-fullwidth">
          <ul>
            <li className="is-active">
              <a>
                <span className="icon is-small">
                  <i data-feather="edit-3"></i>
                </span>
                <span>Publish</span>
              </a>
            </li>
            <li>
              <a className="modal-trigger" data-modal="albums-modal">
                <span className="icon is-small">
                  <i data-feather="image"></i>
                </span>
                <span onClick={handlePostClick}>Albums</span>
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
              <img
                src="../via.placeholder.com/300x300.png"
                data-demo-src="assets/img/avatars/jenna.png"
                alt=""
              />
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
                  }}
                ></textarea>
              </div>
            </div>

            <div id="feed-upload" className="feed-upload"></div>

            <div id="options-summary" className="options-summary"></div>

            <div
              id="tag-suboption"
              className="is-autocomplete is-suboption is-hidden"
            >
              <div id="tag-list" className="tag-list"></div>
              <div className="control">
                <input
                  id="users-autocpl"
                  type="text"
                  className="input"
                  placeholder="Who are you with?"
                />
                <div className="icon">
                  <i data-feather="search"></i>
                </div>
                <div className="close-icon is-main">
                  <i data-feather="x"></i>
                </div>
              </div>
            </div>

            <div
              id="activities-suboption"
              className="is-autocomplete is-suboption is-hidden"
            >
              <div
                id="activities-autocpl-wrapper"
                className="control has-margin"
              >
                <input
                  id="activities-autocpl"
                  type="text"
                  className="input"
                  placeholder="What are you doing right now?"
                />
                <div className="icon">
                  <i data-feather="search"></i>
                </div>
                <div className="close-icon is-main">
                  <i data-feather="x"></i>
                </div>
              </div>

              <div
                id="mood-autocpl-wrapper"
                className="is-autocomplete is-activity is-hidden"
              >
                <div className="control has-margin">
                  <input
                    id="mood-autocpl"
                    type="text"
                    className="input is-subactivity"
                    placeholder="How do you feel?"
                  />
                  <div className="input-block">Feels</div>
                  <div className="close-icon is-subactivity">
                    <i data-feather="x"></i>
                  </div>
                </div>
              </div>

              <div
                id="drinking-autocpl-wrapper"
                className="is-autocomplete is-activity is-hidden"
              >
                <div className="control has-margin">
                  <input
                    id="drinking-autocpl"
                    type="text"
                    className="input is-subactivity"
                    placeholder="What are you drinking?"
                  />
                  <div className="input-block">Drinks</div>
                  <div className="close-icon is-subactivity">
                    <i data-feather="x"></i>
                  </div>
                </div>
              </div>

              <div
                id="eating-autocpl-wrapper"
                className="is-autocomplete is-activity is-hidden"
              >
                <div className="control has-margin">
                  <input
                    id="eating-autocpl"
                    type="text"
                    className="input is-subactivity"
                    placeholder="What are you eating?"
                  />
                  <div className="input-block">Eats</div>
                  <div className="close-icon is-subactivity">
                    <i data-feather="x"></i>
                  </div>
                </div>
              </div>

              <div
                id="reading-autocpl-wrapper"
                className="is-autocomplete is-activity is-hidden"
              >
                <div className="control has-margin">
                  <input
                    id="reading-autocpl"
                    type="text"
                    className="input is-subactivity"
                    placeholder="What are you reading?"
                  />
                  <div className="input-block">Reads</div>
                  <div className="close-icon is-subactivity">
                    <i data-feather="x"></i>
                  </div>
                </div>
              </div>

              <div
                id="watching-autocpl-wrapper"
                className="is-autocomplete is-activity is-hidden"
              >
                <div className="control has-margin">
                  <input
                    id="watching-autocpl"
                    type="text"
                    className="input is-subactivity"
                    placeholder="What are you watching?"
                  />
                  <div className="input-block">Watches</div>
                  <div className="close-icon is-subactivity">
                    <i data-feather="x"></i>
                  </div>
                </div>
              </div>

              <div
                id="travel-autocpl-wrapper"
                className="is-autocomplete is-activity is-hidden"
              >
                <div className="control has-margin">
                  <input
                    id="travel-autocpl"
                    type="text"
                    className="input is-subactivity"
                    placeholder="Where are you going?"
                  />
                  <div className="input-block">Travels</div>
                  <div className="close-icon is-subactivity">
                    <i data-feather="x"></i>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="location-suboption"
              className="is-autocomplete is-suboption is-hidden"
            >
              <div
                id="location-autocpl-wrapper"
                className="control is-location-wrapper has-margin"
              >
                <input
                  id="location-autocpl"
                  type="text"
                  className="input"
                  placeholder="Where are you now?"
                />
                <div className="icon">
                  <i data-feather="map-pin"></i>
                </div>
                <div className="close-icon is-main">
                  <i data-feather="x"></i>
                </div>
              </div>
            </div>

            <div
              id="link-suboption"
              className="is-autocomplete is-suboption is-hidden"
            >
              <div
                id="link-autocpl-wrapper"
                className="control is-location-wrapper has-margin"
              >
                <input
                  id="link-autocpl"
                  type="text"
                  className="input"
                  placeholder="Enter the link URL"
                />
                <div className="icon">
                  <i data-feather="link-2"></i>
                </div>
                <div className="close-icon is-main">
                  <i data-feather="x"></i>
                </div>
              </div>
            </div>

            <div
              id="gif-suboption"
              className="is-autocomplete is-suboption is-hidden"
            >
              <div
                id="gif-autocpl-wrapper"
                className="control is-gif-wrapper has-margin"
              >
                <input
                  id="gif-autocpl"
                  type="text"
                  className="input"
                  placeholder="Search a GIF to add"
                />
                <div className="icon">
                  <i data-feather="search"></i>
                </div>
                <div className="close-icon is-main">
                  <i data-feather="x"></i>
                </div>
                <div className="gif-dropdown">
                  <div className="inner">
                    <div className="gif-block">
                      <img
                        src="../via.placeholder.com/478x344.png"
                        data-demo-src="assets/img/demo/gif/1.gif"
                        alt=""
                      />
                      <img
                        src="../via.placeholder.com/478x344.png"
                        data-demo-src="assets/img/demo/gif/2.gif"
                        alt=""
                      />
                      <img
                        src="../via.placeholder.com/478x344.png"
                        data-demo-src="assets/img/demo/gif/3.gif"
                        alt=""
                      />
                      <img
                        src="../via.placeholder.com/478x344.png"
                        data-demo-src="assets/img/demo/gif/4.gif"
                        alt=""
                      />
                    </div>
                    <div className="gif-block">
                      <img
                        src="../via.placeholder.com/478x344.png"
                        data-demo-src="assets/img/demo/gif/5.gif"
                        alt=""
                      />
                      <img
                        src="../via.placeholder.com/478x344.png"
                        data-demo-src="assets/img/demo/gif/6.gif"
                        alt=""
                      />
                      <img
                        src="../via.placeholder.com/478x344.png"
                        data-demo-src="assets/img/demo/gif/7.gif"
                        alt=""
                      />
                      <img
                        src="../via.placeholder.com/478x344.png"
                        data-demo-src="assets/img/demo/gif/8.gif"
                        alt=""
                      />
                    </div>
                    <div className="gif-block">
                      <img
                        src="../via.placeholder.com/478x344.png"
                        data-demo-src="assets/img/demo/gif/9.gif"
                        alt=""
                      />
                      <img
                        src="../via.placeholder.com/478x344.png"
                        data-demo-src="assets/img/demo/gif/10.gif"
                        alt=""
                      />
                      <img
                        src="../via.placeholder.com/478x344.png"
                        data-demo-src="assets/img/demo/gif/11.gif"
                        alt=""
                      />
                      <img
                        src="../via.placeholder.com/478x344.png"
                        data-demo-src="assets/img/demo/gif/12.gif"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="extended-options" className="compose-options is-hidden">
            <div className="columns is-multiline is-full">
              <div className="column is-6 is-narrower">
                <div className="compose-option is-centered">
                  <i data-feather="camera"></i>
                  <span>Photo/Video</span>
                  <input
                    id="feed-upload-input-1"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                  />
                </div>
              </div>

              <div className="column is-6 is-narrower">
                <div
                  id="extended-show-activities"
                  className="compose-option is-centered"
                >
                  <img src="assets/img/icons/emoji/emoji-1.svg" alt="" />
                  <span>Mood/Activity</span>
                </div>
              </div>

              <div className="column is-6 is-narrower">
                <div
                  id="open-tag-suboption"
                  className="compose-option is-centered"
                >
                  <i data-feather="tag"></i>
                  <span>Tag friends</span>
                </div>
              </div>

              <div className="column is-6 is-narrower">
                <div
                  id="open-location-suboption"
                  className="compose-option is-centered"
                >
                  <i data-feather="map-pin"></i>
                  <span>Post location</span>
                </div>
              </div>

              <div className="column is-6 is-narrower">
                <div
                  id="open-link-suboption"
                  className="compose-option is-centered"
                >
                  <i data-feather="link-2"></i>
                  <span>Share link</span>
                </div>
              </div>

              <div className="column is-6 is-narrower">
                <div
                  id="open-gif-suboption"
                  className="compose-option is-centered"
                >
                  <i data-feather="image"></i>
                  <span>Post GIF</span>
                </div>
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
                Add pictures/videos
              </div>

              <div className="close-wrap">
                <span className="close-modal">
                  <i data-feather="x"></i>
                </span>
              </div>
            </div>

            <div className="card-body">
              {/* Hidden input to handle file selection */}
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                multiple
              />
              {/* Additional sections */}
              <div className="left-section">
                <div className="product-form">
                  {/* Champ catégorie */}
                  <div className="control">
                    <label htmlFor="category">Catégorie</label>
                    <select
                      id="category"
                      className="input is-sm no-radius is-fade"
                    >
                      <option value="" disabled selected>
                        Sélectionnez une catégorie
                      </option>
                      <option value="vetement">Vêtement</option>
                      <option value="accessoire">Accessoire</option>
                      <option value="chaussure">Chaussure</option>
                    </select>
                  </div>

                  {/* Champ tissu */}
                  <div className="control">
                    <label htmlFor="tissu">Tissu</label>
                    <select
                      id="tissu"
                      className="input is-sm no-radius is-fade"
                    >
                      <option value="" disabled selected>
                        Sélectionnez un tissu
                      </option>
                      <option value="waxi">Waxi</option>
                      <option value="val">Val</option>
                      <option value="diazner">Diazner</option>
                    </select>
                  </div>

                  {/* Champ prix */}
                  <div className="control">
                    <label htmlFor="prix">Prix</label>
                    <input
                      type="number"
                      id="prix"
                      className="input is-sm no-radius is-fade"
                      placeholder="Entrez le prix"
                    />
                  </div>

                  {/* Champ description */}
                  <div className="control">
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      className="textarea is-fade no-radius is-sm"
                      rows="3"
                      placeholder="Décrivez votre produit..."
                    ></textarea>
                  </div>

                  {/* Si besoin d'un champ pour ajouter des photos */}
                  <div className="control">
                    <label htmlFor="file">Ajouter des photos/vidéos</label>
                    <input
                      type="file"
                      id="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      multiple
                    />
                    <div
                      className="button is-solid accent-button fileinput-button"
                      onClick={() => fileInputRef.current.click()}
                    >
                      <i className="mdi mdi-plus"></i>
                      Ajouter des photos/vidéos
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-section has-slimscroll">
                <div className="modal-uploader">
                  <div id="actions" className="columns is-multiline no-mb">
                    <div className="column is-12">
                      {/* Bouton pour ajouter des fichiers */}
                      <span
                        className="button has-icon is-solid grey-button fileinput-button"
                        onClick={handleFileInputClick}
                      >
                        <i data-feather="plus"></i>
                      </span>

                      <button type="submit" className="button start is-hidden">
                        <span>Upload</span>
                      </button>

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

                  {/* Section de prévisualisation des fichiers */}
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
                                <img
                                  src={URL.createObjectURL(file)}
                                  alt={file.name}
                                  width="120"
                                  height="120"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* Champ input file caché */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              l
            </div>

            <div className="card-footer">
              <div className="dropdown is-up is-spaced is-modern is-neutral is-right dropdown-trigger">
                <div>
                  <button className="button" aria-haspopup="true">
                    <i className="main-icon" data-feather="smile"></i>
                    <span>Amis</span>
                    <i className="caret" data-feather="chevron-down"></i>
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
                          <h3>Amis spécifiques.</h3>
                          <small>Ne le montre pas à certains amis.</small>
                        </div>
                      </div>
                    </a>
                    <hr className="dropdown-divider" />
                    <a className="dropdown-item">
                      <div className="media">
                        <i data-feather="lock"></i>
                        <div className="media-content">
                          <h3>Seulement moi.</h3>
                          <small>Seul moi peut voir cette publication.</small>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="button is-solid accent-button close-modal"
              >
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
