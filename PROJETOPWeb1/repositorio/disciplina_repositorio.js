class DisciplinaRepositorio {
    constructor() {
        this.disciplinas = [];
    }

    inserir(disciplina) {
        this.disciplinas.push(disciplina);
    }

    pesquisarPorMatricula(matricula) {
        return this.disciplinas.find(disciplina => disciplina.matricula === matricula);
    }

    remover(codigo) {
        const indexDisciplina = this.disciplinas.findIndex(disciplina => disciplina.matricula === matricula);
        if (indexDisciplina > -1) {
            this.disciplinas.splice(indexDisciplina, 1);
        }
    }

    listar() {
        return this.disciplinas;
    }
}
