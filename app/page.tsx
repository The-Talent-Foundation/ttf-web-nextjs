import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tf-blue to-tf-orange text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Is Your Talent Strategy Fueling Growth or Slowing It Down?
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-5xl mx-auto leading-relaxed">
            A single gap in critical skills or hard‑to‑hire talent can stall product launches, slow workforce expansion, and bleed tens of thousands in value each month, shaking confidence among customers, investors, and other stakeholders.
          </p>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto font-semibold">
            The Talent Foundation partners with ambitious leaders to design and build the predictable, resilient, and reliable strategic talent capability needed to achieve your critical business objectives.
          </p>
          <div className="space-x-4">
            <Link 
              href="/contact" 
              className="btn-primary"
            >
              Book a Strategic Assessment
            </Link>
            <Link 
              href="/services" 
              className="btn-secondary"
            >
              Explore the Enablement Ecosystem
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-8 text-gray-700">Proven Results With Leaders From:</h2>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-lg font-bold text-gray-400">[Client Logos]</div>
          </div>
        </div>
      </section>

      {/* Problem/Pain Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">The Cost of Standing Still</h2>
            <p className="text-xl text-gray-700 mb-8">
              Conventional talent acquisition breaks down when pressure rises. Does any of this hit home?
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-6">
            {[
              {
                title: "Niche‑skill gaps stall product launches.",
                detail: "Are elusive technical or specialized skills delaying crucial product development or market expansion, costing you market advantage?"
              },
              {
                title: "Unpredictable hiring wrecks delivery timelines.",
                detail: "Is chaotic and unpredictable hiring velocity and inconsistent quality jeopardizing delivery timelines or crucial goals, silently erasing your planned ROI?"
              },
              {
                title: "Running blind without talent market intelligence.",
                detail: "Is expansion or workforce‑growth planning built on guesswork, forcing risky bets on locations, salaries, and timelines that explode later?"
              },
              {
                title: "Your team is stuck in constant firefighting mode.",
                detail: "Are nonstop last‑minute urgent hires dragging leaders into interview marathons and draining team morale because key roles still can't be staffed on schedule?"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-600 mb-2">• {item.title}</h3>
                <p className="text-gray-600 pl-4">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto text-center mt-12">
            <p className="text-xl text-gray-700">
              Patchwork fixes won't solve these. You need a system built for complexity, focused on strategically building capability and resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Approach - The Ecosystem */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">A Purpose-Built Operating System for Your Talent Acquisition</h2>
            <p className="text-xl text-gray-700 mb-8">
              We move far beyond the tired limitations of transactional recruiting. The four interconnected pillars of our Talent Enablement Ecosystem transform hiring from a risk into a predictable and repeatable process and a competitive advantage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { 
                name: 'Illuminate', 
                href: '/services/illuminate', 
                description: 'Predictive market and talent intelligence to gain critical foresight and spot risk early.',
                icon: '🔍'
              },
              { 
                name: 'Innovate', 
                href: '/services/innovate', 
                description: 'Data‑driven systems and agentic workflows designed for scale and efficiency',
                icon: '⚙️'
              },
              { 
                name: 'Elevate', 
                href: '/services/elevate', 
                description: 'Embedding next-generation skills and crucial AI literacy within your team.',
                icon: '🚀'
              },
              { 
                name: 'Accelerate', 
                href: '/services/accelerate', 
                description: 'On‑demand expert execution power deployed with strategic precision for time-critical hires.',
                icon: '⚡'
              },
            ].map((service) => (
              <Link 
                key={service.name} 
                href={service.href}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 mb-8">
              Partnering with you, we collaboratively design <strong>an integrated operating system for your talent acquisition</strong>, purpose-built for your specific complexity and hiring needs.
            </p>
            <Link href="/services" className="text-tf-orange hover:text-tf-blue font-semibold text-lg">
              Learn How Our Integrated Ecosystem Delivers Results →
            </Link>
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Why We Succeed Where Others Stall</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "System, not Band‑Aid",
                  description: "We holistically identify and fix root causes, not symptoms."
                },
                {
                  title: "Capability Transfer",
                  description: "Your team ends every engagement stronger, without costly external dependencies."
                },
                {
                  title: "Expertise in complex scaling",
                  description: "From blitz‑scaling to global expansions and product roll‑outs."
                },
                {
                  title: "Metric Obsession",
                  description: "We track business impact, not vanity KPIs. Our success is measured by your success."
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-tf-orange">• {item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Teaser */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Who We Help</h2>
            <p className="text-xl text-gray-700 mb-8">
              The Talent Foundation specializes in partnering with ambitious organizations facing critical talent challenges associated with:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                "Strategic Hiring and Talent Pipelining",
                "AI‑Literacy Upskilling",
                "Launching New Products or Markets",
                "Venture Capital Portfolio Scaling",
                "Critical Organizational Function Builds & Rebuilds",
                "Urgent Needs for Niche Skill Development"
              ].map((area, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-gray-700">• {area}</p>
                </div>
              ))}
            </div>
            <Link href="/who-we-serve" className="text-tf-orange hover:text-tf-blue font-semibold text-lg">
              Discover Our Areas of Specialized Expertise →
            </Link>
          </div>
        </div>
      </section>

      {/* Credibility & Trust */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Your Proven Enablement Partner</h2>
            <div className="bg-orange-50 p-8 rounded-lg mb-8">
              <p className="text-xl text-gray-700 mb-6">
                The Talent Foundation's strategies aren't theoretical constructs; they are practical, proven frameworks forged from direct experience navigating extreme scale and complexity where standard methods demonstrably failed.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Led by <strong>Adam Kovacs (ex-Amazon/AWS leader who built global TA programs delivering tens of thousands of hires and pioneered its Global Talent Intelligence function)</strong>, our approach is grounded in effective principles and battle-tested under intense hyper-growth pressure.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {[
                {
                  title: "First Principles Thinking",
                  description: "Deconstructing challenges to design and build fundamentally superior solutions."
                },
                {
                  title: "Data-Driven Rigor",
                  description: "Leveraging analytical and predictive intelligence for accurate forecasting and measurable results."
                },
                {
                  title: "Practical and Actionable",
                  description: "Relentlessly focusing on what works in the real world, to build practical capabilities that stick."
                }
              ].map((principle, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-semibold mb-3 text-tf-orange">• {principle.title}</h3>
                  <p className="text-gray-700">{principle.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                We operate transparently, intensely focusing on your measurable business outcomes. We don't just offer advice; we partner with you to transform your people and talent function into a dependable engine for achieving your most critical strategic imperatives.
              </p>
              <Link href="/about" className="text-tf-orange hover:text-tf-blue font-semibold text-lg">
                Learn More About Our Philosophy & Experience →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-tf-blue to-tf-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Talent From Bottleneck to Strategic Advantage?</h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Move beyond unpredictable hiring outcomes and build the robust talent engine your strategic ambition demands. Let's have a direct conversation about how expert talent enablement can de-risk your initiatives and accelerate sustainable growth.
          </p>
          
          <div className="bg-white/10 p-8 rounded-lg mb-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">Schedule Strategic Assessment</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start">
                <span className="text-2xl mr-3">1.</span>
                <div>
                  <strong>Pre‑call brief</strong> – You answer five context questions
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3">2.</span>
                <div>
                  <strong>30m call</strong> – We unpack your talent constraint.
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3">3.</span>
                <div>
                  <strong>Rapid analysis</strong> – Within 48h, you get a summarized analysis and next‑step options.
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <Link 
              href="/contact" 
              className="btn-primary inline-block text-lg"
            >
              Book a Strategic Assessment
            </Link>
            <div className="text-center">
              <p className="text-lg mb-4">30‑minute call, no obligation if we're not the right fit.</p>
              <Link href="/contact" className="text-white hover:text-gray-200 underline">
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">Explore Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              {[
                {
                  name: "Illuminate",
                  description: "Talent supply market maps, competitor analysis alerts, workforce analytics."
                },
                {
                  name: "Innovate",
                  description: "Workflow redesign, operational audits, tech and AI stack alignment, lean process manuals."
                },
                {
                  name: "Elevate",
                  description: "AI sourcing playbooks, live cohort training, 90‑day ongoing skill support."
                },
                {
                  name: "Accelerate",
                  description: "Embedded recruiters, project‑based sourcing squads, outcome‑based pricing."
                }
              ].map((service, index) => (
                <div key={index} className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">{service.name}</h4>
                  <p className="text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}