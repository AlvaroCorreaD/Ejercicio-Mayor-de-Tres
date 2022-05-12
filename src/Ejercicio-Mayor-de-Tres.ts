btncomparar.addEventListener("click", () => {
  let dato1 = document.getElementById("numero1");
  let dato2 = document.getElementById("numero2");
  let dato3 = document.getElementById("numero3");
  let numero1: number = dato1.value;
  let numero2: number = dato2.value;
  let numero3: number = dato3.value;
  if (numero1 > numero2 && numero1 > numero3){
    console.log("El N°1: " + numero1 + es el mayor entre los tres.");
  } else if (numero2 > numero1 && numero2 > numero3){
    console.log("El N°2: " + numero2 + " es el mayor entre los tres.");
  } else if (numero3 > numero1 && numero3 > numero2){
    console.log("El N°3: " + numero3 + " es el mayor entre los tres.")
  }
};