import { Sobremesa } from "../../telasMenu/menuSobremesa";
import { salvarSobremesa } from "./salvarSobremesa";
import { lerSobremesa } from "./lerSobremesa";
import readlineSync from "readline-sync";


export function editarSobremesa(){
    const todasSobremesas = lerSobremesa();

    //perguntando o numero para editar
    const sobremesaEditar = readlineSync.questionInt("Digite o numero do produto que deseja editar: ");
    //localizando o numero desejado e armazenando todos os seus atributos em uma variavel
    const sobremesaLocalizada =  todasSobremesas.find(s => s.id === sobremesaEditar);

    //se não achar esse numero de pizza
    if (!sobremesaLocalizada) {
        console.log("Sobremesa nao encontrada!");
        return;
    }

    console.log("Sobremesa localizada!");
    console.log("Alterando: ");
    console.log("..caso nao queira mudar a infomação so dexar em branco..");

    //perguntando as novas informações caso não digite nasa o OU irá entrar em ação 
    // e considerar o valor original 
    const novaSobremesa = readlineSync.question("Nova sobremesa: ")|| sobremesaLocalizada.sobremesa;
    const valorDigitado = readlineSync.question("Novo valor: ");
    const novoValor = valorDigitado === "" ? sobremesaLocalizada.valor : parseFloat(valorDigitado);


    sobremesaLocalizada.sobremesa = novaSobremesa;
    sobremesaLocalizada.valor = novoValor;

    //salvando as alterações
    salvarSobremesa(todasSobremesas);

    console.log("Edição completa!");
    console.log("");
    console.log(`ID: ${sobremesaLocalizada.id} | ${sobremesaLocalizada.sobremesa} | Valor: ${sobremesaLocalizada.valor.toFixed(2)}`);
    
}