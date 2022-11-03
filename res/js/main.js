const boxes = document.getElementsByClassName("box");


[...boxes].forEach((box ) =>{
    box.onclick = () => {
        document.body.style.backgroundColor = box.dataset.color;
        box.innerText++;
    }
});