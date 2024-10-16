// import  { useState } from "react";
// import PropTypes from 'prop-types';

// function InputText({ addMessage }) {
//   const [message, setMessage] = useState('');

//   const sendMessage = () => {
//     addMessage({ message })
//     setMessage('')
//   }

//   return (
//     <div className="input_text_container">
//       <textarea 
//         name="message" 
//         id="message" 
//         rows="6" 
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       ></textarea>
//       <button onClick={sendMessage}>Envoyer</button>
//     </div>
//   )
// }

// InputText.propTypes = {
//   addMessage: PropTypes.func.isRequired,
// };

// export default InputText;