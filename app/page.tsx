const problems = [
  ['01', '샴푸 후 수건에서 약품 냄새가 올라옵니다', '손님이 눈을 감고 샴푸대에 누웠을 때 코끝에 닿는 냄새가 매장의 마지막 인상이 됩니다.'],
  ['02', '세탁해도 염색약 자국이 남습니다', '염색약은 물에 그냥 녹지 않습니다. 온도와 세제가 맞지 않으면 색이 섬유에 고정돼 다시 빨아도 지워지지 않습니다.'],
  ['03', '수건이 뻣뻣해져 금방 버리게 됩니다', '잔류 세제와 유분이 쌓이면 섬유가 딱딱해지고 물을 잘 먹지 않습니다. 교체 주기가 짧아져 수건 값이 계속 나갑니다.'],
];
const cases = [
  ['/assets/thumb1.webp','영등포구 · 미용실','영등포구 미용실 수건세탁'],['/assets/thumb2.webp','성남 분당 판교 · 미용실','분당 판교 헤어샵 전용 세탁'],['/assets/thumb3.webp','부천 · 미용실','매일 쌓이는 수건 정기 수거'],['/assets/thumb4.webp','인천 부평 · 미용실','축축하고 뻣뻣한 수건 케어'],['/assets/thumb5.webp','마포구 · 미용실','서울 마포구 수건 전문 세탁'],['/assets/thumb6.webp','광명 · 미용실','광명 미용실 수건세탁']
];
const faqs = [
  ['이미 누렇게 변한 수건도 살릴 수 있나요?','잔류 세제와 유분이 쌓여 누렇게 보이는 경우는 전처리로 상당 부분 돌아옵니다. 다만 염색약이 오래 고정된 자국은 완전히 지워지지 않을 수 있어, 수거 전에 실물을 보고 솔직하게 말씀드립니다.'],
  ['다른 미용실 수건과 섞이지 않나요?','섞지 않습니다. 업체별로 단독 세탁하고 단독으로 분류합니다. 같은 브랜드라도 매장이 다르면 따로 돌립니다.'],
  ['수건 말고 가운도 맡길 수 있나요?','고객용 가운, 대형 타월, 스태프 유니폼까지 함께 취급합니다. 품목에 따라 추가 금액이 발생하며 소재에 맞춰 따로 세탁합니다.']
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="logo" href="#top" aria-label="GK클린 홈으로"><span className="logo-mark">GK</span><strong>주식회사 지케이클린</strong></a>
      <nav aria-label="주요 메뉴">{['홈','GK클린 소개','업종별 수건세탁','품목 · 대량','세탁 공정','가격 안내','세탁 사례','견적 문의'].map(x=><a key={x} href={x==='홈'?'#top':'#'+x.replaceAll(' ','')}>{x}</a>)}</nav>
      <a className="nav-cta" href="#contact">견적 문의</a><a className="phone" href="tel:16661778">☎ <strong>1666-1778</strong></a>
    </header>

    <section id="top" className="hero"><div className="hero-shade"/><div className="hero-content"><p>TOWEL LAUNDRY</p><h1>미용실 수건 세탁</h1><span>샴푸 후 손님 목에 가장 먼저 닿는 수건입니다. 염색약·중화제·펌제를 빼내는 전용 공정으로 세탁합니다.</span></div></section>

    <section className="problems wrap"><h2>이런 문제를 겪고 계신가요</h2><div className="problem-grid">{problems.map(([n,t,d])=><article className="problem" key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div></section>

    <section id="세탁공정" className="points">
      <div className="point-row wrap"><img src="/assets/point1.webp" alt="산업용 세탁기 안의 미용실 세탁물"/><div className="point-copy"><b>POINT 01</b><h2>미용 세탁물은 유화 공정을 거쳐야 빠집니다</h2><p>펌제·중화제·염색약은 유분과 함께 섬유에 달라붙습니다. 기름때를 물에 풀어내는 유화 공정을 거치지 않으면 표면만 씻기고 안쪽에 남습니다. 오일 성분이 남은 채 건조기 열을 받으면 발화 위험까지 생깁니다.</p></div></div>
      <div className="point-row reverse wrap"><img src="/assets/point2.webp" alt="세탁 완료 후 검수 전 수건"/><div className="point-copy"><b>POINT 02</b><h2>염색약 자국은 기계가 못 잡습니다</h2><p>GK클린은 건조를 마친 수건을 한 장씩 펼쳐 자국과 이물질을 눈으로 확인한 뒤에야 접습니다. 자동 검수만으로는 미용실이 가장 예민해하는 이 부분을 걸러내지 못합니다.</p></div></div>
    </section>

    <section className="method"><div className="wrap"><h2>그래서 GK클린은 이렇게 합니다</h2><div className="check-grid">
      {['미용 세탁물 전용 유화 공정 — 약품과 유분기를 먼저 풀어냅니다','고온스팀 살균 세탁으로 냄새 유발균 차단','건조 후 한 장씩 펼쳐 염색약 자국·이물질 육안 검수','고객용 가운 · 대형 타월 · 스태프 유니폼도 함께'].map(x=><div key={x}><i>✓</i><span>{x}</span></div>)}
      </div><p className="eyebrow">함께 맡기실 수 있는 품목</p><div className="chips">{['수건 · 타월','고객용 가운','대형 타월','스태프 유니폼'].map(x=><span key={x}>{x}</span>)}</div></div></section>

    <section id="세탁사례" className="records"><div className="wrap"><h2>실제 작업 기록</h2><p>사진을 누르면 그 작업을 적어 둔 공식 블로그 글로 이동합니다.</p></div><div className="case-strip">{cases.map(([src,place,title])=><a className="case-card" href="#" key={src}><img src={src} alt={place+' 작업 사진'}/><div><b>{place}</b><span>{title}</span></div></a>)}</div><a className="outline-btn" href="#">미용실 · 뷰티 세탁 사례 보기　→</a></section>

    <section id="가격안내" className="faq"><div className="narrow"><h2>자주 묻는 질문</h2>{faqs.map(([q,a])=><article key={q}><p><b>Q.</b><strong>{q}</strong></p><p><b>A.</b><span>{a}</span></p></article>)}</div></section>

    <section id="업종별수건세탁" className="related wrap"><p>이런 세탁도 함께 하고 있습니다</p><div>{['헬스장 수건 세탁','필라테스 수건 세탁','요양원 수건 세탁','병원 수건 세탁','피부과 수건 세탁','에스테틱 수건 세탁'].map(x=><a href="#" key={x}>{x}<span>→</span></a>)}</div><a className="all-link" href="#">업종별 수건세탁 전체 보기</a></section>

    <section id="contact" className="cta"><div className="hero-shade"/><div><h2>미용실 수건 세탁, 한 번 맡겨보세요</h2><p>매장에 방문해 세탁물을 직접 보고 견적을 드립니다. 샘플링도 함께 도와드립니다.</p><a className="blue-btn" href="tel:16661778">☎　1666-1778</a><a className="ghost-btn" href="mailto:hello@example.com">견적 문의하기</a></div></section>

    <footer><div className="footer-grid wrap"><div><div className="footer-logo"><span className="logo-mark">GK</span><strong>GK클린</strong></div><b>BUSINESS LAUNDRY SERVICE</b><p>미용실 · 병원 · 피부과 · 에스테틱 · 요양원 · 기업의 수건과 단체 세탁물을 수거해 세탁하고 배달해 드립니다. 다른 사업장 세탁물과 섞지 않는 업체별 단독세탁, 고온스팀 살균, 100% 수작업 검수를 지킵니다.</p><a href="#">BLOG</a></div><div><small>바로가기</small>{['GK클린 소개','업종별 수건세탁','품목 · 대량','세탁 공정','가격 안내','세탁 사례','견적 문의'].map(x=><a href="#" key={x}>{x}</a>)}</div><div><small>상담 · 견적</small><h3>1666-1778</h3><a className="footer-btn" href="#contact">견적 문의하기</a><p>대표자: 조성준</p><p>경기도 시흥시 미산로 94-1 (직영 세탁 공장)</p></div></div><div className="legal wrap"><span>상호 주식회사 지케이클린　|　대표자: 조성준　|　사업자등록번호: 374-86-02602</span><span>ⓒ GK클린. All rights reserved.</span></div></footer>

    <div className="floating"><a href="#" aria-label="블로그">N</a><a href="tel:16661778">☎　1666-1778</a></div>
  </main>
}
