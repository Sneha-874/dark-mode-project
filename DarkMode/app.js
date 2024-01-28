const togglebtn = document.querySelector(".toggle-theme");
const body = document.body;
function toggleTheme(){
    if(body.classList.contains("dark-mode")){
        togglebtn.textContent = "dark mode";
        body.classList.remove("dark-mode");
    }
    else{
        togglebtn.textContent = "light mode";
        body.classList.add("dark-mode");
    }
}
togglebtn.addEventListener("click" , toggleTheme);
