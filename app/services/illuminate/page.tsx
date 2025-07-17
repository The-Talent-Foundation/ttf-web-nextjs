import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Illuminate Talent Intelligence | The Talent Foundation',
  description: 'Illuminate delivers synthesized market, competitor, and talent insights so you can de‑risk strategic decisions and outmaneuver your competitors.',
};

export default function IlluminatePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Illuminate: Strategic Foresight for Talent Growth and Expansion
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            One blind talent bet can cost millions, Illuminate the data to win them all.
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-5xl mx-auto">
            Stop navigating mission‑critical initiatives blindfolded. Deep, synthesized market, competitor, and workforce intelligence, filtered through real execution insight that lets you anticipate shifts, validate multi‑million‑dollar strategies, and build the workforce your future demands.
          </p>
          <div className="space-x-4">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Request a Strategic Intelligence Briefing
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore the Enablement Ecosystem
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">When Talent Intelligence Is Missing, Costs Explode</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Expansion roulette.",
                  detail: "Unseen competition causing local talent shortages, compliance traps, and pay realities can derail a new market entry before the first hire. Costly delays are draining both budgets and morale."
                },
                {
                  title: "Profit‑draining attrition.",
                  detail: "Mis‑benchmarked rewards based on flawed compensation reports or unaddressed competitor poaching are fueling double‑digit regrettable turnover and six‑figure replacement costs."
                },
                {
                  title: "Competitive ambush.",
                  detail: "Rival hiring sprints by competitors to dominate the talent market for critical AI or Cyber skills, along with targeted campaigns executed against you, will stall your growth roadmap."
                },
                {
                  title: "Strategic surprises.",
                  detail: "Approving major initiatives (M&A, large-scale transformations) based on thoughts and opinions, rather than hard data on talent and market feasibility? You're exposing yourself to costs and delays."
                }
              ].map((item, index) => (
                <div key={index} className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg font-semibold text-red-600 mb-2">• {item.title}</h3>
                  <p className="text-gray-600 pl-4 italic">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-xl text-gray-700">
                Ignoring talent intelligence doesn't save money, it causes systemic blindness. Illuminate research service replaces guesswork with data‑driven clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Targeted Questions • Expert Answers • Immediate Action</h2>
            <p className="text-xl text-center mb-12 text-gray-700">
              We cut through the noise, delivering targeted, synthesized, in-depth intelligence tailored to your most critical talent and business decisions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "Where can we hire scarce talent at scale?",
                  description: "Assess talent density, skills availability, true compensation realities, competitor saturation, and compliance factors to confidently inform location strategy, remote work policies, and targeted recruitment efforts.",
                  service: "Talent Market Mapping & Feasibility Analysis",
                  examples: [
                    "What are the top 3 locations globally with availability to realistically source 50+ Senior Machine Learning engineers experienced in regulated industries within 6 months?",
                    "What are the actual total compensation market rates vs. self-reported survey data?",
                    "What specific local nuances impact hiring speed in Locations A vs. B?"
                  ]
                },
                {
                  question: "How are my competitors really staffing and paying?",
                  description: "Uncover crucial insights into competitor talent strategies, organizational structures, compensation philosophies, and sourcing channels to inform your own competitive positioning and proactively counter threats.",
                  service: "Competitor Intelligence & Counter Strategy Planning",
                  examples: [
                    "How is Competitor X structuring compensation and total rewards for their new Design team?",
                    "Which research labs and companies are their primary sources for hiring top AI talent?",
                    "What specific value proposition resonates with the talent they're targeting?"
                  ]
                },
                {
                  question: "What does a winning offer actually cost?",
                  description: "Access role‑specific, geo‑calibrated compensation and benefits data to ensure that your offers are competitive enough to secure key talent while also retaining high-performing critical employees.",
                  service: "Compensation & Total Rewards Benchmarking",
                  examples: [
                    "What is the true, competitive market rate (including base, bonus, equity trends, and key benefits) for Principal Product Managers in the Bay Area versus fully remote?",
                    "How do cash compensation expectations of Robotics Engineering candidates in Boston compare to expectations in London, Berlin, or Singapore?",
                    "What additional talent pool would become available if you raised the top of your salary band by 10%?"
                  ]
                },
                {
                  question: "Which future skill demands will break our roadmap?",
                  description: "Map skill requirements tied to your roadmap. Analyze internal strengths and gaps compared to external supply and demand to build workforce plans, advise on build vs buy decisions, and target high-ROI upskilling programs.",
                  service: "Skills Foresight & Strategic Workforce Planning",
                  examples: [
                    "Based on the external supply, cost realities, and our current capability gaps, which domain expertise should we upskill internally to plug hiring gaps?",
                    "What's the optimal, data-driven build or buy strategy to achieve our growth goals?",
                    "What emerging skills will our current team lack for the 12-month product roadmap?"
                  ]
                }
              ].map((card, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">{card.question}</h3>
                  <p className="text-gray-700 mb-4">{card.description}</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-600 mb-2">{card.service}</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {card.examples.map((example, i) => (
                        <li key={i} className="italic">• "{example}"</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-purple-100 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-center mb-4 text-purple-800">How Illuminate Works</h3>
              <div className="text-center mb-4">
                <span className="text-xl font-semibold text-gray-700">Data → Analytics → Synthesis</span>
              </div>
              <p className="text-lg text-gray-700">
                The Talent Foundation's unique advantage lies not just in robust <strong>data aggregation</strong> and <strong>advanced analytics</strong>, but in the crucial layer of <strong>synthesis and strategic interpretation by seasoned TA execution experts</strong>. We don't just present data. We also tell you <em>what it means</em> for your talent strategy and <em>how</em> it directly informs practical process design, effective capability building, and precise hiring execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">What You'll Gain: Drive Strategy & Mitigate Risk</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "De‑risked major strategic investments.",
                  detail: "Make confident go/no-go decisions on location expansion, M&A, or complex transformation projects with clear, localized, and validated data on talent feasibility, costs, compliance landscape, and other associated risks."
                },
                {
                  title: "Secured competitive advantage.",
                  detail: "Proactively identify and map niche talent pools before competitors, enabling targeted talent acquisition. Build data-informed attraction and retention strategies based on competitor vulnerabilities."
                },
                {
                  title: "Optimized workforce spending.",
                  detail: "Ensure competitive, efficient, and fiscally responsible compensation structures. Justify budgets and optimize workforce planning using actionable market data. Avoid overspending on premium panic-hires or losing key talent due to uncompetitive offers in new or existing locations."
                },
                {
                  title: "Future‑proofed talent strategy.",
                  detail: "Anticipate future skill needs tied to your roadmap. Based on robust data, build informed location strategies, sourcing initiatives, and mobility programs. Prepare your workforce for future market shifts and reduce vulnerability to sudden talent shortages."
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-green-600 mb-3">• {benefit.title}</h3>
                  <p className="text-gray-700">{benefit.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">The Illuminated Difference: Actionable Foresight, Not Just Hindsight Data</h2>
            <div className="space-y-8">
              {[
                {
                  number: "1.",
                  title: "Deep strategic synthesis, not a data dump.",
                  description: "Forget generic reports and the spreadsheet overwhelm. Unlike data brokers providing raw feeds, the Talent Foundation delivers expertly synthesized intelligence. Our seasoned practitioners translate complex data points into clear implications and pragmatic, actionable strategic recommendations directly applicable to your immediate challenges and operational context."
                },
                {
                  number: "2.",
                  title: "Operationally grounded in the reality of execution.",
                  description: "Our insights aren't academic exercises. Instead, they are filtered through decades of deep TA and operational execution experience. We understand how this intelligence must translate into effective process redesign, targeted team development, and precise execution to yield tangible business results."
                },
                {
                  number: "3.",
                  title: "Proactive foresight, not just postmortem analysis.",
                  description: "We prioritize identifying emerging talent trends, future skill needs crucial for your growth goals, and potential competitor talent moves before they impact you. This anticipatory intelligence, which often provides months of lead time, enables you to proactively shape your strategy instead of the constantly reactive course correction."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">{item.number} <strong>{item.title}</strong></h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverable Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Your Strategic Talent Intelligence Compass: Guiding Confident Decisions</h2>
            <p className="text-xl mb-8 text-gray-700">
              Move beyond guesswork. The Illuminate research service delivers a comprehensive and confidential <strong>Strategic Intelligence Compass</strong>. Your essential guide for navigating complex talent decisions. This powerful tool synthesizes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                "Rigorously Researched Market & Competitor Insights.",
                "Granular Talent Pool & Compensation Benchmarking Data.",
                "Actionable Skills Foresight & Risk Analysis.",
                "Expert Interpretation & Clear Strategic Recommendations."
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-lg font-semibold text-blue-600">• {item}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-700">
              It provides the <strong>validated intelligence foundation</strong> required to effectively target and execute talent strategies, maximizing your chance of success in competitive environments.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Make Your Next Move With Data‑Driven Confidence</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Stop risking critical initiatives on talent assumptions or incomplete information. Book a briefing and see precisely how Illuminate can provide the clarity your leadership and goals demand.
          </p>
          <div className="space-x-4">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-lg"
            >
              Request a Strategic Intelligence Briefing
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block text-lg"
            >
              Explore the Full Ecosystem
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}