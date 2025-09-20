import { Pizza } from "../../telasMenu/menuPizza";
import { salvarPizza } from "./salvarPizza";
import { lerPizza } from "./lerPizza";
import readlineSync from "readline-sync";


export function editarPizza(){
    const todasPizzas = lerPizza();

    //perguntando o numero para editar
    const pizzaEditar = readlineSync.questionInt("Digite o numero do produto que deseja editar: ");
    //localizando o numero desejado e armazenando todos os seus atributos em uma variavel
    const pizzaLocalizada =  todasPizzas.find(c => c.id === pizzaEditar);

    //se não achar esse numero de pizza
    if (!pizzaLocalizada) {
        console.log("Pizza nao encontrada!");
        return;
    }

    console.log("Pizza localizada!");
    console.log("Alterando: ");
    console.log("..caso nao queira mudar a infomação so dexar em branco..");

    //perguntando as novas informações caso não digite nasa o OU irá entrar em ação 
    // e considerar o valor original 
    const novaPizza = readlineSync.question("Nova Pizza: ")|| pizzaLocalizada.pizza;
    const valorDigitado = readlineSync.question("Novo valor: ");
    const novoValor = valorDigitado === "" ? pizzaLocalizada.valor : parseFloat(valorDigitado);

    pizzaLocalizada.pizza = novaPizza;
    pizzaLocalizada.valor = novoValor;

    //salvando as alterações
    salvarPizza(todasPizzas);

    console.log("Edição completa!");
    console.log("");
    console.log(`ID: ${pizzaLocalizada.id} | Pizza: ${pizzaLocalizada.pizza} | Valor: ${pizzaLocalizada.valor.toFixed(2)}`);
    
}