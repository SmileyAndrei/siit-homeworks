
function twentyNumbers(){
    for(let i = 1; i <= 20; i++) {  
    console.log(i);
   }    
  }
  twentyNumbers();
  
  
  function oddNumbers(){
     for(let i = 1; i <= 20; i++) {
      if (i % 2 === 0) {
        continue;
      }
     console.log(i); 
    }    
  }
   oddNumbers();
  
  
  function arraySum(){
  let array = [1, 2, 3, 4, 5, 6],
      s = array[0];
  for (let i = 1; i <= array.length-1; i++) {
      s = s + array[i];
      }
  console.log(s); 
  }
  arraySum();
    
  
  function maxElements(){
    let arr = [10, 200, 555, 90, 106] ;
    let maxNum = arr[0] ;
    for (let i = 1; i <=arr.length-1; i++) {
      if ( maxNum < arr[i]){
        maxNum = arr[i];
      }
    }
     console.log(maxNum);
  }
   maxElements();
  
  
  function maxElements(){
    let arr = [100, 200, 555, 100, 100, 90, 106, 100] ;
    let manyTimes = 0;
    for (let i = 0; i <=arr.length-1; i++) {
      if ( arr[i] === 100){
        manyTimes++;
      }      
    }
     console.log(manyTimes);
  }
   maxElements();
  
  
  
  
  function nestedLoops(){
     let arrayA = [0, 1, 0, 1];
    let arrayB = [1, 0, 1, 0];
          for (let i=0; i < 2; i++) {
            for (let j=0; j < 1; j++){
                   let str1 = arrayA.join(' ');
                   let str2 = arrayB.join(' ');
                   console.log(str1);
                   console.log('');
                   console.log(str2);
                  }
               console.log('');
             }
  }
   nestedLoops();
  