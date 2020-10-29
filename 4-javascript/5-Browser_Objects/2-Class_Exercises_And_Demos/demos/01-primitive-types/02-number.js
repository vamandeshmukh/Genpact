var costOfOnePlus6 = 42000;
var shippingTimeInDays = 2.5;
var strQuantity = "15";
var strDiscountPercentage = "8.25";

console.log( typeof strQuantity, typeof strDiscountPercentage );

var quantity = parseInt( strQuantity );
var discountPercentage = parseFloat( strDiscountPercentage );

console.log( typeof quantity, typeof discountPercentage );

var totalCost = quantity * costOfOnePlus6;
var discountedTotalCost = totalCost - ( discountPercentage / 100 ) * totalCost;
console.log( discountedTotalCost );