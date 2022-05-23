function makeFriendsList(friends) {
  let result = "";
  for (let a of friends) {
    result += "<li>" + a.firstName + " " + a.lastName + "</li>";
  }
  let ul = document.createElement("ul");
  ul.innerHTML = result;
  return ul;
}


