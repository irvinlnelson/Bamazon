var mysql = require("mysql");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "Bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("~~~~~~~~~~~Hi! Check out out current inventory below! ~~~~~~~~~~")
    showInventory();

});

function showInventory() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + ", " + res[i].product_name + ", " + res[i].department_name + ", " + res[i].price
                + ", " + res[i].stock_quantity + ".  ")
        };
        questions();
    });


};


function questions() {

    inquirer.prompt([
        {
            type: "input",
            name: "itemId",
            message: "Please input the number of the product you would like."
        },
        {
            type: "input",
            name: "quantity",
            message: "How many would you like to buy?"
        }
    ]).then(function (answer) {
        //console.log(user.itemId);
        var itemBought = answer.itemId;
        console.log(itemBought);
        var quantityBought = answer.quantity;
        connection.query("SELECT * FROM products WHERE ?", { item_Id: itemBought }, function (err, res) {
            console.log(res);
            if (res[0].stock_quantity > quantityBought) {
                console.log("Thanks for your purchase! Your total is $" + (quantityBought * res[0].price) + ".")

                var query = "UPDATE products SET stock_quantity= stock_quantity - ? WHERE ?";
                connection.query(query, [{stock_quantity: quantityBought}, {item_id: itemBought}], function (err, res) {
                    
                })

              

            } else {
                console.log("Sorry there are only " + res[0].stock_quantity + " left.")
            }

        });


    });



};


