
const menu1 = () => {
    document.getElementById("contentFrame").setAttribute("src","summary.html")
}

const menu2 = () => {
    document.getElementById("contentFrame").setAttribute("src","summary2.html")
}




const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const sns = document.querySelector('.navbar__sns');

toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        sns.classList.toggle('active');
});
