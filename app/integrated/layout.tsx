import Sidebar from '@/components/Sidebar';

const sections = [
  { id: 'hero', label: 'Intro' },
  { id: 'overview', label: 'Overview' },
  { id: 'background', label: 'Background' },
  { id: 'process', label: 'Process' },
  { id: 'ai', label: 'AI' },
  { id: 'result', label: 'Result' },
  { id: 'techstack', label: 'Tech Stack' },
];

export default function IntegratedLayout({
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
