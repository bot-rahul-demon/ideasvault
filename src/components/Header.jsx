import React from "react";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HighlightIcon from '@material-ui/icons/Highlight';

function Header() {
  
  function updateTime(){
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    if (seconds <10){
      seconds = "0" + seconds;
    }
    var t_str = hours + ":" + minutes + ":"+seconds;
    
    document.getElementById('currentTime').innerHTML = t_str;
}
setInterval(updateTime, 1000);

  return (
    <header>
        <h1><HighlightIcon/> IdeasVault </h1>
        <h3>Turn Ideas Into Reality</h3>
        <h2 id="currentTime"><AccessTimeIcon/>Time</h2>
    </header>
  );
}
export default Header;
