
door1 = document.getElementById('door1');
door2 = document.getElementById('door2');
door3 = document.getElementById('door2');

message  = document.getElementById('message');

sorted =  Math.floor(Math.random() * 3) + 1;
firstDoor = 0;
secondDoor = 0;
thirdDoor = 0;

function doorClick(door){
    selectedDoor = door.innerText;
    
    if (firstDoor == selectedDoor){
        door.classList.remove('door_marked');
        firstDoor = 0;
    }else{
        door.classList.add('door_marked');
        firstDoor = selectedDoor;
    }
    message.textContent = 'Open a door';

}