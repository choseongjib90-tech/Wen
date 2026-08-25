'use client';
import {FormEvent, useState} from 'react';

const items=['수건 · 타월','가운 · 유니폼','운동복 · 헬스복','환자복 · 의료복','이불 · 시트 · 침구류','단체복 · 행사 세탁','기타 · 상담 후 결정'];
const priceTypes=['원하는 금액','기존에 하고 있는 금액','견적 금액'];
const BASE=process.env.NEXT_PUBLIC_BASE_PATH??'';

export default function Contact(){
  const [selected,setSelected]=useState<string[]>([]);
  const [priceType,setPriceType]=useState('');
  const [status,setStatus]=useState<'idle'|'sending'|'success'|'error'>('idle');
  async function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault(); const form=e.currentTarget; const fd=new FormData(form);
    setStatus('sending');
    try{
      const response=await fetch('https://formsubmit.co/ajax/whtod13@naver.com',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({_subject:'[조세탁연구소] 새로운 세탁 견적 문의',_template:'table',_honey:fd.get('website'),성함:fd.get('name'),연락처:fd.get('phone'),'매장 지역':fd.get('area'),업종:fd.get('business')||'미선택','하루 발생량':fd.get('volume')||'미선택',세탁물:selected.join(', ')||'미선택','금액 기준':priceType||'미선택',문의내용:fd.get('message')||'없음'})});
      if(!response.ok) throw new Error('send failed');
      setStatus('success'); setSelected([]); setPriceType('');
      try{form.reset()}catch{}
    }catch{setStatus('error')}
  }
  return <main>
    <header className="site-header"><a className="logo" href={`${BASE}/`}><strong>조세탁연구소</strong></a><nav>{['홈','업종별 수건세탁','세탁 공정','가격 안내','세탁 사례'].map(x=><a key={x} href={x==='홈'?`${BASE}/`:`${BASE}/#`}>{x}</a>)}</nav><a className="nav-cta" href={`${BASE}/contact/`}>견적 문의</a><a className="phone" href="tel:01035550517">☎ <strong>010-3555-0517</strong></a></header>
    <section className="contact-hero"><p>CONTACT</p><h1>세탁 견적 문의</h1><span>업종과 지역, 하루 발생량을 알려주시면 담당자가 확인 후 연락드립니다.<br/>매장 방문 상담과 샘플링도 함께 도와드립니다.</span></section>
    <section className="contact-area wrap"><form className="contact-form" onSubmit={submit}><p className="form-kicker">INQUIRY</p><h2>세탁 견적 문의</h2><small>* 표시는 필수 입력 항목입니다</small><input className="website-field" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"/>
      <label>성함 *<input name="name" required placeholder="예: 홍길동"/></label><label>연락처 *<input name="phone" required placeholder="010-1234-5678"/></label><label>매장 지역 *<input name="area" required placeholder="예: 부천 중동 / 서울 강남구"/></label>
      <div className="select-grid"><label>업종 (선택)<select name="business" defaultValue=""><option value="" disabled>선택하세요</option><option>미용실 · 뷰티</option><option>병원 · 의료</option><option>헬스장 · 스포츠</option><option>기업 · 단체</option></select></label><label>하루 세탁물 발생량 (선택)<select name="volume" defaultValue=""><option value="" disabled>선택하세요</option><option>50장 미만</option><option>50~100장</option><option>100~300장</option><option>300장 이상</option></select></label></div>
      <fieldset><legend>어떤 세탁물을 맡기시나요? (복수 선택 가능)</legend><div className="item-buttons">{items.map(x=><button type="button" className={selected.includes(x)?'active':''} key={x} onClick={()=>setSelected(v=>v.includes(x)?v.filter(y=>y!==x):[...v,x])}>{x}</button>)}</div></fieldset>
      <fieldset><legend>금액 (선택)</legend><div className="item-buttons">{priceTypes.map(x=><button type="button" className={priceType===x?'active':''} key={x} onClick={()=>setPriceType(v=>v===x?'':x)}>{x}</button>)}</div></fieldset>
      <label>문의내용<textarea name="message" rows={6} placeholder="지금 쓰고 계신 세탁 방식, 겪고 계신 불편, 원하시는 수거 주기를 적어주세요."/></label><label className="agree"><input type="checkbox" required/> 개인정보 수집 및 이용과 FormSubmit을 통한 문의 정보 전달에 동의합니다.</label><button className="submit-btn" type="submit" disabled={status==='sending'}>{status==='sending'?'전송 중...':'문의 보내기'}</button>{status==='success'&&<p className="form-status success" role="status">문의가 접수되었습니다. 15분 이내로 대표자가 직접 연락 드리겠습니다.</p>}{status==='error'&&<p className="form-status error" role="alert">메일 전송에 실패했습니다. 잠시 후 다시 시도해 주세요.</p>}
    </form><aside className="contact-aside"><div><small>바로 연락하기</small><a href="tel:01035550517">☎　010-3555-0517</a><p>⌖　경기도 용인시 처인구 모현읍 외개일로 37<br/>　　(직영 세탁 공장)</p><span>사업자등록번호 877-31-01664</span></div><div><small>먼저 둘러보기</small><a href="https://blog.naver.com/house_90" target="_blank" rel="noopener noreferrer">· 공식 블로그 세탁 기록</a></div><p>지점이 여러 곳이거나 <strong>기업 · 연수원처럼 대량</strong>이신 경우, 문의 내용에 지점 수와 품목을 함께 적어주시면 한 번에 안내해 드립니다.</p></aside></section>
    <footer className="contact-footer"><div className="legal wrap"><span>상호 조세탁연구소　|　대표자: 조성집　|　사업자등록번호: 877-31-01664</span><span>ⓒ 조세탁연구소. All rights reserved.</span></div></footer><div className="floating"><a href="https://bit.ly/4vHlBz0" target="_blank" rel="noopener noreferrer" aria-label="조세탁연구소 카카오톡 문의" style={{order:-2,width:'156px',height:'44px',borderRadius:'999px',background:'#FEE500',color:'#191919',fontSize:'13px',fontWeight:700,display:'flex',gap:'8px',padding:'0 16px'}}><span aria-hidden="true">💬</span><span>카카오톡 문의하기</span></a><a href="https://blog.naver.com/house_90" target="_blank" rel="noopener noreferrer" aria-label="조세탁연구소 네이버 블로그">N</a><a href="https://www.youtube.com/channel/UCeeyW2Jew63mU9BHacpsu4A" target="_blank" rel="noopener noreferrer" aria-label="조세탁연구소 유튜브" style={{order:-1,width:'44px',height:'44px',borderRadius:'50%'}}><svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z"/></svg></a><a href="tel:01035550517">☎　010-3555-0517</a></div>
  </main>
}
