export default function Time(){
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let hourFormatted = hours % 12;
    if (hourFormatted === 0) {
      hourFormatted = 12;
    }
    
    let minutes = currentTime.getMinutes();
    let minutesFormatted = currentTime.getMinutes();
    if (minutes <= 9) {
      minutesFormatted = `0${minutes}`;
    }
    
    let time = hourFormatted + ":" + minutesFormatted;
    if (hours >= 12) {
        // eslint-disable-next-line
      time = time + " " + "PM";
      // eslint-disable-next-line
    } else {
        // eslint-disable-next-line
      time = time + " " + "AM";
    }
    
    let dayIndex = currentTime.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    
    let day = days[dayIndex];
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    
    let month = months[currentTime.getMonth()];
    let date = currentTime.getDate();
    let year = currentTime.getFullYear();
    
    let newDate = `${day}, ${month} ${date}, ${year}`;
    let newTime = `${time}`;

return (
    <div>
      {newDate}
      <br />
      {newTime}
      </div>
  );
}