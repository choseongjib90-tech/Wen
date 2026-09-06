import { laundryPlans } from './laundry-plans';
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function PricingSection() {
  return <section id="가격안내" className="plans" aria-labelledby="plans-title">
    <div className="plans-wrap">
      <header className="plans-heading">
        <p className="plans-eyebrow">우리 매장에 맞는 정기 세탁</p>
        <h2 id="plans-title">우리 매장 세탁,<br/><span>수거부터 검수·배송까지.</span></h2>
        <p className="plans-intro">업체별 단독세탁을 기본으로,<br/>품목과 물량에 맞는 정기 관리 구성을 안내합니다.</p>
      </header>
      <div className="plans-quality"><p>모든 구성에 함께하는 기본 품질</p><ul>{['업체별 단독세탁 · 단독건조', '고온 스팀살균', '수작업 검수', '수거 · 배송'].map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul></div>
      <div className="plans-grid">{laundryPlans.map(plan => <article key={plan.id} className={`plan${plan.id === 'mixed' ? ' plan-featured' : ''}`}>
        <p className="plan-tag">{plan.tag}</p>
        <h3>{plan.title}</h3><p className="plan-description">{plan.description}</p>
        <p className="plan-price"><strong>{plan.price}</strong>{plan.suffix && <span>{plan.suffix}</span>}</p>
        <p className="plan-terms">세탁물 수량 · 수거 횟수 상담 후 안내</p>
        <ul className="plan-features">{plan.features.map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
        <a className="plan-button" href={`${BASE}/contact/?plan=${plan.id}`}>{plan.button}<span aria-hidden="true">↗</span></a>
      </article>)}</div>
      <p className="plans-note">표시된 금액은 시작 금액입니다. 세탁물 수량과 수거 횟수를 기준으로 상담 후 최종 견적을 안내합니다. 품목과 오염 정도에 따라 금액이 달라질 수 있습니다.</p>
      <aside className="plans-guarantee" aria-labelledby="guarantee-title">
        <div><p className="plans-eyebrow">단독세탁 품질보증제</p><h3 id="guarantee-title">다른 매장 수건과 섞이지 않도록.<br/><span>단독세탁, 보상 약속까지.</span></h3></div>
        <p>타 매장 수건 혼입이 확인될 경우,<br/><strong>해당 1회 배송 건에 대해 월 이용료의 10%를 차감해드립니다.</strong></p>
      </aside>
    </div>
  </section>;
}
