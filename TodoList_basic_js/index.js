const listName = document.getElementById("listName");
const dateArea = document.getElementById("dateArea");
const addBtn = document.getElementById("addBtn");

const todoListArea = document.querySelector(".todoListArea");
const list_title = document.querySelector(".list_title");

let store = [];

list_title.style.display = "none";
todoListArea.style.display = "none";

addBtn.addEventListener("click", () => {
    const name = listName.value.trim();
    const date = dateArea.value;

    if (!name || !date) {
        alert("Fill all fields");
        return;
    }

    store.push({ name, date });
    listName.value = "";
    dateArea.value = "";

    displayData();
});

function displayData() {

    todoListArea.innerHTML = "";

    store.forEach((item, index) => {
        const box = document.createElement("div");
        box.className = "singleData";

        box.innerHTML = `
            <p>${item.name}</p>
            <p>${item.date}</p>
            <button class="deleteBtn">Delete</button>
        `;

        box.querySelector(".deleteBtn").addEventListener("click", () => {
            deleteItem(index);
        });

        todoListArea.appendChild(box);
    });

    if (store.length > 0) {
        list_title.style.display = "block";
        todoListArea.style.display = "grid";
    } else {
        list_title.style.display = "none";
        todoListArea.style.display = "none";
    }
}

// DELETE ITEM
function deleteItem(index) {
    store.splice(index, 1);
    displayData();
}
