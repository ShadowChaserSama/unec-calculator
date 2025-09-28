let display = document.getElementById('display')

let buttons = document.querySelectorAll('.buttons button')

let iserror = false
let issymbol = false

function PError(value){
    display.innerHTML = `<span style='color: red; font-size: 17px;'>${value}</span>`
    iserror = true
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerText
        if (!isNaN(value) || value == '/' || value == '+' || value == '-' || value == '*' || value == '.'){
            if (display.innerHTML.startsWith('0') || iserror) {
                if (value == '/' || value == '+' || value == '-' || value == '*' || value == '.'){
                    PError('Program can not starts with symbols!')
                } else {
                    display.innerHTML = value
                    iserror = false
                }
            } else {
                if (value == '/' || value == '+' || value == '-' || value == '*' || value == '.'){
                    if (!isNaN(display.innerHTML[display.innerHTML.length - 1])){
                        display.innerHTML += value
                    }
                } else if (!isNaN(value)){
                        display.innerHTML += value
                        issymbol = false
                } 
            }
        } else if (value == 'C'){
            display.innerHTML = 0
        } else if (value = '='){
            display.innerHTML = eval(display.innerText)
        }
    })
})
