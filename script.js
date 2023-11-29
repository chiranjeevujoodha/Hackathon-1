

function interested(button){
    // var btn = document.querySelector('#btn1')

    console.log(button.style.backgroundColor)
    if(button.style.backgroundColor == '' || button.style.backgroundColor == 'rgb(0, 86, 179)') {
        button.style.backgroundColor = 'green'
    } else {
        button.style.backgroundColor = '#0056b3'
    }


    // var flag = 0

    // if (flag == 0) {
    //     button.style.backgroundColor = 'green'
    //     flag = 1
    // } else {
    //     button.style.backgroundColor = '#0056b3'
    //     flag = 0
    // }
    
}

