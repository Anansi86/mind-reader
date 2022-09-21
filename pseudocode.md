Pseudocode Code fo Mind Reader

Making app to read minds
I need 6 slides/objects

1st slide 
header "I can read your Mind"
on bottom right have a next button that will take user to next slide

2nd slide
Header changes "Pick a number from 01-99"
a button in the middle of the screen labled next to continue to the next slide
under "next button" dialogue that states "when you have your number click next"
and the bottom right button will reset the app

3rd slide
Header changes "add both digits together to get a new number"
Next button needs to be in the same place as it was in slide 2
dialogue under the next button changes "Ex: 14 is 1 + 4 = 5" line down "click next to proceed"
and the bottom right button will reset the app

4th slide
Header changes "Subtract your new number from the original number"
Next button needs to be in the same place as it was in the previous slide
Dialogue box under next button "Ex: 14 - 5 = 9" line down click next to proceed
and the bottom right button will reset the app

5th slide
header changes to a scroll through numbers and symbols
next button still goes to next slide but text changes to "reveal"
Dialogue box under reveal button "find your new number." line down "Note the symbols beside the number
and the bottom right button will reset the app

6th and final slide
Header will display the symbol
next button is gone
dialogue box is "Your symbol is" line down the "symbol"
and the bottom right button will reset the app

objects 
header
dialogue box
start button (1st slide)
Next button (Between slides 2-5) slide 5 will say "reveal"


mindReader(){
    if (header is present){
        then {display header text "I can read your mind'
            and populate with text "I can read your mind"
        }
    } 

    if (button is pressed) {
        then {repopulate text with "Pick a number from 01-99"
            and { "next" button appears in middle of app
            } and {dialoge box populates "when you have your number click next
        } and next button turns into reset button
    }


    if ("next' button is pressed) {
        then {repopulate header with "Add both digits together to get a new number"
            } and { change dialoge box "Ex: 14 is 1+4=5 click next to proceed
        }    
    }

    if "next' button is pressed
        then repopulate header text with "Subtract your new number from the original number"
            and repopulate dialogue text "Ex: 14-5=9 click next to proceed"

    if "next' button is pressed
        then replace header with slider with numbers (1-100) and (symbols)
            and change button text to "reveal"
                and repopulate dialoge text "Find your new number. Note the symbol beside the number"

    if "next' button is pressed 
        then repopulate header with symbol that matches the numbers from previous page
            and repopulate dialoge box with "your symbol is:" <insert> symbol.


}

