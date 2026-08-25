import type { Metadata } from 'next';
import './globals.css';
import './floating-overrides.css';
import './pricing-overrides.css';
export const metadata:Metadata={metadataBase:new URL('https://jolaundrylab.co.kr/'),title:'미용실 수건 세탁 | 조세탁연구소',description:'미용실 전용 수건 세탁과 정기 수거 배송 서비스',openGraph:{title:'미용실 수건 세탁 | 조세탁연구소',description:'약품 냄새·염색 자국까지 전용 공정으로 관리합니다.',images:[{url:'https://jolaundrylab.co.kr/og.png',width:1200,height:630,alt:'미용실 수건 세탁 | 조세탁연구소'}]},twitter:{card:'summary_large_image',title:'미용실 수건 세탁 | 조세탁연구소',description:'약품 냄새·염색 자국까지 전용 공정으로 관리합니다.',images:['https://jolaundrylab.co.kr/og.png']}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body>{children}</body></html>}