import Hero from '@/components/integrated/Hero';
import Overview from '@/components/integrated/Overview';
import Background from '@/components/integrated/Background';
import Process from '@/components/integrated/Process';
import AI from '@/components/integrated/AI';
import Result from '@/components/integrated/Result';
import TechStack from '@/components/integrated/TechStack';

export default function IntegratedPage() {
  return (
    <div style={{ background: 'var(--color-bg)', color: 'var(--color-ink)' }}>
      <div id="hero">
        <Hero />
      </div>
      <div id="overview">
        <Overview />
      </div>
      <div id="background">
        <Background />
      </div>
      <div id="process">
        <Process />
      </div>
      <div id="ai">
        <AI />
      </div>
      <div id="result">
        <Result />
      </div>
      <div id="techstack">
        <TechStack />
      </div>
    </div>
  );
}
