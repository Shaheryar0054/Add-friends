var istatus = document.querySelector("h4");

var btn = document.querySelector("#add");

var check = 0;

btn.addEventListener("click", function () {
    if (check == 0) {
        istatus.innerHTML = "Friends"
        istatus.style.color = "blue"
        btn.innerHTML = "Remove friend"
        check = 1
    }
    else {
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        btn.innerHTML = "Add friend"
        check = 0
    }
    
})
