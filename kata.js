// Trouver un nb compris entre 1 et 100

// Fin si nb trouvé
// Fin si essai supérieur ou égal à 10
// Choisir un nb aléatoirement 
// Demander au joueur de rentrer un nb
// Si nb sup lui indiquer qu'il est trop grand
//.. à décomposer plus
// Si nb inf lui indiquer qu'il est trop bas
//.. à décomposer plus
// Conserver les propositions du joueur et lui retourner à chaque nouveau tour si il a faux
// Permettre au joueur de recommencer

let number;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function chooseNumber() {
    //numberRandom = getRandomInt(101);
    numberRandom = 3;
    console.log("numberRandom =", numberRandom);
    console.log("myNumber =", number);

    nbTrial = 3; //à incrémenter à chaque essai
    arrayNumber = [];

    while ( nbTrial > 0 ) {
        console.log("numberRandom =", numberRandom);
        console.log("myNumber =", number);

        if ( number > numberRandom ) {
            nbTrial == nbTrial --;
            arrayNumber.push(number);
            console.log("Votre nombre est trop grand - Vos numéros déjà utilisés", arrayNumber.join(' '), "- essais restants", nbTrial);

        } else if ( number < numberRandom ) {
            nbTrial == nbTrial --;
            arrayNumber.push(number);
            console.log( "Votre nombre est trop petit - Vos numéros déjà utilisés", arrayNumber.join(' '), "- essais restants", nbTrial);

        } else {
            console.log("Super vous avez trouvé le bon numéro :", number);
            //proposer de recommencer une partie
            nbTrial == 10;
        }

        number = window.prompt('Saisi un numéro');
        console.log("arrayNumber", arrayNumber);
    }
    
    if ( nbTrial === 0 ) {
        //window.alert("Looser, le nombre d'essai est expiré");
        console.log("Looser, le nombre d'essai est expiré");
        //proposer de recommencer une partie
    }   
}


//window.prompt('Saisi un numéro')
number = window.prompt('Saisi un numéro');
console.log(chooseNumber())

//vérifier si c'est un numéro et non uns string
//vérifier si number compris entre 1 et 100
// proposer de rejouer
