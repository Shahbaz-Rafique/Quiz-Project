
function start(){
if(document.getElementById('ischeck').checked==false){
alert('Kindly check the instruction Box');
}
else{
   document.getElementById('instruction').style.display='none';
    let x=9;
    let y=59;
    let time;
    var M=setInterval(() => {
      a=new Date();
      document.getElementById('times').style='color:darkblue';
      time=a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
      if(x>=0){
      document.getElementById('times').innerHTML="Time Left: " +"0"+ x + ":" +y;
      y=y-1;
      }
      if(x<0){
        clearInterval(M);
        document.getElementById('times').innerHTML="Quiz Time End";
        document.getElementById('quiz').style.display='none'; 
        document.getElementById('T').style.display='block';
        document.getElementById('TH').style.display='block';
        document.getElementById('TE').style.display='block';
      }
      if(x==0){
        document.getElementById('times').style='color:red';
      }
      if(y==0){
          y=00;
          x=x-1
          y=59
          }
    }, 1000);
    document.getElementById('quiz').style.display='block';
    document.getElementById('questionnumber').style.display='block';
}
}
let count=0;
let changeit=false;
function nextquestion(){
  if(issave==false && ischecked==true){
  alert('Kindly Save your Answer');
  }
  if(ischecked==false || (ischecked==true && issave==true)){
  count=count+1;
  document.getElementById('save').innerHTML='Save';
  document.getElementById('a_text').style='background-color:white';
  document.getElementById('b_text').style='background-color:white';
  document.getElementById('c_text').style='background-color:white';
  document.getElementById('d_text').style='background-color:white';
  issave=false;
  ischecked=false;
  changeit=true;
  }
}


const quiz=[{
  No:"Question 1",
  Question: "Area of Pakistan is?",
  a: `7,89283 KM Sqaure`,
  b: `7,96096 KM Sqaure`,
  c: `5,68273 KM Sqaure`,
  d: `6,27382 KM Sqaure`,
  correct: 'B',
},
{
  No:"Question 2",
  Question: "Longest River of the Earth is?",
  a: "Indus River",
  b: "Amazon River",
  c: "Nile River",
  d: "Cango River",
  correct: 'C',
},
{
  No:"Question 3",
  Question: "Pakistani Brother Who Invented First Computer Virus are?",
  a: "Amjad Farooq & Basat",
  b: "Yassin & Shahid",
  c: "Mubeen & Muhammad Akram",
  d: "Mubashir & Atta ul Rehman",
  correct: 'A',
},
{
  No:"Question 4",
  Question:"Which Animal is known as the Ship of desert?",
  a: "Sheep",
  b: "Goat",
  c: "Elephant",
  d: "Camel",
  correct: 'D',
},
{
  No:"Question 5",
  Question: "1 Gigabytes are equal to",
  a:"1024 KB",
  b: "1024 MB",
  c: "1024 TB",
  d: "1024 KB/s",
  correct: 'B',
},
{
  No: "Question 6",
  Question : "In which Year Pakistan become Republic?",
  a: "1948",
  b: "1951",
  c: "1956",
  d: "1958",
  correct: 'C',
},
{
  No: "Question 7",
  Question : "How many Languages are spoken in Pakistan?",
  a: "32",
  b: "30",
  c: "28",
  d: "26",
  correct: 'A',
},
{
  No: "Question 8",
  Question : "Microsoft Word is an example of?",
  a: "An operating System",
  b: "A processing Device",
  c: "Application Software",
  d: "Input Device",
  correct: 'C',
},
{
  No: "Question 9",
  Question : `When is the "World Day of International Justice" Observed`,
  a: "july 15",
  b: "july 17",
  c: "july 19",
  d: "july 21",
  correct: 'B',
},
{
  No: "Question 10",
  Question : `Which is smallest country of the world?`,
  a: "Australia",
  b: "Vatican City",
  c: "Denmark",
  d: "Namibia",
  correct: 'B',
},
{
  No: "Question 11",
  Question : `HTTP is the abbreviation of`,
  a: "HypoTranfer Text Power",
  b: "HyphenTool Transfer Protocol",
  c: "HyperText Transfer Protocol",
  d: "HyperTransfer Text Protocol",
  correct: 'C',
},
{
  No: "Question 12",
  Question : `Which is the old name of PIA?`,
  a: "Orient Airways",
  b: "Pakistan Airways",
  c: "Pakistan Airline",
  d: "Public Airline",
  correct: 'A',
},
{
No: "Question 13",
Question : `Who designed Pakistan National Flag?`,
a: "Master Altaf Hussain",
b: "Ameer Ud Din Kidwai",
c: "Rehmat Ali",
d: "Zahoorul Hassan",
correct: 'B',
},
{
No: "Question 14",
Question : `In which year Pakistan Win Cricket World Cup?`,
a: "1992",
b: "1996",
c: "2000",
d: "2004",
correct: 'A',
},
{
No: "Question 15",
Question : `When did Pakistan win Olympic gold medal in Hockey for the first time?`,
a: "1956",
b: "1960",
c: "1964",
d: "1968",
correct: 'B',
},
{
No: "Question 16",
Question : `In which Ocean 'Bermuda Triangle' region is located?`,
a: "Pacific",
b: "Arctic",
c: "Atlantic",
d: "Arabian",
correct: 'C',
},
{
No: "Question 17",
Question : `Which Country is Known As 'Land of Rising Sun'?`,
a: "Japan",
b: "New Zealand",
c: "Fiji",
d: "China",
correct: 'A',
},
{
No: "Question 18",
Question : `How many countries were participated as founding members of United Nations'?`,
a: "45",
b: "50",
c: "51",
d: "75",
correct: 'C',
},
{
No: "Question 19",
Question : `Which is the national game of Pakistan'?`,
a: "Cricket",
b: "Football",
c: "Tennis",
d: "Hockey",
correct: 'D',
},
{
No: "Question 20",
Question : `Dead Sea is located between which two countries'?`,
a: "Jordan and Sodan",
b: "Jordan and Israel",
c: "Turkey and UAE",
d: "UAE and Egypt",
correct: 'B',
},
]
if(count==0){
  document.getElementById('questionno').innerHTML=quiz[0].No;
  document.getElementById('question').innerHTML=quiz[0].Question;
  document.getElementById('a_text').innerHTML=quiz[0].a;
  document.getElementById('b_text').innerHTML=quiz[0].b;
  document.getElementById('c_text').innerHTML=quiz[0].c;
  document.getElementById('d_text').innerHTML=quiz[0].d;
}
var issave=false;
var ischecked=false;
function ischeck(){
  if(document.getElementById('a').checked==true || document.getElementById('b').checked==true || document.getElementById('c').checked==true || document.getElementById('d').checked==true){
    ischecked=true;
  }
}
function change(){
  if(changeit==true){
  document.getElementById('a').checked=false;
  document.getElementById('b').checked=false;
  document.getElementById('c').checked=false;
  document.getElementById('d').checked=false;
  document.getElementById('a').disabled=false;
  document.getElementById('b').disabled=false;
  document.getElementById('c').disabled=false;
  document.getElementById('d').disabled=false;
  document.getElementById('questionno').innerHTML=quiz[count].No;
  document.getElementById('question').innerHTML=quiz[count].Question;
  document.getElementById('a_text').innerHTML=quiz[count].a;
  document.getElementById('b_text').innerHTML=quiz[count].b;
  document.getElementById('c_text').innerHTML=quiz[count].c;
  document.getElementById('d_text').innerHTML=quiz[count].d;
  changeit=false;
  }
  if(count==19){
    document.getElementById('submit').disabled=true;
  }
}

function submitquiz(){
  if(count==19){
    submit();
  }
}
function colorchange(id){
  document.getElementById(id).style='color:darkblue';
}
function colorchange1(id){
  document.getElementById(id).style='color:white';
}
var Attemptcounter=0;
var correctans=0;
function submit(){
  count=count+1;
  alert('Your Quiz Has been Submitted');
    document.getElementById('T').style.display='none';
    document.getElementById('TH').style.display='none';
    document.getElementById('TE').style.display='none';
    document.getElementById('quiz').style.display='none';
    document.getElementById('back').style.display='none';
    document.getElementById('Showresult').style.display='block';
    document.getElementById('attempted').innerHTML='Attempted Questions: ' + (Attemptcounter);
    document.getElementById('unattempted').innerHTML='Unattempted Questions: ' + (20-Attemptcounter);
    document.getElementById('correct').innerHTML='Correct Answers: ' + (correctans);
    document.getElementById('marks').innerHTML='Your Score: ' + ((correctans*4)-(20-correctans-(20-Attemptcounter)));
}

function answers(){
  if(document.getElementById('a').checked && document.getElementById('a').value==quiz[count].correct){
    correctans=correctans+1;
  }
  if(document.getElementById('b').checked && document.getElementById('b').value==quiz[count].correct){
    correctans=correctans+1;
  }
  if(document.getElementById('c').checked && document.getElementById('c').value==quiz[count].correct){
    correctans=correctans+1;
  }
  if(document.getElementById('d').checked && document.getElementById('d').value==quiz[count].correct){
    correctans=correctans+1;
  }
}

function showcorrectans(){
  document.getElementById('BCB').style.display='block';
  document.getElementById('Showresult').style.display='none';
  document.getElementById('chartback').style.display='none';
  document.getElementById('showans').style.display='block';
  document.getElementById('back').style.display='block';
  document.getElementById('CA').style.display='block';
  let text="<ul>";
  text+= `<h1>Correct Answers</h1>`;
  for(var M=0;M<quiz.length;M++){
  text+=`<li><b>Question ${M+1}:</b></li>`;
  text+=`<li><b>${quiz[M].Question}:</b></li>`;
  text+=`<li>A. ${quiz[M].a}</li>`;
  text+=`<li>B. ${quiz[M].b}</li>`;
  text+=`<li>C. ${quiz[M].c}</li>`;
  text+=`<li>D. ${quiz[M].d}</li>`;
  if(myanswers[M]==undefined){
    text+=`<li><span style="background-color:gray">You have skip this Question.</span><li>`;
    text+=`<li><span style="background-color:green">Correct Answer: ${quiz[M].correct}</span></li>`;
  }
  if(myanswers[M]==quiz[M].correct){
    text+=`<li><span style="background-color:green">Your Answer is Correct: ${myanswers[M]}</span></li>`;
  }
  else if(myanswers[M]!=undefined && myanswers[M]!=quiz[M].correct){
    text+=`<li><span style="background-color:red">Your Answer is wrong: ${myanswers[M]}</span></li>`;
    text+=`<li><span style="background-color:green">Correct Answer: ${quiz[M].correct}</span></li>`;
  }
  }
  text+="\n";
  text+="</ul>";
  document.getElementById('showans').innerHTML=text;
  myanswers[M]='U';
}
function backs(){
  document.getElementById('BCB').style.display='none';
  document.getElementById('container').style.display='none';
  document.getElementById('chartback').style.display='none';
  document.getElementById('Showresult').style.display='block';
}
function backs1(){
  document.getElementById('BCB').style.display='none';
  document.getElementById('showans').style.display='none';
  document.getElementById('CA').style.display='none';
  document.getElementById('back').style.display='none';
  document.getElementById('container').style.display='none';
  document.getElementById('Showresult').style.display='block';
}

var myanswers=[]
function saved(){
let ans;
document.getElementById('save').innerHTML='Saved';
if(document.getElementById('a').checked){
document.getElementById('a_text').style='background-color:lightgreen';
ans='A';
}
if(document.getElementById('b').checked){
  document.getElementById('b_text').style='background-color:lightgreen';
  ans='B';
}
if(document.getElementById('c').checked){
  document.getElementById('c_text').style='background-color:lightgreen';
  ans='C';
}
if(document.getElementById('d').checked){
  document.getElementById('d_text').style='background-color:lightgreen';
  ans='D';
}
if(document.getElementById('a').checked ==false && document.getElementById('b').checked==false && document.getElementById('c').checked==false && document.getElementById('d').checked==false){
  alert('Kindly Select One Choice Then Save');
}
else{
Attemptcounter=Attemptcounter+1;
myanswers.push(ans);
issave=true;
document.getElementById('a').disabled=true;
document.getElementById('b').disabled=true;
document.getElementById('c').disabled=true;
document.getElementById('d').disabled=true;
}
}
var chartcount=0;
function makechart(){
document.getElementById('BCB').style.display='block';
document.getElementById('Showresult').style.display='none';
document.getElementById('back').style.display='none';
document.getElementById('chartback').style.display='block';
document.getElementById('container').style.display='block';
anychart.onDocumentReady(function() {
  // set the data
  var data = [
      {x: "Correct", value: correctans},
      {x: "Wrong", value: (20-(20-Attemptcounter)-correctans)},
      {x: "Unattempted", value: (20-Attemptcounter)},
  ];

  // create the chart
  var chart = anychart.pie();

  // set the chart title
  chart.title("Quiz Details");

  // add the data
  chart.data(data);

  // display the chart in the container
  chart.container('container');
  if(chartcount==0){
  chart.draw();
  }
chartcount++;
});
}
function printresult(){
  window.print();
}