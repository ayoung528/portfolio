import Sidebar from '@/components/Sidebar';

const sections = [
  { id: 'hero', label: 'Intro' },
  { id: 'problem', label: 'Problem' },
  { id: 'overview', label: 'Overview' },
  { id: 'decision', label: 'Decision' },
  { id: 'process', label: 'Process' },
  { id: 'result', label: 'Result' },
  { id: 'learned', label: 'Learned' },
  { id: 'techstack', label: 'Tech Stack' },
];

export default function SecurityImpactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar sections={sections} />
      <main style={{ flex: 1, minWidth: 0 }}>{children}</main>
    </div>
  );
}
