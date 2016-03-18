/**
 * Created by khory on 14/03/2016.
 */
class Task {
    constructor(name,id){
        this.name = name;
        this.isComplete = false;
        this.id = id;
    }

    edit(newName){
        this.name = newName;
    }

    complete(){
        if(this.isComplete == true){
            this.isComplete=false;
        }else{
            this.isComplete=true;
        }
    }
}

class List{
    constructor(name){
        this.name = name;
        this.tasks = [];
    }

    addTask(task){
        this.tasks.push(task);
    }

    removeTask(i){
        this.tasks.splice(i,1);
    }

    showTask(){
        console.table(this.tasks);
    }


}


