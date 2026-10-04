// Obras e fotografias enviadas pelo artista por WhatsApp (3 e 4 de Outubro de 2026).
// Títulos, técnicas e dimensões ainda por confirmar: cada obra tem apenas uma descrição.
export const obras = [
  { id: 'obra-13', serie: 'rostos', w: 3, h: 4, alt: 'Mulher mais velha de lenço na cabeça, sobre uma cidade em silhueta' },
  { id: 'obra-01', serie: 'cidade', w: 3, h: 4, alt: 'Menino de pasta na mão numa rua de prédios coloridos ao fim da tarde' },
  { id: 'obra-18', serie: 'circulos', w: 1, h: 1, alt: 'Tela circular em azuis profundos, pendurada numa sala' },
  { id: 'obra-06', serie: 'rostos', w: 1, h: 1, alt: 'Mulher de tranças rodeada de manchas de cor' },
  { id: 'obra-19', serie: 'rostos', w: 3, h: 4, alt: 'Retrato a preto e branco de uma mulher com várias mãos a tapar-lhe a boca' },
  { id: 'obra-04', serie: 'cidade', w: 1, h: 1, alt: 'Homem a puxar uma carroça numa cidade de prédios coloridos' },
  { id: 'obra-03', serie: 'rostos', w: 2, h: 3, alt: 'Homem idoso de olhar sereno sobre fundo azul' },
  { id: 'obra-16', serie: 'rostos', w: 7, h: 8, alt: 'Rosto feminino em vermelhos intensos, de olhos fechados' },
  { id: 'obra-20', serie: 'circulos', w: 3, h: 4, alt: 'Tela circular em prata com uma mancha vermelha, numa sala com o artista sentado ao lado' },
  { id: 'obra-11', serie: 'rostos', w: 2, h: 3, alt: 'Mulher idosa a sorrir, com lenço claro na cabeça' },
  { id: 'obra-08', serie: 'cidade', w: 3, h: 4, alt: 'Menina a correr num turbilhão de cor' },
  { id: 'obra-09', serie: 'rostos', w: 3, h: 4, alt: 'Mulher com o cabelo a explodir em cores' },
  { id: 'obra-05', serie: 'circulos', w: 3, h: 4, alt: 'Tela circular com o globo terrestre em azul, verde e castanho' },
  { id: 'obra-12', serie: 'cidade', w: 7, h: 8, alt: 'Crianças a remar num barco ao pôr do sol, diante da cidade' },
  { id: 'obra-10', serie: 'rostos', w: 2, h: 3, alt: 'Mulher a sorrir, com a bandeira de Angola e uma bomba de petróleo ao fundo' },
  { id: 'obra-14', serie: 'circulos', w: 1, h: 1, alt: 'Tela circular com um rosto de perfil em azuis' },
  { id: 'obra-02', serie: 'rostos', w: 4, h: 3, alt: 'Jovem a sorrir com óculos de lentes coloridas' },
  { id: 'obra-17', serie: 'circulos', w: 1, h: 1, alt: 'Tela circular amarela com uma figura em azuis e salpicos de tinta' },
]

export const series = [
  { key: 'todas', label: 'Todas' },
  { key: 'rostos', label: 'Rostos' },
  { key: 'cidade', label: 'Cidade' },
  { key: 'circulos', label: 'Círculos' },
]

export const publico = [
  { id: 'foto-tv-1', alt: 'Cláudio num estúdio de televisão, a mostrar as suas telas à apresentadora', cap: 'Em estúdio de televisão, com as suas telas' },
  { id: 'foto-tv-3', alt: 'Câmara de televisão em primeiro plano, Cláudio e a apresentadora ao fundo', cap: 'Em directo' },
  { id: 'foto-evento', alt: 'Cláudio num evento nocturno, de microfone na mão', cap: 'Em reportagem' },
  { id: 'foto-retrato-pb', alt: 'Cláudio ao lado de um retrato a preto e branco, num espaço ao ar livre', cap: 'Ao lado de um retrato a preto e branco' },
  { id: 'foto-cabelo-verde', alt: 'Cláudio encostado a uma tela de uma mulher com cabelo de folhagem verde', cap: 'Com a tela do cabelo de folhagem' },
  { id: 'foto-asas', alt: 'Cláudio de braços abertos diante de um mural de asas coloridas', cap: 'Diante de um mural de asas' },
  { id: 'foto-exposicao', alt: 'Cláudio junto a uma das suas telas numa exposição', cap: 'Numa exposição' },
  { id: 'foto-tv-2', alt: 'Cláudio e a apresentadora diante das telas em estúdio', cap: 'A conversa em estúdio' },
]

export const img = (id, size = 'lg') => `/img/${id}${size === 'sm' ? '-sm' : ''}.webp`
