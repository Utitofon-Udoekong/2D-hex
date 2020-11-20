const colorSwitch = document.querySelector(".colorSwitch");
let cards = document.querySelectorAll(".card")
let contents = document.querySelectorAll(".content")

function randomColor() {
    return Math.random() * 255
}

function counter(data) {
    data.forEach(datas => {
        datas.style.background = `rgba(${randomColor()},${randomColor()},${randomColor()})`
    });
}
function appends(data) {
    let editArea = document.createElement("textarea")
    editArea.style.width = `30px`;
    editArea.style.height = `30px`;
    data.forEach(datas => {
        datas.append(editArea)
    })
}
colorSwitch.addEventListener("click", () => {
    counter(cards)
})
colorSwitch.nextElementSibling.addEventListener("click", () => {
    appends(contents)
})
colorSwitch.nextElementSibling.nextElementSibling.addEventListener("click",() => {
    cards.forEach(card => {
        card.style.background = `#fff`;
    }) 
    document.querySelectorAll("textarea").forEach(area => {
        area.remove();
    })
})