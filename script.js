// alert("hallo selamat datang")

// var nama = prompt("masukan namamu")

// alert(" selamat datang " +   nama + " Enjoyy!!! ") 

// alert (" Ingin mengetahui bilangan ganjil dan genap ?? ")

// var angka= prompt (" masukan angka !!")

// if (angka % 2 === 0){

//     alert("bilangan yang ada masukan adalah genap")
// } 

// else{
//     alert (" bilangan yang anda masukan ganjil ")
// }
    
// var nilaiAwal= 1;
// while(nilaiAwal <= 10){
//     console.log(" teknik informatika " + nilaiAwal + "x");

//     nilaiAwal++;
// } 

function myFunction(names,emailnya) {


    console.log("name  : " + names);
    console.log("email  : " + emailnya);
    if(names != '' && emailnya != ''){
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Data berhasil dikirimkan',
            showConfirmButton: false,
            timer: 1500
          })
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Maaf Form Harus DIisi!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
    

    
      
    
}