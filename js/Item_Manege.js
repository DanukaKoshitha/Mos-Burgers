function loadTable() {
  let table = document.getElementById("tbl");

  let tblBody = ` 
  <tr>
      <th>Item Code</th>
      <th>Name</th>
      <th>Price</th>
      <th>Discount(%)</th>
      <th>Image</th>
      <th>Management</th>
  </tr>`;

  fetch("http://localhost:8080/Item/get-items")
    .then(res => res.json())
    .then(data => {
      data.forEach((element) => {             
        tblBody += `   
        <tr>
            <td>${element.itemCode}</td>
            <td>${element.itemName}</td>
            <td>${element.price}</td>
            <td>${element.discount}</td>
            <td><img src="${element.imagePath}" alt="" width="50px"></td>
            <td>
                <input type="button" value="Delete" class="delete-btn" onclick="deleteItem('${element.itemCode}')">
                <input type="button" value="Update" class="update-btn" onclick="updateItem('${element.itemCode}', '${element.itemName}', '${element.price}', '${element.discount}', '${element.imagePath}')">
            </td>
        </tr>`;
      });

      table.innerHTML = tblBody;
    })
}

window.onload = loadTable;


function deleteItem(itemCode) {
  console.log("Deleting Item:", itemCode);

  const requestOptions = {
    method: "DELETE",
    redirect: "follow"
  };

  fetch(`http://localhost:8080/Item/delete-item/${itemCode}`, requestOptions)
    .then(response => response.text())
    .then(result => {
      
      loadTable(); 

    })
}


function updateItem(itemCode, itemName, price, discount, img) {
  const newCode = prompt("Enter new Item Code:", itemCode);
  const newName = prompt("Enter new Name:", itemName);
  const newPrice = prompt("Enter new Price:", price);
  const newDiscount = prompt("Enter new Discount:", discount);
  const newImage = prompt("Enter new Image URL:", img);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "itemCode": newCode,
    "itemName": newName,
    "price": newPrice,
    "discount": newDiscount,
    "imagePath": newImage
  });

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("http://localhost:8080/Item/update", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))

  loadTable();
}
