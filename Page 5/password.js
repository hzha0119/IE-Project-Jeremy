var password;
var pass1 = "123";

if (!localStorage.getItem('mycat')) {
    do {
        password = prompt('Please enter your password to view this page!', '');

        if (password == pass1) {
            window.location = '#';
            localStorage.setItem('mycat', 'mydog');
        } else {
            password = prompt('Wrong password, please the correct password', '');
        }
        
    } while (password != pass1);
}
