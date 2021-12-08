
let yourKm = prompt ("Inserisci km da percorrere");
let yourAge = prompt ("Inserisci la tua età");
let costoKmTot =(0.21 * yourKm) 

if(yourAge <18){

    costoKmTot = costoKmTot - ((costoKmTot / 100) * 20);

}else if (yourAge >= 65){

    costoKmTot = costoKmTot - ((costoKmTot / 100) * 20);
    
}

costoKmTot = costoKmTot.toFixed(2)

document.getElementById("myprompt").innerHTML = costoKmTot + `€` ;

