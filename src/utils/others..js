const groupAndCalculateDelay = (data) => {
  const groupedData = data.reduce((acc, current) => {
    const { tailleur_id, files, createdAt } = current;

    const createdAtTime = new Date(createdAt).getTime();
    const now = Date.now();
    const timeDifferenceInSeconds = Math.floor((now - createdAtTime) / 1000);

    let delay;
    if (timeDifferenceInSeconds < 60) {
      delay = `${timeDifferenceInSeconds} seconds`;
    } else if (timeDifferenceInSeconds < 3600) {
      const minutes = Math.floor(timeDifferenceInSeconds / 60);
      delay = `${minutes} minutes`;
    } else {
      const hours = Math.floor(timeDifferenceInSeconds / 3600);
      delay = `${hours} hours`;
    }

    if (!acc[tailleur_id]) {
      acc[tailleur_id] = {
        tailleur_id,
        files: [],
      };
    }

    acc[tailleur_id].files.push({
      url: files,
      delay: delay,
    });

    return acc;
  }, {});

  return Object.values(groupedData);
};

export { groupAndCalculateDelay };
