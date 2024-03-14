let Box = document.getElementsByClassName("Box");

setInterval(()=>{
     let MyDate = new Date();
     Box[0].innerText = MyDate.getHours();
     Box[1].innerText = MyDate.getMinutes();
     Box[2].innerText = MyDate.getSeconds();
},1000);