const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    
  ]
  
  function superbowlWin(array) {
  const win = array.find((game) => win == "W"); 
  
  if (win) {
    return win.year;
  } else {
    return undefined;
  }
  

  
}
