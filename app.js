function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();

  const id = ev.dataTransfer.getData("text");
  const newObject = document.getElementById(id).cloneNode(true);
  newObject.id = "";

  if(ev.target.hasChildNodes()){
  	const child = ev.target.children[0];
  	ev.target.removeChild(child);
  }

  ev.target.appendChild(newObject);
}
