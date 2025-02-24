function goCusomerAddPage() {
  window.location.href = "/CashierHome.html";
}
function goHistory() {
  window.location.href = "/History.html";
}

function goAdminPage() {
  window.location.href = "/index.html";
}

///////////////  insert card /////////////////////////////

let card = document.getElementById("cards");
let setOrder = document.getElementById("addtocart");
let TotalId = document.getElementById("total");
let orderId = document.getElementById("orderId");
let customerID = document.getElementById("menucusId");

fetch("http://localhost:8080/Item/get-items")
  .then((res) => res.json())
  .then((data) => {
    items = data;

    data.forEach((element, index) => {
      let imageUrl = element.imagePath;

      if (!imageUrl.startsWith("http://") && !imageUrl.startsWith("https://")) {
        imageUrl = "http://localhost:8080" + element.imagePath;
      }

      card.innerHTML += `
            <div class="col d-flex justify-content-center mb-4">
                <div class="card" style="width: 18rem; background: #000; color: #f5f3f3; padding: 20px; border-radius: 40px;">
                    <img src="${imageUrl}" class="card-img-top" alt="" style="border-radius: 40px;">
                    <div class="card-body">
                        <h5 class="card-title">${element.itemName}</h5>
                        <p class="card-text">${element.price + ".00 LKR"}</p>
                        <p class="card-text">Discount: ${
                          element.discount + "%"
                        }</p>
                        <a href="#" class="btn btn-primary" onclick="addtoItem(${index})">Add</a>
                    </div>
                </div>
            </div>
        `;
    });
  });

let order = {
  items: [],
  total: 0,
};

function addtoItem(index) {
  let selectedItem = items[index];

  let existingItem = order.items.find(
    (item) => item.itemName === selectedItem.itemName
  );
  if (existingItem) {
    existingItem.qty += 1;
    existingItem.total = existingItem.price * existingItem.qty;
  } else {
    let item = {
      ...selectedItem,
      qty: 1,
      total: selectedItem.price,
    };
    order.items.push(item);
  }

  order.total += selectedItem.price;

  TotalId.innerText = `Total: ${order.total}.00 LKR`;
  orderId.innerText = `Order ID: ${generateOrderId()}`;

  updateOrderList();
  updateTotal();
}

function generateOrderId() {
  return "ORD" + Math.floor(Math.random() * 1000000);
}

function updateOrderList() {
  setOrder.innerHTML = "";

  order.items.forEach((item, idx) => {
    setOrder.innerHTML += `
        <div style="border-bottom: 1px solid #ccc; margin-bottom: 10px; padding-bottom: 10px;">
            <p><strong>${item.itemName}</strong></p>
            <p>${item.price}.00 LKR</p>
            <p>Discount: ${item.discount}%</p>
            <div>
                <input 
                    type="number" 
                    min="1" 
                    value="${item.qty}" 
                    onchange="updateQuantity(${idx}, this.value)" 
                    placeholder="QTY" 
                    style="margin-right: 20px; background-color: rgb(245, 237, 8); border-radius: 20px; width: 90px; padding: 8px; text-align: center; font-weight: 700; color: rgb(28, 28, 28);"
                >
                <input 
                    type="button" 
                    onclick="removeItem(${idx})" 
                    value="REMOVE" 
                    style="background-color: rgb(246, 16, 16); border-radius: 20px; width: 90px; padding: 8px;"
                >
            </div>
        </div>
        `;
  });
}

function updateQuantity(index, newQty) {
  const item = order.items[index];
  newQty = parseInt(newQty);

  if (newQty <= 0) {
    removeItem(index);
  } else {
    item.qty = newQty;
    item.total = item.price * item.qty;
    updateOrderList();
    updateTotal();
  }
}

function removeItem(index) {
  order.total -= order.items[index].total;
  order.items.splice(index, 1);
  updateOrderList();
  updateTotal();
}

function updateTotal() {
  order.total = order.items.reduce((sum, item) => sum + item.total, 0);
  TotalId.innerHTML = `Total: ${order.total}.00 LKR`;
}











////////////////  Clear Cart and Start New Order  //////////////
function new_orderid() {

}
