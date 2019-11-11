
//question1 

 var array1 =[1, 2, 3, 4, 5] ;
 var array2 =[1, 1, 2, 1, 1] ;
 var array3 =[5, 5, 5, 6]; 
 var array4=[];
 check();
function check(){
    console.log(array1.includes(3) );
    console.log(array2.includes(3) );
    console.log(array3.includes(5) );
    console.log(array4.includes(5)) ;
}
//question 2
function convertToSeconds(x,y){
    hours=x*60*60;
    minutes=y*60;

    second= hours+minutes;
console.log("second "+ second ) 
}

convertToSeconds(1,3);
convertToSeconds(2,0); 
convertToSeconds(0,0); 

// question 3

var  aquarium = {
    filledWithWater: true,
    capacityInGallons: 12,
    numberOfRocks: 5,
    fish: [
            {
                type: 'goldfish' ,
                size: '3.5 inches',
                color: 'golden'
            },
            {
                type: 'puffer',
                size: '4 inches',
                color: 'tan'
            },
            {
                type: 'clown',
                size: '3 inches',
                color: 'orange'
            }
        ]
}
//1
console.log(aquarium.capacityInGallons);
//2
console.log(aquarium.numberOfRocks);
var a = aquarium.numberOfRocks+2;
aquarium.numberOfRocks=a;
console.log(aquarium.numberOfRocks);
//3
console.log(aquarium.fish[2]);
 printobject();

function printobject(){
console.log(aquarium.fish[2].type+"<br>");
console.log(aquarium.fish[2].size+"<br>");
console.log(aquarium.fish[2].color+"<br>");
}
//4

console.log(aquarium.fish[1].size);
//5
console.log(aquarium.fish[0].size);
aquarium.fish[0].size = 4 + " inches"; 
console.log(aquarium.fish[0].size);

//6
aquarium.fish.push({
    type:'starfish',
    size : '5 inches',
    color: 'blue' })

    console.log(aquarium.fish)

    console.log("//////////////////////////");
//     //Question 4
 json =(require('./data'));
 //console.log(json);
 var mydata = JSON.parse(json);
//console.log(mydata);
//alert(mydata[0].people.name);

console.log("//////////////////////////");
let logData = function(data) {
for (i=0;i<=mydata.people.length;i++){
    console.log(mydata.people);
}}

logData();
console.log("//////////////////////////");
logNames=function() {
    for (var i=0; i< mydata.people.length;i++){
        console.log("name="+mydata.people[i].name);
    }
};

logNames();
console.log("//////////////////////////");
let logNameEyes = function() {
    for (var i=0; i< mydata.people.length;i++){
        console.log("name= "+mydata.people[i].name +" eyecolor = "+mydata.people[i].eye_color);
      
    }
};
logNameEyes();
console.log("//////////////////////////");
let logByMass = function() {
    for (var i=0; i< mydata.people.length;i++){
    if(mydata.people[i].mass>75){
            console.log(mydata.people[i].name);
    }
}
};
logByMass();
console.log("//////////////////////////");
////////////////////////////////////////////////bouns 1///////////////////////////
function randomnum(num){
    console.log( Math.floor(Math.random() * num) + 0 );
}
randomnum(6);
randomnum(10);
////////////////////////////////////////////////bouns 2///////////////////////////

function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2020));
console.log(leapyear(1800));
console.log(leapyear(2000));
console.log(leapyear(2019));
