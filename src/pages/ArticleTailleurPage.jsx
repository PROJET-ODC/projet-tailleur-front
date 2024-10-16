import { FaSearch } from "react-icons/fa";
function ArticleTailleurPage() {
  return (
    <>
      <div className="search !w-[100%]">
        <div className="navbar-item !w-[100%]">
          <div id="global-search" className="control !w-[100%]">
            <div className="field !w-[100%]">
              <label>Rechercher un article</label>
              <div className="control has-icon !w-[100%]">
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
      <div id="products-tab" className="store-tab-pane is-active mt-20">
        <div className="columns is-multiline">
          <div className="column is-one-fifth-fullhd is-one-quarter-widescreen is-one-third-desktop is-one-third-tablet is-half-mobile bg-white">
            <div
              className="product-card"
              data-name="Spring Red Dress"
              data-price="44.00"
              data-colors="true"
              data-variants="true"
              data-path="/src/assets/img/products/1"
            >
              <a className="quickview-trigger">
                <i data-feather="more-horizontal"></i>
              </a>
              <div className="product-image">
                <img src="/src/assets/img/products/1.svg" alt="" />
              </div>
              <div className="product-info">
                <h3>Spring Red Dress</h3>
                <p>
                  A beautiful dress for you best evenings and important dates
                </p>
              </div>
              <div className="product-actions">
                <div className="left">
                  <i data-feather="heart"></i>
                  <span>147</span>
                </div>
                <div className="right">
                  <a className="button is-solid accent-button raised">
                    <i data-feather="shopping-cart"></i>
                    <span>$44.00</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleTailleurPage;
