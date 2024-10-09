const alertStyles = {
  success: {
    bg: "bg-green-100",
    border: "border-green-400",
    text: "text-green-700",
    buttonText: "text-green-500 hover:text-green-700",
    title: "Succès!",
  },
  error: {
    bg: "bg-red-100",
    border: "border-red-400",
    text: "text-red-700",
    buttonText: "text-red-500 hover:text-red-700",
    title: "Erreur!",
  },
  warning: {
    bg: "bg-yellow-100",
    border: "border-yellow-400",
    text: "text-yellow-700",
    buttonText: "text-yellow-500 hover:text-yellow-700",
    title: "Avertissement!",
  },
  info: {
    bg: "bg-blue-100",
    border: "border-blue-400",
    text: "text-blue-700",
    buttonText: "text-blue-500 hover:text-blue-700",
    title: "Information!",
  },
};

const Alert = ({ type = "success", message, onClose }) => {
  const styles = alertStyles[type] || alertStyles.success;

  return (
    <div
      className={`${styles.bg} ${styles.border} ${styles.text} px-4 py-3 rounded relative`}
      role="alert"
    >
      <strong className="font-bold">{styles.title}</strong>
      <span className="block sm:inline">{message}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <button
          onClick={onClose}
          className={`${styles.buttonText} focus:outline-none`}
        >
          <svg
            className="fill-current h-6 w-6"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Fermer</title>
            <path d="M10 9l-6 6-1-1 6-6-6-6 1-1 6 6 6-6 1 1-6 6 6 6-1 1z" />
          </svg>
        </button>
      </span>
    </div>
  );
};

export default Alert;
