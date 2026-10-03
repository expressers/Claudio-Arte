import { useEffect, useMemo, useState, useCallback } from 'react'
import { obras, series, src } from './obras.js'

// Preencher quando o artista autorizar a publicação do contacto (ex.: '2449XXXXXXXX')
const WHATSAPP = ''
const INSTAGRAM = ''

function Stroke({ className = '' }) {
  return (
    <svg className={`stroke ${className}`} viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 34 C 120 10, 240 52, 380 30 S 640 8, 780 34 S 1040 56, 1200 24 L1200 60 L0 60 Z" />
    </svg>
  )
}

function Header() {
  return (
    <header className="top">
      <a href="#inicio" className="mark">Cláudio<span>·</span>Arte</a>
      <nav>
        <a href="#obras">Obras</a>
        <a href="#artista">Artista</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-text">
        <p className="eyebrow">Pintura contemporânea</p>
        <h1>
          Rostos,<br />cidades<br />&amp; <em>cor.</em>
        </h1>
        <p className="lede">
          Avós que sorriem, crianças que correm, ruas que ardem em laranja ao fim da tarde.
          A pintura de Cláudio transforma a memória do quotidiano numa festa de cor.
        </p>
        <div className="hero-cta">
          <a className="btn" href="#obras">Ver as obras</a>
          <a className="link" href="#contacto">Encomendas →</a>
        </div>
      </div>
      <figure className="hero-art">
        <img src={src('13')} alt="Retrato de uma mulher mais velha com lenço, de Cláudio Arte" />
        <div className="swatches" aria-hidden="true">
          <i style={{ background: 'var(--sun)' }} />
          <i style={{ background: 'var(--cobalt)' }} />
          <i style={{ background: 'var(--magenta)' }} />
          <i style={{ background: 'var(--yellow)' }} />
          <i style={{ background: 'var(--teal)' }} />
        </div>
      </figure>
    </section>
  )
}

function Marquee() {
  const row = [...obras, ...obras]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((o, i) => <img key={i} src={src(o.id, 'sm')} alt="" loading="lazy" />)}
      </div>
    </div>
  )
}

function Gallery({ onOpen, list, filter, setFilter }) {
  return (
    <section className="gallery" id="obras">
      <div className="section-head">
        <p className="eyebrow">Obras</p>
        <h2>O que a tela <em>lembra</em></h2>
      </div>
      <div className="chips" role="tablist" aria-label="Filtrar obras">
        {series.map((s) => (
          <button
            key={s.key}
            role="tab"
            aria-selected={filter === s.key}
            className={filter === s.key ? 'chip on' : 'chip'}
            onClick={() => setFilter(s.key)}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div className="masonry">
        {list.map((o, i) => (
          <button key={o.id} className="tile" onClick={() => onOpen(i)} aria-label={`Ampliar: ${o.alt}`}>
            <img src={src(o.id, 'sm')} alt={o.alt} loading="lazy" />
            <span className="num">Nº {o.id}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

function Lightbox({ list, index, onClose, onMove }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onMove(1)
      if (e.key === 'ArrowLeft') onMove(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onMove])
  const o = list[index]
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={o.alt} onClick={onClose}>
      <img src={src(o.id)} alt={o.alt} onClick={(e) => e.stopPropagation()} />
      <p className="lb-cap">Nº {o.id} — {o.alt}</p>
      <button className="lb-btn prev" onClick={(e) => { e.stopPropagation(); onMove(-1) }} aria-label="Anterior">←</button>
      <button className="lb-btn next" onClick={(e) => { e.stopPropagation(); onMove(1) }} aria-label="Seguinte">→</button>
      <button className="lb-close" onClick={onClose} aria-label="Fechar">×</button>
    </div>
  )
}

function Artist() {
  return (
    <section className="artist" id="artista">
      <Stroke className="s-top" />
      <div className="artist-inner">
        <div className="artist-photos">
          <img src={src('07')} alt="Cláudio ao lado de uma tela com uma mulher de cabelo verde" loading="lazy" />
          <img src={src('15')} alt="Cláudio junto a uma das suas telas numa exposição" loading="lazy" />
        </div>
        <div className="artist-text">
          <p className="eyebrow">O artista</p>
          <h2>Pintar em <em>grande</em>, para que ninguém passe sem olhar.</h2>
          <p>
            Telas de grande formato, retratos com cada ruga no lugar e cidades feitas de
            blocos de cor. Ao lado do realismo dos rostos vivem experiências mais livres:
            telas circulares, tinta em relevo, azuis que escorrem.
          </p>
          <ul className="facts">
            <li><strong>Retratos</strong><span>avós, mães, crianças, jovens</span></li>
            <li><strong>Cidade</strong><span>ruas, mercados, o trabalho de todos os dias</span></li>
            <li><strong>Círculos</strong><span>experiências de textura e cor</span></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const wa = WHATSAPP ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Olá Cláudio, vi as suas obras no site e gostaria de saber mais.')}` : null
  return (
    <section className="contact" id="contacto">
      <p className="eyebrow">Contacto</p>
      <h2>Uma obra na sua parede.<br /><em>Ou o seu rosto numa tela.</em></h2>
      <p className="lede">Aquisição de obras, retratos por encomenda e convites para exposições.</p>
      <div className="hero-cta center">
        {wa && <a className="btn" href={wa} target="_blank" rel="noreferrer">Falar no WhatsApp</a>}
        {INSTAGRAM && <a className="link" href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noreferrer">@{INSTAGRAM}</a>}
        {!wa && !INSTAGRAM && <span className="soon">Contactos directos disponíveis em breve.</span>}
      </div>
    </section>
  )
}

export default function App() {
  const [filter, setFilter] = useState('todas')
  const [open, setOpen] = useState(null)
  const list = useMemo(() => (filter === 'todas' ? obras : obras.filter((o) => o.serie === filter)), [filter])
  const move = useCallback((d) => setOpen((i) => (i + d + list.length) % list.length), [list.length])
  const close = useCallback(() => setOpen(null), [])
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Gallery list={list} filter={filter} setFilter={setFilter} onOpen={setOpen} />
        <Artist />
        <Contact />
      </main>
      <footer className="foot">
        <span>© {new Date().getFullYear()} Cláudio Arte</span>
        <span>Site por <a href="https://expressers.ao" target="_blank" rel="noreferrer">Expressers</a></span>
      </footer>
      {open !== null && <Lightbox list={list} index={open} onClose={close} onMove={move} />}
    </>
  )
}
