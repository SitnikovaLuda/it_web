function sign(e){
    if(e.id == 'sign-in'){
        sign_form_popup();
    }
    else if(e.id == 'sign-out'){
        e.classList.add('hiden');
        document.getElementById('sign-in').classList.remove('hiden');
        document.querySelector('.guest-name').remove();
    }
}

function sign_form_popup(){
    document.body.style.position = 'fixed';
    document.getElementById('sign-form').classList.remove('hiden');
}

function logIn(){
    let log = document.getElementById('log');
    let pass = document.getElementById('pass');
    if(log.value == ""){
        alert("Введите логин");
    }
    else if(pass.value == ""){
        alert("Введите пароль");
    }
    else {
        let e = document.getElementById('sign-in');

        let arr = (log.value).replace(/\s+/g, ' ').trim().split(' ');
        let name = arr[0] + ' ';
        name += arr.length > 0 ? arr[1][0] + '. ' + arr[2][0] + '.' : '';
        document.getElementById('sign-out').insertAdjacentHTML('afterbegin','<div class="guest-name">'+ name +'</div>');

        e.classList.add('hiden');
        document.getElementById('sign-out').classList.remove('hiden');
        document.getElementById('sign-form').classList.add('hiden');
        document.body.style.position = 'initial';
    }
}

function films_active(e){
    if(!e.classList.contains('active-sw')){
        e.classList.add('active-sw');
        document.querySelector('.switch-one-channels').classList.remove('active-sw');
        document.querySelector('.main-films').classList.remove('hiden');
        document.querySelector('.main-program').classList.add('hiden');
    }
}

function channels_active(e){
    if(!e.classList.contains('active-sw')){
        e.classList.add('active-sw');
        document.querySelector('.switch-one-films').classList.remove('active-sw');
        document.querySelector('.main-films').classList.add('hiden');
        document.querySelector('.main-program').classList.remove('hiden');
    }
}