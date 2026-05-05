import Hero from '@/components/refactoring/Hero';
import Overview from '@/components/refactoring/Overview';
import Background from '@/components/refactoring/Background';
import Problem from '@/components/refactoring/Problem';
import Process from '@/components/refactoring/Process';
import Result from '@/components/refactoring/Result';
import TechStack from '@/components/refactoring/TechStack';

export default function RefactoringPage() {
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
      <div id="problem">
        <Problem />
      </div>
      <div id="process">
        <Process />
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
