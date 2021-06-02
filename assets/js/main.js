const res = document.querySelector(".submit");
document.addEventListener('submit', e => {
    e.preventDefault();
  })
let flag=1;
let user = document.querySelector("#user")
user.addEventListener('keyup',()=>{
    if (password.value.length <= 5 || user.value.length<=3){
        const div = document.createElement('div');
        res.classList.remove('login');
        div.classList.add('loading');
        if(flag<2){
            res.innerHTML = ""
            res.appendChild(div)
            flag++
        }
    }else {
        res.innerHTML = "LOGIN"
        res.classList.add('login');
        flag=1;
    }
})
let password = document.querySelector("#password")
password.addEventListener('keyup',()=>{
    if (password.value.length <= 5 || user.value.length<=3){
        const div = document.createElement('div');
        res.classList.remove('login');
        div.classList.add('loading');
        if(flag<2){
            res.innerHTML = ""
            res.appendChild(div)
            flag++
        }
    }else {
        res.innerHTML = "LOGIN"
        res.classList.add('login');
        flag=1;
    }
})

