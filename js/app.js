let minuteur = document.getElementById("countdown-timer");
let jours = document.getElementById("jours");
let heures = document.getElementById("heures");
let minutes = document.getElementById("minutes");
let secondes = document.getElementById("secondes");

let maintenant = new Date();
const dateOffsetEnMinutes = maintenant.getTimezoneOffset();

const unJourEnMs = 1000 * 60 * 60 * 24;
const uneHeureEnMs = 1000 * 60 * 60;
const uneMinuteEnMs = 1000 * 60;

//const dateCible = Date.now() - dateOffsetEnMinutes * uneMinuteEnMs + 3000;
const dateCible = new Date("Nov 5, 2024");

const getCountdown = () => {
    let nowDate = Date.now();
    let tempsRestantEnMs = dateCible - nowDate + dateOffsetEnMinutes * uneMinuteEnMs;
    
    //jours
    let nbJours = Math.floor(tempsRestantEnMs / unJourEnMs);

    //heures
    let resteTempsSansJoursMs = tempsRestantEnMs - nbJours * unJourEnMs;
    let nbHeures = Math.floor(resteTempsSansJoursMs / uneHeureEnMs);

    //minutes
    let resteTempsSansHeuresMs = resteTempsSansJoursMs - nbHeures * uneHeureEnMs;
    let nbMinutes = Math.floor(resteTempsSansHeuresMs / uneMinuteEnMs);

    //secondes
    let resteTempsSansMinutesMs = resteTempsSansHeuresMs - nbMinutes * uneMinuteEnMs;
    let nbSecondes = Math.floor(resteTempsSansMinutesMs / 1000);

    jours.textContent = nbJours;
    heures.textContent = nbHeures;
    minutes.textContent = nbMinutes;
    secondes.textContent = nbSecondes;

    if(tempsRestantEnMs < 0){
        clearInterval(countdownInterval);
        jours.textContent = 00;
        heures.textContent = 00;
        minutes.textContent = 00;
        secondes.textContent = 00;
    }
} 

let countdownInterval = setInterval(getCountdown, 1000);

getCountdown();

