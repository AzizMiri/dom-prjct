function Cart() {
    // function that will increment the quantity of a specefic item in the ityems array
    function inc(id) {
      this.items[id]["quantity"]++;
    }
  
    // function that will decrement the quantity of a specefic item in the ityems array
  
    function dec(id) {
      this.items[id]["quantity"]--;
    }
  
    // function that calculate the total price considiring the quanting
    function total_price() {
      var result = 0;
      for (var i = 0; i < this.items.length; i++) {
        result += this.items[i]["price"] * this.items[i]["quantity"];
      }
      return result;
    }
  
    /// defining the data model
    var Data = {
      // items data
      items: [
        {
          id: 1,
          name: "JESKO ABSOLUT",
          price: 690,
          quantity: 1,
          image:
            "https://gear.koenigsegg.com/wp-content/uploads/2022/11/KEM-059-f-scaled.jpg",
        },
        {
          id: 2,
          name: "ONE:1",
          price: 700,
          quantity: 1,
          image:
            "https://gear.koenigsegg.com/wp-content/uploads/2022/11/KEM-013-b-scaled.jpg",
        },
      ],
      // assign functions definitions   to the data model
      total_price: total_price,
      inc: inc,
      dec: dec,
    };
  
    // load data to the  dom
    // load products images
    document.getElementById("ABSOLUT-img").src = Data["items"][0]["image"];
    document.getElementById("ONE1-img").src = Data["items"][1]["image"];
  
    
    // load products names
    document.getElementById("ABSOLUT-name").innerHTML = Data["items"][0]["name"];
    document.getElementById("ONE1-name").innerHTML = Data["items"][1]["name"];
  
    // load products quantity
  
    document.getElementById("ABSOLUT-quantity").value = Data["items"][0]["quantity"];
    document.getElementById("ONE1-quantity").value =
      Data["items"][1]["quantity"];
  
    //load  products prices
    document.getElementById("ABSOLUT-price").innerHTML = Data["items"][0]["price"];
    document.getElementById("ONE1-price").innerHTML = Data["items"][1]["price"];
  
  
  
  
    // assign event to the first product plus button
    var ABSOLUTQuantityPlus = document.getElementById("ABSOLUT-plus");
    ABSOLUTQuantityPlus.addEventListener("click", function () {
      // increment quantity for the specfic product
      Data.inc(0);
      // update quantity ui
  
      document.getElementById("ABSOLUT-quantity").value =
        Data["items"][0]["quantity"];
      // update total price ui
      document.getElementById("ABSOLUT-total-price").innerHTML =
        Data["items"][0]["price"] * Data["items"][0]["quantity"];
    });
    // assign event to the first product minus button
  
    var ABSOLUTQuantityMinus = document.getElementById("ABSOLUT-minus");
    ABSOLUTQuantityMinus.addEventListener("click", function () {
      // decrement quantity for the specfic product
      // products cannot have quatity less than one
      if (Data.items[0]["quantity"] == 1) {
        alert("quantity can only take postif value");
        return;
      }
      // decrementing first producat quantity only if greater than 1
      Data.dec(0);
      // update quantity ui
  
      document.getElementById("ABSOLUT-quantity").value =
        Data["items"][0]["quantity"];
      // update total price  ui
  
      document.getElementById("ABSOLUT-total-price").innerHTML =
        Data["items"][0]["price"] * Data["items"][0]["quantity"];
    });
  
    // assign event to the second product plus button
    var ONE1QuantityPlus = document.getElementById("ONE1-plus");
    ONE1QuantityPlus.addEventListener("click", function () {
      // increment quantity for the specfic product
      Data.inc(1);
      // update quantity ui
      document.getElementById("ONE1-quantity").value =
        Data["items"][1]["quantity"];
      // update total price  ui
  
      document.getElementById("ONE1-total-price").innerHTML =
        Data["items"][1]["price"] * Data["items"][1]["quantity"];
    });
    // assign event to the second product minus button
  
    var ONE1QuantityMinus = document.getElementById("ONE1-minus");
    ONE1QuantityMinus.addEventListener("click", function () {
      // decrement quantity for the specfic product
      // products cannot have quatity less than one
      if (Data.items[1]["quantity"] == 1) {
        alert("quantity can only take postif value");
        return;
      }
      // decrementing first producat quantity only if greater than 1
  
      Data.dec(1);
      // update quantity ui
  
      document.getElementById("ONE1-quantity").value =
        Data["items"][1]["quantity"];
      // update total price  ui
  
      document.getElementById("ONE1-total-price").innerHTML =
        Data["items"][1]["price"] * Data["items"][1]["quantity"];
    });
  
  
  
  
  
    
    // assing event the like button click for  the first product
    document.getElementById("like-1").addEventListener("click", function () {
      // change the color of the like button one user click like
      document.getElementById("like-1").style.color = "red";
    });
    // assing event the like button click for  the second product
  
    document.getElementById("like-2").addEventListener("click", function () {
      // change the color of the like button one user click like
  
      document.getElementById("like-2").style.color = "red";
    });
  
    // load specefic product total price
    // first
    document.getElementById("ABSOLUT-total-price").innerHTML =
      Data["items"][0]["price"] * Data["items"][0]["quantity"];
    //second
    document.getElementById("ONE1-total-price").innerHTML =
      Data["items"][1]["price"] * Data["items"][1]["quantity"];
  
    // create the click event that will handle the all products total price calculation and update the ui
    document.getElementById("total-price").addEventListener("click", function () {
      document.getElementById("total-value").innerHTML = Data.total_price();
    });
  
    document.getElementById("delete-ABSOLUT").addEventListener("click", function () {
      document.getElementById("ABSOLUT").remove();
      document.getElementById("ABSOLUT-total").remove();
      Data.items.splice(0, 1);
      console.log(Data);
    });
  
    document
      .getElementById("delete-ONE1")
      .addEventListener("click", function () {
        document.getElementById("ONE1").remove();
        document.getElementById("ONE1-total").remove();
        const l = Data.items.length;
        switch (l) {
          case 1:
            Data.items.splice(0, 1);
  
            break;
          case 2:
            Data.items.splice(1, 1);
  
            break;
  
          default:
            break;
        }
        console.log(Data);
      });
  
    return Data;
  }
  
  document.addEventListener("DOMContentLoaded", Cart);