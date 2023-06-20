const secondhand=document.querySelector(".sec");
const minhand=document.querySelector(".min");
const hourhand=document.querySelector(".hour");


function setDate()
{
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondhand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6)+ 90;
    minhand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourhand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();

/*hamne mins/60*30 is liye kiya hai kyuki jab ghadi ghumti hai to 9 30 pe 9 aur 10 ke beech me hota hai*/