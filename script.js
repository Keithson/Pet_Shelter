/*function Removes target button when clicked */

function btnRemove(){

    let button = document.querySelector('#btn-donate')
    button.style.display='none'
}

/*function adds 1 like to counter of pet profile */

function addLike(id){
    var likecount = document.querySelector(`#${id}`)
    likecount.innerText++
}

/*Functions displays a message when pet is selected from dropdown menu*/
function petSelected(pet){

    alert("You are looking for a: "+ pet )

}


