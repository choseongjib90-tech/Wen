import HeroSlideshow from './HeroSlideshow';
import CaseCarousel from './CaseCarousel';
import PricingSection from './PricingSection';

const problems = [
  ['01', '다른 사업장 세탁물과 섞이는 게 걱정됩니다', 'B2B 세탁은 물량이 많을수록 혼입 관리가 중요합니다. 조세탁연구소는 업체별 단독세탁과 단독건조를 기본으로 운영합니다.'],
  ['02', '품목과 오염은 다른데 늘 같은 방식으로 세탁됩니다', '수건, 가운, 운동복, 의료복은 섬유와 오염 특성이 다릅니다. 온도·세제·시간을 품목과 오염에 맞춰 설계해야 세탁 품질이 안정됩니다.'],
  ['03', '대량 세탁을 맡기면 품질 편차가 큽니다', '기계만 돌리는 세탁이 아니라 공정 관리와 마지막 검수가 필요합니다. 건조 후 수작업 검수까지 거쳐 납품 품질을 일정하게 관리합니다.'],
];
const BASE=process.env.NEXT_PUBLIC_BASE_PATH??'';
const cases = [
  [`${BASE}/assets/thumb1.webp`,'영등포구 · 미용실','영등포구 미용실 수건세탁'],[`${BASE}/assets/thumb2.webp`,'성남 분당 판교 · 미용실','분당 판교 헤어샵 전용 세탁'],[`${BASE}/assets/thumb3.webp`,'부천 · 미용실','매일 쌓이는 수건 정기 수거'],[`${BASE}/assets/thumb4.webp`,'인천 부평 · 미용실','축축하고 뻣뻣한 수건 케어'],[`${BASE}/assets/thumb5.webp`,'마포구 · 미용실','서울 마포구 수건 전문 세탁'],[`${BASE}/assets/thumb6.webp`,'광명 · 미용실','광명 미용실 수건세탁']
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="logo" href="#top" aria-label="조세탁연구소 홈으로"><strong>조세탁연구소</strong></a>
      <nav aria-label="주요 메뉴">{['홈','업종별 수건세탁','세탁 공정','가격 안내','세탁 사례'].map(x=><a key={x} href={x==='홈'?'#top':'#'+x.replaceAll(' ','')}>{x}</a>)}</nav>
      <a className="nav-cta" href={`${BASE}/contact/`}>견적 문의</a><a className="phone" href="tel:01035550517">☎ <strong>010-3555-0517</strong></a>
    </header>

    <section id="top" className="hero"><HeroSlideshow/><div className="hero-shade"/><div className="hero-content"><p>ENGINEERED B2B LAUNDRY</p><h1>공학박사가 직접 운영하는<br/>B2B 전문 세탁</h1><span>미용실 · 헬스장 · 병원 · 피부과 · 에스테틱 · 기업의 세탁물을 업체별 단독세탁, 고온스팀 살균, 수작업 검수까지 공정으로 관리합니다.</span></div></section>

    <section className="problems wrap"><h2>B2B 세탁, 이런 부분이 가장 중요합니다</h2><div className="problem-grid">{problems.map(([n,t,d])=><article className="problem" key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div></section>

    <section id="세탁공정" className="points">
      <div className="point-row wrap"><img src={`${BASE}/assets/point1.webp`} alt="산업용 세탁기 안의 사업장 세탁물"/><div className="point-copy"><b>POINT 01</b><h2>세탁도 공정 설계가 필요합니다</h2><p>같은 세탁기라도 어떤 온도와 세제, 시간, 헹굼 조건을 적용하느냐에 따라 결과가 달라집니다. 조세탁연구소는 공학박사가 직접 사업장별 품목과 오염 특성을 확인하고 세탁 공정을 설계합니다.</p></div></div>
      <div className="point-row reverse wrap"><img src={`${BASE}/assets/point2.webp`} alt="세탁 완료 후 수작업 검수"/><div className="point-copy"><b>POINT 02</b><h2>대량일수록 분리와 검수가 품질을 좌우합니다</h2><p>조세탁연구소는 다른 사업장 세탁물과 섞지 않고 업체별로 세탁·건조합니다. 세탁이 끝난 뒤에는 얼룩, 이물질, 상태를 직접 확인해 납품 품질을 일정하게 관리합니다.</p></div></div>
    </section>

    <section className="method"><div className="wrap"><h2>공학박사가 직접 설계하고 운영합니다</h2><div className="check-grid">
      {['업체별 단독세탁 · 단독건조로 세탁물 혼입 최소화','품목과 오염 특성에 맞춘 세제 · 온도 · 시간 공정 설계','고온스팀 살균 세탁으로 위생 공정 강화','건조 후 수작업 검수로 얼룩 · 이물질 · 상태 확인'].map(x=><div key={x}><i>✓</i><span>{x}</span></div>)}
      </div><p className="eyebrow">함께 맡기실 수 있는 품목</p><div className="chips">{['수건 · 타월','가운 · 유니폼','운동복 · 헬스복','환자복 · 의료복','단체복 · 행사 세탁'].map(x=><span key={x}>{x}</span>)}</div></div></section>

    <section id="세탁사례" className="records"><div className="wrap"><h2>실제 B2B 세탁 작업 기록</h2><p>조세탁연구소가 실제로 수거·세탁·검수·납품한 작업 기록입니다.</p></div><CaseCarousel cases={cases}/><a className="outline-btn" href="#">B2B 세탁 사례 보기　→</a></section>

    <PricingSection/>

    <section id="업종별수건세탁" className="related wrap"><p>업종별로 필요한 세탁 공정이 다릅니다</p><div>{['미용실 수건 세탁','헬스장 수건 세탁','필라테스 수건 세탁','병원 · 의원 세탁','피부과 · 에스테틱 세탁','기업 · 단체 세탁'].map(x=><a href="#" key={x}>{x}<span>→</span></a>)}</div><a className="all-link" href="#">업종별 B2B 세탁 전체 보기</a></section>

    <section id="contact" className="consultation" aria-labelledby="consultation-title">
      <div className="consultation-inner">
        <div className="consultation-copy">
          <p className="consultation-eyebrow">조세탁연구소 · 사업장 세탁 상담</p>
          <h2 id="consultation-title">세탁은 맡기고,<br/><span>매장에 집중하세요.</span></h2>
          <p className="consultation-description">수거부터 세탁·검수·배송까지.<br/>우리 매장에 맞는 세탁 조건을 직접 안내해드립니다.</p>
          <ul className="consultation-benefits"><li><span aria-hidden="true">✓</span> 업체별 단독세탁</li><li><span aria-hidden="true">✓</span> 공학박사 직접 운영</li></ul>
          <a className="consultation-button" href={`${BASE}/contact/`}>우리 매장 견적 알아보기 <span aria-hidden="true">↗</span></a>
          <a className="consultation-phone" href="tel:01035550517">전화 상담 <strong>010-3555-0517</strong></a>
        </div>
        <figure className="consultation-photo">
          <img src={`${BASE}/assets/hero-slides/10-inspection.webp`} alt="조세탁연구소 작업자가 세탁된 수건을 한 장씩 펼쳐 검수하는 모습" width={1501} height={1072} loading="lazy" decoding="async"/>
          <figcaption><span>세탁의 마무리까지 직접.</span><strong>한 장씩 살피는 수작업 검수</strong></figcaption>
        </figure>
      </div>
    </section>

    <footer><div className="footer-grid wrap"><div><div className="footer-logo"><strong>조세탁연구소</strong></div><b>BUSINESS LAUNDRY SERVICE</b><p>미용실 · 헬스장 · 병원 · 피부과 · 에스테틱 · 기업의 수건과 단체 세탁물을 수거해 세탁하고 배달해 드립니다. 공학박사가 직접 설계한 공정으로 업체별 단독세탁, 고온스팀 살균, 100% 수작업 검수를 지킵니다.</p></div><div><small>바로가기</small>{['업종별 수건세탁','품목 · 대량','세탁 공정','가격 안내','세탁 사례','견적 문의'].map(x=><a href={x==='견적 문의'?`${BASE}/contact/`:'#'} key={x}>{x}</a>)}</div><div><small>상담 · 견적</small><h3>010-3555-0517</h3><a className="footer-btn" href={`${BASE}/contact/`}>견적 문의하기</a><p>대표자: 조성집</p><p>경기도 용인시 처인구 모현읍 외개일로 37 (직영 세탁 공장)</p></div></div><div className="legal wrap"><span>상호 조세탁연구소　|　대표자: 조성집　|　사업자등록번호: 877-31-01664</span><span>ⓒ 조세탁연구소. All rights reserved.</span></div></footer>

    <div className="floating"><a href="https://bit.ly/4vHlBz0" target="_blank" rel="noopener noreferrer" aria-label="조세탁연구소 카카오톡 문의" style={{order:-2,width:'156px',height:'44px',borderRadius:'999px',background:'#FEE500',color:'#191919',fontSize:'13px',fontWeight:700,display:'flex',gap:'8px',padding:'0 16px'}}><span aria-hidden="true">💬</span><span>카카오톡 문의하기</span></a><a href="https://blog.naver.com/house_90" target="_blank" rel="noopener noreferrer" aria-label="조세탁연구소 네이버 블로그"><span className="social-icon" aria-hidden="true">N</span><span>조세탁연구소</span></a><a href="https://www.youtube.com/channel/UCeeyW2Jew63mU9BHacpsu4A" target="_blank" rel="noopener noreferrer" aria-label="조세탁연구소 유튜브" style={{order:-1}}><svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z"/></svg><span>조세탁연구소</span></a><a href="tel:01035550517">☎　010-3555-0517</a></div>
  </main>
}
