// Add Event listners when DOM is ready
document.addEventListener("DOMContentLoaded", function () {

    // // check for buttons exist
    // if (document.querySelectorAll('.button') !== null) {
    //     let buttons = document.querySelectorAll('.button');
    //     buttons.forEach(button => button.addEventListener('click', processForm))
    // }

    // optionally update when fields update
    // tbd
    document.getElementById('name').addEventListener('change', function (eventData) { //What does this mean
        let nameOutput = document.getElementById('nameOutput');
        // console.log(eventData);
        nameOutput.innerText = eventData.target.value; //Anissa: What does this line mean
    });

    document.getElementById('type').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('nameOutput');
        console.log(eventData);
        let info = document.getElementById('info');
        console.log(eventData);
        info.innerText = eventData.target.value;
        changeCert(eventData.target.value);
    });

    // process form Data
    document.getElementById("myForm").addEventListener("submit", function (eventData) {
        eventData.preventDefault(); //stop page reload when form is submitted
        console.log(eventData.target);
        var formData = new FormData(eventData.target);
        formData = Object.fromEntries(formData);

        //update certificate information when form is submitted:
        let nameOutput = document.getElementById('nameOutput');
        let info = document.getElementById('info');
        nameOutput.innerText = formData.name;
        info.innerText = formData.type;
        changeCert(formData.type)

    });
    // Log readiness to console
    console.log("Ready");

    // let info = document.getElementById('info');
    // info.classList.add('test');



    // certificate.classList.add('number1');

    function changeCert(value) {
        let certificate = document.getElementById('certificate');
        certificate.classList = ""; // clear classes on each function call
        switch (value) {
            case 'A':
                certificate.classList.add('number1');
                break;
            case 'B':
                certificate.classList.add('number2');
                break;
            case 'C':
                certificate.classList.add('number3');
                break;
            case 'D':
                certificate.classList.add('number4');
                break;
        }
    }
});

/* Additional things to be aware of */






function processForm(form) {

}