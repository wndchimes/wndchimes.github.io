const box = document.getElementById("todobox");
const list = document.getElementById("list");

let listArray = [];

function renderList() {
    list.replaceChildren();
    listArray.forEach((item, index) => {
        if (item !== "") {
            let listItem = document.createElement("li");
            listItem.textContent = item + "         ";
            list.appendChild(listItem);

            let removeBtn = document.createElement("button");
            removeBtn.textContent = "X";
            removeBtn.onclick = function () {
                listArray.splice(index, 1);
                renderList();
            };

            listItem.appendChild(removeBtn);
        }
    });
}

function submitForm() {
    event.preventDefault();
    listArray.push(box.value);
    box.value = "";

    renderList();
}