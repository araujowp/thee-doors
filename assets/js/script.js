
door1 = document.getElementById('door1');
door2 = document.getElementById('door2');
door3 = document.getElementById('door3');

message  = document.getElementById('message');

sorted =  Math.floor(Math.random() * 3) + 1;
console.log('porta escolhida ' + sorted);
firstDoor = 0;
secondDoor = 0;
thirdDoor = 0;
countErrors = 0;
countAttempts = 0; 

const languageRepository = new LanguageRepository();
languageRepository.setLanguage(1);

function doorClick(door){
    
    selectedDoor = door.innerText;

    if (firstDoor === 0){
        door.classList.add('door_marked');
        firstDoor = selectedDoor;
    }

    secondDoor = empityDoor(firstDoor, sorted);
    showLoseDoor(secondDoor);
    setTimeout(function(){
        let firstDoorCorrect = firstDoor == sorted; 

        var answer = confirm(languageRepository.getMessage('change_port'));
        if (answer) {
            if(firstDoorCorrect){
                gameOver(false);
                return;
            }
        } else {
            if(!firstDoorCorrect){
                gameOver(false);
                return; 
            }
        }
        gameOver(true);
        return;        
    },100);
    
}

function calculate(){
    errors = document.getElementById('errors');
    errors.textContent = countErrors;

    attempts = document.getElementById('attempts');
    attempts.textContent = countAttempts;

    sucesses = document.getElementById('successes');
    sucesses.textContent = (((countAttempts - countErrors) / countAttempts) * 100).toFixed(0) + '%';

}

function empityDoor(first, sorted){
    const list  = [1,2,3];
    const fileredList = list.filter(item => item !== Number(first) && item !== Number(sorted));
    return fileredList[0];
}


function gameOver(win){

    if(win){
        message.textContent = languageRepository.getMessage('Congratulatios');
    }else{
        countErrors++;
        message.textContent = languageRepository.getMessage('lose_door') + sorted;
    }

    countAttempts++;
    showLoseDoor(1);
    showLoseDoor(2);
    showLoseDoor(3);
    showCorrectDoor(sorted);
    calculate();
}

function showLoseDoor(doorNumber){
    var doorSelect = document.getElementById('door' + doorNumber);
    doorSelect.classList.add('door_wrong');
}

function showCorrectDoor(doorNumber){
    var doorSelect = document.getElementById('door' + doorNumber);
    doorSelect.classList.add('door_correct');
}


function restartClick(myButton){
    firstDoor = 0;
    secondDoor = 0;
    thirdDoor = 0;
    sorted =  Math.floor(Math.random() * 3) + 1;
    console.log('porta escolhida ' + sorted);
    message.textContent = languageRepository.getMessage('Choose a door');

    door1.classList.remove(...door1.classList);
    door1.classList.add('door','door_face');
    door2.classList.remove(...door2.classList);
    door2.classList.add('door','door_face');
    door3.classList.remove(...door3.classList);
    door3.classList.add('door','door_face');
}

function changeLanguage(language){
    
    languageRepository.setLanguage(language);
    restartClick();

    labelLanguage = document.getElementById('labelLanguage');
    labelLanguage.textContent = languageRepository.getMessage('language');

    labelAttempts = document.getElementById('labelAttempts');
    labelAttempts.textContent = languageRepository.getMessage('Attempts');
    
    labelErrors = document.getElementById('labelErrors');
    labelErrors.textContent = languageRepository.getMessage('Errors');
    
    labelSuccesses = document.getElementById('labelSuccesses');
    labelSuccesses.textContent = languageRepository.getMessage('Successes');


    buttonRestart = document.getElementById('restart');
    buttonRestart.textContent = languageRepository.getMessage('restart')

}
