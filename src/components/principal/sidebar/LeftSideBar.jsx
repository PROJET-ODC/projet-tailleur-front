import { Link } from "react-router-dom";

function LeftSideBar() {
  return (
    <div className="column is-3 is-hidden-mobile">
      <div className="feed-menu-v1">
        <ul className="main-menu">
          <li>
            <Link to="/articles">
              <i data-feather="list"></i>
              <span>Articles</span>
            </Link>
          </li>
          <li>
            <Link to="/approvisionnements">
              <i data-feather="shopping-cart"></i>
              <span>Approvisionnements</span>
            </Link>
          </li>
          <li>
            <Link to="/mes-commandes">
              <i data-feather="box"></i>
              <span>Mes Commandes</span>
            </Link>
          </li>
          <li>
            <Link to="/ajouter-article">
              <i data-feather="plus-circle"></i>
              <span>Ajouter Article</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftSideBar;
