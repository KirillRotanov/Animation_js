const root = document.getElementById("root");
setInterval(printTime, 1000);

function printTime(){
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    if (m<10) {
        m = '0' + m;
    }
    if (h<10) {
        h = '0' + h;
    }
    if (s<10) {
        s = '0' + s;
    }
    
    const h1 = document.createElement('h1');
    const time = document.createTextNode(`${h} : ${m} : ${s}`);
        
    
    h1.append(time);
    if (root.firstElementChild) {
        root.replaceChild(h1, root.firstElementChild);
    }else{
   root.append(h1);
    }
}