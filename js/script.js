const swap = document.querySelector('.swap');
let copyCode = document.querySelector(".copy");
let small = document.querySelector("small");

function randomColor() {
    return Math.floor(Math.random() * 255)
}
swap.addEventListener('click', () => {
    swap.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.className = "logo active"
    bg.style.backgroundColor = `rgba(${randomColor()},${randomColor()},${randomColor()})`;
    document.getElementById("code").value = `Color code: ${bg.style.backgroundColor}`;
})

copyCode.addEventListener("click", function () {
    copyCode = document.getElementById("code");
    copyCode.select();
    copyCode.setSelectionRange(12, 9999);
    document.execCommand("copy");
    if(document.getElementById("code").value === `Color code: ${bg.style.backgroundColor}`){
        small.classList.toggle("active");        
        setTimeout(() => {
            small.classList.toggle("active");
        }, 2000);
    }else{       
    }
})

copyCode.previousElementSibling.addEventListener("click",() => {
    document.getElementById("code").value = '';
    bg.style.backgroundColor = `unset`;
    swap.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.className = "logo"
})

