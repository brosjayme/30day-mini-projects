function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied"

var automatedAnswer =
"Your account # is " + ( isUserValid(false) ? "1234" : "not available");

function condition () {
    if (isUserValid(true)) {
        return "You may enter";
    } else {
        return "Access denied";
    }
}
var answer2 = condition();





// switch statement
function moveCommand(direction){
    var whatHappens;
    switch (direction) {
        case "forward" :
        whatHappens = "you encounter a monster"
        break;
        case "Back" :
            whatHappens = "you arrived Home"
            break;
            case "right" :
                whatHappens = "you found a river"
                break;
                case "left" :
                    whatHappens = "you ran into a troll"
                    break;
                    default:
                        whatHappens = "please enter a valid direction"
    }
    return whatHappens;
}


// const player = "bobby";
// let experience = 100;
// let wizardLevel = false;

// if (experience > 90) {
//     let wizardLevel = true;
// }


// const obj = {
//     player :'bobby',
//     experience: 100,
//     wizardLevel:false

// }

// const player = obj.player;
// const experience =obj.experience;
// let wizardLevel = obj.wizardLevel;


// const {player, experience} = obj
// let {wizardLevel} = obj


function add (a,b) {
    return a + b
}
const add = (a,b) => {
    a + b;
}

const array = [1, 2, 10, 16];
const double = []
const newArray = array.forEach((num) =>{
    double.push(num * 3);
})
console.log(newArray);



// map filter reduce
const mapArray = array.map((num) => {
    return num
})