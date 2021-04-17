

// const indexNumeros = (arrayNumeros, target) =>{
//     let comp = 0;
//     for(let i = 0; i < arrayNumeros.length; i++){

//         comp = target - arrayNumeros[i];
//         for(let x = 0; x < arrayNumeros.length; x++){
            
//             if((i!=x)&&(comp === arrayNumeros[x])){
//                 return [i,x];break;
//             }
//         } 
//     }
    
// }


let targetSumExistInTwoNumber = (arr, target)=>{
    let numObjects ={};
    let pairs = [];

    for(let i = 0; i < arr.length; i++){
             2
        let num = arr[i];
        //console.log(num);

        numObjects[num] = i;
    }
    //console.log(numObjects);
       //[3:0 , , , 1:3 ]
    for(let i = 0; i < arr.length; i++){
         // 0           0   -0
        let diff = target - arr[i];

        if(numObjects.hasOwnProperty(diff)){
            if(numObjects[diff] != i){
            delete numObjects[arr[i]];
            delete numObjects[diff];
            pairs.push(arr[i],diff);
            }
        }
    }
console.log(pairs);
}

//targetSumExistInTwoNumber([2, 7, 1, 5],9);
targetSumExistInTwoNumber([3, -1, 0, 1],0);