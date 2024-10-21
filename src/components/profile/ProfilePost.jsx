import React from 'react';
import useProfileData from './useProfileData';
import ProfilsPage from '../../pages/ProfilsPage';

const ProfilePost = ({ post }) => {

    const { profileData, loading, error } = useProfileData();
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!profileData) return null;

    const { user } = profileData;

    console.log(user);

    return (
        <>
        <ProfilsPage/>
        
        </>
    );
};

export default ProfilePost;
