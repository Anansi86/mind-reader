let slide = [
    slide1: {

            },
            header {

            },
            dialogue box{

            },
            start button{

            }, 
            Next button{

            },
    slide2 {
        {

        },
        header {

        },
        dialogue box{

        },
        start button{

        }, 
        Next button{

        },
    }


]

let btnClick = document.getElementById("startButton")
btnClick.addEventListener("click", mndReader);

function mndReader() {
   document.getElementById("startButton").innerHTML = txt.gobutton[0];
}

mndReader()