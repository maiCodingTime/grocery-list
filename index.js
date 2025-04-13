// Mai Vue Xiong
// Grocery List Application


const mainDiv = document.getElementById("main");
const slideAdd = document.getElementById("slideAdd");
const slideDelete = document.getElementById("slideDelete");
const displayItem = document.getElementById("displayItem");
let listArray = [];


function showAddItemSlide(){
    mainDiv.classList.add('slideMain');
    slideAdd.classList.remove('slidePage');
    const changeMain = setTimeout(changeToAddSlide, 2800);
}
function showDeleteItemSlide(){
    mainDiv.classList.add('slideMain');
    slideDelete.classList.remove('slidePage');
    const changeToMain = setTimeout(changeToDeleteSlide, 2800);
}
function backToList(){
    slideAdd.classList.add('slidePage');
    slideDelete.classList.add('slidePage');
    mainDiv.classList.remove('slideMain');
    const changePage = setTimeout(changeToMainSlide, 2800);
}
function addGroceryItem(){

    const newItem = document.getElementById("newItem").value;

    if(newItem){
        
        if(!listArray.includes(newItem)){
            const groceryList = document.createElement('ul');
            const chkbox = document.createElement('input');
            const listItem = document.createElement('li');

            chkbox.type = 'checkbox';
            chkbox.id = "itemChk";
            listItem.style.listStyleType = "none";
            listItem.textContent = newItem;
            

            listItem.appendChild(chkbox);
            listItem.prepend(chkbox);               // places checkbox before li
            displayItem.appendChild(listItem);
            displayItem.append(groceryList);

            listArray.push(newItem);
            console.log(listArray);

            alert(`${newItem} is added to the list!`);
        
            if(alert){
                document.getElementById("newItem").value = ""; 
            }
        }
        else{
            alert(`${newItem} already exists in the list!`);
            document.getElementById("newItem").value = ""; 
        }
    }
}
function changeToAddSlide(){
    mainDiv.style.display = "none";
    slideDelete.style.display = "none";
    slideAdd.style.display = "block";
}
function changeToMainSlide(){
    mainDiv.style.display = "block";
    slideAdd.style.display = "none";
    slideDelete.style.display = "none";
}
function changeToDeleteSlide(){
    mainDiv.style.display = "none";
    slideAdd.style.display = "none";
    slideDelete.style.display = "block";
}