
const array= [ 
    "99 little bugs in the code, 99 little bugs, you take one down and patch it around, 125 little bugs in the code",
     "I’ve got a really good UDP joke to tell you, but I don’t know if you’ll get it",
    "There are 10 kinds of people in the world. Those who understand binary and those who don’t",
   " A guy walks into a bar and asks for 1.4 root beers. The bartender says I’ll have to charge you extra, that’s a root beer float”. The guy says “In that case, better make it a double.",
    "Knock, knock. Whos There? Very long pause… 'Java.' ",
    "Programming is 10% writing code and 90% understanding why it’s not working",
   " You are the ; to my statements",
   " Why did the programmer quit her job? Because she didn’t get arrays",
   " What did the Java Code say to the C code? You’ve got no class",
   " A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn’t",
   " Why do programmers prefer dark mode? Because light attracts bugs.",
    "Things aren’t always #000000 and #FFFFFF",
    "Why do Java programmers have to wear glasses? Because they don’t C# ",
    "A programmer is heading out to the grocery store, so his wife tells him 'get a gallon of milk, and if they have eggs, get a dozen.' He returns with 13 gallons of milk.",
    "Programmer: An organism that turns coffee into software",
    "Physics is the universe’s operating system",
    "Q: Why can’t you trust an atom? A: They make up everything.",
    "Einstein developed a theory about space. And it was about time, too!",
    "Math is either extremely frustrating of extremely satisfying, there is no in between.",
    "There’s no place like 127.0.0.1",
    "Why do programmers take so long in the shower? They read the directions on the shampoo bottle and follow them to the letter: Lather, rinse, and repeat.",
    "A computer programmer rushes his wife to the hospital where she gives birth to their child. The doctor first hands the baby to the programmer. 'Well?' his wife says impatiently. 'Is it a boy, or is it a girl?' Smiling, the programmer replies, 'Yes'.",
    "If at first you don’t succeed, call it version 1.0",
    "My love for you has no bugs",
    "What is the most used language in programming? Profanity.",
    "Real programmers count from 0",
    "My mind is like an internet browser, 19 tabs open, 3 of them are frozen, ads popping up everywhere, I have no idea where the music is coming from",
    "There are 2 types of people in the world. Those who can extrapolate from incomplete data…",
    "What do you call a programmer who vomits at IHOP? A stack overflow.",
    "Computers will neverl fully replace humans until they learn to laugh at the boss’s jokes",
    "Binary: It’s as easy as 01, 10, 11",
    "All programmers are playwrights, and all computers are lousy actors.",
   " Algorithm: words used by programmers when they don’t want to explain what they did When in doubt ",
   " My attitude isn’t bad, it’s in beta.",
   " What do cats and programmers have in comon? When either one is unusually happy and excited, it’s because they found a bug.",
   " [“hip”,”hip”] (hip hip array!)",
   " The more I C, the less I see",
   " Q: What is the difference between a programmer and a non-programmer? A: The non-programmer things a kilobyte is 1000 bytes while a programmer is convinced that a kilometer is 1024 meters",
   " Q: What’s the best thing thing about UDP jokes? A: I don’t care if you get them.",
   " Q: Why do programmers always mix up Halloween and Christmas? A: Because Oct 31 equals Dec 25.",
    "Programmer: A person who fixed a program you didn’t know you had in a way that you don’t understand.",
    "If its working, don’t touch it",
    "Bad code can’t be debugged. Neither can good code.",
    "If you don’t know something, Google it.",
    "A good programmer is someone who looks both ways before crossing a one-way street.",
    "A user interface is like a joke. If you have to explain it, it means it’s not good.",
    "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
    "The generation of random numbers is too important to be left to chance.",
    "What do you call a programmer from Finland? Nerdic",
    "When there’s code, there’s bug."
 ];

 let joke = document.querySelector(".quote");
 let next_btn = document.querySelector(".new");
 let copy_btn = document.querySelector(".copy");
 let s_btn = document.querySelector(".sound");
 let share_btn = document.querySelector(".facebook");

 function random_joke() {
    next_btn.innerHTML="New Joke";
    let random = Math.floor(Math.random() * 50); // Fixed the Math.floor() and Math.random() calls
    let new_joke = array[random]; // Assuming 'array' is a predefined array of jokes
    joke.innerHTML = new_joke;

}
random_joke();

next_btn.addEventListener("click", random_joke); // Removed the parentheses from random_joke

function speak() {
     // Corrected the reference to .quote
    let uttrance = new SpeechSynthesisUtterance(joke.innerHTML); // Corrected the usage of SpeechSynthesisUtterance
    window.speechSynthesis.speak(uttrance); // Corrected the usage of window.speak
}
s_btn.addEventListener("click", speak);


copy_btn.addEventListener("click",()=>{
    if(navigator.clipboard.writeText(joke.innerHTML + " - by Aashish Rijal")){
        alert("text copied to clipboard");
    }
});

function share_facebook() {
    let url = `https://facebook.com?php=${encodeURIComponent(joke.innerHTML)}`;
    window.open(url, "_blank");
}
share_btn.addEventListener("click", share_facebook);







 