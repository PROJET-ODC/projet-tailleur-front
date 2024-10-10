import apiBase from './apiBase';

export const getApprovisionnements = async () => {
    try {
        const response = await apiBase.get('/approvisionnements'); // Remplacez par votre API
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des approvisionnements:', error);
        throw error;
    }
};
