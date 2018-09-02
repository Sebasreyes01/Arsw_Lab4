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

function tableGenerator() {
    var main = document.getElementsByTagName("main")[0];
    var table   = document.createElement("table");
    var tableBody = document.createElement("tbody");
    // var order;
    // for(var o = 0;o < orders.length;o++) {
    //     if(orders[o].table_id == 1) {
    //         order = orders[o];
    //     }
    // }
    for(var o = 0;o < orders.length;o++) {
        var order = orders[o];
        var titleRow = document.createElement("tr");
        var titleCell = document.createElement("td");
        var titleCellText = document.createTextNode("Product");
        titleCell.appendChild(titleCellText);
        titleRow.appendChild(titleCell);
        var titleCell1 = document.createElement("td");
        var titleCellText1 = document.createTextNode("Quantity");
        titleCell1.appendChild(titleCellText1);
        titleRow.appendChild(titleCell1);
        var titleCell2 = document.createElement("td");
        var titleCellText2 = document.createTextNode("Price");
        titleCell2.appendChild(titleCellText2);
        titleRow.appendChild(titleCell2);
        tableBody.appendChild(titleRow);
        for (var i = 0; i < order.products.length; i++) {
            var row = document.createElement("tr");
            var cell1 = document.createElement("td");
            var cellText1 = document.createTextNode(order.products[i].product);
            cell1.appendChild(cellText1);
            row.appendChild(cell1);
            var cell2 = document.createElement("td");
            var cellText2 = document.createTextNode(order.products[i].quantity);
            cell2.appendChild(cellText2);
            row.appendChild(cell2);
            var cell3 = document.createElement("td");
            var cellText3 = document.createTextNode(order.products[i].price);
            cell3.appendChild(cellText3);
            row.appendChild(cell3);
            tableBody.appendChild(row);
        }
        table.appendChild(tableBody);
        main.appendChild(table);
        table.setAttribute("border", "2");
        var lineBreak = document.createElement("br");
        document.body.appendChild(lineBreak);
    }
}

var order2 = {"products":[{"product":"HAMBURGER","quantity":2,"price":"$12300"},{"product":"COKE","quantity":2,"price":"$1300"}],"table_id":3};
var order3 = {"products":[{"product":"HOTDOG","quantity":1,"price":"$3000"},{"product":"COKE","quantity":1,"price":"$1300"}],"table_id":2};

