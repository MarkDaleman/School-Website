window.onload = function()
{
  var div  = document.getElementById("navigatie");
  var menu = document.getElementById("menu");
  var open = 0;
  div.style.cursor = 'pointer';

  div.onclick = function(){
    if (open===0){
      menu.style.display = 'block';
      open++;
    }
    else{
      menu.style.display = 'none';
      open=0;
    }
  }
}
