function countZeroes(arr,left = 0, right = arr.length-1) {
  
    while (right >= left){
       let middle = Math.floor((left + right)/2);
      
       if (arr[middle] < 0){
        right = middle- 1;
        
      }
      else if(arr[middle] > 0){
        left = middle + 1;
        

    }else{
      if(middle == arr.length- 1 ||  arr[middle + 1]  != 0 )
        return middle + 1;
      else
      left = middle + 1;
       

    }
   
  }
  return -1;
  
}





function findFloor(arr,num,left =0,right=arr.length-1){
 if(left > right) return -1;
 if(num >= arr[right]) return arr[right];

 
    let mid = Math.floor((left + right)/2);

        if (arr[mid] === num) return arr[mid];

        if(mid > 0 && arr[mid -1] <= num && num < arr[mid]){
          return arr[mid -1]
        }
        if(arr[mid] > num){
          return findFloor(arr,num, left, mid -1);
        }

        return findFloor(arr,num, mid + 1, right)


      }
      
   
 
      




function findRotatedIndex(arr,key){
  let side = selectSide(arr);
  if(side > 0 && key >= arr[0] && key <= arr[side -1]){
    return binarySearch(arr,key,0, side -1);
  }
  else {
    return binarySearch(arr, key, side, arr.length-1)
  }

}
    function binarySearch(arr,key,left,right){
      if(arr.length === 0) return -1;
      if(key < arr[left] || key > arr[right]) return -1;
    while (left <= right){
     let middle = Math.floor((left + right)/2)
    if (arr[middle] > key){
      right = middle - 1; 
    }
    else if(arr[middle] < key){
       left = middle + 1;      
    }
    else{
        return middle;
        
    }
    
}
   return -1; 
    }
    

function selectSide(arr){
  if(arr.length === 1 || arr[0] < arr[arr.length -1]) return 0;
  let left = 0;
  let right = arr.length -1;
  while (left <= right){
    let middle = Math.floor((left + right)/2)
  if(arr[middle] > arr[middle +1]) return middle + 1
  else if(arr[left] <= arr[middle]){
    left = middle + 1
  }
  else{
    right = middle - 1
  }
  }

}



function findRotatedCount(arr,left=0, right = arr.length-1){
  if(right < left) return 0;
 let mid = Math.floor((left + right)/2);


    if (mid < right && arr[mid + 1] < arr[mid]){
      return mid + 1;
     
    }

     if(mid > left && arr[mid] < arr[mid -1]){
      return mid
    }

    if(arr[right] > arr[mid]){
      return findRotatedCount(arr, left, mid -1);
    }

    return (arr, mid + 1, right);

  }



function sortedFrequency(arr,num){
   let first = findFirst(arr,num);
   if(first == -1) return first;
  let last = findLast(arr,num);
  console.log(last - first +1, "frequency")
  return last - first + 1;
 

  function findFirst(arr,num,left=0,right=arr.length-1){
    if (right >= left){
      let middle = Math.floor((left + right)/2);
      console.log(arr[middle], "mid")

      if((middle === 0 || num > arr[middle -1]) && arr[middle] === num){
        return middle;
      }

      else if(arr[middle] < num){
        return findLast(arr,num,middle + 1, right)

      }

      else{
        return findLast(arr,num,left,middle -1)
      }
     
  //     else if (arr[middle] < num){
  //      left = middle + 1;
       
  //    }
  //    else{
  //      right = middle -1;
       

  //  }
  
 }
 return -1;
 
}

function findLast(arr, num, left=0, right=arr.length-1){
  if(right >= left){
    let mid = Math.floor((left + right)/2);
    console.log(arr[mid], "mid")
    if((mid === arr.length -1 || num < arr[mid + 1]) && arr[mid] === mid){
      return mid;
    }
    else if (arr[mid] < num  ){
        return findLast(arr, num, left, mid - 1)
    }
    else{
      return findLast(arr,num, mid + 1, right)
    }
  }


//   while (right >= left){
//     let middle = Math.floor((left + right)/2);
   
//     if (arr[middle] < num){
//      left = middle + 1;
     
//    }
//    else if(arr[middle] > num){
//      right = middle - 1;
     

//  }else{
//    if(middle == arr.length- 1 ||  arr[middle + 1]  != num )
//      return middle + 1;
//    else
//    left = middle + 1;
    

//  }

// }
return -1;

}

}
  
   
 
   



module.exports = {countZeroes, findFloor, findRotatedCount, findRotatedIndex, sortedFrequency}