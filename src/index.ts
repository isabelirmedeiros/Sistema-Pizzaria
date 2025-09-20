/*TRABALHO SISTEMA PIZZARIA
CCO - Progrmação TypeScript 
Ana Carolina Santos - RA: 2506285
Ekaterini Kotsis Milani - RA: 2510337
Isabeli Rosa de Medeiros - RA: 2503388
Raul do Santos Machado - RA: 2521975
*/ 


import readlineSync from "readline-sync";
import {menuVendas} from "./telasMenu/menuVendas.js";
import { menuClientes } from "./telasMenu/menuCliente.js";
import { menuProdutos } from "./telasMenu/menuProduto.js";


let loop = true;

function menu(): void {
    console.clear;
    console.log("\n-- MENU PRINCIPAL --");
    console.log("1 - Clientes");
    console.log("2 - Produtos");
    console.log("3 - Pedidos");
    console.log("4 - Sair\n");

    const escolha = readlineSync.questionInt("Digite a opcao: ");

    switch(escolha){
        case 1: 
            menuClientes();
        break;

        case 2: 
            menuProdutos();
        break;

        case 3:
            menuVendas();
        break;

        case 4:
            console.log("Finalizando...");
            loop = false;
        
    }

    console.log("Aperte qualquer tecla para continuar");
    readlineSync.question("");
}

while(loop){
     menu();   
}
