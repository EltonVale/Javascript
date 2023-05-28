
var nomes = ["Elton", "Rafael", "Caio"];
var nota1 = [7.5, 5.5, 8.5];
var nota2 = [8.2, 6.5, 7.5];


function media(n1, n2) {

  return ((n1 + n2) / 2);
}
function aprovar(media){
  if(media > 7){
    return "Aprovado";
  }else{
    return "Reprovado";
  }
}

for (var index in nomes) {

  var m = media(nota1[index],nota2[index]);

  console.log(nomes[index] + " A nota 1 é:  " + nota1[index] + " A nota 2 é: " + nota2[index] + "A média é:" + 
  media(nota1[index], nota2[index])+ "-"+ aprovar(m));



}
