function startgame(){
       

}
var sumofuser=0;
var sumofdealer=0;
function facecardd(value){
        if(value=="K"||value=="Q"||value=="J"){
          return 10;
        }
        else if(value=="A"){
                if(sumofdealer+11<=21){
                        return 11;
                }
                else{
                        return 1;
                }
        }
        else{
                return value;
        }
}
function facecardu(value){
        if(value=="K"||value=="Q"||value=="J"){
          return 10;
        }
        else if(value=="A"){
                if(sumofuser+11<=21){
                        return 11;
                }
                else{
                        return 1;
                }
        }
        else{
                return value;
        }
}
function randomgenerator(){
        let random=Math.floor(Math.random()*52);
        return random; 
}
function randomtype(){
        let random=Math.floor(Math.random()*4);
        return random;
}

var deck=["A",2,3,4,5,6,7,8,9,10,"K","Q","J",
        "A",2,3,4,5,6,7,8,9,10,"K","Q","J",
        "A",2,3,4,5,6,7,8,9,10,"K","Q","J",
        "A",2,3,4,5,6,7,8,9,10,"K","Q","J"];
var type=["C","D","H","S"];
var random2=deck[randomgenerator()];
document.getElementsByClassName("play")[0].addEventListener("click",function(){
        document.getElementsByClassName("play")[0].style.display="none";
        setTimeout(function(){document.getElementsByClassName("letsplay")[0].style.display="inline";},0);
        setTimeout(function(){document.getElementsByClassName("letsplay")[0].style.display="none";},3000);
        let random1=deck[randomgenerator()];
        let random3=deck[randomgenerator()];
        var random4=deck[randomgenerator()];
        document.getElementById("01").setAttribute("src","images/"+random1+type[randomtype()]+".png");
        document.getElementById("08").setAttribute("src","images/"+random3+type[randomtype()]+".png");
        document.getElementById("07").setAttribute("src","images/"+random4+type[randomtype()]+".png");
        sumofdealer=facecardd(random1);
        sumofuser=facecardu(random3)+facecardu(random4);
        if(sumofuser==21){
                document.getElementsByClassName("dealerhandtext")[0].innerHTML="In Dealer's hand : "+sumofdealer;
        document.getElementsByClassName("userhandtext")[0].innerHTML="In Your hand : "+sumofuser;
                document.getElementsById("black").style.display="inline";
        }
        else if(sumofdealer==21){
                document.getElementsByClassName("dealerhandtext")[0].innerHTML="In Dealer's hand : "+sumofdealer;
        document.getElementsByClassName("userhandtext")[0].innerHTML="In Your hand : "+sumofuser;
                document.getElementsByClassName("loser")[0].style.display="inline";
        }
        else if(sumofuser>21){
                document.getElementsByClassName("dealerhandtext")[0].innerHTML="In Dealer's hand : "+sumofdealer;
        document.getElementsByClassName("userhandtext")[0].innerHTML="In Your hand : "+sumofuser;
                document.getElementsByClassName("loser")[0].style.display="inline";
        }
        else if(sumofdealer>21){
                document.getElementsByClassName("dealerhandtext")[0].innerHTML="In Dealer's hand : "+sumofdealer;
        document.getElementsByClassName("userhandtext")[0].innerHTML="In Your hand : "+sumofuser;
                document.getElementsByClassName("winner")[0].style.display="inline";
        }
        else{
        document.getElementsByClassName("dealerhandtext")[0].innerHTML="In Dealer's hand : "+sumofdealer;
        document.getElementsByClassName("userhandtext")[0].innerHTML="In Your hand : "+sumofuser;
        document.getElementsByClassName("hit")[0].style.display="inline";
        hit();
        document.getElementsByClassName("stand")[0].style.display="inline";
        stand();
        }
});
var i=9;
function hit(){
document.getElementsByClassName("hit")[0].addEventListener("click",function(){
        if(sumofuser<21){
                let random5=deck[randomgenerator()];
                document.getElementById(i).style.display="inline";
                document.getElementById(i).setAttribute("src","images/"+random5+type[randomtype()]+".png");
                sumofuser+=facecardu(random5);
                document.getElementsByClassName("userhandtext")[0].innerHTML="In Your hand : "+sumofuser;
                if(sumofuser>21){
                        document.getElementsByClassName("stand")[0].style.display="none";
                        document.getElementsByClassName("hit")[0].style.display="none";
                        document.getElementsByClassName("loser")[0].style.display="inline";
                }
                i++; 
        }
        else if(sumofuser==21){
                document.getElementsById("black").style.display="inline";
        }
        
        else{   
                document.getElementsByClassName("stand")[0].style.display="none";
                document.getElementsByClassName("hit")[0].style.display="none";
                document.getElementsByClassName("loser")[0].style.display="inline";
        }      
});
}
function stand(){
document.getElementsByClassName("stand")[0].addEventListener("click",function(){
        document.getElementsByClassName("stand")[0].style.display="none";
        document.getElementsByClassName("hit")[0].style.display="none";
        let j=3;
        document.getElementById("02").setAttribute("src","images/"+random2+type[randomtype()]+".png");
        sumofdealer+=facecardd(random2);
        document.getElementsByClassName("dealerhandtext")[0].innerHTML="In Dealer's hand : "+sumofdealer;  
        while(sumofdealer<=sumofuser && sumofdealer<21){
                let random5=deck[randomgenerator()];
                document.getElementById("0"+j).style.display="inline";
                document.getElementById("0"+j).setAttribute("src","images/"+random5+type[randomtype()]+".png");
                sumofdealer+=facecardd(random5);
                document.getElementsByClassName("dealerhandtext")[0].innerHTML="In Your hand : "+sumofdealer;
                j++;
        }   
        if(sumofdealer==21){
                document.getElementsByClassName("dealerhandtext")[0].innerHTML="In Your hand : "+sumofdealer;
                document.getElementsByClassName("loser")[0].style.display="inline";
        }
        else if(sumofdealer<21 && sumofdealer>sumofuser){
                document.getElementsByClassName("loser")[0].style.display="inline";
        }
        else{
                document.getElementsByClassName("winner")[0].style.display="inline";
        }
});
}