const successStyle = {'border-bottom': '1px solid var(--secondary-color)'};
const errorStyle = {'border-bottom': '1px solid var(--danger)'};

var nameEl, nameErrorEl, nameTickEl,
emailEl, emailErrorEl, emailTickEl,
dobEl, dobErrorEl, dobTickEl,
contactEl, contactErrorEl, contactEl,
address1El, address1ErrorEl, address1TickEl,
address2El, address2ErrorEl, address2TickEl,
pincodeEl, pincodeErrorEl, pincodeTickEl,
newPwdEl, newPwdErrorEl, newPwdTickEl,
confirmPwdEl, confirmPwdErrorEl, confirmPwdTickEl,
showPwdBtnEl,
agreementEl, agreementErrorEl,
registerBtnEl,
signupFormEl;

$(()=>{
    nameEl = $('#name');
    nameErrorEl = $('#name-error');
    nameTickEl = $('#name-tick');
    emailEl = $('#email');
    emailErrorEl = $('#email-error');
    emailTickEl = $('#email-tick');
    dobEl = $('#dob');
    /* dobEl = $('#');
    dobErrorEl = $('#');
    dobTickEl = $('#');
    contactEl = $('#');
    contactErrorEl = $('#');
    contactTickEl = $('#');
    address1El = $('#');
    address1ErrorEl = $('#');
    address1TickEl = $('#');
    address2El = $('#');
    address2ErrorEl = $('#');
    address2TickEl = $('#');
    pincodeEl = $('#');
    pincodeErrorEl = $('#');
    pincodeTickEl = $('#');
    newPwdEl = $('#');
    newPwdErrorEl = $('#');
    newPwdTickEl = $('#');
    confirmPwdEl = $('#');
    confirmPwdErrorEl = $('#');
    confirmPwdTickEl = $('#');
    showPwdBtnEl = $('#');
    agreementEl = $('#');
    agreementErrorEl = $('#');
    registerBtnEl = $('#');
    signupFormEl = $('#'); */

    nameEl.blur(()=>{validateName()});
    dobEl.blur(()=>{console.log(dobEl.val());});
});

/*
    Seperated the actual validation logic and styling logic
*/

function validateName(){
    let name = nameEl.val();
    nameErrorEl.html("");
    let result = isNameValid(name);
    if(result.isValid){
        nameEl.css(successStyle);
        nameTickEl.prop('hidden', false);
        return true;
    }
    else{
        nameTickEl.prop('hidden', false);
        nameErrorEl.html(result.error);
        nameEl.css(errorStyle);
        return false;
    }
}

function validateEmail(){
    let email = emailEl.val();
    emailErrorEl.html("");
    let result = "";
    if(result.isValid){
        emailEl.css(successStyle);
        emailTickEl.prop('hidden', false);
        return true;
    }
    else{
        emailTickEl.prop('hidden', true);
        emailErrorEl.html(result.error);
        emailEl.css(errorStyle);
        return false;
    }
}

function isNameValid(name){
    let isValid = false, err = "";
    if(name == ""){
        err = "This field is required.";
    }
    else if(name.length > 60){
        err = "Name should be less than 60 characters.";
    }
    else{
        isValid = true;
    }
    return {
        isValid: isValid,
        error: err
    }
}

function isEmailValid(email){
    let isValid = false, err = "";
    let regEx = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    if(email == ""){
        err = "This field is required.";
    }
    else if(!regEx.test(email)){
        err = "Invalid email id.";
    }
    else{
        isValid = true;
    }
    return {
        isValid: isValid,
        error: err
    }
}


// 2021-07-15 => yyyy-mm-dd
function isDOBValid(dob){
    let isValid = false, err = "";
    if(dob == ""){
        err = "This field is required.";
    }
    else{
        let dateSeperationResult = seperateDMY(dob);
        if(dateSeperationResult.error){
            err = dateSeperationResult.error;
        }
        else{
            let day = dateSeperationResult.day;
            let month = dateSeperationResult.month;
            let year = dateSeperationResult.year;
            let monthLengths = [31,28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        }
    }
    return {
        isValid: isValid,
        error: err
    }
}

function seperateDMY(dob){
    let day = null, month = null, year = null, err = null;
    let dateElements = dob.split('-');
    if(dateElements.length != 3){
        err = "Incorrect date format.";
    }
    else{
        day = dateElements[2];
        month = dateElements[1];
        year = dateElements[0];

        if(day == "" || month == "" || year == ""){
            err = "Incorrect date format.";
        }
    }
    return {
        day: day,
        month: month,
        year: year,
        error: err
    }
}