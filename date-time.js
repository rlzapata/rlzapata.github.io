setInterval(() => {
    // Get current date
    current_date = new Date()

    // Time
    hour = current_date.getHours() % 12 || 12
    minutes = current_date.getMinutes()

    document.getElementById('js_time').textContent = `${hour.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}`

    // AMPM
    if (current_date.getHours() < 12 || 0){
        ampm_dis = 'AM'
    } else {
        ampm_dis = 'PM'
    }

    document.getElementById('js_ampm').textContent = ampm_dis

    // Weekday
    weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    day_num = current_date.getDay()

    document.getElementById('js_weekday').textContent = weekdays[day_num]

    // Date
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    day_num = current_date.getDate()
    month_num = current_date.getMonth()
    year_num = current_date.getFullYear()

    document.getElementById('js_date').textContent = `${months[month_num]} ${day_num.toString().padStart(2,'0')}` // , ${year_num}`
})