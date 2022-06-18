
class TodoList {
    constructor () {
        this.todoModel = ['todo satu', 'todo dua', 'todo tiga'];
        this.todoForm = document.getElementById('todo-form');
        this.todoContainer = document.getElementById('todo-container');
        this.todoSubmit = document.getElementById('todo-submit');

        // register event handle
        this.todoSubmit.addEventListener('click', () => this.createTodo(this.todoForm[0].value));
    }
    createElement(value, index) {
        const element = document.createElement("li");
        element.className = 'list-group-item list-group-item-action';
        element.innerText = String(value).toUpperCase();
        element.setAttribute('data-index', index);
        this.todoContainer.appendChild(element);
        element.addEventListener('click', (event) => this.removeTodo(index, event.target));
    }
    createTodo(value) {
        this.todoModel.push(value);
        this.createElement(value, this.todoModel.length - 1);
    }
    /** @param {HTMLElement} currenNode */
    removeElement(currenNode) {
        this.todoContainer.removeChild(currenNode);
    }
    removeTodo(currentIndex, cureentdNode) {
        const model = this.todoModel;
        let selectedItem = this.todoModel[currentIndex];
        let indexOf = this.todoModel.indexOf(selectedItem);
        model.splice(indexOf, 1);
        this.removeElement(cureentdNode);
    }

    makeList() {
        this.todoModel.forEach((value, index) => {
            this.createElement(value, index);
        });
    }
}

const todoList = new TodoList();
todoList.makeList();