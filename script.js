const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write SOMETHING!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '<b>\u00d7</b>';
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    let deleteButton = e.target.closest("li span");

    if(deleteButton){
        let li = deleteButton.parentElement;
        
        li.classList.add("fall");
        setTimeout(() => {
            li.remove();
            saveData();
        }, 300);
        saveData();
        return;
    }

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    S
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

    document.querySelectorAll("ul li span").forEach(span => {
        if (!span.querySelector("b")) {
            span.innerHTML = "<b>\u00d7</b>";
        }
    });
}
showTask();