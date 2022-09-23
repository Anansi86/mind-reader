
let mndReader = {
        header: [
            "Pick a number from 01-99",
            "Add both digits together to get a new number",
            "Subtract your new number from the original number",
            "",
            ""
        ],
        
        dialogueBox: [
            "when you have your number click next",
            "Ex: 14 is 1+4=5 click next to proceed",
            "Find your new number. Note the symbol beside the number",
            "",
        ],
        
        nextButton: [
            "Next",
            "Next",
            "Next",
            ""
        ],
        
        resetButton: [
                "reset",
                "reset",
                "reset",
                "reset"
        ]
}
    let H = document.getElementById("header");
    let txtBox = document.getElementById("dialogue");
    let next = document.getElementById("nextButton");
    let restart = document.getElementById("resetButton");
    //v--- 2nd slide

    //btn2 = document.getElementById("nextButton")let btn = document.createElement("button");
    btn2.innerHTML = "Click Me";
    document.body.appendChild(btn);
    
    
    let currentPage = 0;
    let btnClick = document.getElementById("startButton");
    btnClick.addEventListener("click", function() {
        currentPage++;
        H.innerHTML = mndReader.header[currentPage];
        txtBox.innerHTML = mndReader.dialogueBox[currentPage].replace("%YOUR_SYMBOL%", btn2);
        next.innerHTML = mndReader.nextButton[currentPage];
        restart.innerHTML = mndReader.resetButton[currentPage];
    });
let symbols = "!@#$%^&*>,".split("");
let pickSymbol = Math.floor(Math.random() * symbols.length);
let pick = symbols.splice(pickSymbol, 1);

// for loop for 1-99 and mixing in the []
for (let i = 0; i < 99; i++) {
    if (i % 9 == 0) {
        console.log(i + " - " + pick);
    } else {
        console.log(i + " - " + symbols[Math.floor(Math.random() * symbols.length)]);
    }
}
