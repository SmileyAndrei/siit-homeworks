function getGamesList(){
    return fetch('https://games-world.herokuapp.com/games')
    .then(res => res.json());
}

//getGamesList().then(console.log)

async function displayGamesList(){
    const div1 = document.getElementById('js_gameList');
    try{
        const games = await getGamesList();        
        const header = document.createElement('header');    
        header.innerHTML = 'We have the below games';

        const addButton = document.createElement('Button');
        addButton.innerHTML = "Add new game";   
        addButton.className = 'addButton'; 
        addButton.addEventListener('click', (e) =>{
            addnewGame();
        })
        
        const resButton = document.createElement('Button');
        resButton.innerHTML = "Reset game list";   
        resButton.className = 'resButton'; 
        resButton.addEventListener('click' , (e) => {
            resetGameList();
        })

        div1.append(header);
        div1.append(addButton);
        div1.append(resButton);

        
    
        
        for (let game of games){
            const gamesList = document.createElement('div');
            div1.append(gamesList);

            const idGame = document.createElement('p');
            const deleteButton = document.createElement('Button');
            const titleGame = document.createElement('a');
            const descriptionGame = document.createElement('p');
            const imgGame = document.createElement('img');

            
            gamesList.append(titleGame, idGame, deleteButton, descriptionGame, imgGame);

            idGame.innerHTML = `ID: ${game._id}`;
            titleGame.innerHTML = `${game.title}`;
            titleGame.href = `https://games-world.herokuapp.com/games/${game._id}`;
            titleGame.className = 'title';

            descriptionGame.innerHTML = `Description: ${game.description}`;
            imgGame.src = `${game.imageUrl}`;
            imgGame.className = 'picture'; 

            deleteButton.innerHTML = "DELETE GAME";   
            deleteButton.className = 'delButton';   

            deleteButton.addEventListener('click' , (e) => {
                deleteGame() ;
            })
        }
    } catch(e) {
        const errorMessage = document.createElement('p');
        div1.append(errorMessage);
        errorMessage.innerHTML = 'Problem with server';
    }     
}
displayGamesList();

function deleteGame() {
    const gameId = document.querySelector('.title'); 
    fetch(gameId, {
        method: 'DELETE'
    }).then(() => {
        console.log('Deleted')
        location.reload();
    })
}

function resetGameList() {
    fetch('https://games-world.herokuapp.com/regenerate-games', {
        method: 'GET'
    }).then(() => {
        console.log('Reset')
        location.reload();
    })
}

function addnewGame(){
    // const newGame = new Headers();
    // newGame.append("Content-Type", "application/x-www-form-urlencoded");

    const gameData = new URLSearchParams();
    gameData.append("title", "Re-Volt®");
    gameData.append("releaseDate", "1333929600");
    gameData.append("genre", "Radio control car race");
    gameData.append("publisher", "UbisoftAcclaim Entertainment ");
    gameData.append("imageUrl", "https://lh3.googleusercontent.com/proxy/u-k-LrZQ0IZU_sQSYaeoCCM7YDWDvKlKWLNz_g0OJ4MDDmHhIHb9f0dt7QnAW1kifpfiBS5yDF0LUIfcIPHKyGOh-BuUbPCyxIC10SCZWZF7Ig");
    gameData.append("description", "Yes, Re-Volt is that old school radio control car racing themed video game released by Acclaim Entertainment in 1999. The fact there still is an active community playing this game proofs that this was and is a great game.The racing competitions we play are mostly stock tracks (such as Toys In The Hood, Ghost Town, Toytanic, Toy World and Botanic Garden) and monthly changing custom tracks (new ones and classics such as PetroVolt, Venice, Rooftops, Helios, Re-Ville, RVTemple etc), normally using the Toyeca car (considered the best Re-Volt stock car based on handling and speed, although some prefer other cars like Adeon, Humma or Cougar).");

    const requestOptions = {
        method: 'POST',
        // headers: newGame,
         body: gameData,
        // redirect: 'follow'
    };

    fetch("https://games-world.herokuapp.com/games", requestOptions)
        .then(res => res.text())
        .then(result => console.log(result))
        .then(() => {
            console.log('Reset')
            location.reload();
    })
    .catch(error => console.log('error', error));

}