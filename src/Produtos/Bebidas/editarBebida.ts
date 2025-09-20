import { Bebida } from "../../telasMenu/menuBebida";
import { salvarBebida } from "./salvarBebida";
import { lerBebida } from "./lerBebida";
import readlineSync from "readline-sync";


export function editarBebida(){
    const todasBebidas = lerBebida();

    //perguntando o numero para editar
    const bebidaEditar = readlineSync.questionInt("Digite o numero do produto que deseja editar: ");
    //localizando o numero desejado e armazenando todos os seus atributos em uma variavel
    const bebidaLocalizada =  todasBebidas.find(b => b.id === bebidaEditar);

    //se não achar esse numero de bebida
    if (!bebidaLocalizada) {
        console.log("Bebida nao encontrada!");
        return;
    }

    console.log("Sobremesa localizada!");
    console.log("Alterando: ");
    console.log("..caso nao queira mudar a infomação so dexar em branco..");

    //perguntando as novas informações caso não digite nasa o OU irá entrar em ação 
    // e considerar o valor original 
    const novaBebida = readlineSync.question("Nova bebida: ")|| bebidaLocalizada.bebida;
    const valorDigitado = readlineSync.question("Novo valor: ");
    const novoValor = valorDigitado === "" ? bebidaLocalizada.valor : parseFloat(valorDigitado);

    bebidaLocalizada.bebida = novaBebida;
    bebidaLocalizada.valor = novoValor;

    //salvando as alterações
    salvarBebida(todasBebidas);

    console.log("Edição completa!");
    console.log("");
    console.log(`ID: ${bebidaLocalizada.id} | ${bebidaLocalizada.bebida} | Valor: ${bebidaLocalizada.valor.toFixed(2)}`);
    
}