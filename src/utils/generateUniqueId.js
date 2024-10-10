function generateUniqueId(firstname, lastname) {
  // Nettoyer les espaces et convertir en minuscule
  const cleanFirstName = firstname.trim().toLowerCase();
  const cleanLastName = lastname.trim().toLowerCase();

  // Générer une partie unique (timestamp ou nombre aléatoire)
  const timestamp = Date.now(); // Utilise l'heure actuelle pour garantir l'unicité

  // Créer l'identifiant
  const uniqueId = `${cleanFirstName}.${cleanLastName}.${timestamp}`;

  return uniqueId;
}

export default generateUniqueId;
