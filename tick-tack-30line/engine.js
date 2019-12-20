var t = new Array(9);
var hod=0;

function checkEnd() {
  if (t[0]=='ai' && t[1]=='ai' && t[2]=='ai') return 'SNEGUROCHKA';  //t[0]=='player' && t[1]=='player' && t[2]=='player')  return true;
  else if (t[3]=='O' && t[4]=='ai' && t[5]=='ai') return 'SNEGUROCHKA';  //t[3]=='player' && t[4]=='player' && t[5]=='player')  return true;
  else if (t[6]=='ai' && t[7]=='ai' && t[8]=='ai') return 'SNEGUROCHKA';   //t[6]=='player' && t[7]=='player' && t[8]=='player')  return true;
  else if (t[0]=='ai' && t[3]=='ai' && t[6]=='ai') return 'SNEGUROCHKA';   //t[0]=='player' && t[3]=='player' && t[6]=='player')  return true;
  else if (t[1]=='ai' && t[4]=='ai' && t[7]=='ai') return 'SNEGUROCHKA';   //t[1]=='player' && t[4]=='player' && t[7]=='player')  return true;
  else if (t[2]=='ai' && t[5]=='ai' && t[8]=='ai') return 'SNEGUROCHKA';   //t[2]=='player' && t[5]=='player' && t[8]=='player')  return true;
  else if (t[0]=='ai' && t[4]=='ai' && t[8]=='ai') return 'SNEGUROCHKA';   //t[0]=='player' && t[4]=='player' && t[8]=='player')  return true;
  else if (t[2]=='ai' && t[4]=='ai' && t[6]=='ai') return 'SNEGUROCHKA';   //t[2]=='player' && t[4]=='player' && t[6]=='player')  return true;

  else if(t[3]=='player' && t[4]=='player' && t[5]=='player')  return 'DED MOROZ';
  else if(t[6]=='player' && t[7]=='player' && t[8]=='player')  return 'DED MOROZ';
  else if(t[0]=='player' && t[3]=='player' && t[6]=='player')  return 'DED MOROZ';
  else if(t[1]=='player' && t[4]=='player' && t[7]=='player')  return 'DED MOROZ';
  else if(t[2]=='player' && t[5]=='player' && t[8]=='player')  return 'DED MOROZ';
  else if(t[0]=='player' && t[4]=='player' && t[8]=='player')  return 'DED MOROZ';
  else if(t[2]=='player' && t[4]=='player' && t[6]=='player')  return 'DED MOROZ';
  else if(t[0] && t[1] && t[2] && t[3] && t[4] && t[5] && t[6] && t[7] && t[8]) return 'nikto';
  else return 'not';
}
function move(id) {
  var hodi=window.hod;
  if(t[id]) return false;
  if(hodi%2==0) t[id] = "player";
  if(hodi%2==1) t[id] = "ai";
  window.hod++;
  document.getElementById(id).className = 'cell ' + t[id];
  if(checkEnd()!='not') reset(checkEnd());

}

function reset(stroka) {
  alert("Игра окончена! Выиграл: "+stroka);
  document.getElementById('gnk').src="./img/player.png";
  location.reload();
}
