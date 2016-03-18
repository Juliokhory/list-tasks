'use strict';

/**
 * Created by khory on 14/03/2016.
 */
function printTask(name, nid) {

    var taskLi = document.createElement('li');
    taskLi.setAttribute('nid', nid);

    var taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.addEventListener('change', completeTask);

    var taskEl = document.createElement('span');
    taskEl.classList.add('name-task');
    taskEl.setAttribute('contenteditable', '');
    taskEl.textContent = name;
    taskEl.addEventListener('blur', editTask);

    var taskRemove = document.createElement('a');
    taskRemove.textContent = 'X';
    taskRemove.classList.add('linkremove');
    taskRemove.addEventListener('click', removeTask);
    taskRemove.href = "";

    taskLi.appendChild(taskCheckbox);
    taskLi.appendChild(taskEl);
    taskLi.appendChild(taskRemove);

    taskList.appendChild(taskLi);
}

//# sourceMappingURL=view-compiled.js.map