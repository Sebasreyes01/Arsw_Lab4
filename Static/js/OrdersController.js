 var orders = [{"products":[{"product":"PIZZA","quantity":3,"price":"$10000"},{"product":"HOTDOG","quantity":1,"price":"$3000"},{"product":"COKE","quantity":4,"price":"$1300"}],"table_id":1},
               {"products":[{"product":"HAMBURGER","quantity":2,"price":"$12300"},{"product":"COKE","quantity":2,"price":"$1300"}],"table_id":3}];

function addOrder(order) {
    orders.push(order);
}

function removeOrderByTableId(tableId) {
    var i;
    for (i = 0;i < orders.length;i++) {
        if(orders[i].table_id == tableId) {
            orders.splice(i,1);
        }
    }
}
var order3 = {"products":[{"product":"HOTDOG","quantity":1,"price":"$3000"},{"product":"COKE","quantity":1,"price":"$1300"}],"table_id":2};

