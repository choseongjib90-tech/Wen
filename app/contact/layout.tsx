import type {Metadata} from 'next';

const ogImage='https://jolaundrylab.co.kr/assets/point1.webp?v=20260825-4';
const socialDescription='미용실 · 헬스장 · 병원 · 피부과 · 에스테틱 · 기업의 세탁물을 업체별 단독세탁, 고온스팀 살균, 수작업 검수까지 공정으로 관리합니다.';

export const metadata:Metadata={
  title:'세탁 견적 문의 | 조세탁연구소',
  description:socialDescription,
  openGraph:{
    title:'세탁 견적 문의 | 조세탁연구소',
    description:socialDescription,
    url:'https://jolaundrylab.co.kr/contact/',
    siteName:'조세탁연구소',
    type:'website',
    locale:'ko_KR',
    images:[{url:ogImage,width:1200,height:630,alt:'조세탁연구소 B2B 전문 세탁'}]
  },
  twitter:{
    card:'summary_large_image',
    title:'세탁 견적 문의 | 조세탁연구소',
    description:socialDescription,
    images:[ogImage]
  }
};

export default function ContactLayout({children}:{children:React.ReactNode}){return children}
