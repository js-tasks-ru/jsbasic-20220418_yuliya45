function sumSalary(salaries) {
  let s = 0;
  for (let key in salaries) {
    if (typeof salaries[key] == "number" && isFinite(salaries[key])) {
      s = s + salaries[key];
    }
  }
  return s;
}
