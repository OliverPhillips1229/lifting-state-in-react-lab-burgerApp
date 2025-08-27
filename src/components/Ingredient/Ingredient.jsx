// src/components/Ingredient/Ingredient.jsx



// Utility to determine if a color is light or dark
function getContrastColor(bgColor) {
  // Remove hash if present
  let color = bgColor.replace('#', '');
  // Convert named colors to hex (simple mapping for this app)
  const namedColors = {
    saddlebrown: '#8B4513',
    sandybrown: '#F4A460',
    peru: '#CD853F',
    olivedrab: '#6B8E23',
    burlywood: '#DEB887',
    lawngreen: '#7CFC00',
    tomato: '#FF6347',
    maroon: '#800000',
    lightyellow: '#FFFFE0',
    FDE18B: '#FDE18B',
    F1E1A8: '#F1E1A8',
  };
  if (namedColors[bgColor]) color = namedColors[bgColor].replace('#', '');
  if (color.length === 3) {
    color = color.split('').map(c => c + c).join('');
  }
  // Parse r,g,b
  const r = parseInt(color.substring(0,2),16);
  const g = parseInt(color.substring(2,4),16);
  const b = parseInt(color.substring(4,6),16);
  // Perceived brightness
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 180 ? '#222' : '#fff';
}

const Ingredient = ({ ingredient, onAction, actionType }) => {
  const textColor = getContrastColor(ingredient.color);
  return (
    <li style={{
      backgroundColor: ingredient.color,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '1.25rem',
      color: textColor,
      minHeight: '48px',
      padding: '0 32px',
  margin: '0',
      borderRadius: '24px',
      width: '95%',
      boxSizing: 'border-box',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
    }}>
      <span style={{ flex: 1, textAlign: 'left', zIndex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{ingredient.name}</span>
      {actionType === 'add' && (
        <button
          onClick={() => onAction(ingredient)}
          style={{
            position: 'absolute',
            right: '16px',
            background: '#222',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            width: '28px',
            height: '28px',
            fontSize: '1rem',
            fontWeight: 'bold',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            cursor: 'pointer',
            zIndex: 2
          }}
        >
          +
        </button>
      )}
      {actionType === 'remove' && (
        <button
          onClick={onAction}
          style={{
            position: 'absolute',
            right: '16px',
            background: '#222',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            width: '28px',
            height: '28px',
            fontSize: '1rem',
            fontWeight: 'bold',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            cursor: 'pointer',
            zIndex: 2
          }}
        >
          X
        </button>
      )}
    </li>
  );
};

export default Ingredient;
