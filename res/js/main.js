const boxes = document.getElementsById("box");


[...boxes].forEach((box ) =>{
    box.onclick = () => {
        document.body.style.backgroundColor = box.dataset.color;
        box.innerText++;
    }
});