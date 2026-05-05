import Hero from '@/components/monorepo/Hero';
import Problem from '@/components/monorepo/Problem';
import Overview from '@/components/monorepo/Overview';
import Process from '@/components/monorepo/Process';
import Result from '@/components/monorepo/Result';
import Learned from '@/components/monorepo/Learned';
import TechStack from '@/components/monorepo/TechStack';

export default function Home() {
  return (
    <div
      style={{
        background: 'var(--color-bg)',
        color: 'var(--color-ink)',
      }}
    >
      <div id="hero">
        <Hero />
      </div>
      <div id="problem">
        <Problem />
      </div>
      <div id="overview">
        <Overview />
      </div>
      <div id="process">
        <Process />
      </div>
      <div id="result">
        <Result />
      </div>
      <div id="learned">
        <Learned />
      </div>
      <div id="techstack">
        <TechStack />
      </div>
    </div>
  );
}
