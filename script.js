


//renvoie l'animal "totem" qui représentera l'utilisateur
function returnAnimal() {

//VAR
const animals = 
    [
        'Aigle doré','Béluga','Cerf sika','Delfin à bec blanc', 'Écureuil volant','Faisan doré',
        'Grue couronnée','Hibou des marais','Ibis nippon', 'Jacana indien','Koala','Loup gris',
        'Mandrin','Nourrice royale', 'Orque','Paon bleu','Quetzal resplendissant','Rat des moissons',
        'Singe doré','Tigre de Sibérie','Ursin','Vautour fauve','Wallaby','Xénople','Yack',
        'Zèbre de Grevy'
    ]

let userName = document.querySelector('#user-name');
let nom = String(userName.value);
let nameInitial = nom[0];

//retourne un animal si l'utlisateur à rempli le champs, (Initiale prénom = initiale adjectif)
// sinon retourne une dénomination par défaut "Ce Vénérable" (inside joke)
    if(nom.length !== 0){
        for(el of animals){
            if(nameInitial === el[0]){
                let userAnimal = el;
                return userAnimal;
            }
        }
     } else {
            let userName = "Ce Vénérable";
            return userName;
         }
    };


//renvoie l'adjectif qui qualifiera l'utilisateur 
function returnQuality(){

//VAR
const qualities = 
        [
            'brillant','noble','magnétique','gracieux','vertueux','joyeux','optimiste',
            'rayonnant','raffiné','valeureux','bienveillant'
        ];
let userColor = document.querySelector('#user-color');
let color = String(userColor.value);
let colorInitial = color[0];

//(même principe que le nom, mais avec la couleur choisie et retourne une qualité)
if(color !== "none"){
    for(q of qualities){
        if(colorInitial === q[0]){
            let userQuality = q;
            return userQuality;
        }
    }
        } else {
            let defaultQuality = 'arrogant';
            return defaultQuality;
        }
    };


//renvoie l'action/activité réalisée
function returnAction(){

    //VAR
    let action = String(document.querySelector('#user-action').value);

    //à l'appréciation de l'utilisateur, sinon donne une phrase par défaut
    if(action.length != 0){
        return action;
    } else {
        let defaultAction = 'ne se donne pas la peine de remplir les champs --\'';
        return defaultAction;
    }
};


//boutons:

    //Affichage du formulaire: faire apparaître le formulaire

const startGenerating = document.querySelector('#start');

startGenerating.addEventListener('click',function(){
const fullfillInfo = document.querySelector('#content');
    fullfillInfo.classList.toggle('displayNone');
});


    //Affiche la phrase construite
const generate = document.querySelector('#generate');

generate.addEventListener('click', function(e){
    e.preventDefault()
    // fonction contenant les options choisis par l'utilisateur
    let Action = returnAction();
    let Quality = returnQuality();
    let Animal = returnAnimal();
    
    document.querySelector('#show-pseudo').textContent = `${Animal} ${Quality} ${Action}`;
});


    
//(test)Affichage de "done" quand la réponse est confirmée par l'utilisateur

// let sendColor = document.querySelector('#send-color');
// let sendAction = document.querySelector('#send-action');


// let doneColor = document.querySelector('#color-send');
// let doneAction = document.querySelector('#action-done');

// let sendName = document.querySelector('#send-name');
// let containsName = document.querySelector('#name-done');
// let doneName = containsName.textContent;

// sendName.addEventListener('click',function(e){
//     e.preventDefault()
//     nom = String(userName.value);
//     if(nom.length != 0 /*&& containsName.style.display === 'none'*/){
//         /*containsName.style.display === 'inline';*/
//         doneName = 'fait';
//     } /*else if((nom.length == 0 || nom === " ") && containsName.style.display === 'none'){
//         containsName.style.display === "inline";
//         doneName = "ok";
//     }*/
// });

// sendColor.addEventListener('click',function(){
//       doneColor.textContent = done;
// });

// sendAction.addEventListener('click',function(){
//     doneAction.textContent = done;
// });
