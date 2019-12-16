$("document").ready(function () {
    $("#checkout").click(function () {
        var sizeAmount = parseInt($("#size").val());
        var crustAmount = parseInt($("#crust").val());
        var toppingsAmount = parseInt($("#toppings").val());
        var sumTotal = sizeAmount + crustAmount + toppingsAmount;
        var quantity = parseInt($("#number").val());
        var totalPrice = sumTotal * quantity;
        alert("This is your total cost thank you for ordering " + totalPrice);

    });
    $("#delivery").submit(function (event) {

        var name = $("input#name").val();
        var phonenumber = $("input#number").val();
        var location = $("input#location").val();
        console.log(name)

        alert("Hello " + name + ". Your order has been successfuly received and will be delivered to " + location + " within one hour.The delivery will cost ksh 180/= Thank you for choosing Habib pizza .");
        // $(this).get(0).reset();
        event.preventDefault();
    });





});

// function getSizeCost() {
//     var selectedSize = document.getElementById("size").value;
//     console.log(selectedSize);
// }

// function getCrustCost() {
//     var selectedCrust = document.getElementById("crust").value;
//     return parseInt(selectedCrust);
// }
// function getNumber() {
//     var selectedNumber = document.getElementById("numberofpizza").value;
//     return parseInt(selectedNumber);
// }
// function tomato() {
//     var tomato = 0;
//     var tomato = document.getElementById("toppings");
//     if (addtomato.checked === true) {
//         tomato = 80;
//     }
//     return parseInt(sausage);
// }
// function onions() {
//     var onions = 0;
//     var addonions = document.getElementById("toppings");
//     if (addonions.checked === true) {
//         onions = 80;
//     }
//     return parseInt(onions);
// }
// function mushroom() {
//     var mushroom = 0;
//     var mushroom = document.getElementById("toppings");
//     if (addmushroom.checked === true) {
//         mushroom = 80;
//     }
//     return parseInt(mushroom);
// }
// function beefpeperoni() {
//     var cheese = 0;
//     var addbeefpeperoni = document.getElementById("toppings");
//     if (addbeefpeperoni.checked === true) {
//         beefpeperoni = 170;
//     }
//     return parseInt(beefpeperoni);
// }
// function periperichicken() {
//     var cheese = 0;
//     var addperiperichicken = document.getElementById("toppings");
//     if (addperiperichicken.checked === true) {
//         periperichicken = 200;
//     }
//     return parseInt(periperichicken);
// }
// function calctotalPrice(e) {
//     event.preventDefault();
//     var totalPrice = (getSizeCost() + getCrustCost() + mushrooms()) * (getNumber());

//     console.log(totalPrice);
//     alert("Your order of " + getNumber() + " pizzas has been processed.Your total amount payable is " + totalPrice + ".")

// }




// $(document).ready(function () {
//     $("form#delivery").submit(function (event) {

//         var name = $("input#name").val();
//         alert(name)
//         var number = $("input#number", this).val();
//         var location = $("input#location", this).val();

//         alert("Hello " + name + ". Your order has been successfuly received and will be delivered to " + location + " within one hour.The delivery will cost ksh 180/= Thank you for choosing shizuucane pizza palace.");
//         // $(this).get(0).reset();
//         event.preventDefault();
//     });


// });