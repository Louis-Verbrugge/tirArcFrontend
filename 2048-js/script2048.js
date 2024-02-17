

const HEIGHT = 800;
const WIDTH = 800;

//cadre de jeu:
let debutPlateauX = 100;
let debutPlateauY = 100;
let largeurPlateau = WIDTH - 100 - debutPlateauX;
let hauteurPlateau = HEIGHT - 100 - debutPlateauY;

let nbCaseX = 4;
let nbCaseY = 4;
let tailleChiffre = largeurPlateau / nbCaseX / 3;
let tailleCase = largeurPlateau / nbCaseX;


//plateau de jeu:
let plateau = [[2, 4, 2, 2], [4, 4, 2, 16], [2, 2, 2, 2], [2, 8, 0, 2]];
let couleurCase = {
    0: "darkgrey",
    2: "orange",
    4: "orange",
    8: "red",
    16: "purple",
    32: "blue",
    64: "green",
    128: "pink",
    256: "brown",
    512: "black",
    1024: "grey",
    2048: "gold"
}

window.onload = function () {

    board = document.getElementById("board")
    board.height = HEIGHT;
    board.width = WIDTH;
    context = board.getContext("2d");

    requestAnimationFrame(game);
    document.addEventListener("keydown", pressKey)

}

function game() {
    context.fillStyle = "red"
    context.fillRect(100, 100, 100, 100)
    affichePlateau()

    if (!finGame()) {
        console.log("GOOO !!")
        requestAnimationFrame(game)
    } else {
        console.log("FIn !!")
    }
}

function pressKey(event) {
    if (event.key == "z") {
        deplacement("haut");
    } else if (event.key == "q") {
        deplacement("gauche");
    } else if (event.key == "s") {
        deplacement("bas");
    } else if (event.key == "d") {
        deplacement("droite");
    }
}


function finGame() {
    nbCaseVide = 0

    plateau.forEach(function (element) {

        element.forEach(function (elem) {

            if (elem == 0) {
                nbCaseVide++
            }
        });
    });
    return nbCaseVide <= 0
}


function affichePlateau() {
    //affiche les pièces:
    context.font = "48px verdana";
    context.textAlign = "center";
    context.textBaseline = "middle";


    for (let y = 0; y < nbCaseY; y++) {
        for (let x = 0; x < nbCaseX; x++) {

            context.fillStyle = couleurCase[plateau[y][x]];
            context.fillRect(debutPlateauX + (largeurPlateau / nbCaseX) * x, debutPlateauY + (hauteurPlateau / nbCaseY) * y, largeurPlateau / nbCaseX, hauteurPlateau / nbCaseY);
            context.fillStyle = "black";
            context.fillText(plateau[y][x], debutPlateauX + (largeurPlateau / nbCaseX) * x + tailleCase / 2, debutPlateauY + (hauteurPlateau / nbCaseY) * y + tailleCase / 2);
        }
    }

    //affiche bordure:
    context.strokeStyle = "grey";
    context.lineWidth = 9;
    for (let y = 0; y < nbCaseY; y++) {
        for (let x = 0; x < nbCaseX; x++) {
            context.strokeRect(debutPlateauX + (largeurPlateau / nbCaseX) * x, debutPlateauY + (hauteurPlateau / nbCaseY) * y, largeurPlateau / nbCaseX, hauteurPlateau / nbCaseY);
        }
    }
}


function ajouterNouvelleCase() {
    // nombre aleatoire entre 1-4, si c'est 1 je fais apparaitre une case 4
    // sinon je fais apparaiter une case 2
}


//fonction de déplacement:
function deplacement(direction) {
    // déplacement vers le haut:
    /*
    dans un premier temps, je place la ligne que je gere dnas un liste est 
    je supprime tout les 0 pour les mettre à la fin, ensuite je regarde si
    deux chiffres sont egaux ou si un chiffre est égale à 0 et le chiffre d'apres
    si oui, j 'additionne les deux chiffres et je supprime le deuxieme chiffre
    ensuite je remet les 0 à la fin, et je replace bien la liste dans le plateau
    */
    let arrayModif = []

    if (direction == "haut" || direction == "bas") {

        for (let x = 0; x < nbCaseX; x++) {
            arrayModif.push([]);
            for (let y = 0; y < nbCaseY; y++) {
                if (plateau[y][x] != 0) {
                    arrayModif[x].push(plateau[y][x]);
                } else {
                    arrayModif[x].unshift(0);
                }

            }
        }
    } else if (direction == "droite") {
        for (let y = 0; y < nbCaseY; y++) {
            arrayModif.push([])
            for (let x = 0; x < nbCaseX; x++) {

                if (plateau[y][x] != 0) {
                    arrayModif[y].push(plateau[y][x])
                } else {
                    arrayModif[y].unshift(0);
                }


            }

        }
    } else if (direction == "gauche") {
        for (let y = 0; y < nbCaseY; y++) {
            arrayModif.push([])
            for (let x = 1; x < nbCaseX + 1; x++) {
                if (plateau[y][nbCaseX - x] != 0) {
                    arrayModif[y].push(plateau[y][nbCaseX - x])
                } else {
                    arrayModif[y].unshift(0);
                }
            }
            //arrayModif[y].reverse();

        }
    }


    //Etape 2:
    for (let y = 0; y < arrayModif.length; y++) {
        for (let x = 2; x < arrayModif[0].length + 1; x++) {
            if (arrayModif[y][nbCaseX - x] == arrayModif[y][nbCaseX - x + 1] || arrayModif[y][nbCaseX - x + 1] == 0) {
                arrayModif[y][nbCaseX - x + 1] += arrayModif[y][nbCaseX - x]
                arrayModif[y].splice(nbCaseX - x, 1);
                arrayModif[y].unshift(0);

            }
        }
    }


    // Etape 3 replacer dans le grille du plateau:
    if (direction == "haut") {

        for (let x = 0; x < nbCaseX; x++) {
            arrayModif[x].reverse()
            for (let y = 0; y < nbCaseY; y++) {

                plateau[y][x] = arrayModif[x][y]

            }
        }
    } else if (direction == "bas") {
        for (let x = 0; x < nbCaseX; x++) {
            for (let y = 0; y < nbCaseY; y++) {

                plateau[y][x] = arrayModif[x][y]

            }
        }
    } else if (direction == "droite") {
        for (let y = 0; y < nbCaseY; y++) {
            //arrayModif[y].reverse()
            plateau[y] = arrayModif[y]
        }
    } else if (direction == "gauche") {
        for (let y = 0; y < nbCaseY; y++) {
            arrayModif[y].reverse()
            plateau[y] = arrayModif[y]
        }
    }

}


//// test:
function testMouvementPlateau() {
    gsap.set("#board", { opacity: 0, x: 500, y: 50 })
    gsap.to("#board", {
        opacity: 1, y: 600, x: -800, rotation: 360, duration: 3, ease: "bounce", onComplete: function () {
            gsap.to("#board", { opacity: 0.2, x: 500, y: 50, duration: 3, rotation: -360, ease: "bounce" }); // Retour à la position initiale
        }
    });
}

