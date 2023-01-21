//when a key is pressed, a sound is played
//when the key is pressed, the key gets animated
//sound should be playable several times
//the animation should be reversed after the keydown event

//select elements
function playSound(e) {
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //console.log(key);

    key.classList.add("playing");

    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //console.log(audio);

    if(audio === null) {
        return;
    } 
    audio.currentTime = 0;
    audio.play();

}

function removeTransition(e) {
    //console.log(e);
    if(e.propertyName === "transform") {
        this.classList.remove("playing");
    }
}

let keys = document.querySelectorAll(".key");
console.log(keys);

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
