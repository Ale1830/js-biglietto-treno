// domande da fare all'utente 

let yourKm = prompt ("Inserisci km da percorrere");
let yourAge = prompt ("Inserisci la tua età");

// operazione kmtot = costo al km per i km da percorrere

let costoKmTot =(0.21 * yourKm) 

if(yourAge <18){

    // 20% di sconto per i minorenni 

    costoKmTot = costoKmTot - ((costoKmTot / 100) * 20); 

}else if (yourAge >= 65){

    // 40% di sconto per gli over 65 

    costoKmTot = costoKmTot - ((costoKmTot / 100) * 40);
    
}

// tofixed il numero affianco tra parentesi indica i decimali da prendere in considerazione

costoKmTot = costoKmTot.toFixed(2)

// valore in euro 

document.getElementById("myprompt").innerHTML = costoKmTot + `€` ;

