# Validador de tarjeta de credito

## Explicando el algoritmo de luhn

* El algoritmo de luhn nos pide que una cadena de numero entrgados se invierten en orden, por cada pocicion par de numero se le multiplica por 2, si su valor o resultado queda mayor o igual a 10 se debem sumar los digitos para que queden de a 1.
Luego se suman y se dividen por 10, su residuo restante nos verifica si es valido o no, si el resultado es 0 la tarjeta es valida, enc aso contrario es invalida *

### Pasos que segui para resolverlo

+ Inicio
+ Solicito número de tarjeta 
+ Creo var num = numero de tarjeta solicitado y arr = []
+ Recorro num y guardo en modo inverso en arr = [] con unshift().
+ Creo 3 variables para ir trabajandolas temp = [] suma = 0 temp2 = [].
+ Recorro mi cadena
+ Saco las posiciones pares
+ Si son pares x2
+ Si son impares guardo en temp2[] 
+ Si son de 2 digitos aplico formula parseInt(temp[i]/10)+ (temp[i] % 10)
+ Si no guardo en temp con push()
+ Sumo temp[] + temp2[]
+ Calculo resto de 10 en suma
+ Si el resto es 0 es una tarjeta valida 
+ Si es distinto de 0 es Invalida la tarjeta.


### Funciones que lo resuelven

``` javascript

				for(var i = 0; i < arr.length; i++){
				if(i % 2 == 0){
					temp = (arr[i] * 2); 
				} else{
					temp2.push(arr[i]); 
				}
				if(temp >= 10){
					temp.push(temp.push(parseInt(temp[i]/10)+ (temp[i] % 10));
				}else{
					temp.push(arr[i]);
				}			
			}
			suma = temp[i] + temp[i]; 

			if(suma % 10 == 0){ 
				alert("tarjeta valida");
			}else{
				alert("tarjeta invalida");
			}
```


## Diagrama de flujos

 https://github.com/gvillablanca/Producto-Final-codificador/blob/master/Codificador.jpeg