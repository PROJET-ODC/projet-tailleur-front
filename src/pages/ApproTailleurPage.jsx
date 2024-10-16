import { FaSearch } from "react-icons/fa";
import { getApprovisionnements } from '../api/approvisionnements';
import { useState, useEffect } from "react";

function ApproTailleurPage() {
  const [approvisionnements, setApprovisionnements] = useState([]);
  const [filterLibelle, setFilterLibelle] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await getApprovisionnements(filterLibelle);
      if (result.error) {
        console.error('Error fetching data:', result.error);
      } else if (Array.isArray(result)) {
        setApprovisionnements(result);
      } else {
        console.error('Invalid data format:', result);
      }
    };

    fetchData();
  }, [filterLibelle]);

  return (
    <>
      {/* <div className="search !w-[100%]">
        <div className="navbar-item !w-[100%]">
          <div
            id="global-search"
            className="flex flex-wrap gap-3 control !w-[100%]"
          >
            <div className="field !w-[40%]">
              <label>Rechercher un article</label>
              <div className="control has-icon">
                <input
                  type="text"
                  className="input"
                  placeholder="Saisir pour rechercher un article"
                  value={filterLibelle}
                  onChange={(e) => setFilterLibelle(e.target.value)}
                />
                <div className="form-icon">
                  <FaSearch className="text-[#e0dcdc]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="search !w-[100%]">
        <div className="navbar-item !w-[100%]">
          <div
            id="global-search"
            className=" flex flex-wrap gap-3 control !w-[100%]"
          >
            <div className="field !w-[40%]">
              <label>Rechercher un article</label>
              <div className="control has-icon">
              <input
                  type="text"
                  className="input"
                  placeholder="Saisir pour rechercher un article"
                  value={filterLibelle}
                  onChange={(e) => setFilterLibelle(e.target.value)}
                />
                <div className="form-icon">
                  <FaSearch className="text-[#e0dcdc]" />
                </div>
              </div>
            </div>
            <div className="field !w-[40%]">
              <label>Rechercher un article</label>
              <div className="control has-icon">
              <input
                  type="text"
                  className="input"
                  placeholder="Saisir pour rechercher un article"
                  value={filterLibelle}
                  onChange={(e) => setFilterLibelle(e.target.value)}
                />
                <div className="form-icon">
                  <FaSearch className="text-[#e0dcdc]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-table">
        <div className="flex-table-header">
          <span className="product">
            <span>Product</span>
          </span>
          <span className="quantity">Quantité</span>
          <span className="price">Prix</span>
          <span className="discount">Discount</span>
          <span className="total">Total</span>
        </div>

        {approvisionnements.length === 0 ? (
          <div className="flex-table-item">
            <span>Aucun approvisionnement trouvé.</span>
          </div>
        ) : (
          approvisionnements.map((approvisionnement) => (
            <div className="flex-table-item" key={approvisionnement.id}>
              <div className="product">
                <img src={approvisionnement.article.image} alt="" />
                <span className="product-name">{approvisionnement.article.libelle}</span>
              </div>
              <div className="quantity">
                <span className="has-price">{approvisionnement.qte}</span>
              </div>
              <div className="price">
                <span className="has-price">{approvisionnement.prix}</span>
              </div>
              <div className="discount">
                <span className="has-price">0</span>
              </div>
              <div className="total">
                <span className="has-price">{approvisionnement.qte * approvisionnement.prix}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default ApproTailleurPage;
