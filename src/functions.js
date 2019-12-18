// eslint-disable-next-line import/prefer-default-export
export function convertColorToHex(color) {
  const colorName = color.toLowerCase();
  let hexColor = '';
  switch (colorName) {
    case 'red':
      hexColor = '#F5054F';
      break;
    case 'pink':
      hexColor = '#FC0FC0';
      break;
    case 'green':
      hexColor = '#0B6623';
      break;
    case 'black':
      hexColor = '#1B1E23';
      break;
    case 'gray':
      hexColor = '#393D42';
      break;
    default:
      hexColor = '#000';
      break;
  }
  return hexColor;
}
