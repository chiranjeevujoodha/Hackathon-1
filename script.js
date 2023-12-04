

function interested(button){
    // var btn = document.querySelector('#btn1')


    console.log(button.style.backgroundColor);
    if(button.style.backgroundColor == '' || button.style.backgroundColor == 'rgb(0, 86, 179)') {

        button.style.backgroundColor = 'green';
    } else {
       
        button.style.backgroundColor = '#0056b3';
        

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

    // document.getElementById('campaignForm').reset();

    alert('New campaign added')
}

var myArray = []

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


function contact(){
    var fname = document.getElementById('fname').value
    var lname = document.getElementById('lname').value
    var email = document.getElementById('email').value
    var msg = document.getElementById('message').value

    if (!validateEmail(email)) {
        alert('Please enter a valid email.');
        
    } else {
        var contactData = {
            fname: fname,
            lname: lname,
            email: email,
            msg: msg
    
        };
    
        contactArray.push(contactData);
    
        console.log(contactArray);

        // document.getElementById('contactform').reset();

        alert('Form submitted successfully.');
    }



}

var contactArray = []