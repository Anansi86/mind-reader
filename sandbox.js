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
            "your symbol is...",
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
    let H =  document.getElementById("header");
    let txtBox = document.getElementById("dialogue");
    let next = document.getElementById("nextButton");
    let restart = document.getElementById("reset");
    //v--- 2nd slide
    
    let btnClick = document.getElementById("startButton");
      btnClick.addEventListener("click", function() {
      H.innerHTML = mndReader.header[0];
      txtBox.innerHTML = mndReader.dialogueBox[0];
      next.innerHTML = mndReader.nextButton[0];
      restart.innerHTML = mndReader.resetButton[0];
    
});
