function checar(){
 var idade = document.getElementById("idde").value;
 var z = document.getElementById("resposta");
 var x = 18;
 if(idade >= x){
   z.innerHTML = "<img src='https://i.pinimg.com/originals/03/8d/5d/038d5dcad2cab1bd35dc701655d976bc.png'>";
 }else{
   z.innerHTML = "<img src='https://i.pinimg.com/564x/28/19/86/281986eb9993311de310d343d33021a7.jpg'>";
 }

}
