/**
 * Created by khory on 14/03/2016.
 */
function printTask(name,nid){

    var taskLi = document.createElement('li');
    taskLi.classList.add('task-item');
    taskLi.setAttribute('nid',nid)

    var taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.addEventListener('change',completeTask)

    var taskEl = document.createElement('span');
    taskEl.setAttribute('contenteditable','')
    taskEl.textContent = name;

    var taskRemove = document.createElement('a');
    taskRemove.textContent = 'eliminar';
    taskRemove.classList.add('linkremove');
    taskRemove.addEventListener('click',removeTask);
    taskRemove.href = "";

    taskLi.appendChild(taskCheckbox);
    taskLi.appendChild(taskEl);
    taskLi.appendChild(taskRemove);

    taskList.appendChild(taskLi);

    editTask();
    //removeTask();
    //completeTask();
}