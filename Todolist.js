let form=document.getElementById("addForm")
let itemList=document.getElementById("items")
let filter=document.getElementById("filter")

//console.log(filter)


form.addEventListener("submit",addItem)

itemList.addEventListener("click",removeItem)

filter.addEventListener("keyup",filterItem)


function filterItem(e){
   // console.log("Test",e.target.value)
    let text=e.target.value
    let items=itemList.getElementsByTagName("li")
    console.log(typeof items)
    let itemsArray=Array.from(items)
    console.log(itemsArray)
    itemsArray.forEach(function(x){
        let itemName=x.firstChild.textContent
       // console.log(itemName)
        let smallText=itemName.toLowerCase();
        console.log(smallText.indexOf(text))
        if(smallText.indexOf(text)!= -1){
            x.style.display="block"
           // console.log(itemName)
        }else
           x.style.display="none"
    })    
}


function removeItem(y){
    if(y.target.classList.contains("delete"))
    {
       if(confirm("Are You Sure Want To Delete")){
        y.target.parentElement.remove()
       } 
    }
}

function addItem(x)
{
    x.preventDefault()
   let newItem = document.getElementById("Item").value
   let li=document.createElement("li")
   li.appendChild(document.createTextNode(newItem))
  // console.log(li)
   itemList.appendChild(li)
   li.className="list-group-item"
   let btn=document.createElement("Button")
   btn.className="btn btn-danger btn-sm float-right delete"
   btn.appendChild(document.createTextNode("X"))
   li.appendChild(btn)
   document.getElementById("Item").value=""
   //console.log(btn)
}