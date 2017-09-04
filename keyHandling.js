function handleKeyPress(e){
  e = e || window.event;
  if (e.key == 'ArrowUp'){
    batLeft.moveUp();
  } else if (e.key == 'ArrowDown') {
    batLeft.moveDown();
  }
};
