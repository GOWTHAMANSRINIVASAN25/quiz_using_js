let content,pos=0,A,B,C,D,cor=0,choice;
let arr=[];
let q=[["What is the first name of the javascript?","Kotlin","Mocha","Livescript","C"],
["Who is the father of java","James Gossling","Dennis Ritchie","Pratt","A"],
["What is the object in javascript","Primitive-datatype","Non-primitive datatype","None","B"],
["Array is used to store the...","Complex-data","homogeneous data","heterogenous data","B"]
];
function display(){
content=document.getElementById("board");
if(pos>=q.length){
content.innerHTML="<h1 id='rt'>You got "+ cor+" out of "+q.length+"</h1><br><br>";
document.getElementById("status").innerHTML="Quiz completed";
content.innerHTML+="<button onclick='reset()' id='re' style='color:blue'>Retake</button>";
pos=0;
cor=0;
return false;
}
document.getElementById("status").innerHTML="question "+(pos+1)+" of "+q.length;
let ques=q[pos][0];
A=q[pos][1];
B=q[pos][2];
C=q[pos][3];
content=document.getElementById("board");
content.innerHTML="<h2>"+ques+"</h2>";
content.innerHTML+="<input type='radio' value='A' name='c'>"+A+"<br><br>";
content.innerHTML+="<input type='radio' value='B' name='c'>"+B+"<br><br>";
content.innerHTML+="<input type='radio' value='C'name='c'>"+C+"<br><br>";
content.innerHTML+="<button onclick='next()' id='ki' >submit</button>";
content.innerHTML+="<button onclick='previous()' id='previous'>previous</button>";
if(pos==0){
document.getElementById("previous").style.display='none';
}
}
function next(){
var x;
choice=document.getElementsByName("c");
for(let i=0;i<choice.length;i++){
if(choice[i].checked){
x=choice[i].value;
}
}
if(x==q[pos][4]){
cor++;
}
pos++;
display();
}
function previous(){
pos--;
if(pos>=0){
display();
}
}
function reset(){
pos=0;
display();
}