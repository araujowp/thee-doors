
door1 = document.getElementById('door1');
door2 = document.getElementById('door2');
door3 = document.getElementById('door3');

message  = document.getElementById('message');
message2  = document.getElementById('message2');

sorted =  Math.floor(Math.random() * 3) + 1;
firstDoor = 0;
secondDoor = 0;
thirdDoor = 0;

function doorClick(door){
    
    selectedDoor = door.innerText;

    alert('sorteada ' + sorted + ' segunda ' + secondDoor + ' selecionada ' + selectedDoor);
    
    if (firstDoor == 0){
        door.classList.add('door_marked');
        firstDoor = selectedDoor;
        message.textContent = 'Open other door';
        return;
    }
    
    if(firstDoor === selectedDoor){
        door.classList.remove('door_marked');
        firstDoor = 0;
        message.textContent = 'Choose a door';
        return;
    }
    
    if(secondDoor === 0){
        alert('entrou na segunda ');
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