// Obras enviadas pelo artista. Títulos, técnicas e dimensões ainda por confirmar —
// por agora cada obra é identificada pelo número e por uma descrição curta.
export const obras = [
  { id: '13', serie: 'rostos', alt: 'Retrato de uma mulher mais velha com lenço na cabeça, sobre uma cidade em silhueta' },
  { id: '16', serie: 'rostos', alt: 'Rosto feminino em vermelhos intensos, olhos fechados, composição fragmentada' },
  { id: '01', serie: 'cidade', alt: 'Menino com pasta numa rua de prédios coloridos ao pôr do sol' },
  { id: '06', serie: 'rostos', alt: 'Mulher com tranças rodeada de manchas de cor' },
  { id: '14', serie: 'circulos', alt: 'Tela circular com rosto de perfil em azuis' },
  { id: '03', serie: 'rostos', alt: 'Retrato de um homem idoso sobre fundo azul' },
  { id: '04', serie: 'cidade', alt: 'Homem a puxar uma carroça numa cidade de prédios coloridos' },
  { id: '11', serie: 'rostos', alt: 'Mulher idosa a sorrir, com lenço claro' },
  { id: '08', serie: 'cidade', alt: 'Menina a correr num turbilhão de cor' },
  { id: '09', serie: 'rostos', alt: 'Mulher com cabelo explodindo em cores' },
  { id: '05', serie: 'circulos', alt: 'Tela circular com um globo em azul, verde e castanho' },
  { id: '10', serie: 'rostos', alt: 'Mulher a sorrir com a bandeira de Angola e uma bomba de petróleo ao fundo' },
  { id: '12', serie: 'cidade', alt: 'Crianças num barco a remar ao pôr do sol diante da cidade' },
  { id: '02', serie: 'rostos', alt: 'Retrato de um jovem a sorrir com óculos coloridos' },
  { id: '17', serie: 'circulos', alt: 'Tela circular amarela com figura em azuis e salpicos de tinta' },
]

export const series = [
  { key: 'todas', label: 'Todas' },
  { key: 'rostos', label: 'Rostos' },
  { key: 'cidade', label: 'Cidade & vida' },
  { key: 'circulos', label: 'Círculos' },
]

export const src = (id, size = 'lg') => `/obras/${id}${size === 'sm' ? '-sm' : ''}.jpg`
