function goMenuPage() {
    window.location.href = "/Mos-Burgers/MenuPage.html#";
  }

  function showCustomerID(){
    let customerID = document.getElementById("cusId");

    fetch("http://localhost:8080/customer/get-customers")
        .then(res => res.json())
        .then(data => {
            if (data.length > 0) {
                customerID.innerHTML = "C-" + (data.length + 1); 
            }else{
              customerID.innerHTML = "C-"+1; 
            }
    })
  }

  window.onload = showCustomerID;

  function addCustomer() {
    Swal.fire({
      icon: "success",
      title: "Added Succesfull",
      showConfirmButton: false,
      timer: 1500,
    });

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name: name,
      contact: mobile,
      address: address,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/customer/add", requestOptions)
      .then((response) => response.text())
      .then((result) => showCustomerID())

      document.getElementById("name").value = "";
      document.getElementById("mobile").value = "";
      document.getElementById("address").value = "";
  }
  