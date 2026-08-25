import type {Metadata} from 'next';

const ogImage='https://jolaundrylab.co.kr/assets/hero.webp?v=20260825-3';

export const metadata:Metadata={
  title:'세탁 견적 문의 | 조세탁연구소',
  description:'조세탁연구소 B2B 세탁 견적 문의 페이지입니다. 업종과 지역, 하루 발생량을 알려주시면 확인 후 안내해 드립니다.',
  openGraph:{
    title:'세탁 견적 문의 | 조세탁연구소',
    description:'미용실·헬스장·병원·피부과·에스테틱·기업의 B2B 세탁 견적을 문의하세요.',
    url:'https://jolaundrylab.co.kr/contact/',
    siteName:'조세탁연구소',
    type:'website',
    locale:'ko_KR',
    images:[ogImage]
  },
  twitter:{
    card:'summary_large_image',
    title:'세탁 견적 문의 | 조세탁연구소',
    description:'조세탁연구소 B2B 세탁 견적 문의 페이지입니다.',
    images:[ogImage]
  }
};

export default function ContactLayout({children}:{children:React.ReactNode}){return children}
