

var flag = 0

function interested(button){
    // var btn = document.querySelector('#btn1')


    if (flag == 0){
        button.style.backgroundColor = 'green'
        flag = 1
    } else {
        button.style.backgroundColor = '#0056b3'
        flag = 0
    }
    
}

