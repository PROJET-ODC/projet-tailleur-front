// import PropTypes from 'prop-types';
// // import "../style.css";

// const SenderChat = ({ message, username, avatar }) => (
//   <div className="chat_sender">
//     <img src={avatar} alt={`Avatar de ${username}`} />
//     <p>
//       <strong>{username}</strong>
//       {message}
//     </p>
//   </div>
// );

// SenderChat.propTypes = {
//   message: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
// };

// const ReceiverChat = ({ message, username, avatar }) => (
//   <div className="chat_receiver">
//     <img src={avatar} alt={`Avatar de ${username}`} />
//     <p>
//       <strong>{username}</strong>
//       {message}
//     </p>
//   </div>
// );

// ReceiverChat.propTypes = {
//   message: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
// };

// const UseList = ({ chats }) => {
//   const user = localStorage.getItem('user');

//   return (
//     <div className="chats_list">
//       {chats.map((chat, index) => (
//         chat.user === user ? (
//           <SenderChat 
//             key={index}
//             message={chat.message}
//             username={chat.username}
//             avatar={chat.avatar}
//           />
//         ) : (
//           <ReceiverChat 
//             key={index}
//             message={chat.message}
//             username={chat.username}
//             avatar={chat.avatar}
//           />
//         )
//       ))}
//     </div>
//   );
// };

// ChatLists.propTypes = {
//   chats: PropTypes.arrayOf(PropTypes.shape({
//     user: PropTypes.string.isRequired,
//     message: PropTypes.string.isRequired,
//     username: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//   })).isRequired,
// };

// export default UseList;