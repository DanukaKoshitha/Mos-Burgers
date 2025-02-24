

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
    .then(res =>  res.json())
    .then(data => {
      data.forEach((element, index) => {
        tblBody += `   
        <tr>
            <td>${element.itemCode}</td>
            <td>${element.itemName}</td>
            <td>${element.price}</td>
            <td>${element.discount}</td>
            <td><img src="${element.imagePath}" alt="" width="50px"></td>
            <td>
                <input type="button" value="Delete" class="delete-btn" onclick="deleteItem(${element.itemCode})">
                <input type="button" value="Update" class="update-btn" onclick="updateItem(${element.itemCode})">
            </td>
        </tr>`;
      });

      table.innerHTML = tblBody; 
    })
    .catch(error => console.error("Error loading table:", error)); 
}

window.onload = loadTable;


function deleteItem(itemCode) {
  const requestOptions = {
    method: "DELETE",
    redirect: "follow"
  };
  
  fetch("http://localhost:8080/Item/delete-item/"+itemCode, requestOptions)
    .then((response) => response.text())
    .then((result) => 
      console.log(result),
      
      loadTable()
    )
}

function updateItem(itemCode) {

  const newCode = prompt("Enter new Item Code:", currentItem.itemCode);
  const newName = prompt("Enter new Name:", currentItem.itemName);
  const newPrice = prompt("Enter new Price:", currentItem.price);
  const newDiscount = prompt("Enter new Discount:", currentItem.discount);
  const newImage = prompt("Enter new Image URL:", currentItem.img);

 
}

function refreshTable() {
  tblBody = ` 
  <tr>
      <th>Item Code</th>
      <th>Name</th>
      <th>Price</th>
      <th>Image</th>
      <th>Discount</th>
      <th>Management</th>
  </tr>`;

  setItemArray.forEach((element, index) => {
    tblBody += `   
    <tr>
        <td>${element.itemCode}</td>
        <td>${element.itemName}</td>
        <td>${element.price}</td>
        <td>${element.discount}</td>
        <td><img src="${element.img}" alt="" width="50px"></td>
        <td>
            <input type="button" value="Delete" class="delete-btn" onclick="deleteItem(${index})">
            <input type="button" value="Update" class="update-btn" onclick="updateItem(${index})">
        </td>
    </tr>`;
  });
  

  table.innerHTML = tblBody;
}
