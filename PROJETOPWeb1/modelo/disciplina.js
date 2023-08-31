class Disciplina {
    constructor(matricula, nome) {
        this.matricula = matricula;
        this.nome = nome;
        this.alunos = [];
    }

    get matricula() {
        return this._matricula;
    }

    set matricula(novamatricula) {
        this._matricula = novamatricula;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get alunos() {
        return this._alunos;
    }

    adicionarAluno(aluno) {
        this._alunos.push(aluno);
    }

    removerAluno(matricula) {
        const indexAluno = this._alunos.findIndex(aluno => aluno.matricula === matricula);
        if (indexAluno > -1) {
            this._alunos.splice(indexAluno, 1);
        }
    }
}