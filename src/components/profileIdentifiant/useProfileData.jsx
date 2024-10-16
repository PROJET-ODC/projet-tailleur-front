import { useState, useEffect } from 'react';
import apiBase from '../../api/apiBase';

const useProfileData = (id) => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        // Utilisation dynamique de l'ID dans la requête
        const response = await apiBase.get(`/client/profile/${id}`);
        setProfileData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch profile data');
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [id]); // Mettre à jour lorsque l'ID change

  return { profileData, loading, error };
};

export default useProfileData;
