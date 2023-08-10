console.log("Tsering Lama")
let myText = document.querySelector('#userName p:nth-child(2)')
myText.style.color = 'red';

document.querySelector('.name1').style.backgroundColor = 'magenta'

/* --Query Selector all--- */

let myName = document.querySelectorAll('#userName p')
for(let i=0; i<myName.length;i++)
{
    myName[i].style.color = 'green'
    //change the font size of all odd numbers
    if(i%2===0){
        myName[i].style.fontSize ='2em'
    }
}
/*--innerHTML-- */
let myDiv = document.querySelectorAll('p')[1]
myDiv.innerHTML ='New text Content using <em><b>innnerHTML</b></em>'

/* --classList.add()-- */
document.querySelector('h1').classList.add('.subtitle')

/* testing  parent/sibling/child---*/
let listItem = document.querySelector('li:nth-child(2)')

/*Creating Elements and Text Nodes */
//step 1: create an element
let myPara= document.createElement('p')
//step2: create a content 
let mySentence = document.createTextNode('THis si the text fo the new para')
//step3A : append the text node into the new element
myPara.appendChild('mySentence')
myPara.classList.add('subtitle')
//Step3B: Append the new element , with Text node, to the document(HTML)
document.querySelector('div').appendChild(myPara)

/*--REMOVE ELEMENT-- */
let myItem= document.querySelector('ul')
myItem.removeChild(myItem.lastElementChild)

/*EVENTS */
let btn= document.querySelector('.btn1')
btn.onclick = function(){alert('Hi There!')}


/*Example of guess a number */
    let randomNum = function(){
        let radNum= Math.ceil(Math.random()*9)
        return radNum
    }// this is a variable function

    let guessNumDiv = document.querySelector('.guessNumber')
    let btnGuess = document.querySelector('.btnGuessNum')

    btnGuess.addEventListener('click',function(){
        guessNumDiv.innerHTML=randomNum()
    })// this is an anonymous function

//anonymous functions runs automatically .
//named function needs to be called in order for it to work
//types of functions- variable, anonymous, named


/* MOUSE EVENTS */
//step1: Collect the component
let btnMouseEvent= document.querySelector('#btnMouseEvent')
let mouseoutDisplay = document.querySelector('.mouseoutDisplay')
let dblclickDisplay = document.querySelector('.dblclickDisplay')
let mouseoutCounter = 0

btnMouseEvent.addEventListener('mouseout', function(){
    mouseoutCounter++
    mouseoutDisplay.innerHTML +='mouse out'
})

btnMouseEvent.addEventListener('dblclick', function(){
    dblclickDisplay.innerHTML += 'click'
})

/* --WINDOW EVENT-- */
let topIcon= document.querySelector('.top')
window.addEventListener('scroll', function(){
    let yPosition = this.scrollY
    if(yPosition>100){
        topIcon.style.Display = 'block'
    }
    else{
        topIcon.style.Display ='none'
    }
})

