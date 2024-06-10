CREATE DATABASE agenda;

CREATE TABLE IF NOT EXISTS Cursos (
    id INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    semestre VARCHAR(50) NOT NULL,
    turno VARCHAR(50) NOT NULL,
    coordenacao VARCHAR(100) NOT NULL,
    segunda VARCHAR(255) NOT NULL,
    terca VARCHAR(255) NOT NULL,
    quarta VARCHAR(255) NOT NULL,
    quinta VARCHAR(255) NOT NULL,
    sexta VARCHAR(255) NOT NULL
);

INSERT INTO Cursos (id, nome, semestre, turno, coordenacao, segunda, terca, quarta, quinta, sexta) VALUES
(1, 'Administração', '2º Semestre', 'Vespertino', 'Coordenador 1', 'Administração Financeira I', 'Análise Estatística', 'Administração de Custos', 'Matemática Financeira', 'Pesquisa de Marketing'),
(2, 'Agronomia', '5º Semestre', 'Matutino', 'Coordenador 2', 'Irrigação e Drenagem', 'Processamento de Produtos de Origem Animal e Vegetal', 'Sistemas Agroflorestais', 'Pós-Colheita', 'Sementes'),
(3, 'Ciência da Computação', '4º Semestre', 'Noturno', 'Coordenador 4', 'Engenharia de Software I', 'Programação II', 'Organização de Computadores', 'Banco de Dados I', 'Geometria Analítica'),
(4, 'Ciências Sociais', '1º Semestre', 'Vespertino', 'Coordenador 5', 'Ciência Política I', 'Iniciação à Prática Científica', 'Introdução à Filosofia', 'Antropologia I', 'Introdução ao pensamento social'),
(5, 'Enfermagem', '3º Semestre', 'Integral', 'Coordenador 6', 'Anatomia I', 'Fisiologia I', 'Parasitologia', 'Psicologia Aplicada à Enfermagem', 'Farmacologia Aplicada à Enfermagem'),
(6, 'Engenharia Ambiental e Sanitária', '6º Semestre', 'Integral', 'Coordenador 7', 'Bioquímica', 'Física II', 'Ciência e Tecnologia dos Materiais', 'Cálculo II', 'Topografia'),
(7, 'Filosofia', '7º Semestre', 'Vespertino', 'Coordenador 8', 'Metafísica', 'Filosofia Moderna', 'Iniciação à Prática Científica', 'Direitos e Cidadania', 'Língua Brasileira de Sinais - Libras'),
(8, 'Geografia', '8º Semestre', 'Vespertino', 'Coordenador 9', 'História do Pensamento Geográfico', 'Geografia da População', 'Geografia Política', 'Organização do Espaço Mundial', 'Didática Geral'),
(9, 'História', '2º Semestre', 'Vespertino', 'Coordenador 10', 'História da Fronteira Sul', 'Fundamentos da Educação', 'História do Brasil I', 'História da América II', 'História Contemporânea I'),
(10, 'Letras: Português e Espanhol', '3º Semestre', 'Vespertino', 'Coordenador 11', 'Estatística Básica', 'Tópicos Especiais em Literatura I', 'Introdução Aos Estudos Linguísticos', 'Produção Textual Acadêmica', 'Literatura Espanhola I'),
(11, 'Matemática', '1º Semestre', 'Vespertino', 'Coordenador 12', 'Ciência, Tecnologia e Sociedade', 'Cálculo I', 'Matemática Discreta', 'Números e Funções Reais', 'Tópicos de Matemática'),
(12, 'Medicina', '2º Semestre', 'Integral', 'Coordenador 13', 'Processos Biológicos I', 'Iniciação à Prática Científica', 'Saúde Coletiva I', 'Inglês Médico', 'Introdução à Filosofia'),
(13, 'Pedagogia', '4º Semestre', 'Vespertino', 'Coordenador 14', 'Gestão Escolar', 'Arte, Educação e Infância', 'Introdução Ao Pensamento Social', 'Corpo e Educação', 'Gênero, Mídia e Educação');
