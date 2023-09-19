let Myuser = null;   //global variable

const purple_block = document.getElementById('purple_block');
const blue_block = document.getElementById('blue_block');
const red_block = document.getElementById('red_block');
const brown_block = document.getElementById('brown_block');

const add_user = document.getElementById('add_user');
const delete_user = document.getElementById('delete_user');

const move_to_purple = document.getElementById('move_to_purple');
const move_to_blue = document.getElementById('move_to_blue');
const move_to_red = document.getElementById('move_to_red');
const move_to_brown = document.getElementById('move_to_brown');

const username = document.getElementById('username');

function adduser(){
    if (Myuser == null){
        Myuser = document.createElement('div');    
        Myuser.className =  "My_user";             
        Myuser.setAttribute('id','Myuser') ;
        Myuser.innerHTML = username.value;          
        salmon_block.append(Myuser);
        username.disabled = true;                  
        add_user.disabled = true;
        delete_user.disabled = false;             
    }
    
    
}
// Function to delete user name
function deleteuser(){
    
    
    if (Myuser != null){
        Myuser.remove();
        username.disabled = false; 
        add_user.disabled = false;
        username.value = '';
        Myuser = null;
    }
    delete_user.disabled = true;
}
add_user.addEventListener('click',adduser);
delete_user.addEventListener('click',deleteuser);

function movetopurple(){
    if (Myuser != null){
        purple_block.append(Myuser);
    }
}
function movetoblue(){
    if (Myuser != null){
        blue_block.append(Myuser);
    }
}
function movetored(){
    if (Myuser != null){
        red_block.append(Myuser);
    }
}
function movetobrown(){
    if (Myuser != null){
        brown_block.append(Myuser);
    }
}

btn_add_user.addEventListener("click", addUserToProject);
btn_delete_user.addEventListener("click", deleteUserFromProject); 

move_to_purple.addEventListener('click',movetopurple);
move_to_blue.addEventListener('click',movetoblue);
move_to_red.addEventListener('click',movetored);
move_to_brown.addEventListener('click',movetobrown);