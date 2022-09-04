/* Return true or false */
function validateEmail(email) {
    let regex = /^[0-9A-Za-z]{3,}\@[0-9A-Za-z]{3,10}\.[A-Za-z0-9]{1,4}$/
    return regex.test(email);
}



function validatePassword(password) {
    let regex = /^[0-9]{5,10}$/
    return regex.test(password);
}



function validateAge(age) {
    return age <= 34 && age >= 16
}
const paragraph = document.querySelector('#paragraph');

const params = new URLSearchParams(window.location.search);

params.forEach((value, key)=>{
    paragraph.append(`${key} = ${value}`);
    paragraph.append(document.createElement('br'));
});