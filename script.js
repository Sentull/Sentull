 class hayu{

 	constructor(){
 		this.nama = document.getElementById("nama").value;
 		this.email = document.getElementById("email").value;
 		this.pesan = document.getElementById("pesan").value;
 	}

 	cuek(){
 		var arr = [];
 		arr[1] = this.nama;
 		arr[2] = this.email;
 		arr[3] = this.pesan;

 		alert(arr);
 	}
 }

 function hayu2(){
 	hayu = new hayu();
 	hayu.cuek();
 }




    function get_nama()
        {
            var name = document.getElementById('nama').value;
            var email = document.getElementById('email').value;
            var pesan = document.getElementById('pesan').value;
            if(nama,email,pesan == ""){
                alert("Data Harus Diisi");
            } else {
                alert("Terima Kasih Atas Masukkan Anda");
            }

        }