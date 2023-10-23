let btnSubmit = document.getElementById('sub');


let count = 0;
let int = document.getElementById('num');
btnSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    let addList = document.getElementById('addList');
    let value = document.getElementById('toDoItem').value;
    let input = document.getElementById('toDoItem');
    let allTasks = document.querySelectorAll('li')


    if (value === '') {
        document.getElementById('message').innerHTML = '<span class="wrong">Please Write a task before you submit!</span>';
    }
    else {
        document.getElementById('message').innerHTML = 'Add To Do Here';
        let list = document.createElement('li');
        list.innerHTML = value + '<button class="deleteBtn">X</button>';
        list.setAttribute('class', 'lists')

        if (input.value !== '') {
            input.value = '';
        }




        document.getElementById('addList').appendChild(list);

        let deleteItem = document.getElementsByClassName('deleteBtn');



        for (let i = 0; i < deleteItem.length; i++) {

            let lists = document.getElementsByClassName('lists');
            deleteItem[i].addEventListener('click', function () {

                console.log(deleteItem[i].innerHTML)
                for (let j = 0; j < lists.length; j++) {

                    if (i == j) {
                        lists[j].style.display = 'none';
                    }

                }

            })


        }




    }



});



let removeBtn = document.getElementById('remove');

removeBtn.addEventListener('click', function (e) {

    document.querySelector('li').style.display = 'none';
})


