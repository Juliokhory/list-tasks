/**
 * Created by khory on 14/03/2016.
 */
'use strict';

function printTask(name) {
    var taskLi = document.createElement('li');
    taskLi.classList.add('task__item');

    var taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';

    var taskEl = document.createElement('span');
    taskEl.textContent = name;

    var taskremove = document.createElement('a');
    taskremove.textContent = 'x';
    taskremove.href = "";

    taskLi.appendChild(taskCheckbox);
    taskLi.appendChild(taskEl);
    taskLi.appendChild(taskremove);

    taskList.appendChild(taskLi);
}

//# sourceMappingURL=view-compiled.js.map

//# sourceMappingURL=view-compiled-compiled.js.map