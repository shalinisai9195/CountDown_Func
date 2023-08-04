const timeH = document.querySelector('h1');
let timeCount = 10;

displayTime(timeCount);

const countDown = setInterval(() => {
    timeCount --;
   displayTime(timeCount);
   // timeCount.innerHTML = `${timeCount}`;

    if(timeCount <=0 || timeCount < 1){
        endCount();
        clearInterval(countDown)
    }

}, 1000);

function displayTime(second){

    const sec = Math.floor(second % 60);
    timeH.innerHTML = `${sec < 10? 0 : ''}${sec}`

}

function endCount(){
    timeH.innerHTML = 'Happy Independence Day.!'
}