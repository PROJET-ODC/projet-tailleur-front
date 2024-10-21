import apiBase from './apiBase';

const ArticleVendeur = async (data) => {
  const token = localStorage.getItem("token"); // Get the token from local storage or another source
  try {
    const result = await apiBase
        .post("/vendeur/articles", data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
    });
    return { success: true, data: result.data };
  } catch (error) {
    return { success: false, error: error.response.data };
  }
};

export { ArticleVendeur };


