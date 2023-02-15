const inputText = document.querySelector('#text');
const addButton = document.querySelector('.add-button');
const list = document.querySelector('.container ul');

addButton.addEventListener('click', (e)=>{
    if(inputText.value != ""){
        e.preventDefault();

        //create li
        const myLi = document.createElement('li');
        myLi.innerHTML = inputText.value;
        list.appendChild(myLi);

        //create span
        const mySpan = document.createElement('span');
        mySpan.innerHTML = 'X';
        myLi.appendChild(mySpan);
    }
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