'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

export type SectionItem = { id: string; label: string };

const defaultSections: SectionItem[] = [
  { id: 'hero', label: 'Intro' },
  { id: 'problem', label: 'Problem' },
  { id: 'overview', label: 'Overview' },
  { id: 'process', label: 'Process' },
  { id: 'result', label: 'Result' },
  { id: 'learned', label: 'Learned' },
  { id: 'techstack', label: 'Tech Stack' },
];

export default function Sidebar({
  sections = defaultSections,
}: {
  sections?: SectionItem[];
}) {
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const clickedRef = useRef<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (clickedRef.current) {
              if (id === clickedRef.current) setActive(id);
            } else {
              setActive(id);
            }
          }
        },
        { rootMargin: '-40% 0px -55% 0px' },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    setMenuOpen(false);
    clickedRef.current = id;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      clickedRef.current = null;
    }, 800);
  };

  const NavItems = () => (
    <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
      {sections.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            style={{
              all: 'unset',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '7px 10px',
              borderRadius: '6px',
              fontSize: '0.82rem',
              fontWeight: isActive ? 600 : 400,
              color: isActive ? 'var(--color-ink)' : 'var(--color-ink-faint)',
              background: isActive ? 'var(--color-surface)' : 'transparent',
              transition: 'all 0.15s ease',
            }}
          >
            <span
              style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: isActive ? 'var(--color-accent)' : 'transparent',
                border: `1px solid ${isActive ? 'var(--color-accent)' : 'var(--color-ink-faint)'}`,
                flexShrink: 0,
                transition: 'all 0.15s ease',
              }}
            />
            {label}
          </button>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* ── 데스크탑 사이드바 ── */}
      <aside
        className="mob-hide"
        style={{
          width: '240px',
          flexShrink: 0,
          position: 'sticky',
          top: 0,
          height: '100vh',
          borderRight: '1px solid var(--color-border)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '2.5rem 0',
        }}
      >
        <div style={{ padding: '0 2rem' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.72rem',
              color: 'var(--color-ink-faint)',
              textDecoration: 'none',
              marginBottom: '1.75rem',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = 'var(--color-ink)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = 'var(--color-ink-faint)')
            }
          >
            <span style={{ fontSize: '0.9rem', lineHeight: 1 }}>←</span>
            목록
          </Link>

          <NavItems />
        </div>
        <div style={{ padding: '0 2rem' }}>
          <p
            style={{
              fontSize: '0.7rem',
              color: 'var(--color-ink-faint)',
              lineHeight: 1.6,
            }}
          >
            UI / UX / DX
            <br />
            Frontend Dev
          </p>
        </div>
      </aside>

      {/* ── 모바일 탑바 ── */}
      <div
        style={{
          display: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: 'var(--color-bg)',
          borderBottom: '1px solid var(--color-border)',
          padding: '0 1.25rem',
          height: '52px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        className="mob-topbar"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link
            href="/"
            style={{
              fontSize: '0.72rem',
              color: 'var(--color-ink-faint)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span style={{ fontSize: '0.9rem', lineHeight: 1 }}>←</span>
            목록
          </Link>
          <img
            src="/profile.jpg"
            alt="프로필"
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
          <p
            style={{
              fontSize: '0.72rem',
              color: 'var(--color-ink-faint)',
              letterSpacing: '0.1em',
            }}
          >
            Jeong A Young
          </p>
        </div>
        <button
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            all: 'unset',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '20px',
                height: '1.5px',
                background: 'var(--color-ink)',
                borderRadius: '2px',
                transition: 'all 0.2s ease',
                transform: menuOpen
                  ? i === 0
                    ? 'translateY(6.5px) rotate(45deg)'
                    : i === 2
                      ? 'translateY(-6.5px) rotate(-45deg)'
                      : 'scaleX(0)'
                  : 'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* ── 모바일 드롭다운 메뉴 ── */}
      {menuOpen && (
        <div
          style={{
            display: 'none',
            position: 'fixed',
            top: '52px',
            left: 0,
            right: 0,
            zIndex: 99,
            background: 'var(--color-bg)',
            borderBottom: '1px solid var(--color-border)',
            padding: '1rem 1.25rem',
          }}
          className="mob-menu"
        >
          <NavItems />
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .mob-topbar { display: flex !important; }
          .mob-menu { display: block !important; }
        }
      `}</style>
    </>
  );
}
