import { useState, useEffect } from 'react';
import apiBase from '../../api/apiBase';

const useProfileData = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await apiBase.get('/client/profile');
        setProfileData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch profile data');
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  return { profileData, loading, error };
};

export default useProfileData;
