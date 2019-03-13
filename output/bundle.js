/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/createOneNoteMarkup.js":
/*!************************************!*\
  !*** ./src/createOneNoteMarkup.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _updateMarkup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateMarkup */ "./src/updateMarkup.js");
/* harmony import */ var _notesArr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notesArr */ "./src/notesArr.js");



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
        _notesArr__WEBPACK_IMPORTED_MODULE_1__["default"].splice(index,1);
        Object(_updateMarkup__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
        Object(_updateMarkup__WEBPACK_IMPORTED_MODULE_0__["default"])();
        localStorage.setItem('itemsArr', JSON.stringify(_notesArr__WEBPACK_IMPORTED_MODULE_1__["default"]));
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

/* harmony default export */ __webpack_exports__["default"] = (createOneNoteMarkup);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _updateMarkup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateMarkup */ "./src/updateMarkup.js");
/* harmony import */ var _notesArr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notesArr */ "./src/notesArr.js");




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
        _notesArr__WEBPACK_IMPORTED_MODULE_1__["default"].push(new Note());
        Object(_updateMarkup__WEBPACK_IMPORTED_MODULE_0__["default"])();
        //save
        localStorage.setItem('itemsArr', JSON.stringify(_notesArr__WEBPACK_IMPORTED_MODULE_1__["default"]));
    }

    Object(_updateMarkup__WEBPACK_IMPORTED_MODULE_0__["default"])();



   // var user = JSON.parse(localStorage.getItem('user'));
    
    });

/***/ }),

/***/ "./src/notesArr.js":
/*!*************************!*\
  !*** ./src/notesArr.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (JSON.parse(localStorage.getItem('itemsArr')) || []);

/***/ }),

/***/ "./src/updateMarkup.js":
/*!*****************************!*\
  !*** ./src/updateMarkup.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createOneNoteMarkup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createOneNoteMarkup */ "./src/createOneNoteMarkup.js");
/* harmony import */ var _notesArr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notesArr */ "./src/notesArr.js");



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
    localStorage.setItem('itemsArr', JSON.stringify(_notesArr__WEBPACK_IMPORTED_MODULE_1__["default"]));
}

function updateMarkup(){
    board.innerHTML = '';
    _notesArr__WEBPACK_IMPORTED_MODULE_1__["default"].map(function(item,index){
        var newNote = Object(_createOneNoteMarkup__WEBPACK_IMPORTED_MODULE_0__["default"])(item, index);
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

/* harmony default export */ __webpack_exports__["default"] = (updateMarkup);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map