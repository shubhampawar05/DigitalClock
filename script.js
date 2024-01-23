setInterval(gettime,1000)


function gettime(){

    let hrshow = document.querySelector('.hr')
    let minshow = document.querySelector('.min')
    let secshow = document.querySelector('.sec')
    let ampm = document.querySelector('.AmPm')


    let date  = new Date()
    let sec =  date.getSeconds();
    let min = date.getMinutes();
    let hr = date.getHours();
    
    secshow.innerText = sec<10 ? "0"+sec : sec;
    hrshow.innerText =  hr<10 ? "0"+hr : hr;
    minshow.innerText =  min<10 ? "0"+min : min;

    if(hr>12){
        ampm.innerText = "PM";
        minshow.innerText ='0'+(min - 12) 
    }else{
        ampm.innerText = "AM";
    }

    
    
    console.log(sec);
    console.log(min);
    console.log(hr);
}

