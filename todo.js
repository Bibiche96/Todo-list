

let button = document.querySelector(".button");
let taskinput = document.getElementById("input");
let tasktext = "";
let ul = document.querySelector("#tasklist");
let editButton;
let label;
let li;
let LIST = [];
let i = 0;
LIST = [{}, {}, {}, ...];
//ajout des taches
button.addEventListener("click", function (event) {
    li = document.createElement("li");
    let chekbox = document.createElement("input");
    chekbox.setAttribute("type", "checkbox");
    let label = document.createElement("label");
    editButton = document.createElement("input");
    editButton.setAttribute("value", "edit");
    editButton.setAttribute("type", "button");
    let deleteButton = document.createElement("input");
    deleteButton.setAttribute("value", "delete");
    deleteButton.setAttribute("type", "button");
    label.innerHTML = taskinput.value;
    taskinput.value = "";
    li.setAttribute('style', 'list-style-type:none')

    label.appendChild(chekbox);
    li.appendChild(label);
    label.appendChild(editButton);
    label.appendChild(deleteButton);

    ul.appendChild(li);

    //pourque le boutton edit marche
    editButton.addEventListener('click', function () {
        let valuelabel = label.innerText;
        label.innerHTML = "";
        let inputedit = document.createElement("input")
        label.appendChild(inputedit)
        inputedit.value = valuelabel
        inputedit.focus();
        inputedit.addEventListener('blur', function () {
            label.innerHTML = inputedit.value
        })
    })
    //suppression des taches
    deleteButton.addEventListener('click', function () {
        label.innerHTML = ""
    })
})




