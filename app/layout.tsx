import type { Metadata } from 'next';
import './globals.css';
import './floating-overrides.css';
import './pricing-overrides.css';
import './footer-overrides.css';
import './hero-overrides.css';

const ogImage='https://jolaundrylab.co.kr/assets/point1.webp?v=20260825-4';
const socialDescription='미용실 · 헬스장 · 병원 · 피부과 · 에스테틱 · 기업의 세탁물을 업체별 단독세탁, 고온스팀 살균, 수작업 검수까지 공정으로 관리합니다.';

export const metadata:Metadata={
  metadataBase:new URL('https://jolaundrylab.co.kr/'),
  title:'조세탁연구소 | B2B 전문 세탁',
  description:socialDescription,
  alternates:{canonical:'https://jolaundrylab.co.kr/'},
  keywords:['조세탁연구소','용인 세탁업체','용인 수건 세탁','미용실 수건 세탁','헬스장 수건 세탁','병원 세탁','B2B 세탁','세탁 수거 배송'],
  openGraph:{
    title:'조세탁연구소 | B2B 전문 세탁',
    description:socialDescription,
    url:'https://jolaundrylab.co.kr/',
    siteName:'조세탁연구소',
    locale:'ko_KR',
    type:'website',
    images:[{url:ogImage,width:1200,height:630,alt:'조세탁연구소 B2B 전문 세탁'}]
  },
  twitter:{
    card:'summary_large_image',
    title:'조세탁연구소 | B2B 전문 세탁',
    description:socialDescription,
    images:[ogImage]
  }
};

const localBusinessJsonLd={
  '@context':'https://schema.org',
  '@type':'LocalBusiness',
  '@id':'https://jolaundrylab.co.kr/#business',
  name:'조세탁연구소',
  url:'https://jolaundrylab.co.kr/',
  telephone:'+82-10-3555-0517',
  taxID:'877-31-01664',
  description:socialDescription,
  address:{
    '@type':'PostalAddress',
    streetAddress:'모현읍 외개일로 37',
    addressLocality:'용인시 처인구',
    addressRegion:'경기도',
    addressCountry:'KR'
  },
  areaServed:['용인시','성남시 분당구','광주시'],
  sameAs:[
    'https://blog.naver.com/house_90',
    'https://www.youtube.com/channel/UCeeyW2Jew63mU9BHacpsu4A'
  ],
  contactPoint:{
    '@type':'ContactPoint',
    telephone:'+82-10-3555-0517',
    contactType:'customer service',
    availableLanguage:['ko']
  }
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="ko"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(localBusinessJsonLd)}}/>{children}</body></html>
}
