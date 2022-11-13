const converterTimestamp = (timestamp: string) => {

  var date = new Date(parseInt(timestamp) * 1000);
  
  const valueConverted = date.toLocaleDateString() + ' ' + date.toLocaleTimeString()

  return valueConverted;
}

export default converterTimestamp;