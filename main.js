// let fruit = prompt("Which fruit to buy?"," ");
// let bag={};
// bag[fruit]=5;
// document.write(bag[fruit]);

// //reserved words
// let obj={
//     for:12,
//     let: 2,
//     return: 3
// }
// for(let prop in obj){
//     document.write("<br>");
//     document.write(prop);
    
// }
// let laptops={
//     brand: "hp",
//     price: "1066$",
//     ramSize: "16gb",
//     Harddrive:"500GB",
//     color: undefined
// }

// document.write(laptops.color);
// document.write("<br>");
// document.write("color" in laptops);
// let phonecodes={
//     "49":"Germany",
//     "41":"pakistan",
//     "1":"USA",
//     "42":"Britain"
// }
// document.write("Phone codes sorted in ascending order");
// for(let code in phonecodes){
   
//     document.write("<br>");
//     document.write(code);
// }
// Object.assign(laptops,phonecodes);
// for(let props in laptops){
// document.write("<br>");
// document.write(props);
// }


alert("Welcome to ComputerLand");
let computerData ={
    hp: {
        ram: "8GB",
        Harddrive: "500GB",
        GraphicsCard: true,
        precisionTouchpad: true,
        price:" $2000"
    },
    dell: {
        ram: "8GB",
        Harddrive: "860GB",
        GraphicsCard: true,
        precisionTouchpad: false,
        price:" $2200"
    },

    acer: {
        ram: "16GB",
        Harddrive: "860GB",
        GraphicsCard: true,
        precisionTouchpad: false,
        price:" $2800"
    },
    apple:{
        ram: "8GB",
        Harddrive: "860GB",
        GraphicsCard: true,
        precisionTouchpad: true,
        price:" $2800"
    },
  
}
let userChoice = prompt("we have laptops from hp, apple, acer and dell. Enter your favorite brand to know details");

for (let props in computerData){
    if(userChoice==props){
        document.write("We have following laptop available from your favorite brand: ");
        document.write("<br>");
        document.write("The brand of Laptop u entered: "+props);
        document.write("<br>");
        document.write(" RAM size: "+computerData[props].ram);
        document.write("<br>");
        document.write("Hard drive capacity: "+computerData[props].Harddrive);
        document.write("<br>");
        document.write("Graphics card present: "+computerData[props].GraphicsCard);
        document.write("<br>");
        document.write("Precision Touchpad Present: "+computerData[props].precisionTouchpad);
        document.write("<br>");
        document.write(" Price: "+computerData[props].price);
        document.write("<br>");

    }
   
}

//Destructuring
var obj = {
    a: 1,
    b:2,
    c:3,
    d: 4
}
let a_1=obj['a'];
let b_1=obj.b;
let c_1=obj.c;
document.write(a_1,b_1,c_1);