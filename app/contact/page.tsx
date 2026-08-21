'use client';
import {FormEvent, useState} from 'react';

const items=['수건 · 타월','가운 · 유니폼','운동복 · 헬스복','환자복 · 의료복','이불 · 시트 · 침구류','단체복 · 행사 세탁','기타 · 상담 후 결정'];

export default function Contact(){
  const [selected,setSelected]=useState<string[]>([]);
  function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault(); const fd=new FormData(e.currentTarget);
    const body=[`성함: ${fd.get('name')}`,`연락처: ${fd.get('phone')}`,`매장 지역: ${fd.get('area')}`,`업종: ${fd.get('business')||'미선택'}`,`하루 발생량: ${fd.get('volume')||'미선택'}`,`세탁물: ${selected.join(', ')||'미선택'}`,'',String(fd.get('message')||'')].join('\n');
    window.location.href=`mailto:whtod13@naver.com?subject=${encodeURIComponent('[GK클린 견적 문의] '+fd.get('name'))}&body=${encodeURIComponent(body)}`;
  }
  return <main>
    <header className="site-header"><a className="logo" href="/"><span className="logo-mark">GK</span><strong>주식회사 지케이클린</strong></a><nav>{['홈','GK클린 소개','업종별 수건세탁','품목 · 대량','세탁 공정','가격 안내','세탁 사례','견적 문의'].map(x=><a key={x} href={x==='홈'?'/':x==='견적 문의'?'/contact':'/#'}>{x}</a>)}</nav><a className="nav-cta" href="/contact">견적 문의</a><a className="phone" href="tel:16661778">☎ <strong>1666-1778</strong></a></header>
    <section className="contact-hero"><p>CONTACT</p><h1>세탁 견적 문의</h1><span>업종과 지역, 하루 발생량을 알려주시면 담당자가 확인 후 연락드립니다.<br/>매장 방문 상담과 샘플링도 함께 도와드립니다.</span></section>
    <section className="contact-area wrap"><form className="contact-form" onSubmit={submit}><p className="form-kicker">INQUIRY</p><h2>세탁 견적 문의</h2><small>* 표시는 필수 입력 항목입니다</small>
      <label>성함 *<input name="name" required placeholder="예: 홍길동"/></label><label>연락처 *<input name="phone" required placeholder="010-1234-5678"/></label><label>매장 지역 *<input name="area" required placeholder="예: 부천 중동 / 서울 강남구"/></label>
      <div className="select-grid"><label>업종 (선택)<select name="business" defaultValue=""><option value="" disabled>선택하세요</option><option>미용실 · 뷰티</option><option>병원 · 의료</option><option>헬스장 · 스포츠</option><option>요양원 · 복지시설</option><option>기업 · 단체</option></select></label><label>하루 세탁물 발생량 (선택)<select name="volume" defaultValue=""><option value="" disabled>선택하세요</option><option>50장 미만</option><option>50~100장</option><option>100~300장</option><option>300장 이상</option></select></label></div>
      <fieldset><legend>어떤 세탁물을 맡기시나요? (복수 선택 가능)</legend><div className="item-buttons">{items.map(x=><button type="button" className={selected.includes(x)?'active':''} key={x} onClick={()=>setSelected(v=>v.includes(x)?v.filter(y=>y!==x):[...v,x])}>{x}</button>)}</div></fieldset>
      <label>문의내용<textarea name="message" rows={6} placeholder="지금 쓰고 계신 세탁 방식, 겪고 계신 불편, 원하시는 수거 주기를 적어주세요."/></label><label className="agree"><input type="checkbox" required/> 개인정보 수집 및 이용에 동의합니다 (수집항목: 성함·연락처·매장 지역, 목적: 세탁 견적 상담)</label><button className="submit-btn" type="submit">문의 보내기</button>
    </form><aside className="contact-aside"><div><small>바로 연락하기</small><a href="tel:16661778">☎　1666-1778</a><p>⌖　경기도 시흥시 미산로 94-1<br/>　　(직영 세탁 공장)</p><span>사업자등록번호 374-86-02602</span></div><div><small>먼저 둘러보기</small><a href="#">· 공식 블로그 세탁 기록</a></div><p>지점이 여러 곳이거나 <strong>요양원 · 기업 · 연수원처럼 대량</strong>이신 경우, 문의 내용에 지점 수와 품목을 함께 적어주시면 한 번에 안내해 드립니다.</p></aside></section>
    <footer className="contact-footer"><div className="legal wrap"><span>상호 주식회사 지케이클린　|　대표자: 조성준　|　사업자등록번호: 374-86-02602</span><span>ⓒ GK클린. All rights reserved.</span></div></footer><div className="floating"><a href="#">N</a><a href="tel:16661778">☎　1666-1778</a></div>
  </main>
}
