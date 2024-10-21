import { useEffect, useState } from "react";
import { getSearchResult } from "../../../../api/postApi";

const SearchBar = () => {
  const [posts, setPosts] = useState([]);
  const [filterPost, setFilterPost] = useState(null);

  // useEffect(() => {
  //   const abortCont = new AbortController();
  //   const fetchData = async () => {
  //     try {

  //       // setPosts(data.posts);
  //       console.log(data);
  //     } catch (error) {
  //       if (!abortCont.signal.aborted) {
  //         console.error("Failed to fetch data:", error);
  //       }
  //     }
  //   };

  //   fetchData();
  //   return () => abortCont.abort();
  // }, []);

  const handleChangeSearch = async (e) => {
    const data = await getSearchResult({
      searchText: e.target.value.toLowerCase(),
    });
    console.log(data);

    // const filteredPosts = posts.filter(
    //   (post) =>
    //     post.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
    //     post.content.toLowerCase().includes(e.target.value.toLowerCase())
    // );
    // console.log(filteredPosts);
    // setFilterPost(filteredPosts);
  };

  return (
    <div className="navbar-item">
      <div id="global-search" className="control">
        <input
          id="tipue_drop_input"
          className="input is-rounded"
          type="text"
          placeholder="Search"
          onChange={handleChangeSearch}
          required
        />
        <span id="clear-search" className="reset-search">
          <i data-feather="x"></i>
        </span>
        <span className="search-icon">
          <i data-feather="search"></i>
        </span>

        <div id="tipue_drop_content" className="tipue-drop-content"></div>
      </div>
    </div>
  );
};

export default SearchBar;
