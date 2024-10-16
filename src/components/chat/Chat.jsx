
import React, { useEffect, useState } from 'react';
import AvatarComponent from '/home/aissata/projet-tailleur-front/src/components/chat/ChatComponent/AvatarComponent';
import NavEnd from '/home/aissata/projet-tailleur-front/src/components/chat/ChatComponent/NavEnd.jsx';
import HeaderItem from '/home/aissata/projet-tailleur-front/src/components/chat/ChatComponent/HeaderItem';
import UserList from '/home/aissata/projet-tailleur-front/src/components/chat/ChatComponent/UserList';
import FooterItem from '/home/aissata/projet-tailleur-front/src/components/chat/ChatComponent/FooterItem';
 import Message from '/home/aissata/projet-tailleur-front/src/components/chat/ChatComponent/Message'; // Assurez-vous que le chemin d'importation est correct
import DateDivider from '/home/aissata/projet-tailleur-front/src/components/chat/ChatComponent/DateDivider'; // Assurez-vous que le chemin d'importation est correct
import io from 'socket.io-client';
import { FaPaperPlane } from 'react-icons/fa';

const socket = io.connect('http://localhost:5000');

const Chat = ()=>{
  
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {

        socket.on('chat', (chat) => {
            setMessages((prevMessages) => [...prevMessages, chat]);
        });

        return () => {
            socket.off('chat'); // Nettoie l'écouteur
        };
    }, [message]);

    const handleUserChat = async (userId) => {
        console.log(userId);
        
        
    };
    
    const sendMessage = () => {
        const messageData = {
            text: message,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // Obtenir l'heure actuelle
            isReceived: false, // Indiquer que c'est un message envoyé par l'utilisateur
            avatarSrc: "../via.placeholder.com/300x300.png" // URL de l'avatar
        };

        socket.emit('chat', messageData); // Émettre le message avec toutes les données
        setMessages((prevMessages) => [...prevMessages, messageData]); // Ajouter le message à l'état local
        setMessage(''); // Réinitialise le champ de message
    };
  return(
    <div className="chat-wrapper z-[1] !pointer-events-auto opacity-100">
    <div className="chat-inner">
      
    <div className="chat-nav">
            <div className="nav-start">
                <AvatarComponent />
            </div>
            <NavEnd />
        </div>
      
        <div id="chat-sidebar" className="users-sidebar">
      <HeaderItem />
      <UserList handleUserChat={handleUserChat}/>
      <FooterItem />
    </div>

      
        <div id="chat-body" className="chat-body is-opened">
          
       

          
            <div className="chat-action">
                <div className="chat-action-inner">
                <div className="control" style={{ marginTop: '-3rem' }}>
                    
                <div className="relative w-full">
    
                <textarea className="textarea comment-textarea w-full pr-10 border rounded px-3 py-2" rows="1" ></textarea>
      <button className="absolute top-1/2 right-3 transform -translate-y-1/2 text-blue-500"><FaPaperPlane size={20} /></button>
    
    
    </div>
                       
                        <div className="dropdown compose-dropdown is-spaced is-accent is-up dropdown-trigger">
                            <div>
                                <div className="add-button">
                                    <div className="button-inner">
                                        <i data-feather="plus"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                    <a href="#" className="dropdown-item">
                                        <div className="media">
                                            <i data-feather="code"></i>
                                            <div className="media-content">
                                                <h3>Code snippet</h3>
                                                <small>Add and paste a code snippet.</small>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item">
                                        <div className="media">
                                            <i data-feather="file-text"></i>
                                            <div className="media-content">
                                                <h3>Note</h3>
                                                <small>Add and paste a note.</small>
                                            </div>
                                        </div>
                                    </a>
                                    <hr className="dropdown-divider" />
                                    <a className="dropdown-item">
                                        <div className="media">
                                            <i data-feather="server"></i>
                                            <div className="media-content">
                                                <h3>Remote file</h3>
                                                <small>Add a file from a remote drive.</small>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item">
                                        <div className="media">
                                            <i data-feather="monitor"></i>
                                            <div className="media-content">
                                                <h3>Local file</h3>
                                                <small>Add a file from your computer.</small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="chat-panel" className="chat-panel is-opened">
            <div className="panel-inner">
                <div className="panel-header">
                    <h3>Details</h3>
                    <div className="panel-close">
                        <i data-feather="x"></i>
                    </div>
                </div>

              
                <div id="dan-details" className="panel-body is-user-details">
                    <div className="panel-body-inner">
                        <div className="subheader">
                            <div className="action-icon">
                                <i className="mdi mdi-video"></i>
                            </div>
                            <div className="action-icon">
                                <i className="mdi mdi-camera"></i>
                            </div>
                            <div className="action-icon">
                                <i className="mdi mdi-microphone"></i>
                            </div>
                            <div className="dropdown details-dropdown is-spaced is-neutral is-right dropdown-trigger ml-auto">
                                <div>
                                    <div className="action-icon">
                                        <i className="mdi mdi-dots-vertical"></i>
                                    </div>
                                </div>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <a href="#" className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="user"></i>
                                                <div className="media-content">
                                                    <h3>View profile</h3>
                                                    <small>View this user's profile.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="mail"></i>
                                                <div className="media-content">
                                                    <h3>Send message</h3>
                                                    <small>Send a message to the user's inbox.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <hr className="dropdown-divider" />
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="share-2"></i>
                                                <div className="media-content">
                                                    <h3>Share profile</h3>
                                                    <small>Share this user's profile.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="x"></i>
                                                <div className="media-content">
                                                    <h3>Block user</h3>
                                                    <small>Block this user permanently.</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="details-avatar">
                            <img src="../via.placeholder.com/300x300.png" data-demo-src="assets/img/avatars/dan.jpg" alt="" />
                            <div className="call-me">
                                <i className="mdi mdi-phone"></i>
                            </div>
                        </div>

                        <div className="user-meta has-text-centered">
                            <h3>Dan Walker</h3>
                            <h4>IOS Developer</h4>
                        </div>

                        <div className="user-badges">
                            <div className="hexagon is-red">
                                <div>
                                    <i className="mdi mdi-heart"></i>
                                </div>
                            </div>
                            <div className="hexagon is-green">
                                <div>
                                    <i className="mdi mdi-dog"></i>
                                </div>
                            </div>
                            <div className="hexagon is-accent">
                                <div>
                                    <i className="mdi mdi-flash"></i>
                                </div>
                            </div>
                            <div className="hexagon is-blue">
                                <div>
                                    <i className="mdi mdi-briefcase"></i>
                                </div>
                            </div>
                        </div>

                        <div className="user-about">
                            <label>About Me</label>
                            <div className="about-block">
                                <i className="mdi mdi-domain"></i>
                                <div className="about-text">
                                    <span>Works at</span>
                                    <span><a className="is-inverted" href="#">WebSmash Inc.</a></span>
                                </div>
                            </div>
                            <div className="about-block">
                                <i className="mdi mdi-school"></i>
                                <div className="about-text">
                                    <span>Studied at</span>
                                    <span><a className="is-inverted" href="#">Riverdale University</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

              
                <div id="stella-details" className="panel-body is-user-details is-hidden">
                    <div className="panel-body-inner">
                        <div className="subheader">
                            <div className="action-icon">
                                <i className="mdi mdi-video"></i>
                            </div>
                            <div className="action-icon">
                                <i className="mdi mdi-camera"></i>
                            </div>
                            <div className="action-icon">
                                <i className="mdi mdi-microphone"></i>
                            </div>
                            <div className="dropdown details-dropdown is-spaced is-neutral is-right dropdown-trigger ml-auto">
                                <div>
                                    <div className="action-icon">
                                        <i className="mdi mdi-dots-vertical"></i>
                                    </div>
                                </div>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <a href="#" className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="user"></i>
                                                <div className="media-content">
                                                    <h3>View profile</h3>
                                                    <small>View this user's profile.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="mail"></i>
                                                <div className="media-content">
                                                    <h3>Send message</h3>
                                                    <small>Send a message to the user's inbox.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <hr className="dropdown-divider" />
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="share-2"></i>
                                                <div className="media-content">
                                                    <h3>Share profile</h3>
                                                    <small>Share this user's profile.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="x"></i>
                                                <div className="media-content">
                                                    <h3>Block user</h3>
                                                    <small>Block this user permanently.</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="details-avatar">
                            <img src="../via.placeholder.com/300x300.png" data-demo-src="assets/img/avatars/stella.jpg" alt="" />
                            <div className="call-me">
                                <i className="mdi mdi-phone"></i>
                            </div>
                        </div>

                        <div className="user-meta has-text-centered">
                            <h3>Stella Bergmann</h3>
                            <h4>Shop Owner</h4>
                        </div>

                        <div className="user-badges">
                            <div className="hexagon is-purple">
                                <div>
                                    <i className="mdi mdi-bomb"></i>
                                </div>
                            </div>
                            <div className="hexagon is-red">
                                <div>
                                    <i className="mdi mdi-check-decagram"></i>
                                </div>
                            </div>
                            <div className="hexagon is-accent">
                                <div>
                                    <i className="mdi mdi-flash"></i>
                                </div>
                            </div>
                        </div>

                        <div className="user-about">
                            <label>About Me</label>
                            <div className="about-block">
                                <i className="mdi mdi-domain"></i>
                                <div className="about-text">
                                    <span>Works at</span>
                                    <span><a className="is-inverted" href="#">Trending Fashions</a></span>
                                </div>
                            </div>
                            <div className="about-block">
                                <i className="mdi mdi-map-marker"></i>
                                <div className="about-text">
                                    <span>From</span>
                                    <span><a className="is-inverted" href="#">Oklahoma City</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

              
                <div id="daniel-details" className="panel-body is-user-details is-hidden">
                    <div className="panel-body-inner">
                        <div className="subheader">
                            <div className="action-icon">
                                <i className="mdi mdi-video"></i>
                            </div>
                            <div className="action-icon">
                                <i className="mdi mdi-camera"></i>
                            </div>
                            <div className="action-icon">
                                <i className="mdi mdi-microphone"></i>
                            </div>
                            <div className="dropdown details-dropdown is-spaced is-neutral is-right dropdown-trigger ml-auto">
                                <div>
                                    <div className="action-icon">
                                        <i className="mdi mdi-dots-vertical"></i>
                                    </div>
                                </div>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <a href="#" className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="user"></i>
                                                <div className="media-content">
                                                    <h3>View profile</h3>
                                                    <small>View this user's profile.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="mail"></i>
                                                <div className="media-content">
                                                    <h3>Send message</h3>
                                                    <small>Send a message to the user's inbox.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <hr className="dropdown-divider" />
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="share-2"></i>
                                                <div className="media-content">
                                                    <h3>Share profile</h3>
                                                    <small>Share this user's profile.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="x"></i>
                                                <div className="media-content">
                                                    <h3>Block user</h3>
                                                    <small>Block this user permanently.</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="details-avatar">
                            <img src="../via.placeholder.com/300x300.png" data-demo-src="assets/img/avatars/daniel.jpg" alt="" />
                            <div className="call-me">
                                <i className="mdi mdi-phone"></i>
                            </div>
                        </div>

                        <div className="user-meta has-text-centered">
                            <h3>Daniel Wellington</h3>
                            <h4>Senior Executive</h4>
                        </div>

                        <div className="user-badges">
                            <div className="hexagon is-accent">
                                <div>
                                    <i className="mdi mdi-google-cardboard"></i>
                                </div>
                            </div>
                            <div className="hexagon is-blue">
                                <div>
                                    <i className="mdi mdi-pizza"></i>
                                </div>
                            </div>
                            <div className="hexagon is-accent">
                                <div>
                                    <i className="mdi mdi-linux"></i>
                                </div>
                            </div>
                            <div className="hexagon is-red">
                                <div>
                                    <i className="mdi mdi-puzzle"></i>
                                </div>
                            </div>
                        </div>

                        <div className="user-about">
                            <label>About Me</label>
                            <div className="about-block">
                                <i className="mdi mdi-domain"></i>
                                <div className="about-text">
                                    <span>Works at</span>
                                    <span><a className="is-inverted" href="#">Peelman & Sons</a></span>
                                </div>
                            </div>
                            <div className="about-block">
                                <i className="mdi mdi-map-marker"></i>
                                <div className="about-text">
                                    <span>From</span>
                                    <span><a className="is-inverted" href="#">Los Angeles</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

              
                <div id="david-details" className="panel-body is-user-details is-hidden">
                    <div className="panel-body-inner">
                        <div className="subheader">
                            <div className="action-icon">
                                <i className="mdi mdi-video"></i>
                            </div>
                            <div className="action-icon">
                                <i className="mdi mdi-camera"></i>
                            </div>
                            <div className="action-icon">
                                <i className="mdi mdi-microphone"></i>
                            </div>
                            <div className="dropdown details-dropdown is-spaced is-neutral is-right dropdown-trigger ml-auto">
                                <div>
                                    <div className="action-icon">
                                        <i className="mdi mdi-dots-vertical"></i>
                                    </div>
                                </div>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <a href="#" className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="user"></i>
                                                <div className="media-content">
                                                    <h3>View profile</h3>
                                                    <small>View this user's profile.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="mail"></i>
                                                <div className="media-content">
                                                    <h3>Send message</h3>
                                                    <small>Send a message to the user's inbox.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <hr className="dropdown-divider" />
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="share-2"></i>
                                                <div className="media-content">
                                                    <h3>Share profile</h3>
                                                    <small>Share this user's profile.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="x"></i>
                                                <div className="media-content">
                                                    <h3>Block user</h3>
                                                    <small>Block this user permanently.</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="details-avatar">
                            <img src="../via.placeholder.com/300x300.png" data-demo-src="assets/img/avatars/david.jpg" alt="" />
                            <div className="call-me">
                                <i className="mdi mdi-phone"></i>
                            </div>
                        </div>

                        <div className="user-meta has-text-centered">
                            <h3>David Kim</h3>
                            <h4>Senior Developer</h4>
                        </div>

                        <div className="user-badges">
                            <div className="hexagon is-red">
                                <div>
                                    <i className="mdi mdi-heart"></i>
                                </div>
                            </div>
                            <div className="hexagon is-green">
                                <div>
                                    <i className="mdi mdi-dog"></i>
                                </div>
                            </div>
                            <div className="hexagon is-accent">
                                <div>
                                    <i className="mdi mdi-flash"></i>
                                </div>
                            </div>
                            <div className="hexagon is-blue">
                                <div>
                                    <i className="mdi mdi-briefcase"></i>
                                </div>
                            </div>
                        </div>

                        <div className="user-about">
                            <label>About Me</label>
                            <div className="about-block">
                                <i className="mdi mdi-domain"></i>
                                <div className="about-text">
                                    <span>Works at</span>
                                    <span><a className="is-inverted" href="#">Frost Entertainment</a></span>
                                </div>
                            </div>
                            <div className="about-block">
                                <i className="mdi mdi-map-marker"></i>
                                <div className="about-text">
                                    <span>From</span>
                                    <span><a className="is-inverted" href="#">Chicago</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

              
                <div id="edward-details" className="panel-body is-user-details is-hidden">
                    <div className="panel-body-inner">
                        <div className="subheader">
                            <div className="action-icon">
                                <i className="mdi mdi-video"></i>
                            </div>
                            <div className="action-icon">
                                <i className="mdi mdi-camera"></i>
                            </div>
                            <div className="action-icon">
                                <i className="mdi mdi-microphone"></i>
                            </div>
                            <div className="dropdown details-dropdown is-spaced is-neutral is-right dropdown-trigger ml-auto">
                                <div>
                                    <div className="action-icon">
                                        <i className="mdi mdi-dots-vertical"></i>
                                    </div>
                                </div>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <a href="#" className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="user"></i>
                                                <div className="media-content">
                                                    <h3>View profile</h3>
                                                    <small>View this user's profile.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="mail"></i>
                                                <div className="media-content">
                                                    <h3>Send message</h3>
                                                    <small>Send a message to the user's inbox.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <hr className="dropdown-divider" />
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="share-2"></i>
                                                <div className="media-content">
                                                    <h3>Share profile</h3>
                                                    <small>Share this user's profile.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="x"></i>
                                                <div className="media-content">
                                                    <h3>Block user</h3>
                                                    <small>Block this user permanently.</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="details-avatar">
                            <img src="../via.placeholder.com/300x300.png" data-demo-src="assets/img/avatars/edward.jpeg" alt="" />
                            <div className="call-me">
                                <i className="mdi mdi-phone"></i>
                            </div>
                        </div>

                        <div className="user-meta has-text-centered">
                            <h3>Edward Mayers</h3>
                            <h4>Financial analyst</h4>
                        </div>

                        <div className="user-badges">
                            <div className="hexagon is-red">
                                <div>
                                    <i className="mdi mdi-heart"></i>
                                </div>
                            </div>
                            <div className="hexagon is-green">
                                <div>
                                    <i className="mdi mdi-dog"></i>
                                </div>
                            </div>
                            <div className="hexagon is-accent">
                                <div>
                                    <i className="mdi mdi-flash"></i>
                                </div>
                            </div>
                        </div>

                        <div className="user-about">
                            <label>About Me</label>
                            <div className="about-block">
                                <i className="mdi mdi-domain"></i>
                                <div className="about-text">
                                    <span>Works at</span>
                                    <span><a className="is-inverted" href="#">Brettmann Bank</a></span>
                                </div>
                            </div>
                            <div className="about-block">
                                <i className="mdi mdi-map-marker"></i>
                                <div className="about-text">
                                    <span>From</span>
                                    <span><a className="is-inverted" href="#">Santa Fe</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

              
                <div id="elise-details" className="panel-body is-user-details is-hidden">
                    <div className="panel-body-inner">
                        <div className="subheader">
                            <div className="action-icon">
                                <i className="mdi mdi-video"></i>
                            </div>
                            <div className="action-icon">
                                <i className="mdi mdi-camera"></i>
                            </div>
                            <div className="action-icon">
                                <i className="mdi mdi-microphone"></i>
                            </div>
                            <div className="dropdown details-dropdown is-spaced is-neutral is-right dropdown-trigger ml-auto">
                                <div>
                                    <div className="action-icon">
                                        <i className="mdi mdi-dots-vertical"></i>
                                    </div>
                                </div>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <a href="#" className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="user"></i>
                                                <div className="media-content">
                                                    <h3>View profile</h3>
                                                    <small>View this user's profile.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="mail"></i>
                                                <div className="media-content">
                                                    <h3>Send message</h3>
                                                    <small>Send a message to the user's inbox.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <hr className="dropdown-divider" />
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="share-2"></i>
                                                <div className="media-content">
                                                    <h3>Share profile</h3>
                                                    <small>Share this user's profile.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="x"></i>
                                                <div className="media-content">
                                                    <h3>Block user</h3>
                                                    <small>Block this user permanently.</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="details-avatar">
                            <img src="../via.placeholder.com/300x300.png" data-demo-src="assets/img/avatars/elise.jpg" alt="" />
                            <div className="call-me">
                                <i className="mdi mdi-phone"></i>
                            </div>
                        </div>

                        <div className="user-meta has-text-centered">
                            <h3>Elise Walker</h3>
                            <h4>Social influencer</h4>
                        </div>

                        <div className="user-badges">
                            <div className="hexagon is-red">
                                <div>
                                    <i className="mdi mdi-heart"></i>
                                </div>
                            </div>
                            <div className="hexagon is-accent">
                                <div>
                                    <i className="mdi mdi-flash"></i>
                                </div>
                            </div>
                        </div>

                        <div className="user-about">
                            <label>About Me</label>
                            <div className="about-block">
                                <i className="mdi mdi-domain"></i>
                                <div className="about-text">
                                    <span>Works at</span>
                                    <span><a className="is-inverted" href="#">Social Media</a></span>
                                </div>
                            </div>
                            <div className="about-block">
                                <i className="mdi mdi-map-marker"></i>
                                <div className="about-text">
                                    <span>From</span>
                                    <span><a className="is-inverted" href="#">London</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

              
                <div id="nelly-details" className="panel-body is-user-details is-hidden">
                    <div className="panel-body-inner">
                        <div className="subheader">
                            <div className="action-icon">
                                <i className="mdi mdi-video"></i>
                            </div>
                            <div className="action-icon">
                                <i className="mdi mdi-camera"></i>
                            </div>
                            <div className="action-icon">
                                <i className="mdi mdi-microphone"></i>
                            </div>
                            <div className="dropdown details-dropdown is-spaced is-neutral is-right dropdown-trigger ml-auto">
                                <div>
                                    <div className="action-icon">
                                        <i className="mdi mdi-dots-vertical"></i>
                                    </div>
                                </div>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <a href="#" className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="user"></i>
                                                <div className="media-content">
                                                    <h3>View profile</h3>
                                                    <small>View this user's profile.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="mail"></i>
                                                <div className="media-content">
                                                    <h3>Send message</h3>
                                                    <small>Send a message to the user's inbox.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <hr className="dropdown-divider" />
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="share-2"></i>
                                                <div className="media-content">
                                                    <h3>Share profile</h3>
                                                    <small>Share this user's profile.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="x"></i>
                                                <div className="media-content">
                                                    <h3>Block user</h3>
                                                    <small>Block this user permanently.</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="details-avatar">
                            <img src="../via.placeholder.com/300x300.png" data-demo-src="assets/img/avatars/nelly.png" alt="" />
                            <div className="call-me">
                                <i className="mdi mdi-phone"></i>
                            </div>
                        </div>

                        <div className="user-meta has-text-centered">
                            <h3>Nelly Schwartz</h3>
                            <h4>HR Manager</h4>
                        </div>

                        <div className="user-badges">
                            <div className="hexagon is-red">
                                <div>
                                    <i className="mdi mdi-heart"></i>
                                </div>
                            </div>
                            <div className="hexagon is-green">
                                <div>
                                    <i className="mdi mdi-dog"></i>
                                </div>
                            </div>
                            <div className="hexagon is-accent">
                                <div>
                                    <i className="mdi mdi-flash"></i>
                                </div>
                            </div>
                            <div className="hexagon is-blue">
                                <div>
                                    <i className="mdi mdi-briefcase"></i>
                                </div>
                            </div>
                        </div>

                        <div className="user-about">
                            <label>About Me</label>
                            <div className="about-block">
                                <i className="mdi mdi-domain"></i>
                                <div className="about-text">
                                    <span>Works at</span>
                                    <span><a className="is-inverted" href="#">Carrefour</a></span>
                                </div>
                            </div>
                            <div className="about-block">
                                <i className="mdi mdi-map-marker"></i>
                                <div className="about-text">
                                    <span>From</span>
                                    <span><a className="is-inverted" href="#">Melbourne</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

              
                <div id="milly-details" className="panel-body is-user-details is-hidden">
                    <div className="panel-body-inner">
                        <div className="subheader">
                            <div className="action-icon">
                                <i className="mdi mdi-video"></i>
                            </div>
                            <div className="action-icon">
                                <i className="mdi mdi-camera"></i>
                            </div>
                            <div className="action-icon">
                                <i className="mdi mdi-microphone"></i>
                            </div>
                            <div className="dropdown details-dropdown is-spaced is-neutral is-right dropdown-trigger ml-auto">
                                <div>
                                    <div className="action-icon">
                                        <i className="mdi mdi-dots-vertical"></i>
                                    </div>
                                </div>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <a href="#" className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="user"></i>
                                                <div className="media-content">
                                                    <h3>View profile</h3>
                                                    <small>View this user's profile.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="mail"></i>
                                                <div className="media-content">
                                                    <h3>Send message</h3>
                                                    <small>Send a message to the user's inbox.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <hr className="dropdown-divider" />
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="share-2"></i>
                                                <div className="media-content">
                                                    <h3>Share profile</h3>
                                                    <small>Share this user's profile.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item">
                                            <div className="media">
                                                <i data-feather="x"></i>
                                                <div className="media-content">
                                                    <h3>Block user</h3>
                                                    <small>Block this user permanently.</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="details-avatar">
                            <img src="../via.placeholder.com/300x300.png" data-demo-src="assets/img/avatars/milly.jpg" alt="" />
                            <div className="call-me">
                                <i className="mdi mdi-phone"></i>
                            </div>
                        </div>

                        <div className="user-meta has-text-centered">
                            <h3>Milly Augustine</h3>
                            <h4>Sales Manager</h4>
                        </div>

                        <div className="user-badges">
                            <div className="hexagon is-red">
                                <div>
                                    <i className="mdi mdi-heart"></i>
                                </div>
                            </div>
                            <div className="hexagon is-green">
                                <div>
                                    <i className="mdi mdi-dog"></i>
                                </div>
                            </div>
                            <div className="hexagon is-accent">
                                <div>
                                    <i className="mdi mdi-flash"></i>
                                </div>
                            </div>
                            <div className="hexagon is-blue">
                                <div>
                                    <i className="mdi mdi-briefcase"></i>
                                </div>
                            </div>
                        </div>

                        <div className="user-about">
                            <label>About Me</label>
                            <div className="about-block">
                                <i className="mdi mdi-domain"></i>
                                <div className="about-text">
                                    <span>Works at</span>
                                    <span><a className="is-inverted" href="#">Salesforce</a></span>
                                </div>
                            </div>
                            <div className="about-block">
                                <i className="mdi mdi-map-marker"></i>
                                <div className="about-text">
                                    <span>From</span>
                                    <span><a className="is-inverted" href="#">Seattle</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</div>
  )

};

export default Chat;