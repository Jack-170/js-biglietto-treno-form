


// definizione input  nome
// definisco input nome
const inputNome = document.querySelector(".nomeuser");

let nomeUser;

console.log(inputNome);

console.log(inputNome.value);


//  definizione input km 

const inputKm = document.querySelector(".kmnumber")

let kmNumber = inputKm.value;

console.log("km necessari: " + kmNumber  )

// definizione input età
const inputAge = document.querySelector(".userage")

let userAge =  inputAge.value;

console.log("Fascia d'età utente: " + userAge )

// definisco il prezzo iniziale del biglietto

let ticketStartingPrice = kmNumber * 0.21;
console.log ("ticketStartingPrice: ",ticketStartingPrice);


// definisco i bottoni

const generateButton= document.getElementById("generate");

const ticket = document.getElementById("ticket")

ticket.style.display = 'none';

generateButton.addEventListener("click",

function(){
    let nomeUser = inputNome.value;
    let kmNumber = inputKm.value; 
    let userAge = inputAge.value;

    let ticketStartingPrice = kmNumber * 0.21;
    let discount = 0;

    if (userAge === "minorenne") {
        discount = ticketStartingPrice * 0.2;
    } else if (userAge === "over65") {
        discount = ticketStartingPrice * 0.4;
    }

    let ticketFinalPrice = ticketStartingPrice - discount;
    let formattedPrice = ticketFinalPrice.toFixed(2);

    
    document.getElementById("username").innerHTML = "Nome passeggero: " + nomeUser;
    let numeroCasuale = Math.floor(Math.random() * 10) + 1;
    document.getElementById("numeroCasuale").innerHTML = numeroCasuale;
    document.getElementById("finalprice").innerHTML = formattedPrice + "€";

    ticket.style.display = "block";

        
    }
);

// definisco il bottone annulla biglietto
const cancelButton = document.getElementById("cancel");

cancelButton.addEventListener("click",

    function(){
        ticket.style.display = "none"
    }
);


// definisco il biglietto
    // 
    document.getElementById("username").innerHTML += nomeUser;

    // numero randomico carrozza
    // Genero un numero casuale tra 1 e 10
    let numeroCasuale = Math.floor(Math.random() * 10) + 1;
    document.getElementById("numeroCasuale").innerHTML = numeroCasuale;

    // 
    document.getElementById("finalprice").innerHTML = formattedPrice + "€";










