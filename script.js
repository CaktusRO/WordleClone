let body = document.querySelector("body");
let alert = document.querySelector("#alert")
let row11 = document.querySelector("#row1-1");
let row12 = document.querySelector("#row1-2");
let row13 = document.querySelector("#row1-3");
let row14 = document.querySelector("#row1-4");
let row15 = document.querySelector("#row1-5");
let row21 = document.querySelector("#row2-1");
let row22 = document.querySelector("#row2-2");
let row23 = document.querySelector("#row2-3");
let row24 = document.querySelector("#row2-4");
let row25 = document.querySelector("#row2-5");
let row31 = document.querySelector("#row3-1");
let row32 = document.querySelector("#row3-2");
let row33 = document.querySelector("#row3-3");
let row34 = document.querySelector("#row3-4");
let row35 = document.querySelector("#row3-5");
let row41 = document.querySelector("#row4-1");
let row42 = document.querySelector("#row4-2");
let row43 = document.querySelector("#row4-3");
let row44 = document.querySelector("#row4-4");
let row45 = document.querySelector("#row4-5");
let row51 = document.querySelector("#row5-1");
let row52 = document.querySelector("#row5-2");
let row53 = document.querySelector("#row5-3");
let row54 = document.querySelector("#row5-4");
let row55 = document.querySelector("#row5-5");
let row61 = document.querySelector("#row6-1");
let row62 = document.querySelector("#row6-2");
let row63 = document.querySelector("#row6-3");
let row64 = document.querySelector("#row6-4");
let row65 = document.querySelector("#row6-5");
let span11 = document.querySelector("#span1-1");
let span12 = document.querySelector("#span1-2");
let span13 = document.querySelector("#span1-3");
let span14 = document.querySelector("#span1-4");
let span15 = document.querySelector("#span1-5");
let span21 = document.querySelector("#span2-1");
let span22 = document.querySelector("#span2-2");
let span23 = document.querySelector("#span2-3");
let span24 = document.querySelector("#span2-4");
let span25 = document.querySelector("#span2-5");
let span31 = document.querySelector("#span3-1");
let span32 = document.querySelector("#span3-2");
let span33 = document.querySelector("#span3-3");
let span34 = document.querySelector("#span3-4");
let span35 = document.querySelector("#span3-5");
let span41 = document.querySelector("#span4-1");
let span42 = document.querySelector("#span4-2");
let span43 = document.querySelector("#span4-3");
let span44 = document.querySelector("#span4-4");
let span45 = document.querySelector("#span4-5");
let span51 = document.querySelector("#span5-1");
let span52 = document.querySelector("#span5-2");
let span53 = document.querySelector("#span5-3");
let span54 = document.querySelector("#span5-4");
let span55 = document.querySelector("#span5-5");
let span61 = document.querySelector("#span6-1");
let span62 = document.querySelector("#span6-2");
let span63 = document.querySelector("#span6-3");
let span64 = document.querySelector("#span6-4");
let span65 = document.querySelector("#span6-5");

let button = document.querySelector("#button")
let row1 = [];
let row2 = [];
let row3 = [];
let row4 = [];
let row5 = [];
let row6 = [];
let input = document.querySelector("#input")
let word1;
let word2;
let word3;
let word4;
let word5;
let word6;
let HTMLspans1 = [span11, span12, span13, span14, span15]
let HTMLrow1 = [row11, row12, row13, row14, row15]
let HTMLspans2 = [span21, span22, span23, span24, span25]
let HTMLrow2 = [row21, row22, row23, row24, row25]
let HTMLspans3 = [span31, span32, span33, span34, span35]
let HTMLrow3 = [row31, row32, row33, row34, row35]
let HTMLspans4 = [span41, span42, span43, span44, span45]
let HTMLrow4 = [row41, row42, row43, row44, row45]
let HTMLspans5 = [span51, span52, span53, span54, span55]
let HTMLrow5 = [row51, row52, row53, row54, row55]
let HTMLspans6 = [span61, span62, span63, span64, span65]
let HTMLrow6 = [row61, row62, row63, row64, row65]
let winScreen = document.createElement("div")
winScreen.setAttribute("ID", "winScreen")
let correctWord = document.createElement("span")


let possibleWords = ["stare", "pinky", "cloud", "extra", "eagle", "pizza", "click", "fruit", "diary", "house", "music", "party",
 "green", "juice", "earth", "tiger", "plant", "ankle", "dance", "silly", "world", "woman", "elite", "hippy", "chest", "bread", "craft",
"beach", "chair", "drink", "happy", "light", "brush", "apple", "chord", "river", "smile", "whale", "water", "youth", "spoon", "wheel",
"radio", "toast", "snack", "bacon", "early", "enjoy", "jelly", "wrong", "shirt", "truck", "fence", "movie", "agent", "union", "verse",
"fancy", "laugh", "focus", "event", "basis", "block", "salad", "berry", "words", "brain", "hippo", "great", "court", "chart"]
function random() {
    return Math.floor(Math.random() * possibleWords.length)
}


let chooseWord = possibleWords[random()]
console.log(chooseWord)
correctWord.innerText = chooseWord.toUpperCase()
correctWord.style.color = "green";
let winBox = document.createElement("div")
winBox.setAttribute("ID", "winBox")
let text1 = document.createElement("span")
let text2 = document.createElement("span")
text1.setAttribute("ID", "text1")
text2.setAttribute("ID", "text2")
text1.innerText = "Felicitări!"
text2.innerText = "Cuvântul este " + correctWord.innerText + "!"
winBox.append(text1)
winBox.append(text2)

let arrayedCorrectWord = chooseWord.toUpperCase().split("");
let randomNumber;


button.addEventListener("click", () => {
    if (input.value.length == 5) { 
    let arrayedWord = input.value.split("")
    if (span11.innerText == "") { // Row 1 - end
    row1 = arrayedWord;
    let checkHere1 = arrayedCorrectWord.slice();
    console.log("here ok")
    for (let i = 0; i < HTMLspans1.length; i++) {
        HTMLspans1[i].innerText = row1[i].toUpperCase();
        if (HTMLspans1[i].innerText == checkHere1[i]) {
            HTMLrow1[i].style.backgroundColor = "green";
            HTMLspans1[i].style.color = "white";
            checkHere1[i] = 0;
            alert.innerText = "Scrie un cuvânt de cinci litere!"
        }
    }
    for (i = 0; i < HTMLspans1.length; i++) {
        HTMLspans1[i].innerText = row1[i].toUpperCase();
        if (checkHere1.includes(HTMLspans1[i].innerText.toUpperCase()) && HTMLrow1[i].style.backgroundColor !== "green"){
            HTMLrow1[i].style.backgroundColor = "#cccc00";
            HTMLspans1[i].style.color = "white";
            checkHere1[checkHere1.indexOf(HTMLspans1[i].innerText)] = 0;
            alert.innerText = "Scrie un cuvânt de cinci litere!"
        }
    }
    if (row11.style.backgroundColor == "green" &&row12.style.backgroundColor == "green" &&row13.style.backgroundColor == "green" &&row14.style.backgroundColor == "green" &&row15.style.backgroundColor == "green") {
        console.log("Bravo!")
        body.append(winScreen)
        body.append(winBox);
        alert.innerText = "Mulțumim că ai jucat!"
    }
    console.log(row1) // Row 1 - end
    } else if (span21.innerText == '') { // Row 2 - start
        console.log("check")
        row2 = arrayedWord;
    let checkHere2 = arrayedCorrectWord.slice();
    console.log("here ok")
    for (let i = 0; i < HTMLspans2.length; i++) {
        HTMLspans2[i].innerText = row2[i].toUpperCase();
        if (HTMLspans2[i].innerText == checkHere2[i]) {
            HTMLrow2[i].style.backgroundColor = "green";
            HTMLspans2[i].style.color = "white";
            checkHere2[i] = 0;
            alert.innerText = "Scrie un cuvânt de cinci litere!"
        }
    }
    for (i = 0; i < HTMLspans2.length; i++) {
        HTMLspans2[i].innerText = row2[i].toUpperCase();
        if (checkHere2.includes(HTMLspans2[i].innerText.toUpperCase()) && HTMLrow2[i].style.backgroundColor !== "green"){
            HTMLrow2[i].style.backgroundColor = "#cccc00";
            HTMLspans2[i].style.color = "white";
            checkHere2[checkHere2.indexOf(HTMLspans2[i].innerText)] = 0;
            alert.innerText = "Scrie un cuvânt de cinci litere!"
        }
    }
    if (row21.style.backgroundColor == "green" &&row22.style.backgroundColor == "green" &&row23.style.backgroundColor == "green" &&row24.style.backgroundColor == "green" &&row25.style.backgroundColor == "green") {
        console.log("Bravo!")
        body.append(winScreen)
        body.append(winBox);
        alert.innerText = "Mulțumim că ai jucat!"
}
    } // Row 2 - end
     else if (span31.innerText == ''){ 
    console.log("check")
    row3 = arrayedWord;
let checkHere3 = arrayedCorrectWord.slice();
console.log("here ok")
for (let i = 0; i < HTMLspans3.length; i++) {
    HTMLspans3[i].innerText = row3[i].toUpperCase();
    if (HTMLspans3[i].innerText == checkHere3[i]) {
        HTMLrow3[i].style.backgroundColor = "green";
        HTMLspans3[i].style.color = "white";
        checkHere3[i] = 0;
        alert.innerText = "Scrie un cuvânt de cinci litere!"
    }
}
for (i = 0; i < HTMLspans3.length; i++) {
    HTMLspans3[i].innerText = row3[i].toUpperCase();
    if (checkHere3.includes(HTMLspans3[i].innerText.toUpperCase()) && HTMLrow3[i].style.backgroundColor !== "green"){
        HTMLrow3[i].style.backgroundColor = "#cccc00";
        HTMLspans3[i].style.color = "white";
        checkHere3[checkHere3.indexOf(HTMLspans3[i].innerText)] = 0;
        alert.innerText = "Scrie un cuvânt de cinci litere!"
    }
}
if (row31.style.backgroundColor == "green" &&row32.style.backgroundColor == "green" &&row33.style.backgroundColor == "green" &&row34.style.backgroundColor == "green" &&row35.style.backgroundColor == "green") {
    console.log("Bravo!")
    body.append(winScreen)
    body.append(winBox);
    alert.innerText = "Mulțumim că ai jucat!"
}

} else if (span41.innerText == ''){ 
    console.log("check")
    row4 = arrayedWord;
let checkHere4 = arrayedCorrectWord.slice();
console.log("here ok")
for (let i = 0; i < HTMLspans4.length; i++) {
    HTMLspans4[i].innerText = row4[i].toUpperCase();
    if (HTMLspans4[i].innerText == checkHere4[i]) {
        HTMLrow4[i].style.backgroundColor = "green";
        HTMLspans4[i].style.color = "white";
        checkHere4[i] = 0;
        alert.innerText = "Scrie un cuvânt de cinci litere!"
    }
}
for (i = 0; i < HTMLspans4.length; i++) {
    HTMLspans4[i].innerText = row4[i].toUpperCase();
    if (checkHere4.includes(HTMLspans4[i].innerText.toUpperCase()) && HTMLrow4[i].style.backgroundColor !== "green"){
        HTMLrow4[i].style.backgroundColor = "#cccc00";
        HTMLspans4[i].style.color = "white";
        checkHere4[checkHere4.indexOf(HTMLspans4[i].innerText)] = 0;
        alert.innerText = "Scrie un cuvânt de cinci litere!"
    }
}
if (row41.style.backgroundColor == "green" &&row42.style.backgroundColor == "green" &&row43.style.backgroundColor == "green" &&row44.style.backgroundColor == "green" &&row45.style.backgroundColor == "green") {
    console.log("Bravo!")
    body.append(winScreen)
    body.append(winBox);
    alert.innerText = "Mulțumim că ai jucat!"
}


} else if (span51.innerText == ''){ 
    console.log("check")
    row5 = arrayedWord;
let checkHere5 = arrayedCorrectWord.slice();
console.log("here ok")
for (let i = 0; i < HTMLspans5.length; i++) {
    HTMLspans5[i].innerText = row5[i].toUpperCase();
    if (HTMLspans5[i].innerText == checkHere5[i]) {
        HTMLrow5[i].style.backgroundColor = "green";
        HTMLspans5[i].style.color = "white";
        checkHere5[i] = 0;
        alert.innerText = "Scrie un cuvânt de cinci litere!"
    }
}
for (i = 0; i < HTMLspans5.length; i++) {
    HTMLspans5[i].innerText = row5[i].toUpperCase();
    if (checkHere5.includes(HTMLspans5[i].innerText.toUpperCase()) && HTMLrow5[i].style.backgroundColor !== "green"){
        HTMLrow5[i].style.backgroundColor = "#cccc00";
        HTMLspans5[i].style.color = "white";
        checkHere5[checkHere5.indexOf(HTMLspans5[i].innerText)] = 0;
        alert.innerText = "Scrie un cuvânt de cinci litere!"
    }
}
if (row51.style.backgroundColor == "green" &&row52.style.backgroundColor == "green" &&row53.style.backgroundColor == "green" &&row54.style.backgroundColor == "green" &&row55.style.backgroundColor == "green") {
    console.log("Bravo!")
    body.append(winScreen)
    body.append(winBox);
    alert.innerText = "Mulțumim că ai jucat!"
    
    
}


} else if (span61.innerText == ''){ 
    console.log("check")
    row6 = arrayedWord;
let checkHere6 = arrayedCorrectWord.slice();
console.log("here ok")
for (let i = 0; i < HTMLspans6.length; i++) {
    HTMLspans6[i].innerText = row6[i].toUpperCase();
    if (HTMLspans6[i].innerText == checkHere6[i]) {
        HTMLrow6[i].style.backgroundColor = "green";
        HTMLspans6[i].style.color = "white";
        checkHere6[i] = 0;
    }
}
for (i = 0; i < HTMLspans6.length; i++) {
    HTMLspans6[i].innerText = row6[i].toUpperCase();
    if (checkHere6.includes(HTMLspans6[i].innerText.toUpperCase()) && HTMLrow6[i].style.backgroundColor !== "green"){
        HTMLrow6[i].style.backgroundColor = "#cccc00";
        HTMLspans6[i].style.color = "white";
        checkHere6[checkHere6.indexOf(HTMLspans6[i].innerText)] = 0;
        
    }
}
if (row61.style.backgroundColor == "green" &&row62.style.backgroundColor == "green" &&row63.style.backgroundColor == "green" &&row64.style.backgroundColor == "green" &&row65.style.backgroundColor == "green") {
    console.log("Bravo!")
    body.append(winScreen)
    body.append(winBox);
    alert.innerText = "Mulțumim că ai jucat!"
} else {
    body.append(winScreen)
    body.append(winBox)
    text1.innerText = "Nu ai ghicit!"
    text1.style.color = "purple"
    alert.innerText = "Mulțumim că ai jucat!"

}

} alert.innerText = "Scrie un cuvânt de cinci litere!"
} else {
alert.innerText = "Te rog scrie un cuvânt de cinci litere!"
} 
input.value = ""}

)

input.addEventListener("keyup", function(event) {

    event.preventDefault();
    if (event.keyCode === 13) {
        button.click()
    }

    })
