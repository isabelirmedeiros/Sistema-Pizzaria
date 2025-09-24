"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosProdutos = todosProdutos;
const mostrarPizza_1 = require("../Produtos/Pizzas/mostrarPizza");
const mostrarBebida_1 = require("./Bebidas/mostrarBebida");
const mostrarSobremesa_1 = require("./Sobremesas/mostrarSobremesa");
function todosProdutos() {
    console.log("");
    console.log("---PIZZAS---");
    (0, mostrarPizza_1.mostrarPizza)();
    console.log("\n---BEBIDAS---");
    (0, mostrarBebida_1.mostrarBebida)();
    console.log("\n---SOBREMESAS---");
    (0, mostrarSobremesa_1.mostrarSobremesa)();
}
