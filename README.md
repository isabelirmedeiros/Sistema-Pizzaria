# Sistema de Pizzaria (TypeScript + Node.js)

Sistema simples de linha de comando para gerenciar clientes, produtos, pedidos e cupons de desconto em uma pizzaria.

---

## Funcionalidades

- Cadastro, consulta, edição e exclusão de clientes.
- Cadastro, consulta, edição e exclusão de produtos (pizzas, bebidas, sobremesas). 
- Criação de pedidos (associados a cliente e produtos).
- Aplicação de cupom de desconto.
- Emissão de comprovante de pedido.
- Relatórios semanais e mensais de vendas.

---

# Recursos
* **Entrada:** nome, cpf, telefone, produto, preco.
* **Armazenameto:** `bancoDados/cadastroClientes.json`, `bancoDados/Produtos/bebidas.json`, `bancoDados/Produtos/sobremesas.json`, `bancoDados/Produtos/pizzas.json`, `dist/Vendas/comprovantes.txt`, `dist/pedidos.json`.
* **Saída:**  calcula o valor total de um pedido e emitir relatório semanais e mesais sobre o faturamento.
* **Consulta** por CPF: verifica se o cliente tem cadastro via CPF.

---

## Estrutura de pastas

```
Sistema-Pizzaria/
├── bancoDados/         # arquivos usados para persistência de dados (json)
├── src/                # código-fonte em TypeScript
├── dist/               # código compilado em JavaScript
├── node_modules/
├── package.json
├── tsconfig.json
└── README.md
```

### Arquivos JSON gerados

* `bancoDados/cadastroClientes.json` -> `nome, cpf, telefone`
* `bancoDados/Produtos/pizzas.json` -> `id, sabor, preco`
* `bancoDados/Produtos/bebidas.json` -> `id, bebida, preco`
* `bancoDados/Produtos/sobremesas.json` -> `id, sobremesas, preco`
* `dist/pedidos.json` -> `nome, cpf, podutos, quantidade, preco, pagamento, retirada, data`
* `dist/Vendas/comprovantes.txt` -> `nome, cpf, podutos, preco, pagamento, retirada, data`

---

## Pré-requisitos

* Node.js instalado (versão LTS recomendada)  
* npm instalado  

---

## Instalação e uso

1. Clone o repositório:
   ```bash
   git clone https://github.com/isabelirmedeiros/Sistema-Pizzaria.git
   cd Sistema-Pizzaria
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Compile o TypeScript para JavaScript (gera os arquivos em `dist/`):
   ```bash
   npm run build
   ```

4. Executar o sistema:
   ```bash
   npm start
   ```
---
### Recomendações

Na **raiz** do projeto:

```bash
npm i -D typescript ts-node @types/node
npm i readline-sync
```

Crie os script no **package.json**:

```json
{
  "devDependencies": {
    "@types/node": "^24.5.0",
    "@types/readline-sync": "^1.4.8",
    "ts-node": "^10.9.2",
    "typescript": "^5.9.2"
  },
  "dependencies": {
    "readline-sync": "^1.4.10"
  },

  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "es2022",             
    "module": "commonjs",            
    "moduleResolution": "node",   
    "rootDir": "./src",              
    "outDir": "./dist",              
    "strict": true,                 
    "esModuleInterop": true,         
    "forceConsistentCasingInFileNames": true, 
    "resolveJsonModule": true,       
    "types": ["node"]                
  },
  "include": ["src/**/*", "Produtos", "Clientes", "telasMenu", "Vendas"],       
  "exclude": ["node_modules"]        
}
```

---

## Uso (fluxo típico)

- Cadastro de cliente: inserir nome, dados de contato etc.  
- Cadastro de produto: definir nome, tipo (pizza, bebida, sobremesa), preço.  
- Fazer pedido: selecionar cliente, adicionar produtos, aplicar cupom se houver.  
- Gerar comprovante de pedido: exibe itens, valores, total com desconto se aplicável.  
- Ver relatórios: ver o total vendido por semana / mês.

---

## Uso (menu console)

1. **menuClientes** -> Mostre todos os clientes e cadastre, edite e exclua de acordo com o CPF. O sistema procura e salva em `bancoDados/cadastroClientes.json`.

2. **menuProdutos** -> Mostre todos os produtos e cadastre, edite e exclua de acordo com o ID. O sistema procura e salva em `bancoDados/Produtos/pizzas.json`, `bancoDados/Produtos/bebidas.json` ou `bancoDados/Produtos/sobremesas.json` .

3. **menuVendas** -> Faça um novo pedido, informando o **cpf**, **produto**, **quantidade**, **entrega**, **data** (formato IDO) e retorna o **valor total** gerando um comprovante salvo em `dist/Vendas/comprovantes.txt`; emita relatórios semanais e mensais salvo em `dist/pedidos.json`.

---

## Cupom de desconto

- Exemplo de cupom: `EDUTOP10` → desconto 15%.
- Aplicação automática ao pedido, se válido.

---

## Observações

- O sistema funciona via terminal (linha de comando).  
- É necessário ter o Node.js + npm configurados.  
- Os dados persistem em arquivos locais (em `bancoDados/` ou equivalente).  

---

## Autores

Projeto desenvolvido por **Ana Carolina Santos - RA: 2506285**, **Ekaterini Kotsis Milani - RA: 2510337**, **Isabeli Rosa de Medeiros - RA: 2503388** e **Raul dos Santos Machado - RA: 2521975** para um trabalho do Curso de Ciências da Computação, da matéria Programação TypeScript ministrada pelo Eduardo Popovici.

---

## Mapeameno dos arquivos 

<div align="center">
<img src="https://github.com/isabelirmedeiros/Sistema-Pizzaria/issues/1#issue-3443467619" width="750px" />
</div>

<div align="center">
<img src="https://github.com/isabelirmedeiros/Sistema-Pizzaria/issues/2#issue-3443492146" width="750px" />
</div>

<div align="center">
<img src="https://github.com/isabelirmedeiros/Sistema-Pizzaria/issues/3#issue-3443493643" width="750px" />
</div>
