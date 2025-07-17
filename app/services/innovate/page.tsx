import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Innovate Talent Systems | The Talent Foundation',
  description: 'Innovate architects data‑driven, scalable TA systems that cut cost‑per‑hire, boost speed, and de‑risk growth. Book a no‑pitch System Consultation.',
};

export default function InnovatePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Innovate: Create Your Predictable & Scalable High Performance Talent Engine
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Stop losing time and money to broken hiring. Turn every process step into a repeatable system.
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-5xl mx-auto">
            With first‑principles and design‑thinking rigor, we build the <strong>data‑driven, resilient</strong> talent‑acquisition operating system that turns reactive firefighting into a repeatable competitive advantage.
          </p>
          <div className="space-x-4">
            <Link 
              href="/contact" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Request a System Consultation
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
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
            <h2 className="text-4xl font-bold text-center mb-12">When the Process Is the Bottleneck, Growth Pays the Price</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Draining drag of inefficiency.",
                  detail: "Manual hand‑offs and spreadsheet workflows between the recruiting and hiring teams waste 5‑10+ of total staff hours per hire, stretch time‑to‑start, raise cost-of-hire, and push burnout driven attrition rates high."
                },
                {
                  title: "Unreliable quality & retention.",
                  detail: "Lack of standardized assessments don't just cause a bad candidate experience, they also drive up the rate of bad hiring decisions. Each representing a sunk cost of 30%+ of first‑year salary and erasing team momentum."
                },
                {
                  title: "Wasted technology investments.",
                  detail: "An expensive and poorly configured ATS, CRM, or candidate sourcing tool will underperform leading to weak user adoption, and documentation compliance. Failing to optimize your tech leaves significant potential efficiency gains unrealized, and could also open you up to compliance risk in case of an audit."
                },
                {
                  title: "Growth gridlock.",
                  detail: "Unpredictable hiring velocity stalls product launches, expansion headcount, and investor timelines—putting strategic objectives at risk."
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
                Patch‑on‑patch fixes can't repair systemic failure. Innovate replaces chaos with architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Targeted Audit • Custom Blueprint • Measurable Adoption</h2>
            <p className="text-xl text-center mb-12 text-gray-700">
              We cut through noise to deliver a <strong>bespoke</strong> talent‑acquisition operating system, engineered for your scale, speed, and complexity.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "Where are we breaking?",
                  description: "Pinpoint process, tech, skill, and data choke‑points blocking velocity.",
                  service: "Deep Diagnostic & Strategic Audit",
                  detail: "Root‑cause analysis of flows, tools, roles, metrics, and compliance gaps."
                },
                {
                  question: "What should the engine look like?",
                  description: "Design streamlined, data‑driven workflows with clear hand‑offs and candidate journeys.",
                  service: "System Architecture Blueprint",
                  detail: "First‑principles mapping of roles, stages, SLAs, and supporting tech."
                },
                {
                  question: "How do we make tech actually help?",
                  description: "Align stack to process, automate low‑value tasks, boost recruiter adoption.",
                  service: "Pragmatic Tech Optimisation",
                  detail: "ATS/CRM configuration, integration, and automation roadmap—no shelf‑ware."
                },
                {
                  question: "How will we prove ROI?",
                  description: "Track the metrics executives care about—velocity, quality, cost, and risk.",
                  service: "Measurement & Analytics Framework",
                  detail: "Real‑time dashboards and KPI loops for continuous improvement."
                }
              ].map((card, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-4 text-purple-600">{card.question}</h3>
                  <p className="text-gray-700 mb-4">{card.description}</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600 mb-2">{card.service}</h4>
                    <p className="text-sm text-gray-600">{card.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-center mb-4 text-purple-800">Why It Works</h3>
              <div className="text-center mb-4">
                <span className="text-xl font-semibold text-gray-700">User‑First Design • First‑Principles Rigor</span>
              </div>
              <p className="text-lg text-gray-700 text-center">
                Solutions centre on recruiter, manager, and candidate experience, then are rebuilt from bedrock business logic, not "best‑practice" templates that crumble under pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">What You'll Gain: Efficiency, Scalability, Predictability</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Scale‑ready foundations.",
                  detail: "Handle blitz‑growth, PE/VC headcount ramps, or 800‑hire facility builds with process capacity that won't buckle."
                },
                {
                  title: "Double‑digit cost savings.",
                  detail: "Streamlined flows and right‑sized tech routinely trim 15‑30% from true cost‑per‑hire and reclaim hours of manager time."
                },
                {
                  title: "Quality & compliance locked‑in.",
                  detail: "Standardised assessment gates and audit‑ready data reduce mis‑hire rates and de‑risk global or regulated hiring."
                },
                {
                  title: "Board‑level visibility.",
                  detail: "Dashboards translate TA performance into CFO‑friendly ROI, supporting budget asks and strategic credibility."
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
            <h2 className="text-4xl font-bold text-center mb-12">The Innovate Difference: Architecture + Enablement = Lasting ROI</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  number: "1.",
                  title: "Built by operators, not theorists.",
                  description: "Designs come from leaders who ran global TA engines under hyper‑scale pressure."
                },
                {
                  number: "2.",
                  title: "People‑centred adoption.",
                  description: "Blueprints integrate with Elevate programs so your team masters the new system."
                },
                {
                  number: "3.",
                  title: "Ecosystem intelligence baked‑in.",
                  description: "Illuminate market data shapes workflows; outcomes feed seamless Accelerate execution."
                },
                {
                  number: "4.",
                  title: "Root‑cause fixation.",
                  description: "Design‑thinking workshops + first‑principles analysis eliminate symptom chasing for good."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-purple-600">{item.number} <strong>{item.title}</strong></h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverable Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Your Talent Acquisition Operating‑System Blueprint</h2>
            <p className="text-xl mb-8 text-gray-700">
              A confidential, actionable playbook that includes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                "Optimised process maps & RACI",
                "Tech configuration & automation plan",
                "KPI dashboard schema & data dictionary",
                "Phased rollout & change‑management roadmap"
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-lg font-semibold text-purple-600">• {item}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-700">
              All packaged for immediate execution—and measurable, compounding ROI.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Replace Fire‑Drills with a Predictable Talent Engine?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Secure a complimentary 30‑minute consultation to see how Innovate can de‑risk growth and liberate capacity.
          </p>
          <div className="space-x-4">
            <Link 
              href="/contact" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-lg"
            >
              Request a System Consultation
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-block text-lg"
            >
              Explore the Full Ecosystem
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}