let a = 10 , b = 0;



let waitingData = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        b = 30;
        resolve(b)
    },10000)
})

waitingData.then((data)=>{
    b=data;
    console.log(a+b);
})