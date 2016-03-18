/**
 * Created by khory on 14/03/2016.
 */
'use strict';

function printTask(name, nid) {

    var taskComplete = document.createElement('p');
    taskComplete.classList.add('taskcomplete');
    taskComplete.textContent = 'Tarea Completada';

    var taskLi = document.createElement('li');
    taskLi.classList.add('task-item');
    taskLi.setAttribute('nid', nid);

    var taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';

    var taskEl = document.createElement('span');
    taskEl.setAttribute('contenteditable', '');
    taskEl.textContent = name;

    var taskRemove = document.createElement('a');
    taskRemove.textContent = 'eliminar';
    taskRemove.classList.add('linkremove');
    taskRemove.href = "";

    taskLi.appendChild(taskComplete);
    taskLi.appendChild(taskCheckbox);
    taskLi.appendChild(taskEl);
    taskLi.appendChild(taskRemove);

    taskList.appendChild(taskLi);

    editTask();
    completeTask();
    removeTask();
}

//# sourceMappingURL=view-compiled.js.map