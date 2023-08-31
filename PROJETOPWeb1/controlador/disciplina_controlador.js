class DisciplinaControlador {
    constructor() {
        this.servico = new DisciplinaServico();
    }

    inserir() {
        const matriculaElemento = document.querySelector("#matriculaDisciplina");
        const nomeElemento = document.querySelector("#nomeDisciplina");

        const disciplinaInserida = this.servico.inserir(matriculaElemento.value, nomeElemento.value);

        if (disciplinaInserida) {
            // vai limpar os campos 
            matriculaElemento.value = "";
            nomeElemento.value = "";
    
            // vai atualizar a lista de disciplinas
            this.listar();
        }
    }
    pesquisarPorMatricula() {
        const matriculaElemento = document.querySelector("#matriculaDisciplina");

        const disciplinaEncontrada = this.servico.pesquisarPorMatricula(matriculaElemento.value);

        if (disciplinaEncontrada) {
            document.querySelector("#detalhesDisciplina").textContent = disciplinaEncontrada.nome;
        } else {
            // Exiba uma mensagem de disciplina não encontrada
        }
    }

    remover() {
        const matriculaElemento = document.querySelector("#matriculaDisciplina");

        this.servico.remover(matriculaElemento.value);
        //vai atualizar a lista apos a remoção
        this.listar();
    }

    listar() {
        const listaDisciplinasElemento = document.querySelector('#listaDisciplinas');
        const disciplinas = this.servico.listar();
        //metodo para limpar a lista de disciplinas antes de atualizar 
        listaDisciplinasElemento.innerHTML = "";

        disciplinas.forEach(disciplina => {
            const disciplinaElemento = document.createElement("li");
            disciplinaElemento.textContent = `Matrícula: ${disciplina.matricula} - Nome: ${disciplina.nome}`;
            listaDisciplinasElemento.appendChild(disciplinaElemento);
        });
    }

    inserirAlunoNaDisciplina() {
        const matriculaDisciplinaElemento = document.querySelector("#matriculaDisciplina");
        const matriculaAlunoElemento = document.querySelector("#matriculaAluno");

        const disciplinaEncontrada = this.servico.pesquisarPorMatricula(matriculaDisciplinaElemento.value);

        if (disciplinaEncontrada) {
            const alunoEncontrado = this.servicoAluno.pesquisarPorMatricula(matriculaAlunoElemento.value);
            if (alunoEncontrado) {
                this.servico.inserirAlunoNaDisciplina(disciplinaEncontrada, alunoEncontrado);
                
                this.atualizarAlunosNaDisciplina(disciplinaEncontrada);
            }
            
        }
        
    }

    atualizarAlunosNaDisciplina(disciplina) {
        const listaAlunosDisciplinaElemento = document.querySelector('#listaAlunosDisciplina');
        const alunosDisciplina = disciplina.alunos;

        // Limpar a lista de alunos na disciplina antes de atualizá-la
        listaAlunosDisciplinaElemento.innerHTML = "";

        alunosDisciplina.forEach(aluno => {
            const alunoElemento = document.createElement("li");
            alunoElemento.textContent = `Nome: ${aluno.nome} - Matrícula: ${aluno.matricula}`;
            listaAlunosDisciplinaElemento.appendChild(alunoElemento);
        });
    }
}