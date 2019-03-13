import createOneNoteMarkup from "./createOneNoteMarkup";
import notesArr from "./notesArr";

var board = document.getElementById('board');
console.log(board)
var dragNote;
var dragObj;
var deltaX;
var deltaY;

// функция благодая которой работает перетягивание
function getMouse(e){
    var mouseX = e.pageX;
    var mouseY = e.pageY;
    // запись координат в стили
    dragNote.style.left = (mouseX - deltaX)  + 'px';
    dragNote.style.top = (mouseY - deltaY) + 'px';
    // запись координат в свойства объекта
    dragObj.posX = mouseX - deltaX;
    dragObj.posY = mouseY - deltaY;
    //save
    localStorage.setItem('itemsArr', JSON.stringify(notesArr));
}

function updateMarkup(){
    board.innerHTML = '';
    notesArr.map(function(item,index){
        var newNote = createOneNoteMarkup(item, index);
        newNote.onmousedown = function(e){
            // добавить событие перетягивания 
            document.addEventListener('mousemove',getMouse);
            dragNote = newNote;
            dragObj = item;
            // высчитать позицию курсора в заметке
            deltaX = e.pageX - newNote.offsetLeft;
            deltaY = e.pageY - newNote.offsetTop;
        }
        newNote.onmouseup = function(){
            // убрать событие перетягивания
            document.removeEventListener('mousemove',getMouse);
        }

        board.appendChild(newNote);
    });
}

export default updateMarkup;