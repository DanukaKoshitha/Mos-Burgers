document.addEventListener("DOMContentLoaded", () => {
  const bodyId = document.body.id;

  if (bodyId === "CashierLogin") {
    //////////////  CashierLogin.html file   ////////////////

    document.getElementById("btnLogin").addEventListener("click", LoginFuntion);

    function LoginFuntion() {
  
      let username = document.getElementById("username").value;
      let PassWord = document.getElementById("PassWord").value;

      if (username === "Danuka" && PassWord === "1234") {
        Swal.fire({
          icon: "success",
          title: "Login Succesfull",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.href = "/CashierHome.html";
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }

      document.getElementById("username").value = "";
      document.getElementById("PassWord").value = "";
    }
  } else if (bodyId === "AddminLogin") {
    //////////  index.html file  ////////////////////

    document.getElementById("btnLoginAddmin").addEventListener("click", LoginFuntionAddmin);

    function LoginFuntionAddmin() {

      let usernameAddmin = document.getElementById("usernameAddmin").value;
      let PassWordAddmin = document.getElementById("PassWordAddmin").value;

      if (usernameAddmin === "Kamal" && PassWordAddmin === "1234") {
        Swal.fire({
          icon: "success",
          title: "Login Succesfull",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.href = "/AddminHome.html";
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }

      document.getElementById("usernameAddmin").value = "";
      document.getElementById("PassWordAddmin").value = "";
    }
  }
});
