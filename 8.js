//               switch and break
// if input === 1 ,"y","yes" : print "continue.."
// if input === 0 ,"n","no" : print "end"
// else === print "wrong inpurt"
let input = "1";
if (input === 1) {
  console.log("continue");
} else if (input === "y") {
  console.log("continue");
} else if (input === "yes") {
  console.log("continue");
} else if (input === 0) {
  console.log("End");
} else if (input === "n") {
  console.log("End");
} else if (input === "no") {
  console.log("End");
} else {
  console.log("wrong output");
}

switch (input) {
  case 1:
    console.log("continue");
    break;
  case "y":
    console.log("continue");
    break;
  case "yes":
    console.log("continue");
    break;
  case 0:
    console.log("End");
    break;
  case "n":
    console.log("End");
    break;
  case "no":
    console.log("End");
    break;
  default:
    console.log("wrong input");
}
