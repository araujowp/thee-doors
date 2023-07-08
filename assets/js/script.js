
door1 = document.getElementById('door1');
door2 = document.getElementById('door2');
door3 = document.getElementById('door3');

message  = document.getElementById('message');
message2  = document.getElementById('message2');

sorted =  Math.floor(Math.random() * 3) + 1;
firstDoor = 0;
secondDoor = 0;
thirdDoor = 0;
countErrors = 0;
countAttempts = 0; 

message2.innerText = sorted;

function doorClick(door){
    
    selectedDoor = door.innerText;

    if (firstDoor === 0){
        door.classList.add('door_marked');
        firstDoor = selectedDoor;
        message.textContent = 'Open a empty door';
        return;
    }
    
    if(firstDoor === selectedDoor && secondDoor === 0 ){
        door.classList.remove('door_marked');
        firstDoor = 0;
        message.textContent = 'Choose a door';
        return;
    }
    
    if(secondDoor === 0){
        secondDoor = selectedDoor;
        
        if(selectedDoor == sorted){
            gameOver(false);
            return;
        }else{
            console.log('mostra a porta ' + secondDoor);
            showLoseDoor(secondDoor);
            setTimeout(function(){
                let firstDoorCorrect = firstDoor == sorted; 
                console.log(' firstDoorCorrect ' + firstDoorCorrect);
        
                var answer = confirm("do you want to change port?");
                if (answer) {
                    console.log('eu troquei');
                    message2.innerText = 'quero trocar';
                    if(firstDoorCorrect){
                        gameOver(false);
                        return;
                    }
                    console.log("quero continuar");
                } else {
                    console.log('não troquei');
                    message2.innerText = 'não quero trocar';
                    if(!firstDoorCorrect){
                        gameOver(false);
                        return; 
                    }
                }
                gameOver(true);
                return;        
            },100);
        }

    }
    
}

function calculate(){
    console.log('calculei' + countErrors);
    errors = document.getElementById('errors');
    errors.textContent = countErrors;

    attempts = document.getElementById('attempts');
    attempts.textContent = countAttempts;

    sucesses = document.getElementById('successes');
    sucesses.textContent = (((countAttempts - countErrors) / countAttempts) * 100).toFixed(0) + '%';

}

function lastDoor(first, second){
    const list  = [1,2,3];
    const fileredList = list.filter(item => item !== first && item !== second);
    return fileredList[0];
}


function gameOver(win){

    if(win){
        message.textContent = 'Congratulatios';
    }else{
        countErrors++;
        message.textContent = 'Loose the correct door is ' + sorted;
    }

    countAttempts++;
    showLoseDoor(1);
    showLoseDoor(2);
    showLoseDoor(3);
    showCorrectDoor(sorted);
    calculate();
    console.log('vitoria ' + win);
}

function showLoseDoor(doorNumber){
    var doorSelect = document.getElementById('door' + doorNumber);
    console.log('errada ' + doorNumber);
    doorSelect.classList.add('door_wrong');
}

function showCorrectDoor(doorNumber){
    var doorSelect = document.getElementById('door' + doorNumber);
    console.log('porta certa ' + doorNumber);
    doorSelect.classList.add('door_correct');
}


function restartClick(myButton){
    firstDoor = 0;
    secondDoor = 0;
    thirdDoor = 0;
    sorted =  Math.floor(Math.random() * 3) + 1;
    message2.innerText = sorted;

    door1.classList.remove(...door1.classList);
    door1.classList.add('door','door_face');
    door2.classList.remove(...door2.classList);
    door2.classList.add('door','door_face');
    door3.classList.remove(...door3.classList);
    door3.classList.add('door','door_face');
}