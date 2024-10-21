const groupAndCalculateDelay = (data) => {
  let groupedData = [];
  if (data) {
    groupedData = data.reduce((acc, current) => {
      const {
        tailleur: {
          compte: {
            bio,
            user: { firstname, lastname, picture, city } = {},
          } = {},
        } = {},
        files,
        createdAt,
        status_like,
        id,
      } = current;

      const createdAtTime = new Date(createdAt).getTime();
      const now = Date.now();
      const timeDifferenceInSeconds = Math.floor((now - createdAtTime) / 1000);

      let delay;
      if (timeDifferenceInSeconds < 60) {
        delay = `${timeDifferenceInSeconds} seconds ago`;
      } else if (timeDifferenceInSeconds < 3600) {
        const minutes = Math.floor(timeDifferenceInSeconds / 60);
        delay = `${minutes} minutes ago`;
      } else {
        const hours = Math.floor(timeDifferenceInSeconds / 3600);
        delay = `${hours} hours ago`;
      }

      // Get tailleur ID from the compte (assuming it's from user_id or compte_id)
      const tailleur_id = current.tailleur?.compte?.id;

      if (!acc[tailleur_id]) {
        acc[tailleur_id] = {
          tailleur_id,
          files: [],
          user: {
            firstname,
            lastname,
            picture,
            city,
            bio,
          },
        };
      }

      // Determine if the file is a video or an image
      const fileType = files.endsWith(".mp4") ? "video" : "image";

      acc[tailleur_id].files.push({
        compte_id: tailleur_id,
        url: files,
        delay: delay,
        type: fileType, // Add the file type here
        likes: status_like,
        status_id: id,
      });

      return acc;
    }, {});
  }
  return Object.values(groupedData);
};

function removeInverseDuplicates(messages) {
  const seenPairs = new Set();

  return messages.filter((message) => {
    const sortedIds = [message.messager_id, message.messaged_id].sort(
      (a, b) => a - b
    );
    const key = `${sortedIds[0]}-${sortedIds[1]}`;

    if (seenPairs.has(key)) {
      return false;
    }
    seenPairs.add(key);
    return true;
  });
}

function formatMessages(messages, userId) {
  return messages.map((message) => {
    // Vérifier si l'utilisateur est le messager ou le messaged
    if (message.messager_id === userId) {
      return {
        id: message.id,
        createdAt: message.createdAt,
        texte: message.texte,
        user: message.messaged, // l'autre utilisateur (destinataire)
        type: "receiver", // l'utilisateur est celui qui a envoyé
      };
    } else {
      return {
        id: message.id,
        createdAt: message.createdAt,
        texte: message.texte,
        user: message.messager, // l'autre utilisateur (expéditeur)
        type: "sender", // l'utilisateur est celui qui a reçu
      };
    }
  });
}

const groupByTailleurId = (data) => {
  const grouper = data.reduce((acc, item) => {
    const { tailleur_id } = item.post;

    if (!acc[tailleur_id]) {
      acc[tailleur_id] = [];
    }

    acc[tailleur_id].push(item);

    return acc;
  }, {});

  return Object.values(grouper);
};
export {
  groupAndCalculateDelay,
  removeInverseDuplicates,
  formatMessages,
  groupByTailleurId,
};
