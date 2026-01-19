

let text = ""

let e = 3;

let letter = "";

let mokkingArrey =[
    "ik heb veel gedaan vandag",
    "De kat slaapt rustig op de bank",
    "Morgen fietsen we samen door het park",
    "Een oude klok tikt zachtjes in huis",
    "De zon verdwijnt langzaam achter de bergen",
    "Kinderen lachen luid tijdens het spelen",
    "Ik drink koffie terwijl de regen valt",
    "Het boek ligt vergeten onder het bed",
    "Vogels zingen vroeg op frisse ochtenden"];


  for (let c = 0; c < mokkingArrey.length; c++) {

    makkingstringfunc(mokkingArrey[c])


  }
  function makkingstringfunc(mokk) {
    for (let i = 0; i < mokk.length; i++) {

    if(i == e){

        letter = mokk.charAt(i).toUpperCase()

        e += Math.floor(Math.random() * 3) + 1;

    }else{

        letter = mokk.charAt(i);

    }

    text += letter;

    letter = ""

}
console.log(text);
e = 3;
text = "";
    
  }
