// var orders = [{
//     "products": [{"product": "PIZZA", "quantity": 3, "price": "$10000"}, {
//         "product": "HOTDOG",
//         "quantity": 1,
//         "price": "$3000"
//     }, {"product": "COKE", "quantity": 4, "price": "$1300"}], "table_id": 1
// },
//     {
//         "products": [{"product": "HAMBURGER", "quantity": 2, "price": "$12300"}, {
//             "product": "COKE",
//             "quantity": 2,
//             "price": "$1300"
//         }], "table_id": 3
//     }];

function addOrder() {
    var o = {"orderAmountsMap":{"HAMBURGER":2,"COKE":2,"PIZZA":1,"BEER":1},"tableNumber":5};
    // axios.post('http://localhost:8080/orders', o)
    axios.post("https://arsw-lab4.herokuapp.com/orders",o)
        .then(function (response) {
            loadOrders();
            console.log(response);
        })
        .catch(function (error) {
            var main = document.getElementsByTagName("main")[0];
            while(main.hasChildNodes()) {
                main.removeChild((main.firstChild));
            }
            var paragraph = document.createElement("p");
            var text = document.createTextNode("The order already exists");
            paragraph.appendChild(text);
            main.appendChild(paragraph);
            console.log(error);
        });
    // orders.push(order);
}

function removeOrderByTableId(tableId) {
    var i;
    for (i = 0; i < orders.length; i++) {
        if (orders[i].table_id == tableId) {
            orders.splice(i, 1);
        }
    }
}

function loadOrders() {
    // axios.get('http://localhost:8080/orders')
    axios.get("https://arsw-lab4.herokuapp.com/orders")
        .then(function (response) {
            tableGenerator(response.data);
            console.log(response);
        })
        .catch(function (error) {
            var main = document.getElementsByTagName("main")[0];
            var paragraph = document.createElement("p");
            var text = document.createTextNode("There is a problem with our servers. We apologize for the inconvenience, please try again later");
            paragraph.appendChild(text);
            main.appendChild(paragraph);
            console.log(error);
        });
}

function tableGenerator(data) {
    var orders = data;
    var main = document.getElementsByTagName("main")[0];
    while(main.hasChildNodes()) {
        main.removeChild((main.firstChild));
    }

    for (var o = 0; o < orders.length; o++) {
        var table = document.createElement("table");
        var tableBody = document.createElement("tbody");
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
        // var titleCell2 = document.createElement("td");
        // var titleCellText2 = document.createTextNode("Price");
        // titleCell2.appendChild(titleCellText2);
        // titleRow.appendChild(titleCell2);
        tableBody.appendChild(titleRow);
        for (var i = 0; i < Object.keys(order.orderAmountsMap).length; i++) {
            var row = document.createElement("tr");
            var cell1 = document.createElement("td");
            var cellText1 = document.createTextNode(Object.keys(order.orderAmountsMap)[i]);
            cell1.appendChild(cellText1);
            row.appendChild(cell1);
            var cell2 = document.createElement("td");
            var cellText2 = document.createTextNode(Object.values(order.orderAmountsMap)[i]);
            cell2.appendChild(cellText2);
            row.appendChild(cell2);
            // var cell3 = document.createElement("td");
            // var cellText3 = document.createTextNode(order.orderAmountsMap[i].price);
            // cell3.appendChild(cellText3);
            // row.appendChild(cell3);
            tableBody.appendChild(row);
        }
        table.appendChild(tableBody);
        main.appendChild(table);
        table.setAttribute("border", "5");
        var lineBreak = document.createElement("BR");
        main.appendChild(lineBreak);
    }
}

// var order2 = {
//     "products": [{"product": "HAMBURGER", "quantity": 2, "price": "$12300"}, {
//         "product": "COKE",
//         "quantity": 2,
//         "price": "$1300"
//     }], "table_id": 3
// };
// var order3 = {
//     "products": [{"product": "HOTDOG", "quantity": 1, "price": "$3000"}, {
//         "product": "COKE",
//         "quantity": 1,
//         "price": "$1300"
//     }], "table_id": 2
// };

