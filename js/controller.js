'use strict';

/**
 * Created by khory on 14/03/2016.
 */
var newTaskEl = document.getElementById('new-task');
var taskList = document.getElementById('task-list');
var newListTask = document.getElementById('name-list');

var inbox = new List('inbox');

function addTask(e) {
    var list = arguments.length <= 1 || arguments[1] === undefined ? inbox : arguments[1];

    e.preventDefault();
    if (e.which === 13) {
        var nTasks = list.tasks.length;
        var ultId = 1;
        if (nTasks == 0) {
            var newTask = new Task(this.value, ultId);
            list.addTask(newTask);
        } else {
            var posArr = list.tasks.length - 1;
            ultId = list.tasks[posArr].id + 1;
            var newTask = new Task(this.value, ultId);
            list.addTask(newTask);
        }
        printTask(this.value, ultId);
        this.value = "";
    }
}

function completeTask() {
    var list = arguments.length <= 0 || arguments[0] === undefined ? inbox : arguments[0];

    var listItems = taskList.children;

    var _loop = function _loop(i) {
        listItems[i].querySelector('input').addEventListener('change', function () {
            listItems[i].querySelector('input').classList.add('dnone');
            listItems[i].querySelector('p').classList.remove('taskcomplete');
            var nid = listItems[i].getAttribute('nid');
            for (var j = 0; j < list.tasks.length; j++) {
                if (list.tasks[j].id == nid) {
                    list.tasks[j].complete();
                }
            }
            if (listItems[i].querySelector('input').checked) {
                listItems[i].classList.add('complete');
            } else {
                listItems[i].classList.remove('complete');
            }
        });
    };

    for (var i = 0; i < listItems.length; i++) {
        _loop(i);
    }
}

function removeTask() {
    var list = arguments.length <= 0 || arguments[0] === undefined ? inbox : arguments[0];

    var listItems = taskList.children;

    var _loop2 = function _loop2(i) {
        listItems[i].querySelector('a').addEventListener('click', function (e) {
            e.preventDefault();

            var nid = listItems[i].getAttribute('nid');
            this.parentElement.remove();

            console.log(nid);
            for (var j = 0; j < list.tasks.length; j++) {
                if (list.tasks[j].id == nid) {
                    nid = list.tasks[j].id;
                    var ad = list.tasks[j];
                    list.removeTask(j);
                    console.log(ad);
                }
            }
        });
    };

    for (var i = 0; i < listItems.length; i++) {
        _loop2(i);
    }
}

function editTask() {
    var list = arguments.length <= 0 || arguments[0] === undefined ? inbox : arguments[0];

    var listItems = taskList.children;

    var _loop3 = function _loop3(i) {
        listItems[i].querySelector('span').addEventListener('click', function () {
            var nameTask = listItems[i].querySelector('span').textContent;
            console.log(nameTask);
        });

        listItems[i].querySelector('span').addEventListener('blur', function () {
            list.tasks[i].edit(listItems[i].querySelector('span').textContent);
            console.table(list.tasks);
        });
    };

    for (var i = 0; i < listItems.length; i++) {
        _loop3(i);
    }

    for (var _i = 0; _i < listItems.length; _i++) {
        listItems[_i].querySelector('a');
    }
}

newTaskEl.addEventListener('keyup', addTask);