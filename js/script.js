document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.length > 0){
        // document.getElementById('sign-out').insertAdjacentHTML('afterbegin','<div class="guest-name">'+ localStorage.key(0) +'</div>');
        // document.getElementById('sign-in').classList.add('hiden');
        // document.getElementById('sign-out').classList.remove('hiden');
        document.getElementById('log').value = localStorage.key(0);
        document.getElementById('pass').value = localStorage.getItem(localStorage.key(0));
        radio.checked = 1;
    }
});

function search(e){
    let search_nodes = document.querySelectorAll('.one-film-name');
    search_nodes.forEach(element => {
        element.innerHTML = element.innerHTML.replace(/<mark>/g, '');
        element.innerHTML = element.innerHTML.replace(/<\/mark>/g, '');
        if(element.parentElement.style.visibility) element.parentElement.style.visibility = '';
    });
    if((e.value.replace(/\s/g, '')).length > 0){
        search_nodes.forEach(element => {
            let needed = e.value.replace(/[-[\]{}()*+?.,\\^$|#\s]/gi, "\\$&");
            if(element.innerHTML.search(new RegExp(needed, 'i')) != -1){
                element.innerHTML = element.innerHTML.replace(new RegExp(needed, 'ig'), '<mark>' + '$&' + '</mark>');
            }
            else element.parentElement.style.visibility = 'hidden';
        });
    }
    // if(document.getElementsByTagName('mark').length > 0){
    //     document.querySelector('.big-head').style.position='fixed';
    //     document.querySelector('.switch').style.marginTop = '100px';
    //     document.getElementsByTagName('mark')[0].scrollIntoView({block: "center"});
    // }
}

document.getElementById('search_line').addEventListener('blur',(e)=>{
    if(e.target.value == ""){
        document.querySelector('.big-head').style.position='static';
        document.querySelector('.switch').style.marginTop = '48px';
    }
})

function sign(e){
    if(e.id == 'sign-in'){
        sign_form_popup();
    }
    else if(e.classList.contains("out-button")){
        e.parentElement.classList.add('hiden');
        document.getElementById('sign-in').classList.remove('hiden');
        document.querySelector('.guest-name').remove();
    }
}

function sign_form_popup(){
    // document.body.style.position = 'fixed';
    document.getElementById('sign-form').classList.remove('hiden');
    if (localStorage.length > 0) {
        log.value = localStorage.key(0);
        pass.value = localStorage.getItem(localStorage.key(0));
        radio.checked = 1;
    }
}

function logIn() {
    let log = document.getElementById('log');
    let pass = document.getElementById('pass');
    if (log.value == "") {
        alert("?????????????? ??????????");
    }
    else if (pass.value == "") {
        alert("?????????????? ????????????");
    }
    else {
        let e = document.getElementById('sign-in');

        let arr = (log.value).replace(/\s+/g, ' ').trim().split(' ');
        let name = arr[0] + ' ';
        name += arr.length > 1 ? arr[1][0] + '. ' : '';
        name += arr.length > 2 ? arr[2][0] + '.' : '';
        document.getElementById('sign-out').insertAdjacentHTML('afterbegin', '<div class="guest-name" title = "'+ name + '">' + name + '</div>');

        e.classList.add('hiden');
        document.getElementById('sign-out').classList.remove('hiden');
        document.getElementById('sign-form').classList.add('hiden');
        document.body.style.position = 'initial';

        if (radio.checked) {
            if(localStorage.length > 0)
                localStorage.clear();
            localStorage.setItem(name, pass.value);
        }
        else localStorage.clear();
        log.value = '';
        pass.value = '';
        radio.checked = 0;
    }
}

document.getElementById('sign-form').addEventListener('click', (e)=>{
    if(e.target.id == 'sign-form'){
        e.target.classList.add('hiden');
        document.body.style.position = 'initial';
    }
})

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