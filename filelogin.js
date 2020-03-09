function check() {
    let userName = document.getElementById('ID').value;
    let pass=document.getElementById('password').value;
    if (userName === 'Admin') {
        alert('welcome')
    } else if (userName === '') {
        alert('Canceled');
    } else {
        alert("I don't know you");
    }
    if (pass === 'TheMaster') {
        alert('Welcome!');
    } else if (pass === '') {
        alert('Canceled.');
    } else {
        alert('Wrong password');
    }

}
