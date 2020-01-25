function play(){
    let option = ['Rock', 'Paper', 'Scissors']; 
    let computer = option[Math.floor(option.length * Math.random())];
    let user = option[Math.floor(option.length * Math.random())];
    console.log('Computer choice: "', (computer), '"');
    console.log('User choice: "', (user), '"');
    
      if (computer === 'Rock' && user === 'Paper'){
        console.log ('User wins !');
      } else if(computer === 'Paper' && user === 'Scissors') {
        console.log ('User wins !');
      } else if(computer === 'Scissors' && user === 'Rock') {
        console.log ('User wins !');
      } else if(computer === user ) {
        console.log ('Equality !');
      } else {
        console.log ('Computer wins !')
      }
  }
  
  play();