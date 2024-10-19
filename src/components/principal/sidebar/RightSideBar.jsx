import { useEffect, useState } from "react";
import NewTendance from "./NewTendance";
import { getFeedsInitData } from "../../../api/clients";
import Stories from "react-insta-stories";
import { groupAndCalculateDelay } from "../../../utils/others";
import Modal from "../modal/Modal";
import { createStatus } from "../../../api/tailleurs";
import { toast } from "react-toastify";

function RightSideBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [storyType, setStoryType] = useState("image");
  const [storyFile, setStoryFile] = useState("");
  const [storyText, setStoryText] = useState("");
  const [isModalStoryOpen, setIsModalStoryOpen] = useState(false);
  const [story, setStory] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setStoryType("image");
    setStoryFile(null);
    setStoryText("");
  };

  const handleFileChange = (e) => setStoryFile(e.target.files[0]);
  const handleStoryTypeChange = (e) => setStoryType(e.target.value);

  const handlePostStory = async (e) => {
    e.preventDefault();
    const data = {
      image: storyFile,
    };

    const result = await createStatus(data);

    if (result.status == "OK") {
      toast.success(result.message);

      // Récupère les nouvelles données pour mettre à jour le composant
      getFeedsInitData().then((data) => {
        setStatusData(groupAndCalculateDelay(data.recentStatus));
      });
    } else {
      toast.error(result.message);
    }

    // console.log("Story added:", { storyType, storyFile, storyText });
    closeModal(); // Ferme le modal après l'ajout
  };

  const openModalStory = (storyItem) => {
    setIsModalStoryOpen(true);
    setStory((prevState) => storyItem);
  };

  const closeModalStory = () => {
    setIsModalStoryOpen(false);
  };

  const [statusData, setStatusData] = useState([]);

  useEffect(() => {
    // const abortCont = new AbortController();
    fetchData();
    return () => {};
  }, []);

  const fetchData = async () => {
    try {
      const data = await getFeedsInitData();
      const recentStatus = await data.recentStatus;
      console.log("log", recentStatus);

      setStatusData(groupAndCalculateDelay(recentStatus));
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  return (
    <>
      <div className="column is-3">
        <div className="card">
          <div className="card-heading is-bordered">
            <h4>Stories</h4>
          </div>
          <div className="card-body no-padding">
            <div className="story-block">
              <a
                id="add-story-button"
                href="#"
                className="add-story"
                onClick={openModal}
              >
                <i data-feather="plus"></i>
              </a>
              <div className="story-meta">
                <span>Add a new Story</span>
                <span>Share an image, a video or some text</span>
              </div>
            </div>
            {statusData &&
              statusData.map((storyItem, index) => (
                <div
                  key={index}
                  className="story-block"
                  onClick={() => openModalStory(storyItem.files)}
                >
                  <div className="img-wrapper hover:!border-2 hover:!border-[#3d70b2] hover:cursor-pointer">
                    <img
                      src={
                        storyItem.type == "image"
                          ? storyItem.files[storyItem.files.length - 1].url
                          : "/src/assets/img/default.png"
                      }
                      data-user-popover="1"
                      alt=""
                    />
                  </div>
                  <div className="story-meta">
                    <span>{storyItem.user.firstname}</span>
                    <span>
                      {storyItem.files[storyItem.files.length - 1].delay}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <NewTendance />

        {/* Modal pour ajouter une histoire */}
        {isModalOpen && (
          <div className="modal is-active">
            <div className="modal-background" onClick={closeModal}></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">Ajouter une histoire</p>
                <button
                  className="delete"
                  aria-label="close"
                  onClick={closeModal}
                ></button>
              </header>
              <section className="modal-card-body">
                <form onSubmit={handlePostStory} encType="multipart/form-data">
                  <div className="field">
                    <label className="label">Choisir le type de Story</label>
                    <div className="control">
                      <div className="select">
                        <select
                          value={storyType}
                          onChange={handleStoryTypeChange}
                        >
                          <option value="image">Image</option>
                          <option value="video">Vidéo</option>
                          <option value="text">Texte</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {(storyType === "image" || storyType === "video") && (
                    <div className="field">
                      <label className="label">
                        Ajouter un fichier (image/vidéo)
                      </label>
                      <div className="control">
                        <input type="file" onChange={handleFileChange} />
                      </div>
                    </div>
                  )}

                  {storyType === "text" && (
                    <div className="field">
                      <label className="label">Ajouter un texte</label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          placeholder="Écrivez votre histoire ici..."
                          value={storyText}
                          onChange={(e) => setStoryText(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  )}
                </form>
              </section>
              <footer className="modal-card-foot">
                <button className="button is-success" onClick={handlePostStory}>
                  Ajouter
                </button>
                <button className="button" onClick={closeModal}>
                  Annuler
                </button>
              </footer>
            </div>
          </div>
        )}
      </div>

      <Modal
        isOpen={isModalStoryOpen}
        onClose={closeModalStory}
        title="My Modal"
      >
        {story && (
          <Stories
            stories={story}
            defaultInterval={1500}
            width={600}
            height={800}
          />
        )}
      </Modal>
    </>
  );
}

export default RightSideBar;
