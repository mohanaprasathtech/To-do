const addbtn = document.querySelector('.addbutton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');

class items{
    constructor(itemName){
        this.createDiv(itemName);
    }

    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('input-items');
        input.type = "text";

        let itembx = document.createElement('div');
        itembx.classList.add('items');

        let editbtn = document.createElement('button');
        editbtn.innerHTML = "EDIT";
        editbtn.classList.add('editbutton');

        let delbtn = document.createElement('button');
        delbtn.innerHTML = "DELETE";
        delbtn.classList.add('removebutton');

        container.appendChild(itembx);

        itembx.appendChild(input);
        itembx.appendChild(editbtn);
        itembx.appendChild(delbtn);

        editbtn.addEventListener('click', () => this.edit(input));
        
        delbtn.addEventListener('click', () => this.delete(itembx));
    }
    edit(input){
        input.disabled = !input.disabled;
    }
    delete(items){
        container.removeChild(items);
    }
}

function check(){
    if(input.value != ""){
        new items(input.value);
        input.value="";
    }
}
addbtn.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if(e.which == 13){
        check();
    }
})