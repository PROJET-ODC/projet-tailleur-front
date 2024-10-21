import { useState } from "react";
import { addPaiementCommande } from "../../api/clients"; // Corrigez le chemin selon votre fichier

const PopupPaiement = ({ total, showPopup, panier, setPanier }) => {
    const [methode, setMethode] = useState("");
    const [mode, setMode] = useState("");
    const [phone, setPhone] = useState("");
    const [montantFinal, setMontantFinal] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Initialisation des variables pour stocker les informations
        const postIds = []; // Pour stocker les IDs des posts
        let totalQuantity = 0; // Pour stocker la somme des quantités
        let tailles = ""; // Pour stocker les tailles sous forme de chaîne
        let compteIds = ""; // Pour stocker les IDs de compte sous forme de chaîne

        // Boucle à travers chaque item du panier
        for (const item of panier) {
            postIds.push(item.post.id); // Récupère l'ID du post
            totalQuantity += item.quantity; // Somme des quantités
            tailles += item.taille + ","; // Récupère la taille sous forme de chaîne
            compteIds += item.post.tailleur.compte.id + ","; // Récupère l'ID du compte sous forme de chaîne
        }

        // Enlever la virgule à la fin des chaînes
        tailles = tailles.slice(0, -1); // Enlève la dernière virgule
        compteIds = compteIds.slice(0, -1); // Enlève la dernière virgule

        // Calcul du montant final en fonction de la méthode de paiement
        const montantToPay = methode === "Account" ? total / 2 : total;

        // Afficher les données pour vérification
        console.log("IDs des posts :", postIds);
        console.log("Quantité totale :", totalQuantity);
        console.log("Tailles :", tailles);
        console.log("IDs des comptes :", compteIds);
        console.log("Montant à payer :", montantToPay);

        // Envoi de la commande
        const accountId = compteIds.split(",")[0]; // On prend le premier compte_id (à ajuster selon le besoin)

        // Appel de la fonction d'ajout de paiement avec les informations collectées
        addPaiementCommande(postIds, accountId, totalQuantity, tailles, montantToPay)
            .then(response => {
                console.log("Paiement réussi :", response);
                localStorage.setItem("panier", JSON.stringify([])); // Met le panier à vide dans le localStorage
                setPanier([]); // Réinitialiser l'état du panier dans le composant parent
                showPopup(); // Ferme la fenêtre modale après soumission
            })
            .catch(error => {
                console.error("Erreur lors du paiement :", error);
            });
    };

    const handleChangeMethode = (event) => {
        const selectedMethode = event.target.value;
        setMethode(selectedMethode);

        // Calculer le montant final lorsque la méthode change
        const calculatedMontantFinal = selectedMethode === "Account" ? total / 2 : total;
        setMontantFinal(calculatedMontantFinal);
    };

    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={showPopup}></div>
            <div className="modal-content">
                <div className="box">
                    <h2 className="title is-4">Détails du Paiement</h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                        {/* Mode de paiement */}
                        <div className="field col-span-1">
                            <label className="label">Mode de paiement</label>
                            <div className="control">
                                <select
                                    className="select w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    value={methode}
                                    onChange={handleChangeMethode}
                                >
                                    <option value="">Sélectionnez</option>
                                    <option value="Account">Account</option>
                                    <option value="Total">Total</option>
                                </select>
                            </div>
                        </div>

                        {/* Mode de transaction */}
                        <div className="field col-span-1">
                            <label className="label">Mode de transaction</label>
                            <div className="control">
                                <select
                                    className="select w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    value={mode}
                                    onChange={(e) => setMode(e.target.value)}
                                >
                                    <option value="">Sélectionnez</option>
                                    <option value="Wave">Wave</option>
                                    <option value="Orange Money">Orange Money</option>
                                </select>
                            </div>
                        </div>

                        {/* Téléphone */}
                        <div className="field col-span-2">
                            <label className="label">Téléphone</label>
                            <div className="control">
                                <input
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="input w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Veuillez saisir votre numéro"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="field col-span-2">
                            <div className="control">
                                <button className="button is-primary w-full" type="submit">
                                    Payer {montantFinal} FCFA
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <button
                className="modal-close is-large"
                aria-label="fermer"
                onClick={showPopup}
            ></button>
        </div>
    );
};

export default PopupPaiement;
