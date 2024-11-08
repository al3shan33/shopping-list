const ul = document.querySelector("ul");
const listItems = document.querySelectorAll("li");

const addItemButton = document.getElementById("enter");
const addItemInput = document.getElementById("userinput");

function createDeleteButton(item) {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.style.marginLeft = "10px";
  item.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    ul.removeChild(item);
  });
}

function addItemList() {
  const li = document.createElement("li");
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = "";
    createDeleteButton(li);
}

listItems.forEach((item) => {
  item.style.cursor = "pointer";
  item.style.marginBottom = "8px";
  createDeleteButton(item);

  item.addEventListener("click", () => {
    item.classList.toggle("done");
  });
});

addItemButton.addEventListener("click", () => {
  if (addItemInput.value.length > 0) {
    addItemList();
  }
});

addItemInput.addEventListener("keydown", (event) => {
  if (addItemInput.value.length > 0 && event.key === "Enter") {
    addItemList();
  }
});
