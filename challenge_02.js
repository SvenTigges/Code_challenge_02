/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

*/

/* Getränke-Challenge */

let firstName = prompt("Bitte den Namen eingeben:");
let age = parseFloat(prompt("Bitte das Alter eingeben:"));  //convert zu Zahl 

switch (true) {
    case (age> 0 && age< 5): // && und Verküupung 
        console.log(firstName + " ist " + age + " und darf somit Milch trinken");
        break;
    case (age> 6 && age< 12):
        console.log(firstName + " ist " + age + " und darf somit Milch und Saft trinken");
        break;
    case (age> 13 && age< 17):
        console.log(firstName + " ist " + age + " und darf somit Milch,Saft und Cola trinken");
        break;
    case (age> 18):
        console.log(firstName + " ist " + age + " und darf somit Milch,Saft,Cola und Wein trinken");
        break;
    default:
        console.log("error");
        break;
}





