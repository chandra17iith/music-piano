const keys=document.querySelectorAll(".keys");
function music(str){
    let audio=new Audio(str);
    audio.play();
}

keys.forEach(element => {
    element.addEventListener("click",function(e){
        if(this.innerHTML==="<span>a</span>") {
             music("tunes/tunes/a.wav");
        }
        else if(this.innerHTML==="<span>s</span>") {
            music("tunes/tunes/s.wav");
           
        }
        else if(this.innerHTML==="<span>d</span>") {
            music("tunes/tunes/d.wav");
           
        }
        else if(this.innerHTML==="<span>f</span>") {
            music("tunes/tunes/f.wav");
           
        }
        else if(this.innerHTML==="<span>g</span>") {
            music("tunes/tunes/g.wav");
           
        }
        else if(this.innerHTML==="<span>h</span>") {
           music("tunes/tunes/h.wav");
           
        }
        else if(this.innerHTML==="<span>j</span>") {
           music("tunes/tunes/j.wav");
          
        }
        else if(this.innerHTML==="<span>k</span>") {
            music("tunes/tunes/k.wav");
            
        }
        else if(this.innerHTML==="<span>l</span>") {
            music("tunes/tunes/l.wav");
            
        }
        else if(this.innerHTML==="<span>;</span>") {
            music("tunes/tunes/;.wav");
            
        }
        else if(this.innerHTML==="<span>w</span>") {
            music("tunes/tunes/w.wav");
           
        }
        else if(this.innerHTML==="<span>e</span>") {
            music("tunes/tunes/e.wav");
            
        }
        else if(this.innerHTML==="<span>u</span>") {
            music("tunes/tunes/u.wav");
            
        }
        else if(this.innerHTML==="<span>t</span>") {
            music("tunes/tunes/t.wav");
            
        }
        else if(this.innerHTML==="<span>o</span>") {
            music("tunes/tunes/o.wav");
           
        }
        else if(this.innerHTML==="<span>p</span>") {
            music("tunes/tunes/p.wav");
            
        }
    })
});

document.addEventListener("keydown",function(e){
    if(e.key==="a") {
        music("tunes/tunes/a.wav");
   }
   else if(e.key==="s") {
       music("tunes/tunes/s.wav");
      
   }
   else if(e.key==="d") {
       music("tunes/tunes/d.wav");
      
   }
   else if(e.key==="f") {
       music("tunes/tunes/f.wav");
      
   }
   else if(e.key==="g") {
       music("tunes/tunes/g.wav");
      
   }
   else if(e.key==="h") {
      music("tunes/tunes/h.wav");
      
   }
   else if(e.key==="j") {
      music("tunes/tunes/j.wav");
     
   }
   else if(e.key==="k") {
       music("tunes/tunes/k.wav");
       
   }
   else if(e.key==="l") {
       music("tunes/tunes/l.wav");
       
   }
   else if(e.key===";") {
       music("tunes/tunes/;.wav");
       
   }
   else if(e.key==="w") {
       music("tunes/tunes/w.wav");
      
   }
   else if(e.key==="e") {
       music("tunes/tunes/e.wav");
       
   }
   else if(e.key==="u") {
       music("tunes/tunes/u.wav");
       
   }
   else if(e.key==="t") {
       music("tunes/tunes/t.wav");
       
   }
   else if(e.key==="o") {
       music("tunes/tunes/o.wav");
      
   }
   else if(e.key==="p") {
       music("tunes/tunes/p.wav");  
   }
})