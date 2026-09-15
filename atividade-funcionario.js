class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }

  trabalhar() {
    console.log(this.nome + " está trabalhando.");
  }

  exibirDados() {
    console.log("Nome: " + this.nome);
    console.log("Salário: R$ " + this.salario);
  }

  alterarSalario(novoSalario) {
    if (novoSalario <= 0) {
      throw new Error("Salário inválido.");
    }

    this.salario = novoSalario;
    console.log("Salário alterado com sucesso.");
  }
}


class Professor extends Funcionario {
  constructor(nome, salario, disciplina) {
    super(nome, salario);

    this.disciplina = disciplina;
    this.horasAula = 0;
  }

  darAula() {
    console.log(
      this.nome + " está dando aula de " + this.disciplina + "."
    );
  }

  adicionarHoras(quantidade) {
    if (quantidade <= 0) {
      throw new Error("Quantidade de horas inválida.");
    }

    this.horasAula = this.horasAula + quantidade;

    console.log("Foram adicionadas " + quantidade + " horas.");
    console.log("Total de horas: " + this.horasAula);
  }

  mostrarDadosCompletos() {
    this.exibirDados();
    console.log("Disciplina: " + this.disciplina);
    console.log("Total de horas: " + this.horasAula);
  }
}


const professor1 = new Professor(
  "Carlos",
  5000,
  "Programação"
);

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function mostrarMenu() {
  console.log("\n========= SISTEMA =========");
  console.log("1 - Mostrar dados do professor");
  console.log("2 - Trabalhar");
  console.log("3 - Dar aula");
  console.log("4 - Adicionar horas-aula");
  console.log("5 - Alterar salário");
  console.log("6 - Sair");

  leitor.question("\nEscolha uma opção: ", function (opcao) {
    try {
      if (opcao === "1") {
        professor1.mostrarDadosCompletos();
        mostrarMenu();
      }

      else if (opcao === "2") {
        professor1.trabalhar();
        mostrarMenu();
      }

      else if (opcao === "3") {
        professor1.darAula();
        mostrarMenu();
      }

      else if (opcao === "4") {
        leitor.question(
          "Quantas horas deseja adicionar? ",
          function (resposta) {
            try {
              const quantidade = Number(resposta);
              professor1.adicionarHoras(quantidade);
            } catch (erro) {
              console.log("Erro: " + erro.message);
            }

            mostrarMenu();
          }
        );
      }