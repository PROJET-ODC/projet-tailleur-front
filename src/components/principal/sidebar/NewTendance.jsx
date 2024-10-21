import { useNavigate } from "react-router-dom";

function NewTendance() {
  const navigate = useNavigate(); // Initialiser le hook useNavigate

  const handleBuyCredits = () => {
    navigate("/tailleur/achatCredit"); // Rediriger vers la page acheterCredit
  };

  return (
    <div>
      <div className="card is-new-job-card has-background-image" data-background="assets/img/illustrations/cards/job-bg.svg">
        <div className="card-body">
          <div>
            <div className="job-avatar">
              {/* Ajoutez ici le contenu de l'avatar si nécessaire */}
            </div>
            <div className="job-content">
              <h4>Nombre de Crédits: </h4>
              <p>200pts</p>
              <button type="button" className="button light-button" onClick={handleBuyCredits}>
                Acheter Crédits
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewTendance;
