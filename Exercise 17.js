function kaliTerusRekursif(angka) {
    var j = String(angka);
    if(j.length == 1){
        return angka;
    }
    else{
        var hsl = 1;
        for(i = 0; i<j.length;i++){
            hsl *= Number(j[i]); 
        }
    }

    return kaliTerusRekursif(hsl);

  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6