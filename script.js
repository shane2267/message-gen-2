//const button = document.getElementById('btn');
//const jokeText = document.getElementById('joke');


const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');

button.addEventListener("click", getJoke);

async function getJoke(){
    const jokeData = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept :'application/json'
        }
    });   
    const jokeObj = await jokeData.json();
    jokeText.innerHTML = jokeObj.joke;
    console.log(jokeData)
}
