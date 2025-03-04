btnSearch.addEventListener("click", function () {
        
    const phoneInput = document.getElementById("phone").value;
    const nameInput = document.getElementById("name");
    const mobileInput = document.getElementById("mobile");
    const addressInput = document.getElementById("address");
    const btnSearch = document.getElementById("btnSearch");

      const requestOptions = {
              method: "GET",
              redirect: "follow"
          };

          fetch("http://localhost:8080/customer/getElementByPhone/" + phoneInput, requestOptions)
              .then(response => response.json())
              .then(result => {
                    

                  if (result) {
                      nameInput.value = result.name; 
                      mobileInput.value = result.contact; 
                      addressInput.value = result.address;
                  } else {
                      console.log("No customer found!");
                  }
              })
      });

      function gomenu() {
          window.location.href = "/Mos-Burgers/MenuPage.html#";
      }