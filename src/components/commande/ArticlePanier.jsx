import { FaTrash } from "react-icons/fa";

// pour les commandes
const ArticlePanier = ({ article, mettreAJourQuantite }) => (
  <div className="flex-table-item max-h-[80px] ">
    <div className="discount">
      <img src={article.post.files} alt={article.post.title}
       style={{
        maxHeight: "80px",
        width: "100%",
      }}
className="!object-contain !object-top" />
    </div>
    <div className="discount">
      <span className="product-name">{article.post.title}</span>
    </div>
    <div className="discount">
      <span className={`product-name w-[50px] h-[50px] `} style={{backgroundColor:`${article.color}`}}></span>

    </div>
    <div className="discount">
      <span className="product-name">{article.taille}</span>
    </div>
    <div className="discount has-spinner" style={{ display: 'flex', alignItems: 'center' }}>
      <div className="spinner">
        <button className="remove" onClick={() => mettreAJourQuantite(article.post.id, Math.max(0, parseInt(article.quantity) - 1))}>
          <i data-feather="minus"></i>
        </button>
        <span className="value">{article.quantity}</span>
        <button className="add" onClick={() => mettreAJourQuantite(article.post.id, Math.max(0, parseInt(article.quantity) + 1))}>
          <i data-feather="plus"></i>
        </button>
      </div>
    </div>
    <div className="discount">
    <span className="product-name">{article.post.price}</span>
    </div>
    
   
  
    <div className="discount">
      <span className="has-price">{(article.post.price * article.quantity)}fcfa</span>
    </div>
    <div className="discount">
      <button>
        <FaTrash className="text-red-600"/>
      </button>
    </div>
  </div>
  
);

export default ArticlePanier;