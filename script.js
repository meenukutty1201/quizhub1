
let q1=false;
let q2=false;
let q3=false;
let q4=false;
let q5=false;
let q6=false;
let q7=false;
let q8=false;
let q9=false;
let q10 = false;

let timeover=false;

var timeleft=100;
var downloadTimer=setInterval(function(){
   if(timeleft<=0)
   {
      document.querySelectorAll('.option').forEach(function(opt){
         opt.style.display="none";
         timeover=true;
      });

      document.querySelectorAll('.option1').forEach(function(opt){
         opt.style.display="none";

      });


      document.querySelectorAll('textarea').forEach(function(opt){
         opt.style.display="none";

      });


      document.querySelectorAll('.match1').forEach(function(opt){
         opt.style.display="none";

      });

      document.querySelectorAll('.done').forEach(function(opt){
         opt.style.display="none";

      });


      console.log('first timer')  
      clearInterval(downloadTimer);
      
      document.getElementById("timer").innerHTML="0";
      window.location.href="result.html";
   }
   else
   {
      document.getElementById("timer").innerHTML=timeleft;
   }
   
   timeleft-=1;
},1000);



var sessionName = sessionStorage.getItem('Username');
var Username = JSON.parse(sessionName);


localStorage.setItem('UserName', Username);


//firstvideo

function option1()
{
   
   var optionb = document.getElementById("optionb");
   document.getElementById("optiona").style.display="none";
   document.getElementById("optionc").style.display="none";
   document.getElementById("optiond").style.display="none";
   var videopage2=document.getElementById('videopage2').scrollIntoView();
   optionb.style.backgroundColor="grey";
   optionb.style.color="black";
   q1 = true;
   }


function option2()
{
   
   var optiona=document.getElementById("optiona");
   document.getElementById("optionb").style.display="none";
   document.getElementById("optionc").style.display="none";
   document.getElementById("optiond").style.display="none";
   var videopage2=document.getElementById('videopage2').scrollIntoView();
   optiona.style.backgroundColor="grey";
   q1 = true;
   optiona.style.color="black";
}

function option3()
{
   
   var optionc=document.getElementById("optionc");
   document.getElementById("optionb").style.display="none";
   document.getElementById("optiona").style.display="none";
   document.getElementById("optiond").style.display="none";
   var videopage2=document.getElementById('videopage2').scrollIntoView();
   optionc.style.backgroundColor="grey";
   optionc.style.color="black";
   q1 = true;
  
}

function option4()
{
   
   var optiond=document.getElementById("optiond");
   document.getElementById("optionb").style.display="none";
   document.getElementById("optionc").style.display="none";
   document.getElementById("optiona").style.display="none";
   var videopage2=document.getElementById('videopage2').scrollIntoView();
   optiond.style.backgroundColor="grey";  
   optiond.style.color="black";
   q1 = true;

}

//secondvideo

function option5()
{
   
   var optiong= document.getElementById("optiong");
   document.getElementById("optione").style.display="none";
   document.getElementById("optionf").style.display="none";
   document.getElementById("optionh").style.display="none";
   var videopage3=document.getElementById('videopage3').scrollIntoView();
   optiong.style.backgroundColor="grey";
   optiong.style.color="black";
    q2 = true;
}

function option6()
{
   
   var optione = document.getElementById("optione");
   document.getElementById("optiong").style.display="none";
   document.getElementById("optionf").style.display="none";
   document.getElementById("optionh").style.display="none";
   var videopage3=document.getElementById('videopage3').scrollIntoView();
   optione.style.backgroundColor="grey";
   optione.style.color="black";
    q2 = true;
}

function option7()
{
   
   var optionf= document.getElementById("optionf");
   document.getElementById("optione").style.display="none";
   document.getElementById("optiong").style.display="none";
   document.getElementById("optionh").style.display="none";
   var videopage3=document.getElementById('videopage3').scrollIntoView();
   optionf.style.backgroundColor="grey";
   optionf.style.color="black";
    q2 = true;
}


function option8()
{
   
   var optionh= document.getElementById("optionh");
   document.getElementById("optione").style.display="none";
   document.getElementById("optionf").style.display="none";
   document.getElementById("optiong").style.display="none";
   var videopage3=document.getElementById('videopage3').scrollIntoView();
   optionh.style.backgroundColor="grey";
   optionh.style.color="black";
    q2 = true;
}


//third video

function option9()
{
   
   var optioni=document.getElementById("optioni");
   document.getElementById("optionj").style.display="none";
   document.getElementById("optionk").style.display="none";
   document.getElementById("optionl").style.display="none";
   var videopage4=document.getElementById('videopage4').scrollIntoView();
   optioni.style.backgroundColor="grey";
   optioni.style.color="black";
   q3 = true;
}

function option10()
{
   
   var optionj=document.getElementById("optionj");
   document.getElementById("optioni").style.display="none";
   document.getElementById("optionk").style.display="none";
   document.getElementById("optionl").style.display="none";
   var videopage4=document.getElementById('videopage4').scrollIntoView();
   optionj.style.backgroundColor="grey";
   optionj.style.color="black";
   q3 = true;
}


function option11()
{
   
   var optionk=document.getElementById("optionk");
   document.getElementById("optionj").style.display="none";
   document.getElementById("optioni").style.display="none";
   document.getElementById("optionl").style.display="none";
   var videopage4=document.getElementById('videopage4').scrollIntoView();
   optionk.style.backgroundColor="grey";
   optionk.style.color="black";
   q3 = true;
}

function option12()
{
   
   var optionl=document.getElementById("optionl");
   document.getElementById("optionj").style.display="none";
   document.getElementById("optionk").style.display="none";
   document.getElementById("optioni").style.display="none";
   var videopage4=document.getElementById('videopage4').scrollIntoView();
   optionl.style.backgroundColor="grey";
   optionl.style.color="black";
   q3 = true;
}

var textInput = '';

//fourth video
document.getElementById('img2').addEventListener('click',function event()
{
   marker.style.display='block';
   document.getElementById('img2').style.display="none";
   document.getElementById('img1').style.display="none";
   
   var videopage4=document.getElementById('videopage5').scrollIntoView();
   
   q4=true;
  
});


//fifth video

function option13()
{
   
   var optionm=document.getElementById("optionm");
   document.getElementById("optionn").style.display="none";
   document.getElementById("optiono").style.display="none";
   document.getElementById("optionp").style.display="none";
   var videopage6=document.getElementById('videopage6').scrollIntoView();
   optionm.style.backgroundColor="grey";
   optionm.style.color="black";
   q5 = true;
}

function option14()
{
   
   var optionn=document.getElementById("optionn");
   document.getElementById("optionm").style.display="none";
   document.getElementById("optiono").style.display="none";
   document.getElementById("optionp").style.display="none";
   var videopage6=document.getElementById('videopage6').scrollIntoView();
   optionn.style.backgroundColor="grey";
   optionn.style.color="black";
   q5 = true;
}

function option15()
{
   
   var optiono=document.getElementById("optiono");
   document.getElementById("optionn").style.display="none";
   document.getElementById("optionn").style.display="none";
   document.getElementById("optionp").style.display="none";
   var videopage6=document.getElementById('videopage6').scrollIntoView();
   optiono.style.backgroundColor="grey";
   optiono.style.color="black";
   q5 = true;
}

function option16()
{
   
   var optionp=document.getElementById("optionp");
   document.getElementById("optionn").style.display="none";
   document.getElementById("optiono").style.display="none";
   document.getElementById("optionm").style.display="none";
   var videopage6=document.getElementById('videopage6').scrollIntoView();
   optionp.style.backgroundColor="grey";
   optionp.style.color="black";
   q5 = true;
}


//sixth video

function option17()
{
   
   var optionq=document.getElementById("optionq");
   document.getElementById("optionr").style.display="none";
   document.getElementById("options").style.display="none";
   document.getElementById("optiont").style.display="none";
   var videopage7=document.getElementById('videopage7').scrollIntoView();
   optionq.style.backgroundColor="grey";
   optionq.style.color="black";
   q6 = true;
}

function option18()
{
   
   var optionr=document.getElementById("optionr");
   document.getElementById("optionq").style.display="none";
   document.getElementById("options").style.display="none";
   document.getElementById("optiont").style.display="none";
   var videopage7=document.getElementById('videopage7').scrollIntoView();
   optionr.style.backgroundColor="grey";
   optionr.style.color="black";
   q6 = true;
}

function option19()
{
   
   var options=document.getElementById("options");
   document.getElementById("optionr").style.display="none";
   document.getElementById("optionq").style.display="none"; 
   document.getElementById("optiont").style.display="none";
   var videopage7=document.getElementById('videopage7').scrollIntoView();
   options.style.backgroundColor="grey";
   options.style.color="black";
   q6 = true;
}

function option20()
{
   
   var optiont=document.getElementById("optiont");
   document.getElementById("optionr").style.display="none";
   document.getElementById("options").style.display="none";
   document.getElementById("optionq").style.display="none";
   var videopage7=document.getElementById('videopage7').scrollIntoView();
   optiont.style.backgroundColor="grey";
   optiont.style.color="black";
   q6 = true;
}

//seventh section

function option21()
{
   
   var optionu=document.getElementById("optionu");
   document.getElementById("optionv").style.display="none";
   document.getElementById("optionw").style.display="none";
   document.getElementById("optionx").style.display="none";
   var videopage8=document.getElementById('videopage8').scrollIntoView();
   optionu.style.backgroundColor="grey";
   optionu.style.color="black";
   q7 = true;
}

function option22()
{
   
   var optionv=document.getElementById("optionv");
   document.getElementById("optionu").style.display="none";
   document.getElementById("optionw").style.display="none";
   document.getElementById("optionx").style.display="none";
   var videopage8=document.getElementById('videopage8').scrollIntoView();
   optionv.style.backgroundColor="grey";
   optionv.style.color="black";
   q7 = true;
}

function option23()
{
   
   var optionw=document.getElementById("optionw");
   document.getElementById("optionv").style.display="none";
   document.getElementById("optionu").style.display="none";
   document.getElementById("optionx").style.display="none";
   var videopage8=document.getElementById('videopage8').scrollIntoView();
   optionw.style.backgroundColor="grey";
   optionw.style.color="black";
   q7 = true;
}

function option24()
{
   
   var optionx=document.getElementById("optionx");
   document.getElementById("optionv").style.display="none";
   document.getElementById("optionw").style.display="none";
   document.getElementById("optionu").style.display="none";
   var videopage8=document.getElementById('videopage8').scrollIntoView();
   optionx.style.backgroundColor="grey";
   optionx.style.color="black";
   q7 = true;
}


//tenth section

function option33()
{
   
   var optionsva=document.getElementById("optionsva");
   document.getElementById("optioname").style.display="none";
   document.getElementById("optionasa").style.display="none";
   document.getElementById("optionama").style.display="none";
   optionsva.style.backgroundColor="grey";
   optionsva.style.color="black";
   q10 = true;
}

function option34()
{
   
   var optioname=document.getElementById("optioname");
   document.getElementById("optionsva").style.display="none";
   document.getElementById("optionasa").style.display="none";
   document.getElementById("optionama").style.display="none";
   optioname.style.backgroundColor="grey";
   optioname.style.color="black";
   q10 = true;
}

function option35()
{
   
   var optionasa=document.getElementById("optionasa");
   document.getElementById("optionme").style.display="none";
   document.getElementById("optionva").style.display="none";
   document.getElementById("optionma").style.display="none";
   optionasa.style.backgroundColor="grey";
   optionasa.style.color="black";
   q10 = true;
}

function option36()
{
   
   var optionama=document.getElementById("optionama");
   document.getElementById("optionme").style.display="none";
   document.getElementById("optionsa").style.display="none";
   document.getElementById("optionva").style.display="none";
   optionama.style.backgroundColor="grey";
   optionama.style.color="black";
   q10 = true;
}


/*eight section*/
function sura()
{
   
   var sura=document.getElementById("sura");
   console.log(sura);
   document.getElementById("atm").style.display="none";
   document.getElementById("kuruvi").style.display="none";
   document.getElementById("villu").style.display="none";
   var videopage9=document.getElementById('videopage9').scrollIntoView();
   sura.style.backgroundColor="grey";
   q8 = true;
}

function atm()
{
   
   var atm=document.getElementById("atm");
   document.getElementById("sura").style.display="none";
   document.getElementById("kuruvi").style.display="none";
   document.getElementById("villu").style.display="none";
   var videopage9=document.getElementById('videopage9').scrollIntoView();
   atm.style.backgroundColor="grey";
   q8 = true;
}

function kuruvi()
{
   
   var kuruvi=document.getElementById("kuruvi");
   document.getElementById("atm").style.display="none";
   document.getElementById("sura").style.display="none";
   document.getElementById("villu").style.display="none";
   var videopage9=document.getElementById('videopage9').scrollIntoView();
   kuruvi.style.backgroundColor="grey";
   q8 = true;
}

function villu()
{
   var villu=document.getElementById("villu");
   document.getElementById("atm").style.display="none";
   document.getElementById("kuruvi").style.display="none";
   document.getElementById("sura").style.display="none";
   var videopage9=document.getElementById('videopage9').scrollIntoView();
   villu.style.backgroundColor="grey";
   q8 = true;
}


//ninth section
function matches1()
{
   var qsn1=document.getElementById("qsn1");
   var match1=document.getElementById("matches1");

   
   var videopage10=document.getElementById('videopage10').scrollIntoView();
  
   q9 = true;
}

function matches2()
{
   var qsn2=document.getElementById("qsn2");
   var match2=document.getElementById("matches2");

   

   
   var videopage10=document.getElementById('videopage10').scrollIntoView();
   
   q9 = true;
}

function matches3()
{
   var qsn3=document.getElementById("qsn3");
   var match3=document.getElementById("matches3");

   
   
   var videopage10=document.getElementById('videopage10').scrollIntoView();
   
   q9= true;
}





let answers = [];
document.querySelector(".submit").addEventListener("click",function(){ 
   if(timeover)
   {
      alert('time is over');
      window.location.href = "index.html";
   }
   else
   {
      if (q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8 && q9 && q10 )  
    {
      document.querySelectorAll(".q1").forEach(function(q){
         if (q.style.backgroundColor=="grey") {
            answers.push(q.innerHTML);
         }
      });
      answers.push(textInput);
      sessionStorage.setItem('answers', JSON.stringify(answers));
      window.location.href = `result.html`;
   }
   else
   {
    alert("Answer all the questions");
   }
   }
});