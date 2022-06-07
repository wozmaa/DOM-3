const prependName = () => {
  const h1 = document.createElement("h1");
  h1.textContent = "Работа с DOM";
  document.body.prepend(h1);
};

const prependLink = () => {
  const a = document.createElement("a");
  a.href = "https://ru.wikipedia.org/wiki/Document_Object_Model";
  a.textContent = "DOM";
  const main = document.getElementById("main");
  main.append(a);
};

const colorChange = (color) => {
  document.body.style.backgroundColor = color;
};

const postList = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  const list = document.getElementById("list");
  list.append(li);
};

const deleteCopy = (id) => {
  const element = document.getElementById(id);
  element.remove();
};
