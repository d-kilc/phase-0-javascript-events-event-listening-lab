const input = document.getElementById('input')

function clickAlert() { alert('i was clicked!') }

function addingEventListener() {
    input.addEventListener('click',clickAlert)
}
