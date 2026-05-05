import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '포트폴리오 - 정아영',
  description: '멀티레포에서 모노레포로, 100개 컴포넌트 라이브러리 전환기',
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
