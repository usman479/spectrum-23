export function compareDate(date:string){
    const da = new Date(date);
    const currentDate = new Date();
    return da.getTime() < currentDate.getTime();
  }
  
  function tConvert (time:string) {
      // Check correct time format and split into components
      // @ts-ignore
      time = time.toString().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
    
      if (time.length > 1) { // If time format correct
        time = time.slice (1);  // Remove full string match value
        // @ts-ignore
        time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
        // @ts-ignore
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      // @ts-ignore
      return time.join (''); // return adjusted time or original string
    }