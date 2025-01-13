function convertTo12HourClock(time) {
  let hours = time.slice(0, 2);
  const minutes = time.slice(-2);
  if (hours == 12)
    {return `${hours}:${minutes} PM`} 
    else {
      if (hours > 12) {
      return `${hours - 12}:${minutes} PM`;
    } 
      if (hours == 0){
      hours = 12
    }
      if (hours < 10){
      return `${hours[1]}:${minutes} AM`;
      }
    }      
    return `${hours}:${minutes} AM`;
}



module.exports = { convertTo12HourClock };
