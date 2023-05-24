
door1 = document.getElementById('door1');
door2 = document.getElementById('door2');
door3 = document.getElementById('door3');

message  = document.getElementById('message');
message2  = document.getElementById('message2');

sorted =  Math.floor(Math.random() * 3) + 1;
firstDoor = 0;
secondDoor = 0;
thirdDoor = 0;

message2.innerText = sorted;

function doorClick(door){
    
    selectedDoor = door.innerText;

    if (firstDoor === 0){
        door.classList.add('door_marked');
        firstDoor = selectedDoor;
        message.textContent = 'Open other door';
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
            loose(door);
        }
        door.classList.add('door_empty');
        message2.innerText = 'porta vazia';
        return;
    }
    
    if(selectedDoor == sorted){
        door.classList.add('door_correct');
        message.textContent = 'Win correct door';
        return;
    }else{
        loose(door);
    }

}

function loose(door){
    door.classList.add('door_wrong');
    message.textContent = 'Lose wrong door';
}

function restartClick(myButton){
    firstDoor = 0;
    secondDoor = 0;
    thirdDoor = 0;
    door1.classList.remove(...door1.classList);
    door1.classList.add('door','door_face');
    door2.classList.remove(...door2.classList);
    door2.classList.add('door','door_face');
    door3.classList.remove(...door3.classList);
    door3.classList.add('door','door_face');
}