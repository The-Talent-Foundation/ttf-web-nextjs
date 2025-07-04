import { Link } from 'wouter';
import { Lightbulb, Settings, Zap, Play, AlertTriangle, Target, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tf-blue-light to-white py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-sm leading-tight">
              Is Your Talent Strategy <span className="text-tf-orange">Fueling Growth</span> or Slowing It Down?
            </h1>
            <p className="text-lg md:text-xl text-text-medium mb-xl max-w-3xl mx-auto leading-relaxed">
              A single gap in critical skills or hard‑to‑hire talent can stall product launches, slow workforce expansion, and bleed tens of thousands in value each month, shaking confidence among customers, investors, and other stakeholders.
            </p>
            <div className="bg-white p-lg rounded-lg shadow-lg mb-xl">
              <p className="text-lg font-semibold text-text-dark mb-md">
                <span className="text-tf-orange font-bold">The Talent Foundation</span> partners with ambitious leaders to design and build the predictable, resilient, and reliable strategic talent capability needed to achieve your critical business objectives.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-md justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Book a Strategic Assessment
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-8 py-4">
                Explore the Enablement Ecosystem
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white py-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-text-medium mb-lg">Proven Results With Leaders From:</h2>
            <div className="flex flex-wrap justify-center items-center gap-lg opacity-60">
              <div className="bg-gray-200 px-lg py-md rounded-lg text-gray-500 font-semibold">AWS</div>
              <div className="bg-gray-200 px-lg py-md rounded-lg text-gray-500 font-semibold">Amazon</div>
              <div className="bg-gray-200 px-lg py-md rounded-lg text-gray-500 font-semibold">Tech Startups</div>
              <div className="bg-gray-200 px-lg py-md rounded-lg text-gray-500 font-semibold">Growth Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-bg-subtle py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-xxl">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">The Cost of Standing Still</h2>
              <p className="text-lg text-text-medium">
                <span className="font-semibold text-text-dark">Conventional talent acquisition breaks down when pressure rises.</span> Does any of this hit home?
              </p>
            </div>
            <div className="space-y-md">
              <div className="bg-white p-lg rounded-lg shadow-sm border border-border-light">
                <div className="flex items-start gap-md">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-tf-orange" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-text-dark mb-xs">Niche‑skill gaps stall product launches</h3>
                    <p className="text-text-medium text-sm">Are <span className="font-semibold text-text-dark">elusive technical or specialized skills</span> delaying crucial product development or market expansion, <span className="font-semibold text-text-dark">costing you market advantage</span>?</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm border border-border-light">
                <div className="flex items-start gap-md">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-tf-orange" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-text-dark mb-xs">Unpredictable hiring wrecks delivery timelines</h3>
                    <p className="text-text-medium text-sm">Is <span className="font-semibold text-text-dark">chaotic and unpredictable hiring</span> velocity and inconsistent quality jeopardizing delivery timelines or crucial goals, silently erasing your planned ROI?</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm border border-border-light">
                <div className="flex items-start gap-md">
                  <div className="flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-tf-orange" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-text-dark mb-xs">Running blind without talent market intelligence</h3>
                    <p className="text-text-medium text-sm">Is <span className="font-semibold text-text-dark">expansion or workforce‑growth planning</span> built on guesswork, forcing risky bets on locations, salaries, and timelines that explode later?</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm border border-border-light">
                <div className="flex items-start gap-md">
                  <div className="flex-shrink-0">
                    <Target className="h-6 w-6 text-tf-orange" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-text-dark mb-xs">Your team is stuck in constant firefighting mode</h3>
                    <p className="text-text-medium text-sm">Are nonstop <span className="font-semibold text-text-dark">last‑minute urgent hires</span> dragging leaders into interview marathons and draining team morale because key roles still can't be staffed on schedule?</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-xxl">
              <p className="text-lg font-semibold text-text-dark">
                Patchwork fixes won't solve these. You need a system built for complexity, focused on strategically building capability and resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution - IIEA Ecosystem */}
      <section className="bg-white py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-xxl">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">A Purpose-Built Operating System for Your Talent Acquisition</h2>
            <p className="text-lg text-text-medium max-w-4xl mx-auto">
              We move far beyond the tired limitations of transactional recruiting. The four interconnected pillars of our <span className="font-semibold text-tf-orange">Talent Enablement Ecosystem</span> transform hiring from a risk into a predictable and repeatable process and a competitive advantage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg mb-xxl">
            <div className="bg-tf-blue-light p-lg rounded-lg text-center">
              <div className="w-16 h-16 bg-tf-blue rounded-full flex items-center justify-center mx-auto mb-md">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-text-dark mb-xs">Illuminate</h3>
              <p className="text-sm text-text-medium">Predictive market and talent intelligence to gain critical foresight and spot risk early.</p>
            </div>
            <div className="bg-tf-blue-light p-lg rounded-lg text-center">
              <div className="w-16 h-16 bg-tf-blue rounded-full flex items-center justify-center mx-auto mb-md">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-text-dark mb-xs">Innovate</h3>
              <p className="text-sm text-text-medium">Data‑driven systems and agentic workflows designed for scale and efficiency.</p>
            </div>
            <div className="bg-tf-blue-light p-lg rounded-lg text-center">
              <div className="w-16 h-16 bg-tf-blue rounded-full flex items-center justify-center mx-auto mb-md">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-text-dark mb-xs">Elevate</h3>
              <p className="text-sm text-text-medium">Embedding next-generation skills and crucial AI literacy within your team.</p>
            </div>
            <div className="bg-tf-blue-light p-lg rounded-lg text-center">
              <div className="w-16 h-16 bg-tf-blue rounded-full flex items-center justify-center mx-auto mb-md">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-text-dark mb-xs">Accelerate</h3>
              <p className="text-sm text-text-medium">On‑demand expert execution power deployed with strategic precision for time-critical hires.</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg text-text-medium mb-lg max-w-4xl mx-auto">
              Partnering with you, we collaboratively design <span className="font-semibold text-tf-orange">an integrated operating system for your talent acquisition</span>, purpose-built for <em>your</em> specific complexity and hiring needs.
            </p>
            <Link href="/services" className="text-tf-blue font-semibold hover:text-tf-orange transition-colors">
              Learn How Our Integrated Ecosystem Delivers Results →
            </Link>
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="bg-bg-subtle py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-xxl">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">Why We Succeed Where Others Stall</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              <div className="bg-white p-lg rounded-lg shadow-sm">
                <h3 className="font-semibold text-text-dark mb-xs">System, not Band‑Aid</h3>
                <p className="text-text-medium text-sm">We holistically identify and fix root causes, not symptoms.</p>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm">
                <h3 className="font-semibold text-text-dark mb-xs">Capability Transfer</h3>
                <p className="text-text-medium text-sm">Your team ends every engagement stronger, without costly external dependencies.</p>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm">
                <h3 className="font-semibold text-text-dark mb-xs">Expertise in complex scaling</h3>
                <p className="text-text-medium text-sm">From blitz‑scaling to global expansions and product roll‑outs.</p>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm">
                <h3 className="font-semibold text-text-dark mb-xs">Metric Obsession</h3>
                <p className="text-text-medium text-sm">We track business impact, not vanity KPIs. Our success is measured by <em>your</em> success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Teaser */}
      <section className="bg-white py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">Who We Help</h2>
            <p className="text-lg text-text-medium mb-xxl">
              The Talent Foundation specializes in partnering with ambitious organizations facing critical talent challenges associated with:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md mb-xxl">
              <div className="bg-tf-blue-light p-md rounded-lg text-center">
                <p className="text-text-dark font-medium">Strategic Hiring and Talent Pipelining</p>
              </div>
              <div className="bg-tf-blue-light p-md rounded-lg text-center">
                <p className="text-text-dark font-medium">AI‑Literacy Upskilling</p>
              </div>
              <div className="bg-tf-blue-light p-md rounded-lg text-center">
                <p className="text-text-dark font-medium">Launching New Products or Markets</p>
              </div>
              <div className="bg-tf-blue-light p-md rounded-lg text-center">
                <p className="text-text-dark font-medium">Venture Capital Portfolio Scaling</p>
              </div>
              <div className="bg-tf-blue-light p-md rounded-lg text-center">
                <p className="text-text-dark font-medium">Critical Organizational Function Builds</p>
              </div>
              <div className="bg-tf-blue-light p-md rounded-lg text-center">
                <p className="text-text-dark font-medium">Urgent Niche Skill Development</p>
              </div>
            </div>
            <Link href="/who-we-serve" className="text-tf-blue font-semibold hover:text-tf-orange transition-colors">
              Discover Our Areas of Specialized Expertise →
            </Link>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="bg-bg-subtle py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-xxl">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">Your Proven Enablement Partner</h2>
              <p className="text-lg text-text-medium mb-lg">
                The Talent Foundation's strategies aren't theoretical constructs; they are practical, proven frameworks forged from direct experience navigating extreme scale and complexity where standard methods demonstrably failed.
              </p>
              <div className="bg-white p-lg rounded-lg shadow-sm mb-lg">
                <p className="text-text-dark mb-md">
                  Led by <span className="font-semibold text-tf-orange">Adam Kovacs</span> (ex-Amazon/AWS leader who built global TA programs delivering tens of thousands of hires and pioneered its Global Talent Intelligence function), our approach is grounded in effective principles and battle-tested under intense hyper-growth pressure.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xxl">
              <div className="text-center">
                <h3 className="font-semibold text-text-dark mb-xs">First Principles Thinking</h3>
                <p className="text-text-medium text-sm">Deconstructing challenges to design and build fundamentally superior solutions.</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-text-dark mb-xs">Data-Driven Rigor</h3>
                <p className="text-text-medium text-sm">Leveraging analytical and predictive intelligence for accurate forecasting and measurable results.</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-text-dark mb-xs">Practical and Actionable</h3>
                <p className="text-text-medium text-sm">Relentlessly focusing on what works in the real world, to build practical capabilities that stick.</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg text-text-medium mb-lg">
                We operate transparently, intensely focusing on your measurable business outcomes. We don't just offer advice; we partner with you to transform your people and talent function into a dependable engine for achieving your most critical strategic imperatives.
              </p>
              <Link href="/about" className="text-tf-blue font-semibold hover:text-tf-orange transition-colors">
                Learn More About Our Philosophy & Experience →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-bg-dark py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-md">
              Ready to Transform Talent From Bottleneck to Strategic Advantage?
            </h2>
            <p className="text-lg text-tf-blue-lighter mb-xxl">
              Move beyond unpredictable hiring outcomes and build the robust talent engine your strategic ambition demands. Let's have a direct conversation about how expert talent enablement can de-risk your initiatives and accelerate sustainable growth.
            </p>
            <div className="mb-xxl">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-block mb-lg">
                Schedule Strategic Assessment
              </Link>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-md text-left max-w-2xl mx-auto">
                <div className="flex items-center gap-xs">
                  <div className="w-8 h-8 bg-tf-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <p className="text-white text-sm"><span className="font-semibold">Pre‑call brief</span> – You answer five context questions</p>
                </div>
                <div className="flex items-center gap-xs">
                  <div className="w-8 h-8 bg-tf-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <p className="text-white text-sm"><span className="font-semibold">30m call</span> – We unpack your talent constraint</p>
                </div>
                <div className="flex items-center gap-xs">
                  <div className="w-8 h-8 bg-tf-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <p className="text-white text-sm"><span className="font-semibold">Rapid analysis</span> – Within 48h, summarized analysis and options</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-lg">
              <p className="text-white font-semibold mb-md">Ready to turn talent from constraint to edge?</p>
              <div className="flex flex-wrap justify-center gap-lg">
                <Link href="/services" className="text-tf-blue-lighter hover:text-tf-orange transition-colors border-b border-tf-blue-lighter pb-1">
                  Explore Our Services
                </Link>
                <Link href="/contact" className="text-tf-blue-lighter hover:text-tf-orange transition-colors border-b border-tf-blue-lighter pb-1">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
