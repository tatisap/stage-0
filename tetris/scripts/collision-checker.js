import { wall } from './global.js';

export function checkCollision(shape, direction) {
  let positions = shape.getCurrentPositions();
  switch (direction) {
    case 'down': positions.forEach(pos => pos.y += 1);
      break;
    case 'right': positions.forEach(pos => pos.x +=1);
      break;
    case 'left': positions.forEach(pos => pos.x -= 1);
      break;
  }
  return (positions.some(pos => pos.x > wall.width - 1)) ? true :
    (positions.some(pos => pos.x < 0)) ? true :
    (positions.some(pos => pos.y > wall.height - 1)) ? true : 
    !positions.every(pos => (pos.y < 0) ? true : wall.getBrickByCoords(pos.x, pos.y) === '[]');
}