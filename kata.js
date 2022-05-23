let number;

function StopTheGame() {
    window.alert("La partie est finie");
    //Proposer de recommencer ou non
}

 function PlayTheGame() {
    number = window.prompt('Saisir un entier');
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function chooseNumber() {
    numberRandom = getRandomInt(101);
    //numberRandom = 3;
    console.log("numberRandom =", numberRandom);
    console.log("myNumber =", number);

    nbTrial = 10; //à "décrémenter" à chaque essai
    arrayNumber = [];

    while ( nbTrial > 0 ) {
        console.log("numberRandom =", numberRandom);
        console.log("myNumber =", number);

        // Vérifier si j'ai un nb en entrée
        if (!isNaN(number) && 0 < number && number < 101) {

            // si number trop grand
            if ( number > numberRandom ) {
                nbTrial == nbTrial --;
                arrayNumber.push(number);
                console.log("Votre nombre est trop grand - Vos numéros déjà utilisés", arrayNumber.join(' '), "- essais restants", nbTrial);
                window.alert("Votre nombre est trop grand - Vos numéros déjà utilisés " + arrayNumber.join(' ') + " Nb d'essais restants " + nbTrial);

            // si number trop petit
            } else if ( number < numberRandom ) {
                nbTrial == nbTrial --;
                arrayNumber.push(number);
                console.log("Votre nombre est trop petit - Vos numéros déjà utilisés", arrayNumber.join(' '), "- essais restants", nbTrial);
                window.alert("Votre nombre est trop petit - Vos numéros déjà utilisés " + arrayNumber.join(' ') + '' +  " Nb d'essais restants " + nbTrial);

            // si number trouvé
            } else {
                console.log("Super vous avez trouvé le bon numéro :", number);
                window.alert("Super vous avez trouvé le bon numéro : " + number);
                nbTrial == 3;
                StopTheGame();
                // Arrêter la partie et proposer de recommencer une partie ou non
            }
    
            PlayTheGame()
            console.log("arrayNumber", arrayNumber);

        // Si number n'est pas un entier -> alerter, incrémenter le compteur d'essais et continuer la partie.
        } else {
            nbTrial == nbTrial --;
            window.alert("Veuillez entrer un entier compris entre 0 et 100");

            if (nbTrial > 0 ) {
                PlayTheGame()
            } else {
                console.log("Looser, le nombre d'essai est expirééééééé");
                 // Proposer de recommencer ou non
            }
        }
    }
    
    if ( nbTrial === 0 ) {
        window.alert("Looser, le nombre d'essai est expiré");
        console.log("Looser, le nombre d'essai est expiré");
        // Proposer de recommencer ou non
    }   
}


//window.prompt('Saisi un numéro')
// function PlayTheGame() {
//     number = window.prompt('Saisir un entier');
// }
number = window.prompt('Saisir un entier, vous avez trois essais');
console.log(chooseNumber())

// proposer de rejouer
