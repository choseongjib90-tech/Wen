'use client';

import { useState } from 'react';

export default function CaseCarousel({ cases }: { cases: string[][] }) {
  const [paused, setPaused] = useState(false);

  return <div className={`case-carousel${paused ? ' is-paused' : ''}`}>
    <div className="case-viewport" aria-label="실제 B2B 세탁 작업 사진" tabIndex={0}>
      <div className="case-track">
        {[0, 1].map(copy => <div className="case-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
          {cases.map(([src, place, title]) => <article className="case-card" key={src}>
            <img src={src} alt={copy === 0 ? `${place} 작업 사진` : ''} loading="lazy" decoding="async" />
            <div><b>{place}</b><span>{title}</span></div>
          </article>)}
        </div>)}
      </div>
    </div>
    <button className="case-pause" type="button" aria-pressed={paused} onClick={() => setPaused(value => !value)}>
      <span aria-hidden="true">{paused ? '▶' : 'Ⅱ'}</span> 작업 사진 {paused ? '재생' : '일시정지'}
    </button>
  </div>;
}
