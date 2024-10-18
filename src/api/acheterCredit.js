import apiBase from "./apiBase";

// Function to buy credit
const acheterCredit = async (montant) => {
  const token = localStorage.getItem("token"); // Ensure token is stored in localStorage
  const result = await apiBase
    .post(
      "/tailleur/achetercredit", 
      { montant }, // Send the credit amount
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // Set content type to JSON
        },
      }
    )
    .then((response) => response.data)
    .catch((error) => error.response.data);

  return result;
};

export { acheterCredit };
