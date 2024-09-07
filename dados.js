//criando um objeto de dados, com as propriedades de nome, descricao e link de execução do exercício
let dados = [
    {

        titulo: "Supino reto",
        descricao: "O supino reto é um exercício composto, fundamental para o desenvolvimento da musculatura do peito, mais especificamente do peitoral maior. Ele também trabalha os músculos deltóides (ombros) e tríceps braquial de forma secundária.",
        dica: "A coluna deve estar sempre apoiada no banco e os pés firmes no chão",
        link: "https://youtu.be/EZMYCLKuGow?si=Tg1DjB6VCH476soT",
        //adicionamos uma tags de busca 
        tags: "peito peitoral superior"
    },
    {

        titulo: "Supino inclinado",
        descricao: "é uma variação do supino tradicional que coloca um maior foco na parte superior do músculo peitoral. Ao inclinar o banco, você altera o ângulo de trabalho dos músculos, permitindo um recrutamento maior das fibras musculares superiores",
        dica: "Experimente diferentes ângulos de inclinação para encontrar o que proporciona o melhor estímulo para seus músculos.",
        link: "https://youtu.be/WP1VLAt8hbM?si=uBBd7ZS72HIdhrFt",
        //adicionamos uma tags de busca 
        tags: "peito peitoral superior"
    },
    {

        titulo: "supino declinado",
        descricao: "Ao realizar esse exercício em um banco declinado, você aumenta o foco na parte inferior do peitoral, proporcionando uma variação interessante para quem busca desenvolver essa área de forma mais completa",
        dica: "Mantenha o movimento controlado, tanto na descida quanto na subida, para maximizar o trabalho muscular.",
        link: "https://youtu.be/J2g6qPBJfqo?si=oOpbG89e2qKIMUGm",
        //adicionamos uma tags de busca 
        tags: "peito peitoral superior declinado"
    },
    {

        titulo: "cross over",
        descricao: "é um exercício de isolamento que permite trabalhar os músculos peitorais de forma mais localizada, proporcionando um maior foco na parte interna do peito. Ele é excelente para definir e dar um acabamento mais estético aos músculos.",
        dica: "Realize o movimento completo, contraindo os músculos peitorais no ponto máximo da contração.",
        link: "https://youtu.be/jqTlJt3JXzQ?si=tJaW9fIpgvbqqQlf",
        //adicionamos uma tags de busca 
        tags: "peito peitoral superior cross polia"
    },
    {

        titulo: "crucifixo máquina",
        descricao: "é um exercício de isolamento que permite trabalhar os músculos peitorais de forma mais localizada, com foco na parte interna e externa do peito. O crucifixo na máquina oferece maior estabilidade e permite um movimento mais controlado.",
        dica: "Mantenha as costas apoiadas no encosto e os ombros relaxados durante todo o movimento.",
        link: "https://youtu.be/FzCnfD0gOXo?si=piMifNG675EgJM03",
        //adicionamos uma tags de busca 
        tags: "peito peitoral superior peck deck crucifixo"
    },
    {
        titulo: "Agachamento",
        descricao: "é um dos exercícios mais completos e fundamentais na musculação, trabalhando principalmente os músculos das pernas, além de ativar o core estabilização. É um movimento funcional que imita atividades diárias, como sentar e levantar, tornando-o muito eficaz para o ganho de força e massa muscular nas pernas.",
        dica: "Pressione os calcanhares no chão ao subir, evitando inclinar-se para frente e deslocar o peso para os dedos dos pés.",
        link: "https://youtu.be/zgk71dUUt0Y?si=qZvsWSY8tRNcMzQ0", // Substitua por um link válido
        //adicionamos uma tags de busca 
        tags: "inferior inferiores perna agachar"
    },
    {
        titulo: "Cadeira flexora",
        descricao: "é um exercício de musculação voltado para trabalhar os músculos isquiotibiais (posteriores da coxa), além de envolver o glúteo e, em menor grau, os músculos da panturrilha. O exercício é feito em uma máquina que permite isolar os músculos da parte posterior da coxa, proporcionando uma contração controlada e eficiente.",
        dica: "Flexione os joelhos ao máximo, mas sem ultrapassar os limites de mobilidade ou causar desconforto nas articulações.",
        link: "https://youtu.be/Zss6E3VU6X0?si=KOWUCfJGIlevPz75", // Substitua por um link válido
        //adicionamos uma tags de busca 
        tags: "inferior inferiores perna flexora cadeira posterior"
    },
    {
        titulo: "Mesa flexora",
        descricao: "é um equipamento de musculação destinado ao fortalecimento dos músculos posteriores da coxa (isquiotibiais) e, em menor grau, dos glúteos e panturrilhas. Na mesa flexora o usuário deita-se de barriga para baixo enquanto realiza o movimento de flexão dos joelhos.",
        dica: "colocar a força no calcanhar acima do tornozelo e ter atenção em não levar o quadril",
        link: "https://youtu.be/2-ULaRrQa7c?si=leGbh5WiXFvcxbQP", // Substitua por um link válido
        //adicionamos uma tags de busca 
        tags: "inferior inferiores perna flexora mesa posterior"
    },
    {
        titulo: "cadeira extensora",
        descricao: "é um equipamento de musculação projetado para trabalhar principalmente os músculos do quadríceps (parte frontal das coxas). O movimento realizado na máquina é uma extensão de joelhos, onde as pernas são levantadas para frente, isolando os quadríceps e promovendo seu fortalecimento.",
        dica: "Mantenha o movimento controlado, tanto na subida (extensão) quanto na descida (retorno). Evite deixar os pesos caírem de forma brusca, pois isso pode causar lesões.",
        link: "https://youtu.be/el3oHblB5DM?si=KPjfA-SO2PIJQcHW", // Substitua por um link válido
        //adicionamos uma tags de busca 
        tags: "inferior inferiores perna extensora quadriceps cadeira "
    },
    {
        titulo: "Leg Press",
        descricao: "é um equipamento de musculação utilizado para trabalhar os músculos das pernas, com ênfase nos quadríceps, glúteos, posteriores da coxa e panturrilhas. Ele é uma excelente alternativa ou complemento ao agachamento, oferecendo um suporte mais estável para quem busca fortalecimento nas pernas, principalmente para quem tem dificuldades com exercícios livres.",
        dica: "Posicione os pés na largura dos ombros e mantenha-os firmes na plataforma. Se você colocar os pés mais altos, enfatiza os glúteos e os posteriores da coxa. Se colocá-los mais baixos, trabalha mais os quadríceps.",
        link: "https://youtu.be/nY8UsiAqwds?si=T2iDglJZqYrhokly",
        //adicionamos uma tags de busca 
        tags: "perna leg inferior inferiores press "
    },
    {
        titulo: "agachamento búlgaro",
        descricao: "é um exercício unilateral de musculação que foca principalmente os músculos do quadríceps, glúteos e posteriores da coxa. Nesse movimento, uma perna é posicionada à frente do corpo e a outra apoiada em um banco ou plataforma elevada, o que aumenta a intensidade do trabalho da perna da frente. Esse exercício é eficaz tanto para o ganho de força quanto para melhorar o equilíbrio e a estabilidade.",
        dica: "Coloque o pé da frente a uma distância confortável do banco para garantir uma boa amplitude de movimento. Quanto mais distante, mais os glúteos são ativados; mais próximo, o quadríceps trabalha mais.",
        link: "https://youtu.be/IGf9fR4Y7Iw?si=vs8ojfIiGTMJ8Pkk",
        //adicionamos uma tags de busca 
        tags: "perna, búlgaro, agachamento bulgaro,agachar,agachamento,"
    },
    {
        titulo: "cadeira abdutora",
        descricao: "é utilizado para trabalhar os músculos abdutores das pernas, que são responsáveis por movimentar as pernas para fora do corpo. Este exercício é essencial para fortalecer e tonificar a região externa das coxas e glúteos",
        dica: "Garanta que os rolos acolchoados estejam ajustados de forma que fiquem confortavelmente na parte externa das coxas e o assento esteja numa altura adequada para que a execução do movimento seja eficiente e confortável.",
        link: "https://youtu.be/e2gmqTG1OgQ?si=bdm50DtAirKrxHJl",
        //adicionamos uma tags de busca 
        tags: "perna, abdutora, cadeira"
    },
    {
        titulo: "Rosca com barra",
        descricao: "Exercício básico e eficaz para o desenvolvimento do bíceps braquial. Consiste em levantar uma barra com as mãos em pronação, flexionando os cotovelos.",
        dica: "Mantenha os cotovelos próximos ao corpo durante todo o movimento.",
        link: "https://youtu.be/Q8TqfD8E7BU?si=Ja8IANTG9ED3DaTN",
        tags: "bíceps, braço, rosca, biceps"
    },
    {
        titulo: "Martelo",
        descricao: "Variação da rosca direta com barra, permitindo um maior amplitude de movimento e maior ativação muscular.",
        dica: "Contraia o bíceps no ponto máximo da contração.",
        link: "https://youtu.be/0qkQy8V2FC0?si=8bCdMal_ZMhMJhs1",
        tags: "bíceps, braço, rosca martelo, biceps"
    },
    {
        titulo: "Rosca concentrada",
        descricao: "Exercício de isolamento que permite trabalhar o bíceps de forma mais intensa, com foco na parte inferior do músculo.",
        dica: "Apoie o cotovelo no interior da coxa para isolar o bíceps.",
        link: "https://youtu.be/EEpvOQAAtRo?si=D9TSIMCCnfyeFDhY",
        tags: "bíceps, braço, concentrada, rosca"
    },
    {
        titulo: "Extensão dos tríceps na polia alta",
        descricao: "Exercício clássico para isolar o tríceps. Consiste em puxar uma barra presa a uma polia alta para baixo, estendendo os cotovelos.",
        dica: "Mantenha os cotovelos próximos à cabeça durante todo o movimento.",
        link: "https://youtu.be/LOCarvWMhNQ?si=xeSr0ArrEJ2LakFe",
        tags: "tríceps, braço, extensão, extensao, triceps, polia alta",
      
    },
    {
        titulo: "Tríceps testa no cross",
        descricao: "Exercício que trabalha o tríceps de forma unilateral, permitindo um maior foco em cada braço.",
        dica: "Mantenha o cotovelo próximo à cabeça e o movimento controlado.",
        link: "https://youtu.be/dP14qAF1v98?si=-2bwqtTG-GcIbTnI",
        tags: "tríceps, braço, testa, cross",
    },
    {
        titulo: "rosca francesa",
        descricao: "Exercício composto que trabalha o tríceps e parte do ombro. Consiste em deitar em um banco e estender os cotovelos para cima, segurando uma barra.",
        dica: "Mantenha os cotovelos próximos à cabeça e evite balançar o corpo.",
        link: "https://youtu.be/YJ4kGE3eemY?si=2pSYVU_MLNNjViPT",
        tags: "tríceps, braço, frances, francês",
    },
    {
        titulo: "Puxada vertical",
        descricao: "Exercício composto que trabalha principalmente o latíssimo do dorso. É realizado em uma máquina de polia alta, puxando uma barra em direção ao peito.",
        dica: "Mantenha os cotovelos próximos ao corpo durante todo o movimento.",
        link: "https://youtu.be/pJM_rHhluK8?si=VjeekC6hkuTuABCR",
        tags: "costas, latíssimo, puxada, vertical",
    },
    {
        titulo: "Remada curvada",
        descricao: "Exercício que trabalha o latíssimo do dorso, romboides e trapézio. É realizado com uma barra ou halteres, inclinando o corpo para frente.",
        link:"https://youtu.be/TfxJMertfsw?si=3VqddYASzzTYYCZN",
        dica: "Mantenha as costas planas e os cotovelos próximos ao corpo.",
        tags: "costas, latíssimo, romboides, trapézio, remada, curvada",
    },
    {
        titulo: "Barra fixa",
        descricao: "Exercício clássico para desenvolver a força de tração e trabalhar o latíssimo do dorso, bíceps e antebraços.",
        dica: "Se não conseguir fazer repetições completas, utilize uma banda elástica para auxiliar.",
        link:"https://youtu.be/thg6cGXSlvY?si=JJTe_szl9BAojufu",
        tags: "costas, latíssimo, bíceps, barra",
        
    },
    {
        titulo: "Pullover",
        descricao: "Exercício que trabalha o latíssimo do dorso e os peitorais inferiores. É realizado deitado em um banco, levantando um haltere acima da cabeça.",
        link: "https://youtu.be/-KaMXMMIVrU?si=3oYeJffA9l7NCu-D",
        dica: "Mantenha os cotovelos ligeiramente flexionados durante todo o movimento.",
        tags: "costas, latíssimo, ",
    },
    {
        titulo: "Remada alta",
        descricao: "Exercício que trabalha o trapézio superior e médio. É realizado com uma barra ou halteres, elevando os ombros em direção às orelhas.",
        dica: "Evite encolher os ombros excessivamente.",
        link: "https://youtu.be/tm0IywBhIYM?si=gUZAU4sBNNwkys0M",
        tags: "costas, trapézio, alto, remada",
    },
    {
        titulo: "Desenvolvimento",
        descricao: "Exercício composto que trabalha todos os cabeças do deltóide. Pode ser realizado com barra, halteres ou na máquina Smith.",
        dica: "Mantenha os cotovelos ligeiramente flexionados durante todo o movimento.",
        link: "https://youtu.be/EuQAfhXBEvs?si=v3YFSziZyhOXikHV",
        tags: "ombros, deltóide, desenvolvimento com barra",
       
    },
    {
        titulo: "Elevação lateral",
        descricao: "Exercício de isolamento que trabalha principalmente o deltóide lateral. Pode ser realizado com halteres ou na máquina.",
        dica: "Mantenha os cotovelos levemente flexionados e evite balançar o corpo.",
        link: "https://youtu.be/IwWvZ0rlNXs?si=v7IP_tWyot5HLCWG",
        tags: "ombros, deltóide lateral, lateral, elevacao, elevação",
    },
    {
        titulo: "Elevação frontal",
        descricao: "Exercício que trabalha o deltóide anterior. Pode ser realizado com barra ou halteres.",
        dica: "Mantenha os cotovelos levemente flexionados e evite elevar os ombros.",
        link: "https://youtu.be/NxSuojHZa8k?si=C9fEmvFXYSeCKsQx",
        tags: "ombros, deltóide anterior, frontal, elevacao, elevação",
    },
    {
        titulo: "Crucifixo inverso",
        descricao: "Exercício que trabalha o deltóide posterior. Pode ser realizado com halteres ou na máquina.",
        dica: "Incline levemente o tronco para frente e mantenha os cotovelos próximos ao corpo.",
        link: "https://youtu.be/NxSuojHZa8k?si=C9fEmvFXYSeCKsQx",
        tags: "ombros, deltóide posterior, crucifixo",
    },
];
