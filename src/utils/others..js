const groupAndCalculateDelay = (data) => {
  const groupedData = data.reduce((acc, current) => {
    const {
      tailleur: {
        compte: { bio, user: { firstname, lastname, picture, city } = {} } = {},
      } = {},
      files,
      createdAt,
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
      url: files,
      delay: delay,
      type: fileType, // Add the file type here
    });

    return acc;
  }, {});

  return Object.values(groupedData);
};

export { groupAndCalculateDelay };
