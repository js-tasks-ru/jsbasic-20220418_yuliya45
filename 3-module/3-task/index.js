//Первоначально сделала вот так, но потом попыталась сделать через map и join
/*function camelize(str) {
  let arr = str.split("-");
  let result = arr[0]; //my

  for (let i = 1; i < arr.length; i++) {
    result = result + arr[i].charAt(0).toUpperCase() + arr[i].substr(1);
  }
  return result;
}
*/



function camelize(str) {
  let arr = str.split("-");
  let result = "";

  let newArr = arr.map((item, index) => {
    if (index != 0) {
      return item.charAt(0).toUpperCase() + item.substr(1);
    }
    else {
      return item;
    }
  });


  return newArr.join("");
}
