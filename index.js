// Mai Vue Xiong
// Grocery List Application


const mainDiv = document.getElementById("main");
const sliderPg = document.getElementById("sliderPg");
const displayItem = document.getElementById("displayItem");


function showAddItemSlide(){
    mainDiv.classList.add('slideMain');
    const changeMain = setTimeout(changeMainSlide, 2800);
    sliderPg.classList.remove('slideAddingPage');
}
function addGroceryItem(){

    const newItem = document.getElementById("newItem").value;


    if(newItem){
        const chkbox = document.createElement('input');
        let listItem = document.createElement('label');
        const breakListItems = document.createElement('br');

        chkbox.type = 'checkbox';
        chkbox.id = "itemChk";
        listItem.textContent = newItem;

        displayItem.appendChild(chkbox);
        displayItem.appendChild(listItem);
        displayItem.appendChild(breakListItems);

        alert(`${newItem} is added to your list!`);
        
        if(alert){
            document.getElementById("newItem").value = "";      // clears input box
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
