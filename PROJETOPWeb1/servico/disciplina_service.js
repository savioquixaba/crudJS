class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(matricula, nome) {
        const disciplinaNova = new Disciplina(matricula, nome);
        this.repositorio.inserir(disciplinaNova);
        return disciplinaNova;
    }

    pesquisarPorMatricula(matricula) {
        return this.repositorio.pesquisarPorMatricula(matricula);
    }

    remover(matricula) {
        this.repositorio.remover(matricula);
    }

    listar() {
        return this.repositorio.listar();
    }

    inserirAlunoNaDisciplina(disciplina, aluno) {
        const disciplinaEncontrada = this.repositorio.pesquisarPorMatricula(disciplina.matricula);
        if (disciplinaEncontrada) {
            disciplinaEncontrada.adicionarAluno(aluno);
        }
    }
}