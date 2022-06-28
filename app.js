let btn = document.getElementById("btn"),
    inp = document.getElementById("inp"),
    boxs = document.querySelectorAll(".box"),
    darg = null;


let i = 0;
let arr;
let g;
if (localStorage.store != null) {
    arr = JSON.parse(localStorage.store);

    //المشكلة هنا ما قادر اخلي البرقراف يجي تحت بعض
    for (let i = 0; i < arr.length; i++) {
        boxs[0].innerHTML += `<p class="item" draggable="true">${arr[i]}</p>`
        dropItem()
    }
} else {
    arr = []
}

btn.onclick = function () {

    if (inp.vlue != "") {

        boxs[0].innerHTML += `
            <p class="item" draggable="true">${inp.value}</p>
        `

        inp.value = ""


        let items = document.querySelectorAll(".item")

        arr.push(items[i].innerHTML)

        console.log(items[i]);
        localStorage.store = JSON.stringify(arr)
        i++

    }

    dropItem()
}


function dropItem() {
    let items = document.querySelectorAll(".item")
    items.forEach(item => {
        item.addEventListener("dragstart", function () {
            this.style.opacity = ".5";
            darg = item;
            console.log(darg);

        })

        item.addEventListener("dragend", function () {
            this.style.opacity = "1";
            darg = null
            console.log(darg);

        })

        boxs.forEach(box => {
            box.addEventListener("dragover", function (e) {
                e.preventDefault();
                this.style.background = "#090";
                this.style.color = "#fff"
            })

            box.addEventListener("dragleave", function () {
                this.style.background = "#fff";
                this.style.color = "#000"
            })


            box.addEventListener("drop", function () {
                box.append(darg)
                console.log(darg);
                this.style.background = "#fff";
                this.style.color = "#000"
            })
        })
    })



}