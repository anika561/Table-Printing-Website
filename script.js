function maketable(){
   const num = parseInt(document.getElementById("input").value);
   var table="<div>";
   for(i=1;i<=10;i++){
      table += "<div>";
      table += (num + "x" + i + "=" + num*i);
      table += "</div>";
   }
   table+='</div>';
   document.getElementById('table').innerHTML = table;
}
