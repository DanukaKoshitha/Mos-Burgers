function adminpage() {
    window.location.href = "/index.html";
  }

  function goHome() {
    window.location.href = "/CashierHome.html";
  }

  function menupage() {
    window.location.href = "/MenuPage.html#";
  }

  const cardContainer = document.getElementById("cardContainer");

  storedOrdersObjects.forEach((order) => {
    const card = document.createElement("div");
    card.style.cssText = `
    background-color: #2a2a2a;
    color: white;
    border-radius: 8px;
    padding: 15px;
    width: 350px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

    card.innerHTML = `
    <h3>Order #${order.orderId.toString().padStart(4, "0")}</h3>
    <p><strong>Customer:</strong> ${order.name}</p>
    <p><strong>Items:</strong></p>
    <ul>
        ${order.items
          .map(
            (item) => `
            <li>${item.itemName} ${item.qty} - LKR ${
              item.price * item.qty
            }</li>
        `
          )
          .join("")}
    </ul>
    <p><strong>Total:</strong> LKR ${order.total}</p>
 
`;

    cardContainer.appendChild(card);
  });