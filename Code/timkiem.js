//products
let products = {
    data:
        [
        {
            productName: 'Bạc Xỉu',
            category : 'coffee',
            price: 25000,
            img: 'images/biryani/Bạc Xỉu.jpg',
        },
        {
            productName: 'Cà Phê Đen',
            category : 'coffee',
            price: 30000,
            img: 'images/biryani/Cà Phê đen.jpg',
        },
        {
            productName:'Cà Phê Sữa',
            category : 'coffee',
            price: 30000,
            img: 'images/biryani/cà phê sữa.jpg',
        },
        {
            productName: 'Americano',
            category : 'coffee',
            price: 40000,
            img: 'images/biryani/Americano.jpg',
        },
        {
            productName: 'Cappuccino',
            category : 'coffee',
            price: 35000,
            img: 'images/biryani/Cappuccino.jpg',
        },
        {
            productName: 'Caramel Macchiato',
            category : 'coffee',
            price: 45000,
            img: 'images/biryani/Caramel macchiato.jpg',
        },
        {
            productName: 'Espresso',
            category : 'coffee',
            price: 30000,
            img: 'images/biryani/espresso.jpg',
        },
        {
            productName:'Latte',
            category : 'coffee',
            price: 35000,
            img: 'images/biryani/latte.jpg',
        },
        {
            productName:'Mocha',
            category : 'coffee',
            price: 35000,
            img: 'images/biryani/Mocha.jpg',
        },
        {
            productName: 'Hồng Trà Sữa',
            category : 'milktea',
            price: 20000,
            img: 'images/chicken/Hồng trà sữa trân châu.jpg',
        },
        {
            productName:'Trà Đào',
            category : 'milktea',
            price: 20000,
            img: 'images/chicken/Trà Đào.jpg',
        },
        {
            productName:'Trà Sữa Oolong',
            category : 'milktea',
            price: 25000,
            img: 'images/chicken/Trà Sữa Oloong.jpg',
        },
        {
            productName: 'Trà Sữa Thái Xanh',
            category : 'milktea',
            price: 20000,
            img: 'images/chicken/Trà sữa thái xanh.jpg',
        },
        {
            productName: 'Trà Sữa Trân Châu',
            category : 'milktea',
            price: 25000,
            img: 'images/chicken/Trà sữa trân châu đường đen.jpg',
        },
        {
            productName: 'Trà Xanh Matcha',
            category : 'milktea',
            price: 15000,
            img: 'images/chicken/Trà Xanh macha.jpg',
        },
        {
            productName:'Mochi Kem Chocolate',
            category : 'cake',
            price: 20000,
            img: 'images/paneer/Mochi kem chocolate.jpg',
        },
        {
            productName: 'Mochi Kem Matcha',
            category : 'cake',
            price: 20000,
            img: 'images/paneer/Mochi kem macha.jpg',
        },
        {
            productName:'Mochi Kem Việt Quất',
            category : 'cake',
            price: 20000,
            img: 'images/paneer/Mochi kem việt quất.jpg',
        },
        {
            productName:'Mouse Red Velvet',
            category : 'cake',
            
            price: 35000,
            img: 'images/paneer/mouse red velvet.png',
        },
        {
            productName: 'Mousse Tiramisu',
            category : 'cake',
            price: 35000,
            img: 'images/paneer/mouse tiramisu.jpg',
           
        },
        {
          productName:'Mousse Chocolate',
            category : 'cake',
            rating : 4.8,
            price: 35000,
            img: 'images/paneer/mousse chocolate.jpg',
           
        },
        {
            productName: 'Bơ',
            age: '32',
            category : 'juice',
            price: 25000,
            img: 'images/vegetable/Sinh Tố Bơ.jpg',
            quantity: 1
        },
        {
            productName:'Dâu',
            category : 'juice',
            price: 15000,
            img: 'images/vegetable/Sinh Tố Dâu.jpg',
           
        },
        {
            productName:'Dưa Hấu',
            category : 'juice',
            price: 15000,
            img: 'images/vegetable/Sinh Tố Dưa Hấu.jpg',
           
        },
        {
            productName: 'Dứa',
            category : 'juice',
            price: 15000,
            img: 'images/vegetable/Sinh Tố Dứa.jpg',
        },
        {
            productName: 'Xoài Mít',
            category : 'juice',
            price: 25000,
            img: 'images/vegetable/Sinh Tố Xoài.jpg',
        },
        {
            productName: 'Đậu Xanh Rau Má',
            category : 'juice',
            price: 15000,
            img: 'images/vegetable/Đậu xanh rau má.jpg',
        },
     ]
  };
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.img);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText =  i.price+ "    VND";
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  //parameter passed from button
  function filterProduct(value) {
    //button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };