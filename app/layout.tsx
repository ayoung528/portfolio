import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '포트폴리오 - 정아영',
  description:
    'AI가 코드를 쓰고 판단하는 환경을 사람이 믿고 쓸 수 있게 만드는 프론트엔드 개발자 정아영의 포트폴리오',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
