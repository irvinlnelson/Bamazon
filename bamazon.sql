CREATE DATABASE Bamazon_db;

USE Bamazon_db;

CREATE TABLE products (
    item_id int AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(20) NOT NULL,
    price INT(10) NOT NULL,
    stock_quantity INT(6) NOT NULL,
    PRIMARY KEY(item_id)

);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("4K TV", "Electronics", 4000.00, 20), ("Toothbrush", "Hygiene", 1.50, 200), ("Basketball", "Sports", 30, 15),
("Call of Duty Black Ops 9", "Games", 60.00, 60), ("Bamazon Becho", "Electronics", 25.00, 300), ("Socks", "Clothing", 3.00, 700), 
("Laptop", "Electronics", 300.00, 87), ("Developers Guide", "Books", 15.00, 12), ("Keyboard", "Electronics", 20.00, 23),
("Snare Drum", "Instruments", 35.00, 6)