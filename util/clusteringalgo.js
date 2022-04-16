module.exports=(arr1, arr2)=>{
    let d=0;
    for(let i=0;i<arr1.length;i++){
        d+= Math.pow(arr1[i]-arr2[i], 2)
    }
    let val=Math.pow(d, 0.5)/Math.pow(arr1.length, 0.5);
    let threshold=100;
    if (val>threshold  )
        return false
    return true  

}

// arr1=[
//     0,
//     121,
//     297,
//     601,
//     789,
//     1026,
//     1314
// ]
// arr2=[
//     0,
//     177,
//     316,
//     600,
//     792,
//     1027,
//     1395
// ]
// console.log(module.exports(arr1, arr2))

// //13.33