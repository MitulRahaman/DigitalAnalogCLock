//finding elements
let hour = document.querySelector('#hour');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');

let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');
let ampm = document.querySelector('#ampm');

setInterval(() => {

    //analog clock
    let day = new Date();
    let gethr = day.getHours() * 30;
    let getmin = day.getMinutes() * 6;
    let getsec = day.getSeconds() * 6;

    hour.style.transform = `rotateZ(${gethr + (getmin / 12)}deg)`;
    min.style.transform = `rotateZ(${getmin}deg)`;
    sec.style.transform = `rotateZ(${getsec}deg)`;

    //digital clock
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let ap = h >= 12 ? 'PM' : 'AM';

    //convert 24 hours to 12 hours clock
    if (h > 12) {
        h = h - 12;
    }

    //adding 0 brfore 10
    h = (h < 10 ? '0' + h : h);
    m = (m < 10 ? '0' + m : m);
    s = (s < 10 ? '0' + s : s);

    hr.innerHTML = h;
    mn.innerHTML = m;
    sc.innerHTML = s;
    ampm.innerHTML = ap;
})

