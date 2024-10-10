const StickerPicker = ({ onStickerSelect, position }) => {
    const stickers = [
      'https://via.placeholder.com/50?text=Sticker1',
      'https://via.placeholder.com/50?text=Sticker2',
      'https://via.placeholder.com/50?text=Sticker3',
    ];
  
    return (
      <div className="sticker-picker" style={{ position: 'absolute', top: position.top, left: position.left }}>
        {stickers.map((sticker, index) => (
          <img 
            key={index} 
            src={sticker} 
            alt={`Sticker ${index + 1}`} 
            onClick={() => onStickerSelect(sticker)} 
            style={{ cursor: 'pointer', width: '50px', margin: '5px' }}
          />
        ))}
      </div>
    );
  };
  