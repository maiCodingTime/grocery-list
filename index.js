// Mai Vue Xiong
// Grocery List Application


const mainDiv = document.getElementById("main");
const sliderPg = document.getElementById("sliderPg");
const displayItem = document.getElementById("displayItem");
let listArray = [];


function showAddItemSlide(){
    mainDiv.classList.add('slideMain');
    const changeMain = setTimeout(changeMainSlide, 2800);
    sliderPg.classList.remove('slideAddingPage');
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
function backToList(){
    sliderPg.classList.add('slideAddingPage');
    mainDiv.classList.remove('slideMain');
    const changeAddPg = setTimeout(changeSliderPg, 2800);
}
function changeMainSlide(){
    mainDiv.style.display = "none";
    sliderPg.style.display = "block";
}
function changeSliderPg(){
    mainDiv.style.display = "block";
    sliderPg.style.display = "none";
}
