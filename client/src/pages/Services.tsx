import { Link } from 'wouter';
import { Lightbulb, Settings, Zap, Play } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollAnimations from '@/components/ScrollAnimations';

export default function Services() {
  return (
    <ScrollAnimations>
      <div>
        {/* Hero */}
        <section id="hero" className="bg-gradient-to-br from-tf-blue-light to-white py-xxxl geometric-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-md">
              Predictable Talent Results, Even Under <span className="text-tf-orange">Extreme Scale and Complexity</span>
            </h1>
            <p className="text-lg text-text-medium mb-lg">
              A single critical gap can bleed tens of thousands in value each month and derail strategic timelines.
            </p>
            <p className="text-lg text-text-dark mb-xxl">
              Standard recruiting buckles when speed and needs spike. Our integrated <span className="font-semibold text-tf-orange">Talent Enablement Ecosystem (IIEA)</span> turns your Talent Acquisition into an engine that keeps every initiative on schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-md justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Book a Strategic Assessment
              </Link>
              <Link href="/" className="btn-secondary text-lg px-8 py-4">
                Explore the Enablement Ecosystem
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="bg-bg-subtle py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-xxl">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">Fragmented Fixes Fail When Met With Complexity</h2>
              <p className="text-lg text-text-medium">The symptoms are painfully familiar:</p>
            </div>
            <Accordion type="single" collapsible className="space-y-md">
              <AccordionItem value="stall" className="bg-white rounded-lg px-lg shadow-sm">
                <AccordionTrigger className="hover:no-underline">
                  <h3 className="font-semibold text-text-dark text-left">Strategic projects stall while niche roles sit vacant.</h3>
                </AccordionTrigger>
                <AccordionContent className="text-text-medium">
                  Are hidden skill gaps dragging release and launch dates while gifting market share to faster rivals?
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="burnout" className="bg-white rounded-lg px-lg shadow-sm">
                <AccordionTrigger className="hover:no-underline">
                  <h3 className="font-semibold text-text-dark text-left">Chaotic hiring burns out teams and drives attrition.</h3>
                </AccordionTrigger>
                <AccordionContent className="text-text-medium">
                  Are urgent re-prioritisations forcing recruiters and managers into burnout, driving attrition rates higher?
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="underdeliver" className="bg-white rounded-lg px-lg shadow-sm">
                <AccordionTrigger className="hover:no-underline">
                  <h3 className="font-semibold text-text-dark text-left">Costly tools, process improvements, and training under‑deliver.</h3>
                </AccordionTrigger>
                <AccordionContent className="text-text-medium">
                  Expensive tech sits underutilized, team members don't use the learning from their last training, resulting in poor ROI compared to promised values?
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="bottlenecks" className="bg-white rounded-lg px-lg shadow-sm">
                <AccordionTrigger className="hover:no-underline">
                  <h3 className="font-semibold text-text-dark text-left">Perpetual bottlenecks are holding you back.</h3>
                </AccordionTrigger>
                <AccordionContent className="text-text-medium">
                  You fix sourcing, to discover that assessments are broken. Fix assessment and onboarding fails. The constraints shift, but the delays persist?
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="text-center mt-xxl">
              <p className="text-lg font-semibold text-text-dark">
                Scrapwork remedies can't solve systemic problems. Our holistic enablement system moves you beyond these frustrating cycles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IIEA Ecosystem */}
      <section className="bg-white py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-xxl">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">Our Talent Enablement Ecosystem</h2>
            <p className="text-lg text-text-medium mb-lg max-w-4xl mx-auto">
              The Pillars for Building Durable Talent Acquisition Capability
            </p>
            <p className="text-lg text-text-dark max-w-4xl mx-auto">
              Our proven framework provides the structure to build a talent acquisition engine fit for your specific purpose. We recognize that not every situation requires the full ecosystem, so we designed each pillar to deliver essential value on its own.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xxl mb-xxxl">
            <Link href="/services/illuminate" className="service-card illuminate-card group relative overflow-hidden p-xxl rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="service-card-bg"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-lg group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-8 h-8 text-white group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-md group-hover:text-blue-700 transition-colors">
                  Illuminate: Predictive Market & Talent Intelligence
                </h3>
                <p className="text-text-medium mb-md">
                  Anticipate shifts, validate strategy, and make data-backed decisions with confidence. We deliver deep market, competitor, and talent insights, analyzed for strategic foresight.
                </p>
                <span className="text-blue-600 font-semibold group-hover:translate-x-2 inline-block transition-transform">Learn more →</span>
              </div>
            </Link>
            <Link href="/services/innovate" className="service-card innovate-card group relative overflow-hidden p-xxl rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="service-card-bg"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-md group-hover:text-orange-700 transition-colors">
                  Innovate: Scalable System & Process Design
                </h3>
                <p className="text-text-medium mb-md">
                  Applying first principles and design thinking, we architect data-driven, adaptable TA processes and optimize your technology stack to efficiently handle your unique scale, speed, complexity, and compliance needs.
                </p>
                <span className="text-orange-600 font-semibold group-hover:translate-x-2 inline-block transition-transform">Learn more →</span>
              </div>
            </Link>
            <Link href="/services/elevate" className="service-card elevate-card group relative overflow-hidden p-xxl rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="service-card-bg"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mb-lg group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white group-hover:animate-bounce" />
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-md group-hover:text-purple-700 transition-colors">
                  Elevate: Next-Gen Capability & AI Enablement
                </h3>
                <p className="text-text-medium mb-md">
                  Expert practitioner-led upskilling programs customized to your needs. We use real-world examples to empower your recruiters and hiring managers with tactical AI literacy and advanced recruitment expertise.
                </p>
                <span className="text-purple-600 font-semibold group-hover:translate-x-2 inline-block transition-transform">Learn more →</span>
              </div>
            </Link>
            <Link href="/services/accelerate" className="service-card accelerate-card group relative overflow-hidden p-xxl rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="service-card-bg"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mb-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-md group-hover:text-red-700 transition-colors">
                  Accelerate: Strategically Applied Execution Power
                </h3>
                <p className="text-text-medium mb-md">
                  On‑demand recruiting muscle and resource elasticity for time‑critical hires. We deploy seasoned TA professionals applying executive search rigor against all critical and urgent hiring needs, securing the candidates you need.
                </p>
                <span className="text-red-600 font-semibold group-hover:translate-x-2 inline-block transition-transform">Learn more →</span>
              </div>
            </Link>
          </div>

          {/* Synergy Section */}
          <div className="bg-gradient-to-r from-tf-orange/10 to-tf-blue/10 p-xxl rounded-lg mb-xxxl">
            <div className="text-center mb-lg">
              <h3 className="text-2xl font-bold text-text-dark mb-md">The Multiplier Effect: Why Integration Creates Unmatched Value</h3>
              <p className="text-lg text-text-medium">
                These aren't just four separate services. Our framework is powerful <em>because</em> its components are designed to work in synergy when cross-integrated, systematically amplifying results and creating a compounding strategic advantage that empowers your entire organization.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              <div className="bg-white p-lg rounded-lg">
                <p className="text-text-medium"><span className="font-semibold text-tf-blue">Illuminate's</span> intelligence directly <span className="font-semibold text-tf-blue">informs Innovate's design</span>, ensuring processes, hiring, and tech choices match <em>your</em> specific market context and challenges, thus <span className="font-semibold text-text-dark">preventing costly generic missteps</span>.</p>
              </div>
              <div className="bg-white p-lg rounded-lg">
                <p className="text-text-medium"><span className="font-semibold text-tf-blue">Innovate's</span> resilient architecture provides the <span className="font-semibold text-tf-blue">essential operating system</span> for Elevate's advanced skills training. Which translates into <span className="font-semibold text-text-dark">real, measurable productivity improvements and consistent execution</span>, locking in training ROI.</p>
              </div>
              <div className="bg-white p-lg rounded-lg">
                <p className="text-text-medium"><span className="font-semibold text-tf-blue">Elevate</span> empowers your team not only with skills but also with the <span className="font-semibold text-tf-blue">strategic context</span> and the ability to master the <span className="font-semibold text-tf-blue">Innovate</span> system while proactively applying <span className="font-semibold text-tf-blue">Illuminate</span> insights, fostering <span className="font-semibold text-text-dark">true adaptability and self-sufficiency</span>.</p>
              </div>
              <div className="bg-white p-lg rounded-lg">
                <p className="text-text-medium"><span className="font-semibold text-tf-blue">Accelerate</span> performs with precision and speed <em>because</em> it operates within this enabled ecosystem, guided by <span className="font-semibold text-tf-blue">Illuminate's</span> intel, leveraging <span className="font-semibold text-tf-blue">Innovate's</span> optimized workflows, and adhering to <span className="font-semibold text-tf-blue">Elevate's</span> quality benchmarks.</p>
              </div>
            </div>
            <div className="text-center mt-lg">
              <p className="text-lg font-semibold text-text-dark">
                A deliberate integration like this transforms your People and Talent Acquisition functions from isolated silos into a powerful, predictable engine that propels your strategic business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="bg-bg-subtle py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-xxl">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">The Compelling ROI of Integrated Enablement</h2>
              <p className="text-lg text-text-medium mb-lg">
                Building Lasting Value and Capability Isn't an Expense, It's How You Scale
              </p>
              <p className="text-lg text-text-dark">
                When talent is treated as a plug-and-play commodity, you don't build capability. You rent it. And renting your ability to grow isn't just expensive, it's a limitation and a <span className="font-semibold text-tf-orange">silent and constant drain on your resources</span>.
              </p>
            </div>
            <Accordion type="single" collapsible className="mb-xxl">
              <AccordionItem value="treadmill" className="bg-white rounded-lg px-lg shadow-sm mb-md">
                <AccordionTrigger className="hover:no-underline">
                  <h3 className="font-semibold text-text-dark text-left">The Transactional Treadmill</h3>
                </AccordionTrigger>
                <AccordionContent className="text-text-medium">
                  Ineffective processes lead to endless cycles of repeated agency fees (+15-25%) for hard-to-fill roles, contractor premiums (often exceeding 50%), ongoing replacement costs due to poor hiring decisions, and lost productivity from churn.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="failure" className="bg-white rounded-lg px-lg shadow-sm mb-md">
                <AccordionTrigger className="hover:no-underline">
                  <h3 className="font-semibold text-text-dark text-left">The Cost of Failure</h3>
                </AccordionTrigger>
                <AccordionContent className="text-text-medium">
                  What's the <em>true</em> financial impact of a 6-month delay due to talent gaps? The <span className="font-semibold text-tf-orange">opportunity cost</span> is often <span className="font-semibold text-tf-orange">in the millions</span> in lost pipeline revenue. You could be losing key market share due to a lack of top-tier GTM talent driving MRR up.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="risk-premium" className="bg-white rounded-lg px-lg shadow-sm mb-md">
                <AccordionTrigger className="hover:no-underline">
                  <h3 className="font-semibold text-text-dark text-left">The Strategic Risk Premium</h3>
                </AccordionTrigger>
                <AccordionContent className="text-text-medium">
                  Operating without a predictable talent engine forces you to carry a constant, unquantified risk premium, adding ambiguity to every major growth initiative. Surprise compliance fines, missed local labor laws, burnout-fueled attrition, the question becomes "when" and not "if."
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="bg-tf-blue-light p-xxl rounded-lg">
              <div className="text-center mb-lg">
                <h3 className="text-xl font-bold text-text-dark mb-md">Our Solutions Are Engineered for Superior, Demonstrable Long-Term ROI</h3>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="waste" className="mb-sm">
                  <AccordionTrigger className="hover:no-underline text-left">
                    <h4 className="font-semibold text-text-dark">Drastically Reducing Operational Waste & External Spend</h4>
                  </AccordionTrigger>
                  <AccordionContent className="text-text-medium">
                    Establishing efficient internal systems lowers costly agency reliance, decreases effective cost-per-hire, prevents rework from bad hiring decisions, and streamlines workflows, yielding direct, measurable cost savings.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="derisk" className="mb-sm">
                  <AccordionTrigger className="hover:no-underline text-left">
                    <h4 className="font-semibold text-text-dark">Systematically De-Risking Strategic Execution</h4>
                  </AccordionTrigger>
                  <AccordionContent className="text-text-medium">
                    Creating a predictable and reliable talent delivery system removes a variable threatening your business goals and increases the probability of successful outcomes for initiatives like product launches, market expansions, or large-scale transformations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="asset" className="mb-sm">
                  <AccordionTrigger className="hover:no-underline text-left">
                    <h4 className="font-semibold text-text-dark">Building a Tangible Strategic Asset</h4>
                  </AccordionTrigger>
                  <AccordionContent className="text-text-medium">
                    A high-performing internal Talent Acquisition function isn't an expense line or a cost center. Instead, it becomes a competitive advantage, enabling faster adaptation, better talent attraction, higher growth, and ultimately, higher enterprise and equity value.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* How We Engage */}
      <section className="bg-white py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-xxl">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">Your Path to Enabled Talent Acquisition</h2>
              <p className="text-lg text-text-medium mb-lg">Flexible Partnership</p>
              <p className="text-lg text-text-dark">
                We recognize that complex challenges often demand immediate action alongside strategic initiatives. Our partnership model is designed for this reality, meeting you where your needs are most critical while always guiding you toward sustainable capability growth.
              </p>
            </div>
            <div className="bg-bg-subtle p-xxl rounded-lg mb-xxl">
              <p className="text-text-dark mb-lg">
                Engagements start with a focused diagnostic to create a clear roadmap: perhaps an <span className="font-semibold text-tf-blue">Illuminate</span> deep-dive revealing market realities or an <span className="font-semibold text-tf-blue">Innovate</span> assessment pinpointing process bottlenecks. Based on your needs, we can deploy <span className="font-semibold text-tf-blue">Accelerate</span> for immediate, expert execution on urgent priorities. While <em>concurrently</em> implementing foundational <span className="font-semibold text-tf-blue">Innovate</span> process improvements and delivering targeted <span className="font-semibold text-tf-blue">Elevate</span> capability building in your teams to ensure lasting impact.
              </p>
              <p className="text-text-dark font-semibold">
                <span className="text-tf-orange">The Guiding Principle Remains: Strategic Enablement.</span> Regardless of the starting point, our commitment extends beyond short-term fixes. Every interaction emphasizes <span className="font-semibold text-tf-blue">transparent knowledge transfer</span> and practical skill building. We measure our success by <span className="font-semibold text-tf-blue">your team's increasing self-sufficiency</span> and the creation of a robust internal talent engine that provides enduring <span className="font-semibold text-tf-blue">strategic control</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-dark py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-md">
              Ready to Build Your Predictable, High-Performance Talent Engine?
            </h2>
            <p className="text-lg text-tf-blue-lighter mb-xxl">
              Move beyond the limitations and risks of the obsolete, reactive firefighting approach to talent acquisition. Discover how The Talent Foundation's integrated enablement ecosystem can transform your talent function into a strategic advantage.
            </p>
            <div className="mb-xxl">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-block mb-lg">
                Schedule Discovery Call
              </Link>
            </div>
            <div className="border-t border-gray-700 pt-lg">
              <p className="text-white font-semibold mb-md">Explore the Ecosystem Pillars:</p>
              <div className="flex flex-wrap justify-center gap-lg">
                <span className="text-tf-blue-lighter hover:text-tf-orange transition-colors border-b border-tf-blue-lighter pb-1 cursor-pointer">
                  Illuminate
                </span>
                <span className="text-tf-blue-lighter hover:text-tf-orange transition-colors border-b border-tf-blue-lighter pb-1 cursor-pointer">
                  Innovate
                </span>
                <span className="text-tf-blue-lighter hover:text-tf-orange transition-colors border-b border-tf-blue-lighter pb-1 cursor-pointer">
                  Elevate
                </span>
                <span className="text-tf-blue-lighter hover:text-tf-orange transition-colors border-b border-tf-blue-lighter pb-1 cursor-pointer">
                  Accelerate
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </ScrollAnimations>
  );
}
