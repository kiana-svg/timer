let min= +prompt("enter min")
          let sec= +prompt("enter sec")

        if (0<=min<=60 ||0<=sec<=60){
          let timer= setInterval(function(){
            console.log(`the time is${min},${sec--}`);
            if(sec<0){
                min--
                sec=59}
                if(min===0 && sec===-1){
                    clearInterval(timer)
                }
            

          },1000,)
}