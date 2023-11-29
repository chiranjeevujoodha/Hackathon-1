

function interested(button){
    // var btn = document.querySelector('#btn1')

    console.log(button.style.backgroundColor)
    if(button.style.backgroundColor == '' || button.style.backgroundColor == 'rgb(0, 86, 179)') {
        button.style.backgroundColor = 'green'
    } else {
        button.style.backgroundColor = '#0056b3'
    }


    
}


function submitForm(){
    var name = document.getElementById('name').value
    var organisor = document.getElementById('organisor').value
    var location = document.getElementById('location').value
    var date = document.getElementById('date').value
    var description = document.getElementById('description').value
    
    var formData = {
        name: name,
        organisor: organisor,
        location: location,
        date: date,
        description: description
    };
    myArray.push(formData);

    console.log(myArray);

    document.getElementById('campaignForm').reset();
}

var myArray = []
