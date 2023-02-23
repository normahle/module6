let myName = "Norma";
let myAge = 18;
let myHairColor = "brown";
let myBirthyear = 2004;

let empty;


//let seven_Zeven = 7;
//let nullValue= null;

//hierboven staan alle initiële variabelen


 document.write("uitkomst van vraag 8.1) "+myAge + "<hr>");
 document.write("uitkomst van vraag 8.2) "+myAge * myBirthyear+ "<hr>");
 document.write("uitkomst van vraag 8.3) "+ Math.ceil(myBirthyear / myAge) + "<hr>");
 document.write("uitkomst van vraag 8.4) "+ Math.max(Math.ceil(myBirthyear / myAge), Math.ceil(myAge / myBirthyear)) + "<hr>");
 document.write("uitkomst van vraag 8.5) "+ (myBirthyear / myAge).toFixed(2) + "<hr>");
 document.write("uitkomst van vraag 8.6) "+ (2,5 * 2,5) + "<hr>");
 document.write("uitkomst van vraag 8.7) "+ Math.sin (Math.PI * 2) + "<hr>");
 document.write("uitkomst van vraag 8.8) "+ (12 / 0) + "<hr>");
 document.write("uitkomst van vraag 8.9) "+ myAge * 2 + "<hr>");
 document.write("uitkomst van vraag 8.10)"+ myAge * 2 + 1 + "<hr>");
 document.write("uitkomst van vraag 8.12) "+ (myAge + 1) + "<hr>");
 document.write("uitkomst van vraag 8.13) "+ (empty * 1) + "<hr>");



 document.write(
    "Tekst van vraag 10.1 <br>"
    + "ik ben een 'brave' student <br>"
    + `${myName} <br>`
    + `${myName.charAt(0)} <br>`
    + `${myName.charAt(myName.length - 1)} <br>`
    + `${myName} ${myAge} <br>`
    + `${myAge} ${myAge} <br>`
    + (myAge + myAge) + "<br><hr>"
);


let myArray = [1,2,3,4,5,6,7,8,9,10]
myArray.push(11)
myArray.reverse()
myArray.pop()
myArray.splice(5,6); 

document.write(
"De array <br>" + myArray + "<br><hr>")

console.log(myArray);
let myArrayLength = myArray.length

for (v of myArray) {
    if (v != 3 && myArray[0] != v) {
        if (v != 7) {
            document.write(`${v} `)
        } else {
            document.write(`${v} ${v} `)
        }
    }
}

myArray [2] = "X"
myArray [3] = myArray [3] + "I"

document.write("<br>" + myArray + "<br><hr>")



function myFunction(waarde1, waarde2) {
    if(waarde1 == waarde2){
      return "<br>Yes";
    };  
    if (waarde1 != waarde2){
      return "<br>No".repeat(10);
    };
  };
  document.write(myFunction("6", 6));
  document.write(myFunction("dit ben ik", myName));
  document.write(myFunction(myName, myName));
  document.write("<br><br>");

let date = new Date()

document.write(date + "<br>")
document.write(date.getUTCMonth() + 1 + "<br>")
document.write(date.getDate())
