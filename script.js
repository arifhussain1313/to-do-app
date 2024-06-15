const item = document.querySelector("#item");
const totdobox = document.querySelector("#to-do-box");
item.addEventListener ("keyup", function(event)  {
    if(event.key == "Enter"){
        addToDo(this.value)
        this.value = ""
    };
}
)
const addToDo = () => {
    const listitem = document.createElement("li");
    listitem.innerHTML = `
    ${item}`;
   
    listitem.addEventListener("click", function(){
        this.classList.toggle("done");
    })
    listitem.querySelector("i").addEventListener ("click", function(){
        listitem.remove ()
    })
    totdobox.appendChild(listitem);
}