import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL('https://gkclean-salon-laundry.choseongjib90.chatgpt.site'),title:'미용실 수건 세탁 | GK클린',description:'미용실 전용 수건 세탁과 정기 수거 배송 서비스',openGraph:{title:'미용실 수건 세탁 | GK클린',description:'약품 냄새·염색 자국까지 전용 공정으로 관리합니다.',images:[{url:'/og.png',width:1200,height:630,alt:'미용실 수건 세탁'}]},twitter:{card:'summary_large_image',title:'미용실 수건 세탁 | GK클린',description:'약품 냄새·염색 자국까지 전용 공정으로 관리합니다.',images:['/og.png']}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body>{children}</body></html>}
