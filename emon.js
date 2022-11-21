const readline = require('readline-sync');

var mataPelajaran1 =readline.question('Nilai B.Indo kamu');

if(mataPelajaran1 < 71){
    console.log('kurang')
} else {
    if( mataPelajaran1 < 81){
        console.log('cukup')
    }else{
        if(mataPelajaran1 < 91){
            console.log('baik')
        }else{
            if(mataPelajaran1 < 100){
                console.log('sangat baik')
            }
        }
    }
}

var mataPelajaran2 =readline.question('nilai B.Inggris kamu');

if(mataPelajaran2 < 71){
    console.log('kurang')
} else {
    if( mataPelajaran2 < 81){
        console.log('cukup')
    }else{
        if(mataPelajaran2 < 91){
            console.log('baik')
        }else{
            if(mataPelajaran2 < 100){
                console.log('sangat baik')
            }
        }
    }
}

var mataPelajaran3 =readline.question('Nilai Matematika kamu');

if(mataPelajaran3 < 71){
    console.log('kurang')
} else {
    if( mataPelajaran3 < 81){
        console.log('cukup')
    }else{
        if(mataPelajaran3 < 91){
            console.log('baik')
        }else{
            if(mataPelajaran3 < 100){
                console.log('sangat baik')
            }
        }
    }
}

var mataPelajaran4 =readline.question('Nilai IPA kamu');

if(mataPelajaran4 < 7){
    console.log('kurang')
} else {
    if( mataPelajaran4 < 81){
        console.log('cukup')
    }else{
        if(mataPelajaran4 < 91){
            console.log('baik')
        }else{
            if(mataPelajaran4 < 100){
                console.log('sangat baik')
            }
        }
    }
}

var hasilnilai1 = Number (mataPelajaran1);
var hasilnilai2 = Number (mataPelajaran2);
var hasilnilai3 = Number (mataPelajaran3);
var hasilnilai4 = Number (mataPelajaran4);

let total = hasilnilai1+hasilnilai2+hasilnilai3+hasilnilai4;
let total1 = total / 4;
console.log('nilai rata rata:', total1)   