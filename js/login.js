function checkLogin(){

    let id_User = document.getElementById("user").value;
    let pass_Word = document.getElementById("password").value;
    if (document.getElementById("nameUser").value != ""){
        document.getElementById("nameUser").value = "";
        document.getElementById("nameUser").innerText ="????";
        document.getElementById("checkLogin").innerText = "Đăng nhập";
        document.getElementById("login").style.display = "block";
        document.getElementById("bodyB").style.display = "none";
    }else {
        let check = false;
        for (let i = 0; i < arrayUser.length; i++) {
            if (arrayUser[i].id == id_User && arrayUser[i].password == pass_Word){
                alert("Chào mừng " + arrayUser[i].name + " đến với cửa hàng !!!");
                document.getElementById("nameUser").innerText = arrayUser[i].name;
                document.getElementById("nameUser").value = id_User;
                document.getElementById("checkLogin").innerText = "Đăng xuất";
                document.getElementById("login").style.display = "none";
                document.getElementById("bodyB").style.display = "block";
                document.getElementById("user").value = "";
                document.getElementById("password").value = "";
                check = true;
            }
        }
        if (!check){
            alert("IdUser or Mật khẩu của bạn không đúng !! vui lòng nhập lại !!!");
            document.getElementById("user").value = "";
            document.getElementById("password").value = "";
        }
    }
}
