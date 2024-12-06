document.addEventListener("DOMContentLoaded", () => {
  const bodyId = document.body.id;

  if (bodyId === "CashierLogin") {
    //////////////  CashierLogin.html file   ////////////////
    let username = document.getElementById("username").value;
    let PassWord = document.getElementById("PassWord").value;

    document.getElementById("btnLogin").addEventListener("click", LoginFuntion);

    function LoginFuntion() {

      if (username == "Danuka" && PassWord == 1234) {
        Swal.fire({
          icon: "success",
          title: "Login Succesfull",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => { window.location.href = "http://127.0.0.1:5500/img/CashireHome.html"; });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }

      document.getElementById("username").value='';
      document.getElementById("PassWord").value='';

    }
  } else if (bodyId === "AddminLogin") {
    //////////  index.html file  ////////////////////
    let usernameAddmin = document.getElementById("usernameAddmin").value;
    let PassWordAddmin = document.getElementById("PassWordAddmin").value;

    document
      .getElementById("btnLoginAddmin")
      .addEventListener("click", LoginFuntionAddmin);

    function LoginFuntionAddmin() {
      console.log(usernameAddmin);
      console.log(PassWordAddmin);

      if (usernameAddmin == "kamal" && PassWordAddmin == 1234) {

        Swal.fire({
          icon: "success",
          title: "Login Succesfull",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => { window.location.href = "http://127.0.0.1:5500/img/AddminHome.html"; });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }

      document.getElementById("usernameAddmin").value='';
      document.getElementById("PassWordAddmin").value='';

    }
  }
});
