const inputText = document.querySelector('#text');
const addButton = document.querySelector('.add-button');
const list = document.querySelector('.container ul');


// add todo via plus button after typing down task input
addButton.addEventListener('click', (e)=>{
    if(inputText.value != ""){
        e.preventDefault();

        //creates li element that contains task input
        const myLi = document.createElement('li');
        myLi.className = "task";
        myLi.innerHTML = inputText.value;
        list.appendChild(myLi);

        //creates input element in the form of a checkbox
        const myInput = document.createElement('input');
        myInput.type = "checkbox";
        myInput.className = "completed"
        myLi.appendChild(myInput);

        //creates span element that's styled as a delete button
        const mySpan = document.createElement('span');
        mySpan.innerHTML = 'X';
        myLi.appendChild(mySpan);
    }

    //assigned function of delete button to close task
    const close = document.querySelectorAll('span');
    for(let i=0; i<close.length; i++){
        close[i].addEventListener('click', ()=>{
            close[i].parentElement.style.opacity = 0;
            setTimeout(() =>{
                close[i].parentElement.style.display = "none";
                close[i].parentElement.remove();
            },500);
            
        })
    }
    inputText.value = "";
})