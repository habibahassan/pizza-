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




