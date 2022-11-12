const TIMESTAMPNOW = () => {
    const timestamp = new Date();
    var dataIntimestamp = new Date(timestamp.getFullYear(), timestamp.getMonth(), timestamp.getDate(), timestamp.getHours(), timestamp.getMinutes()).getTime();
  
    var convertDate = dataIntimestamp.toString();
    convertDate = convertDate.substring(0, 10);
  
    return convertDate;
  }
  
  export default TIMESTAMPNOW;