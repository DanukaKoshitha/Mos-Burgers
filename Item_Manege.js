let table = document.getElementById("tbl");

let tblBody = ` 
<tr>
    <th>Item Code</th>
    <th>Name</th>
    <th>Price</th>
    <th>Image</th>
    <th>Discount</th>
    <th>Management</th>
</tr>`;

const setItemArray = JSON.parse(localStorage.getItem("ItemCards")) || [];
console.log(setItemArray);

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

function deleteItem(index) {
  setItemArray.splice(index, 1);
  localStorage.setItem("ItemCards", JSON.stringify(setItemArray));
  refreshTable();
}

function updateItem(index) {
  const currentItem = setItemArray[index];

  // Prompt the user for new values (You can replace this with a modal or input fields)
  const newCode = prompt("Enter new Item Code:", currentItem.itemCode);
  const newName = prompt("Enter new Name:", currentItem.itemName);
  const newPrice = prompt("Enter new Price:", currentItem.price);
  const newDiscount = prompt("Enter new Discount:", currentItem.discount);
  const newImage = prompt("Enter new Image URL:", currentItem.img);

  // Update the item with new values
  setItemArray[index] = {
    itemCode: newCode || currentItem.itemCode,
    itemName: newName || currentItem.itemName,
    price: newPrice || currentItem.price,
    discount: newDiscount || currentItem.discount,
    img: newImage || currentItem.img,
  };

  localStorage.setItem("ItemCards", JSON.stringify(setItemArray));

  refreshTable();
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
