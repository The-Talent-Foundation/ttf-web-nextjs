import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Elevate Talent Capability | The Talent Foundation',
  description: 'Elevate upskills recruiters with advanced methods and AI literacy to cut time-to-fill, lift quality, and slash agency spend. Book a Capability Blueprint call.',
};

export default function ElevatePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tf-blue to-tf-orange text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Elevate: Build an AI-Savvy, High-Performance TA Team
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Skills gaps drain speed, quality, and budget—Elevate transforms recruiters into strategic, metric-moving operators.
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-5xl mx-auto">
            Expert-led, bespoke programs embed advanced techniques and critical AI literacy so your team delivers measurable hiring outcomes—fast.
          </p>
          <div className="space-x-4">
            <Link 
              href="/contact" 
              className="btn-primary"
            >
              Request a Capability Blueprint
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

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">When Capability Lags, Execution (and Revenue) Suffer</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Strategic incapability drag.",
                  detail: "Out-of-date skills throttle delivery on growth initiatives, putting launches and expansions at risk."
                },
                {
                  title: "AI adoption gap.",
                  detail: "Competitors wield AI to halve sourcing cycles while your team wrestles with basic prompts—or ignores the tools entirely."
                },
                {
                  title: "Tech ROI squandered.",
                  detail: "A six-to-seven-figure TA stack sees < 50% adoption, forfeiting efficiency gains and leaving data holes executives can't trust."
                },
                {
                  title: "Bad-hire & agency bleed.",
                  detail: "Weak assessment and agency dependence add 15-25% fees and 30%+ salary losses per mis-hire—costs that compound quarter after quarter."
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
                Skills inertia isn't a nuisance; it's a strategic liability. Elevate replaces guess-and-hope with mastery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Capability Audit • Bespoke Curriculum • Applied Mastery</h2>
            <p className="text-xl text-center mb-12 text-gray-700">
              We cut through noise to deliver durable skill upgrades tied directly to your business goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "Where are the gaps?",
                  description: "Uncover critical skill, adoption, and mindset shortfalls blocking results.",
                  service: "Capability Diagnostic & Skill Map",
                  detail: "Evidence-based assessment of team proficiency, AI readiness, and tech usage."
                },
                {
                  question: "What do we teach?",
                  description: "Design laser-focused learning paths linked to strategic objectives.",
                  service: "Bespoke Curriculum Design",
                  detail: "Role-specific modules matched to scaling, global, or niche-talent demands."
                },
                {
                  question: "How do we embed AI?",
                  description: "Shift from 'tool dabbling' to strategic, ethical AI deployment that sticks.",
                  service: "Strategic AI Enablement",
                  detail: "Literacy, use-cases, governance, and hands-on prompt labs that drive real productivity."
                },
                {
                  question: "How do we lock in ROI?",
                  description: "Ensure new skills translate into metrics the C-suite cares about.",
                  service: "Applied Projects & Coaching",
                  detail: "Live scenarios on active requisitions, plus 30-day reinforcement and Q&A support."
                }
              ].map((card, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-4 text-emerald-600">{card.question}</h3>
                  <p className="text-gray-700 mb-4">{card.description}</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-teal-600 mb-2">{card.service}</h4>
                    <p className="text-sm text-gray-600">{card.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-teal-100 to-emerald-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-center mb-4 text-teal-800">Why It Works</h3>
              <div className="text-center mb-4">
                <span className="text-xl font-semibold text-gray-700">Practitioner-Led • Application-First</span>
              </div>
              <p className="text-lg text-gray-700">
                Frameworks come from leaders who built global TA functions and scaled AI in the wild, then are practiced on your <em>actual</em> roles for immediate ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">What You'll Gain: Speed, Quality, Savings, Resilience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Master complexity & niche talent.",
                  detail: "AI-augmented sourcing and advanced assessments cut time-to-fill for hard roles by 25-45%."
                },
                {
                  title: "Unlock recruiter productivity.",
                  detail: "Modern workflows and automation lift quality placements per recruiter by 20-40%, freeing budget for growth."
                },
                {
                  title: "Boost hire quality & retention.",
                  detail: "Structured, bias-mitigated assessment reduces costly mis-hires by 20-40% and improves first-year performance."
                },
                {
                  title: "Slash agency & rework spend.",
                  detail: "Internal mastery shrinks reliance on contingency search, eliminating 15-25% fees and re-hire costs."
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
            <h2 className="text-4xl font-bold text-center mb-12">The Elevate Difference: Mastery that Sticks and Scales</h2>
            <div className="space-y-8">
              {[
                {
                  number: "1.",
                  title: "Built by operators, not lecturers.",
                  description: "Programs are authored and delivered by practitioners who ran hyper-scale TA teams and pioneered AI adoption."
                },
                {
                  number: "2.",
                  title: "Context-driven, never generic.",
                  description: "Curricula are custom-mapped to your strategy, market, and tech stack—no off-the-shelf fluff."
                },
                {
                  number: "3.",
                  title: "Embedded practice = retention.",
                  description: "Real-role projects, peer simulations, and post-session coaching turn knowledge into habit."
                },
                {
                  number: "4.",
                  title: "Ecosystem leverage.",
                  description: "Insights from Illuminate shape relevance; skills plug directly into Innovate processes for compounding impact."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-emerald-600">{item.number} <strong>{item.title}</strong></h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverable Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Your Talent Capability Blueprint</h2>
            <p className="text-xl mb-8 text-gray-700">
              A confidential package including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                "Skill-gap analysis & priority matrix",
                "Custom learning path & module outlines",
                "AI-enablement governance & tool kit",
                "Success metrics and tracking dashboard",
                "30-day reinforcement & Q&A schedule"
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-lg font-semibold text-emerald-600">• {item}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-700">
              Everything is ready for immediate rollout and a measurable performance lift.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Turn Your Team into a High-Impact, AI-Ready Powerhouse?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Secure a complimentary blueprint session to see exactly how Elevate can close critical skill gaps and drive hiring results.
          </p>
          <div className="space-x-4">
            <Link 
              href="/contact" 
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-lg"
            >
              Request a Capability Blueprint
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors inline-block text-lg"
            >
              Explore the Full Ecosystem
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}