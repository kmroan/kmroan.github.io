const container = document.querySelector('#container');

const itemBox = document.querySelector("#item");
const btn = document.querySelector("#btn");
const list = document.querySelector("ul")

btn.addEventListener('click', () => {
    const newListItem = document.createElement('li');
    const newItem = document.createElement('span');
    const removeBtn = document.createElement('button');

    newItem.textContent = itemBox.value;
    removeBtn.textContent = "Delete"
    removeBtn.addEventListener('click', () => {
        list.removeChild(newListItem);
    })
    newListItem.appendChild(newItem);
    newListItem.appendChild(removeBtn);
    list.appendChild(newListItem);

    itemBox.value = "";
    itemBox.focus();
  });
/*
const redP = document.createElement('p');
redP.style.color = "red";
redP.textContent = "some red text.";
container.appendChild(redP);


const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    append.appendChild(text);
});*/
