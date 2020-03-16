`use strict`

var form =document.getElementById("form");
var label1 =document.createElement('lable');

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
label1.textContent=date;
label1.setAttribute("id","cssthing");
form.appendChild(label1);

var breakline =document.createElement("br");
form.appendChild(breakline);
var label2 =document.createElement('label');
label2.setAttribute("class","labels");
label2.textContent="What do you want to get done today?";
form.appendChild(label2);

var breakline =document.createElement("br");
form.appendChild(breakline);

var input1=document.createElement('input');
input1.setAttribute('type','text');
input1.setAttribute('id','input1');
input1.setAttribute('class',"inputs");
input1.textContent="Studying,reading, dancing...";
form.appendChild(input1);

var breakline =document.createElement("br");
form.appendChild(breakline);

var label3 =document.createElement('label');
label3.setAttribute("class","labels");
label3.textContent="Date";
form.appendChild(label3);

var breakline =document.createElement("br");
form.appendChild(breakline);

var input2=document.createElement('input');
input2.setAttribute('type','Date');
input2.setAttribute('class',"inputs");
input2.setAttribute('id','input2');
input2.textContent="Studying,reading, dancing...";
form.appendChild(input2);

var breakline =document.createElement("br");
form.appendChild(breakline);

var submit =document.createElement('input');
submit.setAttribute('id','sub');
submit.setAttribute('type','submit');
form.appendChild(submit);


// list work

var sec=document.getElementById('list');
var ol=document.getElementById("Ollist");

var dong= [];

function Date(date) {
    this.date=date;
    this.doing=doing;
    dong.push(this);
}

submit.addEventListener('click',handleCurrentData);

function handleCurrentData(event) {
    var doingg=event.target.doing.value;
    var date =event.target.date.value;    
    
    new dong[doing,data] 
}