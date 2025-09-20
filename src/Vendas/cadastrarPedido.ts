import * as readlineSync from "readline-sync";
import { procurarCliente } from "../Clientes/procurarCliente";
import { procurarPizza } from "../Produtos/Pizzas/procurarPizza";
import { procurarBebida } from "../Produtos/Bebidas/procurarBebida";
import { procurarSobremesa } from "../Produtos/Sobremesas/procurarSobremesa";
import { calcularTotal } from "./calcularTotal";
import { escolherPagamento } from "./escolherPagamento";
import { escolherEntrega } from "./escolherEntrega";
import { salvarPedido } from "./salvarPedido";
import { emitirComprovante } from "./emitirComprovante";
import { adicionarCliente } from "../Clientes/adicionarCliente";

export function cadastrarPedidoInteractive() {
  console.log("=== Cadastro de Pedido ===");

  const cpf = readlineSync.question("Digite o CPF do cliente: ");
  let cliente = procurarCliente(cpf);
  if (!cliente) {
    console.log("Cliente nao encontrado!");
    console.log("Cadastrando...")
    adicionarCliente();
    cliente = procurarCliente(cpf);
  }

  let produtos: { nome: string; preco: number; quantidade: number }[] = [];
  while (true) {
    const categoria = readlineSync.keyInSelect(
      ["Pizza", "Bebida", "Sobremesa", "Finalizar"],
      "Escolha uma categoria:"
    );
    if (categoria === -1 || categoria === 3) break;

    // Exibe o catalogo de produtos da categoria escolhida
    if (categoria === 0) {
      require("../Produtos/Pizzas/mostrarPizza").mostrarPizza();
      console.log("Escolha o numero do produto pelo ID acima.");
    }
    if (categoria === 1) {
      require("../Produtos/Bebidas/mostrarBebida").mostrarBebida();
      console.log("Escolha o numero do produto pelo ID acima.");
    }
    if (categoria === 2) {
      require("../Produtos/Sobremesas/mostrarSobremesa").mostrarSobremesa();
      console.log("Escolha o numero do produto pelo ID acima.");
    }

    let produto: any = null;
    if (categoria === 0) produto = procurarPizza();
    if (categoria === 1) produto = procurarBebida();
    if (categoria === 2) produto = procurarSobremesa();

    if (produto) {
      const quantidade = readlineSync.questionInt("Quantidade: ");
      let nomeProduto = "";
      if (categoria === 0) nomeProduto = produto.pizza;
      if (categoria === 1) nomeProduto = produto.bebida;
      if (categoria === 2) nomeProduto = produto.sobremesa;
  // Corrigir campo de preco se necessario
      const precoProduto = produto.preco ?? produto.valor;
      produtos.push({ nome: nomeProduto, preco: precoProduto, quantidade });
    }
  }

  let cupom = readlineSync.question("Deseja usar um cupom? (Digite o codigo ou Enter para nenhum): ");
  let total = Number(calcularTotal(produtos, cupom));
  let desconto = 0;
  if (cupom && cupom.trim().toUpperCase() === "EDUTOP10") {
    desconto = produtos.reduce((acc, p) => acc + p.preco * p.quantidade, 0) * 0.15;
    console.log("Cupom valido! 15% de desconto aplicado.");
  } else if (cupom) {
    console.log("Cupom invalido ou nao reconhecido. Nenhum desconto aplicado.");
    cupom = "";
  }
  const pagamento = escolherPagamento();
  const entrega = escolherEntrega();

  const pedido = {
    clienteCPF: cpf,
    produtos,
    total,
    pagamento,
    entrega,
    data: new Date().toISOString(), // formato ISO, compativel com Date
    cupom: cupom || null,
    desconto: desconto,
  };

  salvarPedido(pedido);
  emitirComprovante(pedido);

  console.log("Pedido cadastrado com sucesso!");
}