
const text = document.querySelector("#textmsg")
const password = document.querySelector('#password')
const result = document.querySelector("#result")
var clutter = "";
var parinam=  "";



function encryption(){
   document.querySelector("#encrypt-btn").addEventListener("click",function(){
      var pass=document.getElementById("password").value
      console.log(pass);
      var input=document.getElementById("txtmsg").value
      console.log(input);
      
   
     var str=input.split("")
     console.log(str);

     str.forEach(element => {
      clutter += `&#128${(element.charCodeAt())}`
     });     
     //console.log(clutter)
     document.querySelector("#result").innerHTML =clutter;

     var dataarr=[];

     if(JSON.parse(localStorage.getItem('data1'))){
      dataarr=JSON.parse(localStorage.getItem('data1'));
      dataarr.push({"pass":pass,"input":input,"clutter":clutter})
     }

     else{
     dataarr=[{"pass":pass,"input":input,"clutter":clutter}];
     }
     localStorage.setItem('data1',JSON.stringify(dataarr))   

   })
}

function decryption(){
   document.querySelector("#decrypt-btn").addEventListener("click", function(){
   var clutter2= '';
   var input2=document.querySelector("#emojimsg").value
   var finalpass=document.querySelector("#finalpassword").value

   var user=JSON.parse(localStorage.getItem('data1'))
   console.log(user)

  var str2=input2.split("")
  console.log(str2)
   str2.forEach(element => {
      clutter2 += `&#${(element.codePointAt(0))} `  
   });
   console.log(clutter2)
   var i;
   
   for(let i of user){
      if(i.clutter == clutter2){
         found=i
         console.log(i)
      }
   }
   
   if(i.clutter === clutter2) {
      console.log("hii")
      document.querySelector("#result").style.display=`block`
      document.querySelector("#result").style.color=`#eee`
      document.querySelector("#result").innerHTML=found.input

   }else{
      document.querySelector("#result").style.display=`block`
      document.querySelector("#result").style.color=`red`
      document.querySelector("#result").innerHTML="wrong password"
   }

   })
}

function btnclicking(){

   document.querySelector("button").addEventListener("click", function () {
      document.querySelector("#result").style.display = "block"
      // console.log(localStorage.getItem("password"))
      // console.log(localStorage.getItem("emojis"))
  })

   document.querySelector("#dec-btn").addEventListener("click",function(){
      document.querySelector("#result").style.display="none"
    document.querySelector("#decryption").style.display="block"
    document.querySelector("#encryption").style.display="none"
    document.querySelector("#dec-btn").style.backgroundColor="rgba(128, 128, 128, 0.582)"
    document.querySelector("#enc-btn").style.backgroundColor= "rgba(128, 128, 128, 0.162)"
    document.querySelector("#main>h1 span img").style.rotate="270deg"
 })

   document.querySelector("#enc-btn").addEventListener("click",function(){       
    document.querySelector("#decryption").style.display="none"
    document.querySelector("#result").style.display="none"
    document.querySelector("#encryption").style.display="block"
    document.querySelector("#enc-btn").style.backgroundColor="rgba(128, 128, 128, 0.582)"
    document.querySelector("#dec-btn").style.backgroundColor= "rgba(128, 128, 128, 0.162)"
    document.querySelector("#main>h1 span img").style.rotate="90deg"
   })
   
   document.querySelector("#encrypt-btn").addEventListener("click",function(){
      document.querySelector("#result").style.display="block"
   })
   document.querySelector("#decrypt-btn").addEventListener("click",function(){
      document.querySelector("#result").style.display="block"

   })
   
}
encryption();
decryption();
btnclicking();
