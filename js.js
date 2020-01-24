'use strict';

document.addEventListener("DOMContentLoaded", () => {

    // First

    let app = document.getElementById('app');

    let bCreate = document.getElementById('create'),
        bRead = document.getElementById('read'),
        bUpdate = document.getElementById('update'),
        bDelete = document.getElementById('delete');

    bCreate.addEventListener('click', createTitle);
    bRead.addEventListener('click', read);
    bUpdate.addEventListener('click', update);
    bDelete.addEventListener('click', deleteTitle);

    function createTitle() {
        let title = prompt('Enter title');

        if (title) {
            let el = document.createElement('h1');
            el.id = 'title'
            el.innerHTML = title;
            app.append(el);
        }
    }

    function read() {
        console.log(app.children.title.innerHTML);
    }

    function update() {
        let newTitle = prompt('Enter new rirle', app.children.title.innerHTML);
        app.children.title.innerHTML = newTitle;

    }

    function  deleteTitle () {
        let confirmM = confirm('Are you sure?');
        if (confirmM) {
            app.removeChild(title)
        }
    }

    // Second

    let list = document.getElementById('items-list');
    console.log(list.firstChild.nextSibling);
    console.log(list.firstChild.parentNode);

})