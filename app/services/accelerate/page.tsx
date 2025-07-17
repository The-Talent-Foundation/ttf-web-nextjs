import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Accelerate Talent Execution | The Talent Foundation',
  description: 'Accelerate deploys seasoned recruiters with search-level rigor to fill mission-critical roles fast—without sacrificing quality. Book an Execution Consultation.',
};

export default function AcceleratePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tf-blue to-tf-orange text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Accelerate: Expert Execution for Your Most Critical Hires
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Vacancies stall strategy—Accelerate delivers the right talent at break-neck speed and search-grade quality.
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-5xl mx-auto">
            Seasoned TA professionals apply executive-search discipline and data insight to cut complex time-to-fill by 30%+, safeguard quality, and keep high-stakes initiatives on schedule.
          </p>
          <div className="space-x-4">
            <Link 
              href="/contact" 
              className="btn-primary"
            >
              Request an Execution Consultation
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
            <h2 className="text-4xl font-bold text-center mb-12">When Key Roles Sit Empty, the Meter Spins</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Project & revenue slip.",
                  detail: "Each month a critical vacancy delays a launch or transformation, burning $50-200k+ in lost opportunity."
                },
                {
                  title: "Agency mismatch.",
                  detail: "Generic recruiters miss niche requirements, flood inboxes, and charge 15-25% fees for talent that won't stick."
                },
                {
                  title: "Team overload.",
                  detail: "Sudden hiring surges drain your internal TA bandwidth, causing burnout and interview bottlenecks."
                },
                {
                  title: "Costly mis-hires.",
                  detail: "Rushed decisions drain 30-150% of salary and force painful do-overs when you can least afford them."
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
                Patch contracts and speed-first shortcuts backfire. Accelerate replaces scramble with disciplined velocity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Rapid Clarity • Seasoned Experts • Search-Level Rigor</h2>
            <p className="text-xl text-center mb-12 text-gray-700">
              Flexible, rigor-driven execution tailored to your specific hiring challenges.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "Need ongoing firepower?",
                  description: "Embed expert recruiters who scale with you.",
                  service: "Embedded Strategic Partner(s)",
                  detail: "Low-friction capacity for sustained growth or function builds."
                },
                {
                  question: "Deadline-driven project?",
                  description: "Hand the whole sprint to a mission team.",
                  service: "Dedicated Project Squad",
                  detail: "TF team owns end-to-end hiring for launches, transformations, or market entries."
                },
                {
                  question: "One irreplaceable role?",
                  description: "Apply executive-search precision—minus the bloat.",
                  service: "Targeted Expert Search",
                  detail: "Methodology-driven hunt for pivotal technologists or leaders, anywhere on the globe."
                },
                {
                  question: "Sudden surge or gap?",
                  description: "Bridge bandwidth or leadership voids instantly.",
                  service: "Custom Surge & Interim Support",
                  detail: "Tailored retainer or interim solutions for volume spikes or TA-lead vacancies."
                }
              ].map((card, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-4 text-orange-600">{card.question}</h3>
                  <p className="text-gray-700 mb-4">{card.description}</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-600 mb-2">{card.service}</h4>
                    <p className="text-sm text-gray-600">{card.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-red-100 to-orange-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-center mb-4 text-red-800">How We Keep Speed and Quality</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "1. Illuminate-driven talent mapping pinpoints pools before outreach.",
                  "2. Multi-channel engagement reaches passive A-players fast.",
                  "3. Elevate-calibre assessments vet competence and fit rigorously.",
                  "4. Data-backed offer strategy secures acceptance and retention."
                ].map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-700 mt-6 text-center">
                Execution is delivered exclusively by senior TF practitioners—no junior pass-offs, no body-shopping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">What You'll Gain: Velocity, Precision, Confidence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Unblock stalled initiatives.",
                  detail: "Fill leadership, AI, cyber, or GTM roles in weeks—not quarters—re-starting revenue and transformation clocks."
                },
                {
                  title: "Hit aggressive scale targets.",
                  detail: "PE / VC timelines stay intact as expert recruiters handle volume without overwhelming managers."
                },
                {
                  title: "Access hard-to-find expertise.",
                  detail: "Deep domain search uncovers talent competitors miss, from quantum engineers to global compliance leads."
                },
                {
                  title: "Slash mis-hire & agency waste.",
                  detail: "Search-grade vetting lifts first-year success rates by 20-40% while eliminating redundant 25% contingency fees."
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
            <h2 className="text-4xl font-bold text-center mb-12">The Accelerate Advantage: Rigor + Ecosystem Intelligence</h2>
            <div className="space-y-8">
              {[
                {
                  number: "1.",
                  title: "Executive-search depth, startup speed.",
                  description: "Quality never yields to pace."
                },
                {
                  number: "2.",
                  title: "Operated by veterans.",
                  description: "Every assignment led by recruiters proven in complex, high-growth environments."
                },
                {
                  number: "3.",
                  title: "Powered by data.",
                  description: "Illuminate compensation and talent intel guide targeting and closing."
                },
                {
                  number: "4.",
                  title: "Assessment that sticks.",
                  description: "Elevate frameworks ensure hires thrive, not just start."
                },
                {
                  number: "5.",
                  title: "Integrated partnership.",
                  description: "Engagement knowledge feeds your long-term capability—not a black box."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-orange-600">{item.number} <strong>{item.title}</strong></h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverable Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Your Critical-Hire Execution Pack</h2>
            <p className="text-xl mb-8 text-gray-700">
              Built for transparency, accountability, and rapid ROI:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                "Scope & success-metric agreement",
                "Talent-market brief & sourcing map",
                "Weekly metrics dashboard (pipeline, velocity, quality)",
                "Offer & onboarding advisory",
                "Post-placement success check at 90 days"
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-lg font-semibold text-orange-600">• {item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Mission-Critical Talent Yesterday? Let's Accelerate.</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Schedule a 30-minute consultation and see how disciplined execution can close your toughest gaps—without sacrificing quality.
          </p>
          <div className="space-x-4">
            <Link 
              href="/contact" 
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-lg"
            >
              Request an Execution Consultation
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors inline-block text-lg"
            >
              Explore the Full Ecosystem
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}