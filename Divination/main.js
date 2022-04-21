let btn = document.querySelector('button');

//randomizes background with a button
//btn.addEventListener("click", () => {
//    <a href=fate1.html target="_self">
//    let x = Math.floor(Math.random() * 255);
//    let y = Math.floor(Math.random() * 255);
//    let z = Math.floor(Math.random() * 255);
//    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
//    document.body.style.background = bgColor;
//});

//removes elements

//removeText.onclick = function () {
//    removeText.remove();
//};


//btn.addEventListener("click", () => {
//    // bgColor Code
//    // Grab our form by ID
//    var a = document.getElementById("frm1");
//    // Grab all our Headings 2
//    var b = document.getElementsByTagName(“H2”);
//    console.log(a);
//    console.log(b);
//});

//btn.addEventListener("click", () => {
//    let elem = [];
//    for (i = 0; i < b.length; i++) {
//        elem.push(document.createElement("h3"));
//        elem[i].innerHTML = a.elements[i].value;
//        document.body.appendChild(elem[i]);
//    }
//});

document.addEventListener("DOMContentLoaded", function () {

    document.querySelector('button').addEventListener("click", generateWords);

    document.querySelector('input').addEventListener("keyup", function () {
        let val = this.value;
        let output = RiTa.rhymes(val);
        document.querySelector("#output").innerHTML = output;
    })

})


function generateWords() {
    let rm = RiTa.markov(2);
    rm.addText(artistConk);
    let sentences = rm.generate(1);
    document.querySelector("#generated").innerHTML = sentences;
}
