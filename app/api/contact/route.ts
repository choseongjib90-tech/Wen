const FORM_ENDPOINT='https://formsubmit.co/ajax/whtod13@naver.com';
const LIVE_ORIGIN='https://gkclean-salon-laundry.choseongjib90.chatgpt.site';

export async function POST(request:Request){
  const payload=await request.json().catch(()=>null) as Record<string,unknown>|null;
  if(!payload||!String(payload['성함']??'').trim()||!String(payload['연락처']??'').trim()||!String(payload['매장 지역']??'').trim()) return Response.json({error:'필수 입력값을 확인해 주세요.'},{status:400});
  const requestUrl=new URL(request.url);
  const origin=['localhost','127.0.0.1'].includes(requestUrl.hostname)?requestUrl.origin:LIVE_ORIGIN;
  const response=await fetch(FORM_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json','Origin':origin,'Referer':`${origin}/contact`},body:JSON.stringify({_subject:'[GK클린] 새로운 세탁 견적 문의',_template:'table',...payload})});
  const result=await response.json().catch(()=>null) as {success?:string|boolean;message?:string}|null;
  const succeeded=response.ok&&(result?.success===true||result?.success==='true');
  if(!succeeded) return Response.json({error:result?.message||'메일 전송에 실패했습니다.'},{status:502});
  return Response.json({ok:true});
}
