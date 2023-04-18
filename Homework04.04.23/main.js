

function quicksort(str) {
    if (str.length <= 1) {
      return str; 
    }
  
    let pivotPoint = str.charAt(Math.floor(Math.random() * str.length)); 
    let left = "";
    let middle = "";
    let right = "";
  
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) < pivotPoint) {
        left += str.charAt(i);
      } else if (str.charAt(i) === pivotPoint) {
        middle += str.charAt(i);
      } else {
        right += str.charAt(i);
      }
    }
  
    return quicksort(left) + middle + quicksort(right); 
  }
  
  let str = "poiuytrewqlkjhgfdsamnbvcxz";
  let sortedStr = quicksort(str);
  console.log(sortedStr.toUpperCase());