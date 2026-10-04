import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ArrowRight, ShareNetwork, X, CaretUp, CaretDown } from '@phosphor-icons/react'
import { obras, series, publico, img } from './data.js'

// Preencher quando o artista autorizar a publicação (ex.: '2449XXXXXXXX' e 'utilizador').
const WHATSAPP = ''
const INSTAGRAM = ''

function useShare() {
  const [msg, setMsg] = useState('')
  const share = useCallback(async () => {
    const data = { title: 'Cláudio Arte', text: 'Obras de Cláudio Arte', url: window.location.origin }
    try {
      if (navigator.share) {
        await navigator.share(data)
        return
      }
      await navigator.clipboard.writeText(data.url)
      setMsg('Link copiado')
    } catch (e) {
      if (e && e.name === 'AbortError') return
      setMsg('Não foi possível partilhar. Copie o endereço do navegador.')
    }
    setTimeout(() => setMsg(''), 2600)
  }, [])
  return [share, msg]
}

function Hung({ id, alt, className = '', sizes, eager = false }) {
  return (
    <figure className={`hung ${className}`}>
      <img
        src={img(id)}
        srcSet={`${img(id, 'sm')} 720w, ${img(id)} 1600w`}
        sizes={sizes}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        decoding="async"
      />
    </figure>
  )
}

function Hero({ onShare, shareMsg }) {
  return (
    <header className="hero">
      <nav className="nav" aria-label="Principal">
        <a href="#obras">Obras</a>
        <a href="#artista">Artista</a>
        <a href="#publico">Em público</a>
        <a href="#encomendas">Encomendas</a>
      </nav>
      <div className="hero-copy">
        <h1 className="spray" aria-label="Cláudio Arte">
          <span aria-hidden="true">Cláudio</span>
          <span aria-hidden="true">Arte</span>
        </h1>
        <p className="hero-sub">
          Pintor, poeta e jornalista. Treze anos entre o abstrato, o realismo e o surrealismo.
        </p>
        <div className="actions">
          <a className="plate" href="#obras">
            Ver obras <ArrowRight size={18} weight="bold" aria-hidden="true" />
          </a>
          <button type="button" className="plate ghost" onClick={onShare}>
            <ShareNetwork size={18} weight="bold" aria-hidden="true" /> Partilhar
          </button>
          <span className="status" role="status">{shareMsg}</span>
        </div>
      </div>
      <div className="hero-wall">
        <Hung id="obra-13" alt="Retrato de uma mulher mais velha de lenço na cabeça, pintado por Cláudio Arte" className="h-main" sizes="(max-width: 860px) 70vw, 34vw" eager />
        <Hung id="obra-16" alt="Rosto feminino em vermelhos intensos, pintado por Cláudio Arte" className="h-small" sizes="(max-width: 860px) 38vw, 15vw" eager />
      </div>
      <div className="band" aria-hidden="true" />
    </header>
  )
}

const SPANS = [5, 4, 3, 3, 5, 4, 4, 3, 5]
const DROPS = [0, 4, 2, 5, 1, 3, 2, 0, 4]

function Obras({ onOpen }) {
  const [filter, setFilter] = useState('todas')
  const list = useMemo(() => (filter === 'todas' ? obras : obras.filter((o) => o.serie === filter)), [filter])
  return (
    <section className="obras" id="obras" aria-labelledby="obras-t">
      <div className="obras-head">
        <h2 id="obras-t" className="stencil">Obras</h2>
        <div className="tabs" role="group" aria-label="Filtrar por série">
          {series.map((s) => {
            const n = s.key === 'todas' ? obras.length : obras.filter((o) => o.serie === s.key).length
            return (
              <button
                key={s.key}
                type="button"
                className="tab"
                aria-pressed={filter === s.key}
                onClick={() => setFilter(s.key)}
              >
                {s.label} <span className="n">{n}</span>
              </button>
            )
          })}
        </div>
      </div>
      <ul className="salon">
        {list.map((o, i) => (
          <li
            key={o.id}
            style={{ '--span': SPANS[i % SPANS.length], '--drop': DROPS[i % DROPS.length], '--ar': `${o.w} / ${o.h}` }}
          >
            <button type="button" className="work" onClick={(e) => onOpen(list, i, e.currentTarget)}>
              <img
                src={img(o.id, 'sm')}
                alt={o.alt}
                loading="lazy"
                decoding="async"
                width={o.w * 240}
                height={o.h * 240}
              />
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Artista() {
  return (
    <section className="artista" id="artista" aria-labelledby="artista-t">
      <figure className="artista-foto">
        <img src={img('foto-atelier')} alt="Cláudio a pintar com pistola de tinta, no quintal do atelier, diante de uma tela amarela" loading="lazy" decoding="async" width="780" height="1040" />
      </figure>
      <div className="artista-texto">
        <h2 id="artista-t" className="stencil">Marés da comunicação, marés plásticas</h2>
        <p>
          Com treze anos de carreira, Cláudio Arte vagueia entre o abstrato, o realismo e o surrealismo.
          Pinta rostos onde cada ruga tem lugar, cidades feitas de blocos de cor e telas circulares onde a tinta corre livre.
        </p>
        <p>
          Além das artes plásticas, é poeta e, de profissão, jornalista. Um comunicador, na tela e fora dela.
        </p>
        <h3>Projectos colectivos</h3>
        <ul className="lugares">
          <li>Banco Económico</li>
          <li>ELA, Espaço Luanda Arte</li>
          <li>Instituto Camões</li>
        </ul>
      </div>
    </section>
  )
}

function Publico() {
  return (
    <section className="publico" id="publico" aria-labelledby="publico-t">
      <h2 id="publico-t" className="stencil">Em público</h2>
      <ul className="strip">
        {publico.map((p) => (
          <li key={p.id}>
            <figure>
              <img src={img(p.id, 'sm')} alt={p.alt} loading="lazy" decoding="async" width="720" height="960" />
              <figcaption>{p.cap}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Encomendas({ onShare, shareMsg }) {
  const wa = WHATSAPP
    ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Olá Cláudio, vi as suas obras no site e gostaria de saber mais.')}`
    : null
  return (
    <section className="encomendas" id="encomendas" aria-labelledby="enc-t">
      <h2 id="enc-t" className="stencil">Encomendas e exposições</h2>
      <p>Retratos por encomenda, aquisição de obras e convites para exposições.</p>
      <div className="actions">
        {wa && (
          <a className="plate" href={wa} target="_blank" rel="noreferrer">
            Falar no WhatsApp <ArrowRight size={18} weight="bold" aria-hidden="true" />
          </a>
        )}
        {INSTAGRAM && (
          <a className="plate ghost light" href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noreferrer">
            @{INSTAGRAM}
          </a>
        )}
        <button type="button" className="plate" onClick={onShare}>
          <ShareNetwork size={18} weight="bold" aria-hidden="true" /> Partilhar o site
        </button>
        <span className="status" role="status">{shareMsg}</span>
      </div>
      {!wa && !INSTAGRAM && <p className="soon">Contactos directos disponíveis em breve.</p>}
    </section>
  )
}

function Viewer({ list, start, onClose }) {
  const snap = useRef(null)
  const closeBtn = useRef(null)
  const [cur, setCur] = useState(start)

  useEffect(() => {
    const el = snap.current
    el.scrollTop = start * el.clientHeight
    closeBtn.current?.focus()
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && setCur(Number(en.target.dataset.i))),
      { root: el, threshold: 0.6 },
    )
    ;[...el.children].forEach((c) => io.observe(c))
    document.documentElement.classList.add('locked')
    return () => {
      io.disconnect()
      document.documentElement.classList.remove('locked')
    }
  }, [start])

  const go = useCallback((d) => {
    const el = snap.current
    const next = Math.min(list.length - 1, Math.max(0, cur + d))
    const top = next * el.clientHeight
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' })
    // Alguns navegadores interrompem o deslizamento suave com scroll-snap: garante a chegada.
    setTimeout(() => { if (Math.abs(el.scrollTop - top) > 2) el.scrollTop = top }, 650)
  }, [cur, list.length])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); go(1) }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); go(-1) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, onClose])

  return (
    <div className="viewer" role="dialog" aria-modal="true" aria-label="Obras em ecrã inteiro">
      <div className="snap" ref={snap}>
        {list.map((o, i) => (
          <section key={o.id} className="slide" data-i={i}>
            <img
              src={img(o.id)}
              alt={o.alt}
              loading={Math.abs(i - start) < 2 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </section>
        ))}
      </div>
      <p className="cap" aria-live="polite">{list[cur]?.alt}</p>
      <div className="rail">
        <button ref={closeBtn} type="button" onClick={onClose} aria-label="Fechar">
          <X size={22} weight="bold" />
        </button>
        <button type="button" onClick={() => go(-1)} aria-label="Obra anterior" disabled={cur === 0}>
          <CaretUp size={22} weight="bold" />
        </button>
        <button type="button" onClick={() => go(1)} aria-label="Obra seguinte" disabled={cur === list.length - 1}>
          <CaretDown size={22} weight="bold" />
        </button>
      </div>
    </div>
  )
}

export default function App() {
  const [share, shareMsg] = useShare()
  const [view, setView] = useState(null)
  const trigger = useRef(null)
  const open = useCallback((list, i, el) => {
    trigger.current = el
    setView({ list, i })
  }, [])
  const close = useCallback(() => {
    setView(null)
    requestAnimationFrame(() => trigger.current?.focus())
  }, [])
  return (
    <>
      <a className="skip" href="#obras">Saltar para as obras</a>
      <Hero onShare={share} shareMsg={shareMsg} />
      <main>
        <Obras onOpen={open} />
        <Artista />
        <Publico />
        <Encomendas onShare={share} shareMsg={shareMsg} />
      </main>
      <footer className="foot">
        <span>© {new Date().getFullYear()} Cláudio Arte</span>
        <span>Site por <a href="https://expressers.ao" target="_blank" rel="noreferrer">Expressers</a></span>
      </footer>
      {view && <Viewer list={view.list} start={view.i} onClose={close} />}
    </>
  )
}
