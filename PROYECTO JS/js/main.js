//Variables global
let saveCliente = "232324";


//Variables locales
function login() {
let ingreso = false;

    for (let i = 2; i >=0; i--) {
        let Cliente = prompt("Ingresa tu número de Cliente. Tenes" +(i +1)+ "oportunidades");
        
        if (Cliente===saveCliente) {
            alert("Ingreso correcto")
            ingreso = true;
           
            break;
        }
        else {
            alert("Error.numero de cliente inexistente. vuelva a intentar. Quedan" + i + "intentos")
            
        }
    }
    return ingreso;
}

console.log(login());

//De ahora en mas accedemos a la informacion de la cuenta telefonica del cliente
let correcto = login(); //variable global
let numeroTarjeta = 74748686

if (correcto) {
 let saldo = 2000;
    let opcion = prompt("Marque opción solicitada: \n1-Consulte Saldo. \n2-Abono de factura. \n3-¿Ya pagaste?. \n4-Hablar con un representante. \nMarque x para finalizar. ");

 while (opcion != "x") {
     switch (opcion) {
         case "1":
             alert("Tu saldo es de $" + saldo);
             break;
         case "2":
             let opciones = prompt("Marque opción solicitada: \n1-Pago con tarjeta. \n2-Pago en efectivo\nMarque x para finalizar. ")  
              switch (opciones) {
                case "1":
                      let tarjeta = parseInt(prompt("Ingrese los números de su tarjeta"))
            
                      
                      if (tarjeta === numeroTarjeta) {
                          alert("Pago exitoso")
                          ingreso = true;

                          break;
                      }
                      else {
                          alert("Número de tarjeta inexistente. Intentelo nuevamente");
                          break;
                      }
                      
                
                case "2":
                      alert("¡Dirijase a una de nuestras sucursales, para mas info visite nuestra pagina web ClubSave.com!")
                      break;
               default: ("Error, vuelva a intentarlo")
                    break;
                }
            
             break;
         case "3":
             alert("Si ya pagaste, el pago puede demorar 24 horas en impactar. Si luego del tiempo estipulado no lo ves, por favor, comunicarse con un representante");
             break;
         case "4":
             let numeroCliente= parseInt(prompt("Ingresa tu número de cliente."))
               alert("A la brevedad nos comunicaremos contigo, en este momento nuestros operadores se encuentran ocupados. ¡Gracias por elegirnos!");
             break;
            default:
                alert("¡Opción inexistente!")
                break;
        }

    //la condicion de salida del while es volver a pedirle al cliente que ingrese algun dato y para eso volvemos a colocar las opciones, hasta que ingrese x.
    
     opcion = prompt("Marque opción solicitada: \n1-Consulte Saldo. \n2-Abono de factura. \n3-¿Ya pagaste? \n4-Hablar con un representante.\n Marque x para finalizar. ");
    }
    
}

console.log(correcto);