/**
 * Created by khory on 14/03/2016.
 */
"use strict";

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Task = (function () {
    function Task(name) {
        _classCallCheck(this, Task);

        this.name = name;
        this.isComplete = false;
    }

    _createClass(Task, [{
        key: "editar",
        value: function editar(newName) {
            this.name = newName;
        }
    }, {
        key: "comlete",
        value: function comlete() {
            this.isComplete = true;
        }
    }, {
        key: "remove",
        value: function remove() {
            //eliminar la tarea
        }
    }]);

    return Task;
})();

var List = (function () {
    function List(name) {
        _classCallCheck(this, List);

        this.name = name;
        this.tasks = [];
    }

    //ddddddsssdxdddss

    _createClass(List, [{
        key: "addTask",
        value: function addTask(task) {
            this.tasks.push(task);
        }
    }]);

    return List;
})();

//# sourceMappingURL=model-compiled.js.map

//# sourceMappingURL=model-compiled-compiled.js.map