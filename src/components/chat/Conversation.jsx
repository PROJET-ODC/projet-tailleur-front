import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

// Connexion à l'instance Socket.IO
const socket = io('http://localhost:5000');

const Conversation = ({ currentUserId, recipientId }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    // Pour écouter les messages entrants
    useEffect(() => {
        // Écoute des messages reçus
        socket.on('receiveMessage', (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        return () => {
            socket.off('receiveMessage'); // Nettoie l'écouteur
        };
    }, []);

    // Envoi d'un message au serveur
    const sendMessage = () => {
        const messageData = {
            message,  // Texte du message
            messaged_id: recipientId,  // ID du destinataire
            senderId: currentUserId,  // ID de l'utilisateur connecté (expéditeur)
        };

        // Émission du message à travers le serveur
        socket.emit('chat', messageData, (response) => {
            if (response.status === 'OK') {
                console.log('Message envoyé avec succès');
            } else {
                console.log('Erreur lors de l\'envoi du message');
            }
        });

        // Ajouter immédiatement le message à la liste des messages pour affichage instantané
        setMessages((prevMessages) => [...prevMessages, messageData]);
        setMessage('');  // Réinitialise le champ de saisie de message
    };

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={msg.senderId === currentUserId ? 'sent' : 'received'}
                    >
                        {msg.message}
                    </div>
                ))}
            </div>

            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Écrire un message..."
            />
            <button onClick={sendMessage}>Envoyer</button>
        </div>
    );
};

export default Conversation;
