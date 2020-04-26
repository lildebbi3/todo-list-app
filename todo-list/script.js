var i = 1;
var idarr = [];

function add(i) {
  var textid = i;
  textid = "text" + textid;
  idarr[i] = textid;
  var data = document.getElementById("data").value;
  var todo = document.getElementById("todo");

  var note = document.createElement("label");
  note.setAttribute("id", textid);
  note.setAttribute("class", "container");
  todo.appendChild(note);

  var x = document.createElement("h2");
  x.setAttribute("id", textid);
  x.innerHTML = data;

  var check = document.createElement("input");
  check.setAttribute("id", textid);
  check.setAttribute("type", "checkbox");
  note.appendChild(check);

  var del = document.createElement("button");
  del.setAttribute("id", textid);
  del.setAttribute("class", "contente");
  del.innerHTML = "Delete";
  del.addEventListener("click", function () {
    var y = document.getElementById(textid);
    clear(textid);
    y.parentNode.removeChild(y);
  });
  note.appendChild(del);

  var spam = document.createElement("span");
  spam.setAttribute("id", textid);
  spam.setAttribute("class", "checkmark");
  note.appendChild(spam);

  note.appendChild(x);
}

function clearAll() {
  var length = idarr.length;
  for (var v = 1; v < length; v++) {
    var y = document.getElementById(idarr[v]);
    if (y != null) {
      y.parentNode.removeChild(y);
    }
  }
  idarr = [];
  i = 1;
}

function clear(id) {
  for (var x = 1; x < idarr.length; x++) {
    if (idarr[x] === id) {
      idarr.splice(x, 1);
    }
  }
}
