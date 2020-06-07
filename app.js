const secondIndicator = document.getElementById('second-indicator')
const minuteIndicator = document.getElementById('minute-indicator')
const hourIndicator = document.getElementById('hour-indicator')

    setInterval(() => {
        const now = new Date()
        // convert time units into degrees
        const secondsDeg = now.getSeconds() * 6;
        const minutesDeg = now.getMinutes() * 6
        const hoursDeg = now.getHours() * 15;
        secondIndicator.style.transform = `rotate(${secondsDeg + 90}deg)`
        minuteIndicator.style.transform = `rotate(${minutesDeg + 90}deg)`
        hourIndicator.style.transform = `rotate(${hoursDeg + 90}deg)`
    }, 1000)