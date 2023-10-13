const text = ['FullStack Developer', 'backend Developer', 'Frontend Developer']

let count = 0
let index = 0

function typewriter() {
    if(count == text.length) {
        count = 0
    }
    let currentText = text[count];
    let letter = currentText.slice(0 , ++index);

    document.querySelector('.type').innerHTML = letter

    if(currentText.length === letter.length) {
        count++
        index=0
    }
    setTimeout(typewriter,200)
}

typewriter()


