function titleCase(str) {
  let arr = str.toLowerCase().split(" ");
  let capitalized = arr.map((x) => x.charAt(0).toUpperCase() + x.slice(1,));
  return capitalized.join(" ");
}
