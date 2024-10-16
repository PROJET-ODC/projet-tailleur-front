// import { FaReact } from "react-icons/fa6";
// // import '../style.css';
// import { useState } from "react";
// import PropTypes from 'prop-types';  // Importez prop-types
// import _ from 'lodash';

// const UserLogin = ({ setUser }) => {

//     const [username, setUsername] = useState('');

//     const handleUser = () => {
//         if (!username) return;
//         localStorage.setItem('user', username);
//         setUser(username);
//         localStorage.setItem('avatar', `https://picsum.photos/seed/${_.random(1, 1000)}/200/300`);
//     };

//     return (
//         <div className="login_container">
//             <div className="login_title">
//                 <FaReact />
//             </div>
//             <h1>Chat App </h1>
//             <div className="login_form">
//                 <input 
//                     type="text" 
//                     placeholder="entrer votre username"
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//                 <button onClick={handleUser}>Login</button>
//             </div>
//         </div>
//     );
// };

// // Ajoutez la validation des types pour setUser
// UserLogin.propTypes = {
//     setUser: PropTypes.func.isRequired,  // Le type attendu est une fonction, et il est requis
// };

// export default UserLogin;
