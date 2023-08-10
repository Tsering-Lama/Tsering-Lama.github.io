import React from 'react';
import ReactDOM from 'react-dom/client';
import newyork from './images/newyork.jpg'

//--FUNCTION COMPONENT--//
//content in the app--//
const App = function(){
    //create a constant variable
    const divText = 'I am a text in a variable'
    //create a style variable
    const styleJSX ={color: "purple", fontFamily:'Algerian'}
    return(
        <div>
            <h1 style={{color:"magenta", textAlign:"center"}}>Welcome to React JS</h1>  
            <p>Let's practise some JSX elements</p>
            <h2>Activity: bucket list</h2>
            <ol>
                <li>It is a measurable form of progress</li>
                <li>It gives you things to look forward to</li>
                <li>It makes life more meaningful</li>
                <li>It helps you avoid languishing</li>
            </ol>
            <h2>Inline Styling</h2>
            <label for="email" style={{color:"olive", padding:"0.5em 1em",fontWeight: 'bolder'}}> Enter e-mail</label>
            <input id='email' type='text' placeholder='Type your email' style={{backgroundColor: 'rgb(230,230,230)', padding:'0.5em', borderRadius:'0.5em'}}/>
            <button style={{marginLeft:'1em', backgroundColor:'magenta', padding:'0.5em'}}> Submit Form </button>
            <figure>
                <img src={newyork} style={{width:'50%'}}/>
                <img src={newyork} style={{borderRadius:'2em',padding:'2%'}}/>

            </figure>
            <p className='title'> Adding a class name to JSX element</p>
            <p className='txtVar'>{divText}</p>
            <p style={styleJSX}>{divText}</p>
        </div>   
    )
    }
 //rooting the app 
 const root = ReactDOM.createRoot(document.querySelector('#root'))
 root.render(App())
