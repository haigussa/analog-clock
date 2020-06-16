const secondIndicator = document.getElementById('second-indicator')
const minuteIndicator = document.getElementById('minute-indicator')
const hourIndicator = document.getElementById('hour-indicator')

setInterval(() => {
    const now = new Date()
    // convert time units into degrees

    // 60 seconds * 6 = 360 deg => full circle
    const secondsDeg = now.getSeconds() * 6;
    
    // 12 hours * 30 = 360 deg => full circle
    const minutesDeg = now.getMinutes() * 6
    
    // 60 minutes * 6 = 360 deg => full circle
    const hoursDeg = now.getHours() * 30;
    secondIndicator.style.transform = `rotate(${secondsDeg}deg)`
    minuteIndicator.style.transform = `rotate(${minutesDeg}deg)`
    hourIndicator.style.transform = `rotate(${hoursDeg}deg)`
}, 1000)