import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Talent Enablement Services | The Talent Foundation',
  description: 'Solve complex hiring at scale. Discover Illuminate, Innovate, Elevate, and Accelerate, then book a no‑pitch Strategic Assessment.',
};

const services = [
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
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Predictable Talent Results, Even Under Extreme Scale and Complexity
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            A single critical gap can bleed tens of thousands in value each month and derail strategic timelines.
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-5xl mx-auto">
            Standard recruiting buckles when speed and needs spike. Our integrated <strong>Talent Enablement Ecosystem (IIEA)</strong> turns your Talent Acquisition into an engine that keeps every initiative on schedule.
          </p>
          <div className="space-x-4">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book a Strategic Assessment
            </Link>
            <Link 
              href="#ecosystem" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore the Enablement Ecosystem
            </Link>
          </div>
        </div>
      </section>

      {/* High-Stakes Challenge */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Fragmented Fixes Fail When Met With Complexity</h2>
            <p className="text-xl text-center mb-8 text-gray-700">The symptoms are painfully familiar:</p>
            <div className="space-y-6">
              {[
                {
                  title: "Strategic projects stall while niche roles sit vacant.",
                  detail: "Are hidden skill gaps dragging release and launch dates while gifting market share to faster rivals?"
                },
                {
                  title: "Chaotic hiring burns out teams and drives attrition.",
                  detail: "Are urgent re-prioritisations forcing recruiters and managers into burnout, driving attrition rates higher?"
                },
                {
                  title: "Costly tools, process improvements, and training under‑deliver.",
                  detail: "Expensive tech sits underutilized, team members don't use the learning from their last training, resulting in poor ROI compared to promised values?"
                },
                {
                  title: "Perpetual bottlenecks are holding you back.",
                  detail: "You fix sourcing, to discover that assessments are broken. Fix assessment and onboarding fails. The constraints shift, but the delays persist?"
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
                Scrapwork remedies can't solve systemic problems. Our holistic enablement system moves you beyond these frustrating cycles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Enablement Ecosystem */}
      <section id="ecosystem" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Our Talent Enablement Ecosystem: The Pillars for Building Durable Talent Acquisition Capability</h2>
            <p className="text-xl text-center mb-12 text-gray-700 max-w-4xl mx-auto">
              Our proven framework provides the structure to build a talent acquisition engine fit for your specific purpose. We recognize that not every situation requires the full ecosystem, so we designed each pillar to deliver essential value on its own.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {services.map((service) => (
                <Link 
                  key={service.name} 
                  href={service.href}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{service.name}</h3>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </Link>
              ))}
            </div>

            {/* Synergy Section */}
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-8 rounded-lg">
              <h3 className="text-3xl font-bold text-center mb-8 text-purple-800">The Multiplier Effect: Why Integration Creates Unmatched Value</h3>
              <p className="text-lg mb-6 text-gray-700">
                These aren't just four separate services. Our framework is powerful <em>because</em> its components are designed to work in synergy when cross-integrated, systematically amplifying results and creating a compounding strategic advantage that empowers your entire organization.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    connection: "Illuminate → Innovate",
                    description: "Illuminate's intelligence directly informs Innovate's design, ensuring processes, hiring, and tech choices match your specific market context and challenges, thus preventing costly generic missteps."
                  },
                  {
                    connection: "Innovate → Elevate", 
                    description: "Innovate's resilient architecture provides the essential operating system for Elevate's advanced skills training. Which translates into real, measurable productivity improvements and consistent execution, locking in training ROI."
                  },
                  {
                    connection: "Elevate → All",
                    description: "Elevate empowers your team not only with skills but also with the strategic context and the ability to master the Innovate system while proactively applying Illuminate insights, fostering true adaptability and self-sufficiency."
                  },
                  {
                    connection: "Accelerate + All",
                    description: "Accelerate performs with precision and speed because it operates within this enabled ecosystem, guided by Illuminate's intel, leveraging Innovate's optimized workflows, and adhering to Elevate's quality benchmarks."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-purple-600 mb-2">• {item.connection}</h4>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-lg font-semibold text-purple-800">
                  A deliberate integration like this transforms your People and Talent Acquisition functions from isolated silos into a powerful, predictable engine that propels your strategic business outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">The Compelling ROI of Integrated Enablement: Building Lasting Value and Capability Isn't an Expense, It's How You Scale</h2>
            <div className="bg-yellow-50 p-8 rounded-lg mb-8">
              <p className="text-xl text-gray-700 mb-4">
                When talent is treated as a plug-and-play commodity, you don't build capability. You rent it. And renting your ability to grow isn't just expensive, it's a limitation and a <strong>silent and constant drain on your resources</strong>.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-3 text-red-600">The Transactional Treadmill</h3>
                <p className="text-gray-700">Ineffective processes lead to endless cycles of repeated agency fees (+15-25%) for hard-to-fill roles, contractor premiums (often exceeding 50%), ongoing replacement costs due to poor hiring decisions, and lost productivity from churn.</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-3 text-red-600">The Cost of Failure</h3>
                <p className="text-gray-700">What's the <em>true</em> financial impact of a 6-month delay due to talent gaps? The <strong>opportunity cost</strong> is often <strong>in the millions</strong> in lost pipeline revenue. You could be losing key market share due to a lack of top-tier GTM talent driving MRR up.</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-3 text-red-600">The Strategic Risk Premium</h3>
                <p className="text-gray-700">Operating without a predictable talent engine forces you to carry a constant, unquantified risk premium, adding ambiguity to every major growth initiative. Surprise compliance fines, missed local labor laws, burnout-fueled attrition, the question becomes "when" and not "if."</p>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <p className="text-lg mb-6 text-gray-700">
                The Talent Foundation's integrated enablement model is <strong>grounded in direct experience fixing these breakdowns at scale</strong>, and alters these equations. You don't build value by spending less. You build it by investing once, investing smart, and letting that value compound. Our solutions are engineered for <strong>superior, demonstrable long-term ROI</strong> by:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-green-600 mb-2">Drastically Reducing Operational Waste & External Spend</h4>
                  <p className="text-gray-700 text-sm">Establishing efficient internal systems lowers costly agency reliance, decreases effective cost-per-hire, prevents rework from bad hiring decisions, and streamlines workflows, yielding direct, measurable cost savings.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-green-600 mb-2">Systematically De-Risking Strategic Execution</h4>
                  <p className="text-gray-700 text-sm">Creating a predictable and reliable talent delivery system removes a variable threatening your business goals and increases the probability of successful outcomes for initiatives like product launches, market expansions, or large-scale transformations.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-green-600 mb-2">Building a Tangible Strategic Asset</h4>
                  <p className="text-gray-700 text-sm">A high-performing internal Talent Acquisition function isn't an expense line or a cost center. Instead, it becomes a competitive advantage, enabling faster adaptation, better talent attraction, higher growth, and ultimately, higher enterprise and equity value.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Engage */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Your Path to Enabled Talent Acquisition: Flexible Partnership</h2>
            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-700">
                We recognize that complex challenges often demand immediate action alongside strategic initiatives. Our partnership model is designed for this reality, meeting you where your needs are most critical while always guiding you toward sustainable capability growth.
              </p>
              <p className="text-lg text-gray-700">
                Engagements start with a focused diagnostic to create a clear roadmap: perhaps an <strong>Illuminate</strong> deep-dive revealing market realities or an <strong>Innovate</strong> assessment pinpointing process bottlenecks. Based on your needs, we can deploy <strong>Accelerate</strong> for immediate, expert execution on urgent priorities. While <em>concurrently</em> implementing foundational <strong>Innovate</strong> process improvements and delivering targeted <strong>Elevate</strong> capability building in your teams to ensure lasting impact.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">The Guiding Principle Remains: Strategic Enablement.</h3>
              <p className="text-lg text-gray-700">
                Regardless of the starting point, our commitment extends beyond short-term fixes. Every interaction emphasizes <strong>transparent knowledge transfer</strong> and practical skill building. We measure our success by <strong>your team's increasing self-sufficiency</strong> and the creation of a robust internal talent engine that provides enduring <strong>strategic control.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Predictable, High-Performance Talent Engine?</h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Move beyond the limitations and risks of the obsolete, reactive firefighting approach to talent acquisition. Discover how The Talent Foundation's integrated enablement ecosystem can transform your hiring into a strategic advantage.
          </p>
          <div className="space-y-6">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-lg"
            >
              Schedule Discovery Call
            </Link>
            <div>
              <h3 className="text-xl font-semibold mb-4">Explore the Ecosystem Pillars:</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {services.map((service) => (
                  <Link 
                    key={service.name}
                    href={service.href}
                    className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}