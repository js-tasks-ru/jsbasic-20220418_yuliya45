function showSalary(users, age) {
  let spisok = users.filter(item => item.age <= age);

  let arr = spisok.map(item => {
    return item.name + ", " + item.balance;
  });

  return arr.join("\n");

}


