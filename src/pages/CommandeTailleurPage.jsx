import { FaSearch } from "react-icons/fa";

function CommandeTailleurPage() {
  return (
    <>
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
                  placeholder="saisir pour rechercher un article"
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
                  placeholder="saisir pour rechercher un article"
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
          <span className="quantity">Quantity</span>
          <span className="price">Price</span>
          <span className="discount">Discount</span>
          <span className="total">Total</span>
        </div>
        <div className="flex-table-item">
          <div className="product">
            <img src="/src/assets/img/products/2.svg" alt="" />
            <span className="product-name">Cool Shirt</span>
          </div>
          <div className="quantity">
            <span className="has-price">1</span>
          </div>
          <div className="price">
            <span className="has-price">29.00</span>
          </div>
          <div className="discount">
            <span className="has-price">0</span>
          </div>
          <div className="total">
            <span className="has-price">29.00</span>
          </div>
        </div>
        <div className="flex-table-item">
          <div className="product">
            <img src="/src/assets/img/products/3.svg" alt="" />
            <span className="product-name">Military Short</span>
          </div>
          <div className="quantity">
            <span className="has-price">1</span>
          </div>
          <div className="price">
            <span className="has-price">39.00</span>
          </div>
          <div className="discount">
            <span className="has-price">0</span>
          </div>
          <div className="total">
            <span className="has-price">39.00</span>
          </div>
        </div>
        <div className="flex-table-item">
          <div className="product">
            <img src="/src/assets/img/products/4.svg" alt="" />
            <span className="product-name">Cool Backpack</span>
          </div>
          <div className="quantity">
            <span className="has-price">1</span>
          </div>
          <div className="price">
            <span className="has-price">125.00</span>
          </div>
          <div className="discount">
            <span className="has-price">0</span>
          </div>
          <div className="total">
            <span className="has-price">125.00</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommandeTailleurPage;
