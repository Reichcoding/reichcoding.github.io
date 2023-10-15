var elements = [1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,5,5,5,5,10,10,20];
setRandomElement()

document.getElementById("button-slot").addEventListener("click", play)

function play(){
    if(getBalance()<parseInt(bet1.value)+parseInt(bet3.value)+parseInt(bet5.value)+parseInt(bet10.value)+parseInt(bet20.value)){
        return;
    }
    document.getElementById("button-slot").disabled = true;
    bet1.disabled = true;
    bet3.disabled = true;
    bet5.disabled = true;
    bet10.disabled = true;
    bet20.disabled = true;
    spin1.classList.add("spinning");
    spincount = randInt(elements.length,elements.length*2);
    spins = setInterval(function(){
        spincount--
        setRandomElement();
        if(spincount==0){
            clearInterval(spins);
            victory();
            spin1.classList.remove("spinning");
            document.getElementById("button-slot").disabled = false;
            bet1.disabled = false;
            bet3.disabled = false;
            bet5.disabled = false;
            bet10.disabled = false;
            bet20.disabled = false;
        }
    },25)    
}

function victory(){
    result.hidden = true;
    element = parseInt(spin1.innerText);
    total = 0;
    if(element==1) total +=(element*parseInt(bet1.value))+parseInt(bet1.value);
    if(element==3) total +=(element*parseInt(bet3.value))+parseInt(bet3.value);
    if(element==5) total +=(element*parseInt(bet5.value))+parseInt(bet5.value);
    if(element==10) total +=(element*parseInt(bet10.value))+parseInt(bet10.value);
    if(element==20) total +=(element*parseInt(bet20.value))+parseInt(bet20.value);
    totalbet = parseInt(bet1.value)+parseInt(bet3.value)+parseInt(bet5.value)+parseInt(bet10.value)+parseInt(bet20.value);
    total = total - totalbet;
    replaceResult(total);
    setBalance(getBalance()+total)
}

function setRandomElement(){
    elem = elements[randInt(0,elements.length-1)];
    spin1.innerText=elem;
    spin1.classList.remove("glow1");
    spin1.classList.remove("glow3");
    spin1.classList.remove("glow5");
    spin1.classList.remove("glow10");
    spin1.classList.remove("glow20");
    if(elem == 1){
        spin1.classList.add("glow1");
    }
    if(elem == 3){
        spin1.classList.add("glow3");
    }
    if(elem == 5){
        spin1.classList.add("glow5");
    }
    if(elem == 10){
        spin1.classList.add("glow10");
    }
    if(elem == 20){
        spin1.classList.add("glow20");
    }
}
function replaceResult(res){
    result.classList.remove("winned");
    result.classList.remove("loses");
    if(res>0){
        result.classList.add("winned");
    }else{
        result.classList.add("loses");
    }
    setTimeout(function(){
        result.innerText = `${res>=0?"+":""}${res}р.`
        result.hidden = false;
    },1)
    
}
function randInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
bet1.onchange = function(){if(bet1.value>9999999999999) bet1.value = 9999999999999;if(bet1.value<0|bet1.value=="") bet1.value=0}
bet3.onchange = function(){if(bet3.value>9999999999999) bet3.value = 9999999999999;if(bet3.value<0|bet3.value=="") bet3.value=0}
bet5.onchange = function(){if(bet5.value>9999999999999) bet5.value = 9999999999999;if(bet5.value<0||bet5.value=="") bet5.value=0}
bet10.onchange = function(){if(bet10.value>9999999999999) bet10.value = 9999999999999;if(bet10.value<0|bet10.value=="") bet10.value=0}
bet20.onchange = function(){if(bet20.value>9999999999999) bet20.value = 9999999999999;if(bet20.value<0|bet20.value=="") bet20.value=0}