	
function isValidCard(num){
	do{
	var num = prompt ("ingrese n° de tarjeta:"); //solicito y recibo numero de tarjeta	
	var arr = [];//arreglo donde metere los numeros ingresados de num de modo inverso
			for(var i = 0; i < num.length; i++){
				arr.unshift(num[i]); //meto en orden inverso los numeros de la tarjeta
			}
		var temp = [];//variable para guardar numeros en poscicion par
		var suma = 0;	//variable que me sumara todo
		var temp2 = []; //variable donde guardare los que no estan en poscicion par

		for(var i = 0; i < arr.length; i++){// ciclo por el cual voy sumando los datos 
				if(i % 2 == 0){//sacar indicador par
					temp = (arr[i] * 2); //multiplico indicador par x2
				} else{
					temp2.push(arr[i]); //los que son impares los meto en temp2
				}
				if(temp >= 10){//saco que el digito sea de a 1 
					temp.push(parseInt(temp[i]/10)+ (temp[i] % 10));//los sumo sus digitos y los meto en temp
				}else{
					temp.push(arr[i]);//meto los valores en temp
				}			
			}
			suma = temp[i] + temp[i]; //sumo todos los datos

			if(suma % 10 == 0){ //saco el mod de 10 y si da 0 es valido
				alert("tarjeta valida");
			}else{//caso contrario es invalido
				alert("tarjeta invalida");
			}
	}while(num == "" || isNaN(num) == true);//validacion de que sea un número con isNaN() y que nos ea una cadena vacia
}
 
