/**
 * Devuelve el color del ícono del Status según su estado.
 * @param {object} props - Propiedades del componente.
 * @returns {string} Token de color correspondiente.
 */
export const getStatusIconColor = (props) => { 
  if (props.disabled) {
    return "black.disabled";
  }

  if (props.invert) {
    return `${props.color}.main`;
  }

  return "white.main";
};

/**
 * Devuelve el color del texto del Status según su estado.
 * @param {object} props - Propiedades del componente.
 * @returns {string} Token de color correspondiente.
 */
export const getTextColor = (props) => {
  if (props.disabled) {
    return "black.disabled";
  }

  return "black.main"; 
};