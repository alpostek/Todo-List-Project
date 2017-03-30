/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener("DOMContentLoaded", function () {
  //definiowanie guzikow
  var addTask = document.getElementById("add");
  // var markTask = document.getElementById("complete");
  var delCmplTask = document.getElementById("delete");

  //definiowanie kolejnych list
  var workList = document.getElementById("worklist");
  var eduList = document.getElementById("edulist");
  var exerciseList = document.getElementById("exerciselist");
  var householdList = document.getElementById("householdlist");
  var otherList = document.getElementById("otherlist");
  //zdefiniowanie selecta z kategoriami
  var selectCategory = document.getElementById("categories");
  var category = document.getElementById("categories").value;

  addTask.addEventListener("click", function (event) {
    //zdefiniowanie tresci zadania
    var taskText = document.getElementById("taskcontent").value;
    //tworzymy guziki complete i delete
    var completeTaskBtn = document.createElement("button");
    completeTaskBtn.innerText = "Complete";
    completeTaskBtn.className = "btn btn-success btnStyle";
    var deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.innerText = "Delete";
    deleteTaskBtn.className = "btn btn-danger btnStyle";

    //dodajemy im moce
    completeTaskBtn.addEventListener("click", function () {
      this.parentElement.classList.toggle("done");
    });
    deleteTaskBtn.addEventListener("click", function () {
      this.parentElement.parentNode.removeChild(this.parentElement);
    });

    if (taskText.length > 0) {
      //utworzenie li
      var taskToAdd = document.createElement("li");
      taskToAdd.innerText = taskText;
      var listToAdd;
      //wybranie odpowiedniej listy gdzie ma byc dopisane zadanie - po indexie w seleccie
      switch (categories.selectedIndex) {
        case 0:
          alert("Choose category");
          break;
        case 1:
          listToAdd = workList;
          break;
        case 2:
          listToAdd = eduList;
          break;
        case 3:
          listToAdd = exerciseList;
          break;
        case 4:
          listToAdd = householdList;
          break;
        case 5:
          listToAdd = otherList;
      }

      taskToAdd.appendChild(completeTaskBtn);
      taskToAdd.appendChild(deleteTaskBtn);
      listToAdd.appendChild(taskToAdd);
    } else if (taskText.length <= 0) {
      alert("Please describe your task");
    }

    //guzik usun wszystkie zakonczone - jesli ma klase "done", jest usuwane
    delCmplTask.addEventListener("click", function () {
      var allTasks = document.getElementsByTagName("li");
      for (var i = 0; i < allTasks.length; i++) {
        if (allTasks[i].className === "done") {
          allTasks[i].parentElement.removeChild(allTasks[i]);
        }
      }
    });
  });
});
//koniec DOMContentLoaded

/***/ })
/******/ ]);