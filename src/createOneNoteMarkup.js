import updateMarkup from "./updateMarkup";
import notesArr from "./notesArr";

// создание разметки для одного элемента
function createOneNoteMarkup(item, index){
    
    var tempNote = document.createElement('div');
    tempNote.className = 'note';
    tempNote.style.left = item.posX + 'px';
    tempNote.style.top = item.posY + 'px';

    var deleteBtn = document.createElement('i');
    deleteBtn.className ="fas fa-times-circle";
    deleteBtn.classList.add('delete');
    tempNote.appendChild(deleteBtn);
    deleteBtn.onclick = function(){
        notesArr.splice(index,1);
        updateMarkup();
    }

    var noteText = document.createElement('textarea');
    noteText.style.height = '0px';
    noteText.style.display = 'block';
    noteText.style.width = '0px';
    tempNote.appendChild(noteText);
    noteText.value = item.text;

    var addButton = document.createElement('button');
    addButton.textContent = 'Add';
    addButton.addEventListener('click', function (event) {
        item.text = noteText.value;
        noteText.style.height = '0px';
        noteText.style.width = '0px';
        updateMarkup();
        localStorage.setItem('itemsArr', JSON.stringify(notesArr));
    });

    var span = document.createElement("span");
    span.textContent = item.text;
    tempNote.appendChild(span)
    
    tempNote.addEventListener('dblclick', function(event){
        
        noteText.style.height = '70%';
        noteText.style.width = '85%';
        noteText.style.margin = '10px auto 0';
        tempNote.appendChild(addButton);
        span.textContent = '';
    });



    return tempNote;
}

export default createOneNoteMarkup;