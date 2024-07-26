const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        if (e.target.id == 'red') {
            body.style.backgroundColor = 'red';
        }
        else if (e.target.id == 'green') {
            body.style.backgroundColor = 'green';
        }
        else if (e.target.id == 'blue') {
            body.style.backgroundColor = 'blue';
        }
        else
            body.style.backgroundColor = 'yellow';

    })
});