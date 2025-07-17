import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | The Talent Foundation',
  description: 'We build internal talent capability where generic recruiting breaks—led by Adam Kovacs, ex-AWS leader who scaled hiring at extreme complexity.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Expertise Forged in Complexity. Enablement, Not Band-Aids.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Traditional recruiting collapses under hyper-growth, global expansion, or niche-skill scarcity. We design systems so it never happens again.
          </p>
          <div className="space-x-4">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Talk with Adam
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore the Ecosystem
            </Link>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Buying Hires Is Easy. Building Capability Is Advantage.</h2>
            <div className="space-y-6 mb-8">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-gray-700">• Endless agency fees <strong>rent outcomes</strong> and lock you into dependency.</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-gray-700">• Point-solution "fixes" treat symptoms, not root causes.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-gray-700">• Only an <strong>internal, data-driven talent engine</strong> delivers compounding ROI and lower long-term risk.</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold text-blue-600">Everything we do—<strong>Illuminate → Innovate → Elevate → Accelerate</strong>—reinforces that principle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Guiding Principles</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-6 text-left text-xl font-semibold">Principle</th>
                    <th className="p-6 text-left text-xl font-semibold">What It Means in Practice</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-6 font-semibold text-blue-600">Design Thinking</td>
                    <td className="p-6 text-gray-700">User-first diagnostics ensure we solve the <em>right</em> problems and drive rapid adoption.</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-6 font-semibold text-blue-600">First-Principles Rigor</td>
                    <td className="p-6 text-gray-700">We rebuild from bedrock logic, never copy-pasting "best practice" templates.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-6 font-semibold text-blue-600">Continuous Improvement</td>
                    <td className="p-6 text-gray-700">Data loops and small iterations compound efficiency and quality over time.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-6 font-semibold text-blue-600">Radical Transparency</td>
                    <td className="p-6 text-gray-700">Clear metrics, blunt feedback, and honest feasibility checks de-risk the partnership.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-center mt-8">
              <blockquote className="text-xl italic text-gray-700 bg-blue-50 p-6 rounded-lg">
                <p>"Real success is when clients outgrow the need for external recruiters—because we helped them build the engine."</p>
                <footer className="mt-4 font-semibold text-blue-600">— <strong>Adam Kovacs</strong></footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Adam Kovacs — Architect of High-Performance Talent Systems</h2>
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-600">• Scale Under Pressure:</h3>
                    <p className="text-gray-700">Led global TA at Amazon | AWS, delivering <strong>thousands</strong> of technical & leadership hires per year during hyper-growth.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-600">• Intel Pioneer:</h3>
                    <p className="text-gray-700">Founded AWS Talent Intelligence to break niche-skill scarcity with data-driven market insight.</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-600">• Capability Builder:</h3>
                    <p className="text-gray-700">Designed training adopted by <strong>1,300+</strong> TA pros worldwide—measurably lifting sourcing speed and assessment quality.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-600">• Industry Voice:</h3>
                    <p className="text-gray-700">International speaker who demystifies AI and data strategy for practical TA impact.</p>
                  </div>
                </div>
              </div>
              <div className="text-center mt-8">
                <p className="text-lg font-semibold text-gray-700">Adam stays hands-on with every engagement—no hand-off to junior teams.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Boutique Model Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Why Our Boutique Model Works Better</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  number: "1.",
                  title: "Narrow Focus, Deep Mastery",
                  description: "100% of our time is spent on complex enablement, not broad-market recruiting."
                },
                {
                  number: "2.",
                  title: "Direct Senior Expertise",
                  description: "You work with principals start-to-finish; zero leverage-model dilution."
                },
                {
                  number: "3.",
                  title: "Agility & Customisation",
                  description: "Lean structure means faster pivots and solutions tailored to your exact context."
                },
                {
                  number: "4.",
                  title: "Integrated Ecosystem",
                  description: "Strategy, process, skills, and execution connect seamlessly for outsized, lasting ROI."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">{item.number} <strong>{item.title}</strong></h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrity & Fit */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-yellow-50 p-8 rounded-lg border-l-4 border-yellow-500">
              <p className="text-xl text-gray-700 mb-4">
                We're the right partner when you need to <strong>build</strong> lasting capability—not just fill a req.
              </p>
              <p className="text-lg text-gray-700">
                If contingency search or temp staffing solves your issue faster, we'll recommend alternatives. <strong>Your outcome &gt; our revenue.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Turn Talent Into a Durable Competitive Edge?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Schedule a candid strategy conversation. If we're not the best fit, we'll say so—and point you to who is.
          </p>
          <div className="space-x-4">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Schedule a Strategy Call
            </Link>
          </div>
          <div className="mt-6 space-x-4">
            <Link href="/who-we-serve" className="text-white hover:text-gray-200 underline">
              See Who We Serve
            </Link>
            <span className="text-white">|</span>
            <Link href="/contact" className="text-white hover:text-gray-200 underline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}