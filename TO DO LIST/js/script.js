const item=document.querySelector("#item");
const toDoBox = document.querySelector("#todolist-box");


const togglebutton = document.getElementById("toggle");
const tick = document.getElementById("tick");

item.addEventListener(
    "keyup",
    function(event){
        if(event.key=="Enter"){
            addToDo(this.value)
            this.value=""
        }
    }

)

const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML=`
    ${item}
    <i class="fa-sharp fa-solid fa-delete-left"></i>
    
    `;
  
    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done")

        }

    )

     listItem.querySelector("i").addEventListener(
        "click",

        function(){
            listItem.remove()
        }
     )
 
     toDoBox.appendChild(listItem)
    

}

