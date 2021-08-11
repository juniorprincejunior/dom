function myFunction(x) {
    x.classList.toggle("red-color");
  }
  let Ps5Total = 0;
  let NitendoTotal = 0;
  let IphoneTotal = 0;
  let junior= 0;
  let junior1 = 0;
  let junior2 = 0;
  function totalTout(){
    
    document.getElementById("commande").innerHTML = `<div id="toto" class="hero3">
    <div class="texte"></div>
    <div>
        <p>merci pour votre commande 😊</p>
        <button onclick="remove1()"   classe="btn" type="button" class="btn btn-outline-light">suprimer</button>
        <p style="margin-top: 5px;">total ${junior + junior1 + junior2} $</p>
    </div>
  </div>`
  }
  function addel(){
    
    junior=500
    Ps5Total++
    document.getElementById("removed").style="display:none"
    document.getElementById("retirer").style="display:block"
    // Nitendo();
    Ps5();
    totalTout();
    
  }
  function ad(){
    junior1=250
    NitendoTotal++
    document.getElementById("removed1").style="display:none"
    document.getElementById("retire").style="display:block"
    Nitendo();
    totalTout()
  }

  function addel2(){
    junior2=700
    IphoneTotal++
    // Nitendo();
    document.getElementById("removed2").style="display:none"
    document.getElementById("retir").style="display:block"
    Iphone();
    totalTout();
    
  }

  function Retirer2(){
    IphoneTotal = 0;
    junior2=0;
    // Ps5();
    // addel();
    totalTout()
    document.getElementById("total-Iphone").innerHTML=""
    document.getElementById("retir").style= "display:none;"
    document.getElementById("removed2").style= "display:block;"
  }

  function Retirer(){
    Ps5Total = 0;
    junior=0;
    // Ps5();
    // addel();  
    totalTout()  
    document.getElementById("total-ps5").innerHTML=""
    document.getElementById("removed").style="display:block;"
     document.getElementById("retirer").style="display:none;"
    //document.getElementById("retirer").style= "display:none"
    //document.getElementById("removed").style= "display:block"
    //document.getElementById("removed").style="display:none"
    //document.getElementById("retirer").style="display:block"

  }
  function Re(){
    NitendoTotal = 0;
    junior1=0;
    // Ps5();
    // addel();
    totalTout()
    document.getElementById("total-Nitendo").innerHTML=""

    document.getElementById("removed1").style= "display:block;"
    document.getElementById("retire").style= "display:none;"
  }
  

  function Ps5(){
    document.getElementById("total-ps5").innerHTML= `
    <p>Total ${Ps5Total}</p>
    `;
  }
  function Nitendo(){
    document.getElementById("total-Nitendo").innerHTML= `
    <p>Total ${NitendoTotal}</p>
    `;
  }
  function Iphone(){
    document.getElementById("total-Iphone").innerHTML= `
    <p>Total ${IphoneTotal}</p>
    `;
  }
 
  
document.getElementById("prix6").innerHTML = `<span style="color: white;" class=\'test\' >Prix 500$</span>`;
document.getElementById("prix7").innerHTML = `<span style="color: white;" class=\'test\' >Prix 250$</span>`;
document.getElementById("prix8").innerHTML = `<span style="color: white;" class=\'test\' >Prix 700$</span>`;

function Increment(){
  document.getElementById("removed").style="display:none"
  document.getElementById("retirer").style="display:block"
  junior=0
  Ps5Total++;
  Ps5();
  junior = 500 * Ps5Total
  totalTout()
  
}
function decrement(){
        Ps5Total--;
        if(Ps5Total<=0){
            //junior = 0
            //Ps5Total = 0;
            Retirer();
        }
        
        else{
            junior -= 500
            Ps5()
            
        }
        // addel();
        totalTout()
}
function Increment2(){
  junior1=0
  NitendoTotal++;
  document.getElementById("removed1").style="display:none"
  document.getElementById("retire").style="display:block"
  Nitendo();
  junior1 = 250 * NitendoTotal
  totalTout();
}
function decrement2(){
        NitendoTotal--;
        if(NitendoTotal<=0){
            junior1 = 0;
            NitendoTotal=0
            document.getElementById("total-Nitendo").innerHTML=""
            document.getElementById("removed1").style="display:block"
            document.getElementById("retire").style="display:none"
            
        }
        
        else{
            junior1 -= 250
            Nitendo()
        }
        totalTout();
}
function Increment3(){
  junior2 = 0;
  IphoneTotal++;
  document.getElementById("removed2").style="display:none"
  document.getElementById("retir").style="display:block"
  Iphone();
  junior2 = 700 * IphoneTotal
  totalTout();
}
function decrement3(){

        IphoneTotal--;
        if(IphoneTotal<=0){
          junior2=0;
          IphoneTotal = 0;
          document.getElementById("total-Iphone").innerHTML=""
          document.getElementById("removed2").style="display:block"
          document.getElementById("retir").style="display:none"
        }
        
        else{
            junior2 -= 700
            Iphone()
        }
        totalTout();
}



function remove1(){
  junior= 0;
  junior1=0;
  junior2=0;
  NitendoTotal=0;
  IphoneTotal=0;
  Ps5Total= 0;
  document.getElementById("total-ps5").innerHTML=""
  document.getElementById("total-Nitendo").innerHTML=""
  document.getElementById("total-Iphone").innerHTML=""
    document.getElementById("retirer").style= "display:none"
    document.getElementById("removed").style= "display:block"
  document.getElementById("toto").innerHTML = []
  document.getElementById("toto").classList.remove("hero3");
  document.getElementById("removed1").style="display:block"
  document.getElementById("retire").style="display:none"
  document.getElementById("removed2").style="display:block"
  document.getElementById("retir").style="display:none"
}

