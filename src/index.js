import updateMarkup from "./updateMarkup";
import notesArr from "./notesArr";


document.addEventListener('DOMContentLoaded',function(){
    var new_note_btn = document.getElementById('newnote');
    
    // конструктор
    function Note(){
        this.posX = 15;
        this.posY = 15;
        this.isOpen = false;
        this.text = '';
    }

    new_note_btn.onclick = function(e){
        notesArr.push(new Note());
        updateMarkup();
        //save
        localStorage.setItem('itemsArr', JSON.stringify(notesArr));
    }

    updateMarkup();



   // var user = JSON.parse(localStorage.getItem('user'));
    
    });