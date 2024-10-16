import { useEffect, useState } from "react";
import { getFriendSuggestions } from "../../../api/tailleurs";
import AddFriendBlock from "./AddFriendBlock";

function FriendCard() {
  const [suggestions, setSuggestions] = useState([]); // Corrected typo in useState
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await getFriendSuggestions(); // Pass the abort signal
      setSuggestions(data.suggestions);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    const abortCont = new AbortController();
    fetchData();
    return () => abortCont.abort();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading message
  }

  const handleUpdateFriendState = async () => {
    await fetchData();
  };

  return (
    <div className="card">
      <div className="card-heading is-bordered">
        <h4>Suggestion d'amis</h4>
      </div>
      <div className="card-body no-padding">
        {suggestions.length > 0 ? (
          suggestions.map((suggestion) => (
            <AddFriendBlock
              suggestion={suggestion}
              key={suggestion.id}
              handleUpdateFriendState={handleUpdateFriendState}
            />
          ))
        ) : (
          <p>Aucune suggestion disponible.</p>
        )}
      </div>
    </div>
  );
}

export default FriendCard;
