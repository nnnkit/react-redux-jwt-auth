export default function loading(state = false, action) {
  switch (action.type) {
    case 'TRUE':
      return true;
      break;
    case 'FALSE':
      return false;
      break;
    default:
      return state;
      break;
  }
}
