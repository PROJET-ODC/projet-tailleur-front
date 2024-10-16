const Username = ({ name, status }) => {
    return (
      <div className="username">
        <span>{name}</span>
        <span>
          <i data-feather="star"></i> <span>| {status}</span>
        </span>
      </div>
    );
  };
  
  export default Username;
  