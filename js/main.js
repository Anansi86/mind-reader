let mndReader = {
    //    slide1: [
    //      header =  
    //        "I can read your mind",
    //      dialogueBox =
    //        "",
    //      resetButton =
    //        "Start", 
    //      nextButton =
    //        "" 
     //   ],
        slide2: [
          header =
            "Pick a number from 01-99",
          dialogueBox =
            "when you have your number click next",                 
          nextButton = 
            "Next",
          resetButton = 
            "back"
        ],
        slide3: [
          header = 
            "Add both digits together to get a new number",
          dialogueBox =
            "Ex: 14 is 1+4=5 click next to proceed",
          resetButton =
            "Reset",
          nextButton =
            "Next"
        ],
        slide4: [ 
          header =  
           "Subtract your new number from the original number",
          dialogueBox = 
            "Ex: 14-5=9 click next to proceed",
          resetButton =
            "Reset", 
          nextButton =
            "Next"
        ],
        slide5: [
//          header = "replace header with slider with numbers (1-100) and (symbols)",
          dialogueBox = 
            "Find your new number. Note the symbol beside the number",
          resetButton = 
            "Reset", 
          nextButton =
            "Reveal"
        ],
        slide6: [
          header = 
 //         "then repopulate header with symbol that matches the numbers from previous page",
          dialogueBox =
            "your symbol is....",
          resetButton = 
           "Reset", 
          nextButton =
            ""
        ]

}
   
    
    

//let btnClick = document.getElementById("startButton")
//btnClick.addEventListener("click", mndReader);

//function mndReader() {
  // document.getElementById("startButton").innerHTML = txt.gobutton[0];
//}
let H =  document.getElementById("header");
let txtBox = document.getElementById("dialogue");
let next = document.getElementById("nextButton");
let restart = document.getElementById("reset");
//v--- 2nd slide

let btnClick = document.getElementById("startButton");
  btnClick.addEventListener("click", function() {
  H.innerHTML = mndReader.slide2[0]
  txtBox.innerHTML = mndReader.slide2[1];
  next.innerHTML = mndReader.slide2[2];
  restart.innerHTML = mndReader.slide2[3];
  
});

