 console.log("Welcome to tic tac toe");
let turnOver=new Audio("ding-idea-40142.mp3") // turn music
let turn="X";
let isGameOver=false;

// // Function to change the turn
 const changeTurn= ()=>{
     return turn === "X"? "0":"X" ;
 }
// Function to check for a win
const checkWin =()=>{
    let boxtext=document.getElementsByClassName("boxtext");
    let win=[
        [0,1,2,5,5,0],
        [3,4,5,5,5,15],
        [6,7,8,5,15,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]

    ]
    win.forEach(e=>{
        if((boxtext[e[0]].innerText==boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText==boxtext[e[2]].innerText)&&(boxtext[e[0]].innerText !="" )){
            document.getElementsByClassName("info")[0].innerText=boxtext[e[0]].innerText +" win ";
            isGameOver=true;
            // document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="200px";
            document.getElementsByTagName("img")[0].style.width="200px";
            document.querySelector(".line").style.width="20vw";
            document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

// // Game logic
 let boxes=document.getElementsByClassName("box");
 Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            // turnOver.play();
            checkWin();
            if(!isGameOver){
                document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
            }
        }       

        
    })
})

// Add event listener
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element =>{
        element.innerText="";
    })
    turn="X";
    isGameOver=false;
    if(!isGameOver){
        document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
        document.getElementsByTagName("img")[0].style.width="0px";
        document.querySelector(".line").style.width="0px";
    }
})


///---------------------------------------------------------------------------------
