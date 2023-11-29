// Bon courage pour ces exercices





// ========================== VARIABLES ===========================

// -------------------------- Exercice 1 --------------------------

/*
Dans cet exercice, vous allez créer les variables suivantes : 

"num" qui contiendra le nombre 42
"txt" qui contiandra le mot : Bonjour, je suis une variable
"bin" qui contiendra une valeur booléenne
"vir" qui contiendra un nombre en "float"

Affichez le résultat dans la console de votre navigateur
*/
var num = 42;
var txt = "Bonjour, je suis une variable";
var bin = true;
var vir = parseFloat('8.956');
// -------------------------- Exercice 2 --------------------------

/*
Ajouter à la variable "num" une valeur de 15
Créer une variable qui concaténera une chaine de caractère à la variable "num"
Créer une variable "number" qui contiendra le nombre 12,54878965587854121 et faire en sorte d'afficher le résultat avec seulement 2 décimales

Affichez le résultat dans la console de votre navigateur
*/

console.log(num + 15);

var caractere = "Le chiffre est : "

console.log(caractere+num)

var number = parseFloat('12.54878965587854121');
var res2 = number.toFixed(2);

console.dir(res2);

// -------------------------- Exercice 3 --------------------------

/*
la variable "texte" contient une chaine de caractère que nous voulons convertir en nombre entier

Afficher le résultat dans une nouvelle variable

Affichez le résultat dans la console de votre navigateur
*/

let texte = "456";

let number2 = texte;
console.log(number2);

// -------------------------- Exercice 4 --------------------------

/*
La variable "numb" qui contient un prix
Le magasin apporte une promotion de 25 % et nous voulons récupérer dans une variable "res" le montant de la réduction

Affichez le résultat dans la console de votre navigateur
*/
var prix = 15;
var res = 0.25;
console.log(prix*res);

// -------------------------- Exercice 5 --------------------------

/*
Une variable contenant une chaine de caractères à besoin d'être inversée pour connaitre le dicton du jour.

Trouver la ou les méthodes qui pourront révéler le résultat

Affichez le résultat dans la console de votre navigateur
*/

let dicton =" suov ceva tios ecrof al euQ";

function reverse(s) {
    return s.split('').reverse().join('');
  }
  
  var sss = reverse(dicton)
  console.log(sss)

// -------------------------- Exercice 6 --------------------------

/*
Vous devez le mot de passe pour terminer votre mission, voici 2 mots que vous devrez couper pour garder que les 4 premieres lettres

Bien sur vous devrez afficher le résultat dans une variable appelée "say_the_magic_word"

Affichez le résultat dans la console de votre navigateur
*/

let phrase1 = "caravane";
let phrase2 = "ibessage";

const str = phrase1;
const str2 = phrase2;
const chars = str.split('');
const chars2 = str2.split('');
console.log(chars[0], chars[1],chars[2], chars[3], chars2[0], chars2[1], chars2[2], chars2[3],);
// Expected output: "k"


// -------------------------- Exercice 7 --------------------------

/*
Nous avons dans la variable un nombre à virgule, veuillez l'arrondir en un entier grâce à une méthode

Affichez le résultat dans la console de votre navigateur
*/

let nb = 14.998988888898888899
console.log(nb.toFixed(2))


// -------------------------- Exercice 8 --------------------------

/*
Dans la variable "texte1" nous avons une erreur, remplacer grâce à une méthode le nom de Jean-Eudes par Pierre-Daniel
*/

let texte1 = "Le chien de Jean-Eudes est extremement gentil et affectueux"


var str3=texte1;

str3=str3.replace("Jean-Eudes", "Pierre-Daniel");
console.log(str3);



// -------------------------- Exercice 9 --------------------------

/*
Afficher dans la console grâce à une méthode le nombre de caractères contenu dans la variable "txt1"
*/

let txt1 = "Bonjour et bienvenue sur les exercices"

// -------------------------- Exercice 10 -------------------------

/*
Afficher dans la console le type de la variable "a"
*/

let a = 15;
console.log(typeof"a")


// ========================== CONDITIONS ===========================

// -------------------------- Exercice 11 -------------------------

/*
Nous voulons tester 3 notes sur 20 dans une condition

Les notes à tester : 
8, 17, 22

Si la note est inferieur à 0, on affichera ce message : 
Pas génial du tout

Si la note est superieure ou égale à 10 on affichera ce message :
Bravo ! Continue comme ça

sinon on affiche
Note incompatible

Stocker les notes dans une variable "note"

Affichez le résultat dans la console de votre navigateur
*/
var note = [8, 17, 22];

for(i=0;i<3;i++){
    if(note[i]<0){
     note = "Pas génial du tout";
    console.log(note);
     } else if(note[i]>=0){
        note = "Bravo ! Continue comme ça";
        console.log(note);
     } else {
        note = "Note incompatible";
        console.log(note);
     }
    
}


// ========================== LES POP-UP ===========================

// -------------------------- Exercice 12 -------------------------

/*
Mettez en place 3 variables contenant des nombres entiers, dans ces variables mettez en place une pop-up demandant d'entrer un nombre et faites en sorte d'afficher le resultat de l'addition de ces 3 variables dans une autre fentre pop-up : Le resultat de l'addition est : ...
*/
var num1 = 2;
var num2 = 5;
var num3 = 7;
let addition = prompt("Combien font : "+num1+" + "+num2+" + "+num3);
alert(addition);



if (addition.toLowerCase() === "14") {
  alert("Le resultat de l'addition est : "+addition+"");
   

} else if(addition.toLowerCase() != "14"){
    alert("Faux, le resultat de l'addition est : "+addition+"");

}

// -------------------------- Exercice 13 -------------------------

/*
Mettez en place une fonction qui fera en sorte d'afficher une pop-up demandant votre nom en cliquant sur un boutton sur le fichier index.html.

Une fois le nom entrer afficher une autre op-up disant "Bonjour ..."
*/

function indiquerNom(){
  
    let nom2 = prompt("Veuillez entrer un nom !");
    alert("Bonjour ! "+nom2);
    
    
}

// ========================== JAVASCRIPT & HTML ===========================

// -------------------------- Exercice 14 -------------------------

/*
Mettez en place une balise <h1> qui accueillera une horloge que vous aller mettre en place en javascript grâce a deux fonctions
*/

function refresh(){
  var t = 1000; // rafraîchissement en millisecondes
  setTimeout('showDate()',t)
}

function showDate() {
  var date = new Date()
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  if( h < 10 ){ h = '0' + h; }
  if( m < 10 ){ m = '0' + m; }
  if( s < 10 ){ s = '0' + s; }
  var time = h + ':' + m + ':' + s
  document.getElementById('horloge2').innerHTML = time;
  refresh();
}


/*
ENTRAINEMENT GITHUB

Vous ferez un repo sur Github sous le nom de "js_votre prenom_exo"

*/







