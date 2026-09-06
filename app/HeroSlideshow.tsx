'use client';

import { useEffect, useState, type CSSProperties } from 'react';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const slides = [
  { file: '01-dryers', position: '50% 52%' },
  { file: '02-factory', position: '50% 55%' },
  { file: '03-washers', position: '50% 50%', framed: true },
  { file: '04-washing-wide', position: '50% 48%' },
  { file: '05-loading', position: '50% 50%', portrait: true },
  { file: '06-controls', position: '50% 50%', portrait: true },
  { file: '07-steam', position: '50% 50%', portrait: true },
  { file: '08-drying', position: '50% 50%', portrait: true },
  { file: '09-worktable', position: '50% 58%' },
  { file: '10-inspection', position: '50% 52%' },
  { file: '11-banding', position: '50% 50%', portrait: true },
  { file: '12-folded', position: '50% 62%' },
  { file: '13-loading-truck', position: '65% 55%' },
  { file: '14-truck', position: '50% 55%' },
];

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotion = () => setReducedMotion(media.matches);
    const syncVisibility = () => setHidden(document.hidden);
    syncMotion();
    syncVisibility();
    media.addEventListener('change', syncMotion);
    document.addEventListener('visibilitychange', syncVisibility);
    return () => {
      media.removeEventListener('change', syncMotion);
      document.removeEventListener('visibilitychange', syncVisibility);
    };
  }, []);

  const stopped = paused || reducedMotion || hidden;
  useEffect(() => {
    if (stopped) return;
    let cancelled = false;
    // Decode the next image before fading, keeping the current photo on slow connections.
    const next = (active + 1) % slides.length;
    const image = new Image();
    image.src = `${BASE}/assets/hero-slides/${slides[next].file}.webp`;
    const ready = image.decode().then(() => true, () => false);
    const timer = window.setTimeout(async () => {
      const loaded = await ready;
      if (!cancelled && loaded) setActive(next);
    }, 5000);
    return () => { cancelled = true; window.clearTimeout(timer); };
  }, [active, stopped]);

  return <>
    <div className={`hero-slideshow${stopped ? ' is-paused' : ''}`} aria-hidden="true">
      {slides.map((slide, index) => <div
        key={slide.file}
        className={`hero-slide${index === active ? ' is-active' : ''}${slide.portrait ? ' is-portrait' : ''}${slide.framed ? ' is-framed' : ''}`}
        style={{ '--photo-position': slide.position } as CSSProperties}
      >
        <div className="hero-photo-motion">
          {slide.portrait && <img className="hero-photo-fill" src={`${BASE}/assets/hero-slides/${slide.file}.webp`} alt="" loading="lazy" decoding="async" />}
          <img className="hero-photo" src={`${BASE}/assets/hero-slides/${slide.file}.webp`} alt="" loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : 'auto'} decoding="async" />
        </div>
      </div>)}
    </div>
    {!reducedMotion && <button className="hero-pause" type="button" onClick={() => setPaused(value => !value)} aria-label={paused ? '배경 사진 자동 재생' : '배경 사진 일시정지'} aria-pressed={paused}>
      <span aria-hidden="true">{paused ? '▶' : 'Ⅱ'}</span> {paused ? '재생' : '일시정지'}
    </button>}
  </>;
}
