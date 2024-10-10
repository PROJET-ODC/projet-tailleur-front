import apiBase from './apiBase';

export const getArticles = async () => {
    try {
        const response = await apiBase.get('/articles'); // Appel vers le backend Laravel
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des articles:', error);
        throw error;
    }
};

export const ajouterArticle = async (article) => {
    try {
        const response = await apiBase.post('/articles', article); // Appel vers le backend pour ajouter un article
        console.log('Article ajouté:', response.data);
    } catch (error) {
        console.error('Erreur lors de l\'ajout de l\'article:', error);
        throw error;
    }
};
