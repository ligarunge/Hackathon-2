function openTab(tabName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(tabName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

const removeButton = document.getElementsByClassName('btn-remove');
for (let i = 0; i < removeButton.length; i++) {
  let button = removeButton[i];
  button.addEventListener('click', function(event) {
   let buttonClicked = event.target;
   buttonClicked.parentElement.parentElement.remove();
   document.getElementsByClassName('summaryProducts')[i].remove();
   
  })
 
}

function addItem1() {
  let defaultQty = parseFloat(document.getElementById('qty').innerText);
  let newQty = defaultQty + 1;
  document.getElementById('qty').innerText = newQty;
  let price = parseFloat(document.getElementById('price').innerText);
  let itemsTotal = (newQty * price).toFixed(2);
  document.getElementById('totalItems').innerText = itemsTotal;
  let defaultTotal = parseFloat(document.getElementById('cartTotal').innerText);
  let newTotal = (defaultTotal + price).toFixed(2);
  document.getElementById('cartTotal').innerText = newTotal;
}
function subtractItem1() {
  let defaultQty = parseFloat(document.getElementById('qty').innerText);
  let newQty = defaultQty - 1;
  if (newQty >= 0) {
  document.getElementById('qty').innerText = newQty;
  let price = parseFloat(document.getElementById('price').innerText);
  let itemsTotal = (newQty * price).toFixed(2);
  document.getElementById('totalItems').innerText = itemsTotal;
  let defaultTotal = parseFloat(document.getElementById('cartTotal').innerText);
  let newTotal = (defaultTotal - price).toFixed(2);
  document.getElementById('cartTotal').innerText = newTotal;
  }
  else {
    document.getElementById('qty').innerText = 0;
  }
}


function addItem2() {
  let defaultQty = parseFloat(document.getElementById('qty2').innerText);
  let newQty = defaultQty + 1;
  document.getElementById('qty2').innerText = newQty;
  let price = parseFloat(document.getElementById('price2').innerText);
  let itemsTotal = (newQty * price).toFixed(2);
  document.getElementById('totalItems2').innerText = itemsTotal;
  let defaultTotal = parseFloat(document.getElementById('cartTotal').innerText);
  let newTotal = (defaultTotal + price).toFixed(2);
  document.getElementById('cartTotal').innerText = newTotal;
}
function subtractItem2() {
  let defaultQty = parseFloat(document.getElementById('qty2').innerText);
  let newQty = defaultQty - 1;
  if (newQty >= 0) {
  document.getElementById('qty2').innerText = newQty;
  let price = parseFloat(document.getElementById('price2').innerText);
  let itemsTotal = (newQty * price).toFixed(2);
  document.getElementById('totalItems2').innerText = itemsTotal;
  let defaultTotal = parseFloat(document.getElementById('cartTotal').innerText);
  let newTotal = (defaultTotal - price).toFixed(2);
  document.getElementById('cartTotal').innerText = newTotal;
  }
  else {
    document.getElementById('qty2').innerText = 0;
  }
}

function addItem3() {
  let defaultQty = parseFloat(document.getElementById('qty3').innerText);
  let newQty = defaultQty + 1;
  document.getElementById('qty3').innerText = newQty;
  let price = parseFloat(document.getElementById('price3').innerText);
  let itemsTotal = (newQty * price).toFixed(2);
  document.getElementById('totalItems3').innerText = itemsTotal;
  let defaultTotal = parseFloat(document.getElementById('cartTotal').innerText);
  let newTotal = (defaultTotal + price).toFixed(2);
  document.getElementById('cartTotal').innerText = newTotal;
}
function subtractItem3() {
  let defaultQty = parseFloat(document.getElementById('qty3').innerText);
  let newQty = defaultQty - 1;
  if (newQty >= 0) {
  document.getElementById('qty3').innerText = newQty;
  let price = parseFloat(document.getElementById('price3').innerText);
  let itemsTotal = (newQty * price).toFixed(2);
  document.getElementById('totalItems3').innerText = itemsTotal;
  let defaultTotal = parseFloat(document.getElementById('cartTotal').innerText);
  let newTotal = (defaultTotal - price).toFixed(2);
  document.getElementById('cartTotal').innerText = newTotal;
  }
  else {
    document.getElementById('qty3').innerText = 0;
  }
}


