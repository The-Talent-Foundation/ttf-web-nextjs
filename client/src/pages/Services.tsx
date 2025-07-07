import { Link } from 'wouter';
import { Lightbulb, Settings, Zap, Play, Timer, AlertCircle, Target, TrendingDown, Shield, Building2, ArrowLeftRight, DollarSign, AlertTriangle, MapPin, Users, CheckCircle } from 'lucide-react';
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
              <a href="https://cal.com/adamkovacs/the-talent-foundation" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
                Explore Your Enablement Needs
              </a>
              <Link href="/" className="btn-secondary text-lg px-8 py-4">
                Explore the Enablement Ecosystem
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section id="overview" className="bg-bg-subtle py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-xxl">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">Fragmented Fixes Fail When Met With Complexity</h2>
              <p className="text-lg text-text-medium">The symptoms are painfully familiar:</p>
            </div>
            <Accordion type="single" collapsible className="space-y-md">
              <AccordionItem value="stall" className="bg-white rounded-lg px-lg shadow-sm border border-border-light card-hover">
                <AccordionTrigger className="hover:no-underline py-lg">
                  <div className="flex items-start gap-lg text-left">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Timer className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-text-dark text-lg">Strategic projects stall while niche roles sit vacant.</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-20 pr-lg pb-md pt-xs text-text-medium text-base leading-relaxed">
                  Are <span className="font-semibold text-text-dark">hidden skill gaps</span> dragging release and launch dates while <span className="font-semibold text-text-dark">gifting market share to faster rivals</span>?
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="burnout" className="bg-white rounded-lg px-lg shadow-sm border border-border-light card-hover">
                <AccordionTrigger className="hover:no-underline py-lg">
                  <div className="flex items-start gap-lg text-left">
                    <div className="w-12 h-12 bg-gradient-to-br from-tf-blue to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-text-dark text-lg">Chaotic hiring burns out teams and drives attrition.</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-20 pr-lg pb-md pt-xs text-text-medium text-base leading-relaxed">
                  Are <span className="font-semibold text-text-dark">urgent re-prioritizations</span> forcing recruiters and managers into burnout, <span className="font-semibold text-text-dark">driving attrition rates higher</span>?
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="underdeliver" className="bg-white rounded-lg px-lg shadow-sm border border-border-light card-hover">
                <AccordionTrigger className="hover:no-underline py-lg">
                  <div className="flex items-start gap-lg text-left">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Settings className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-text-dark text-lg">Costly tools, process improvements, and training under-deliver.</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-20 pr-lg pb-md pt-xs text-text-medium text-base leading-relaxed">
                  Expensive tech sits <span className="font-semibold text-text-dark">underutilized</span>, team members don't use the learning from their last training, resulting in <span className="font-semibold text-text-dark">poor ROI compared to promised values</span>?
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="bottlenecks" className="bg-white rounded-lg px-lg shadow-sm border border-border-light card-hover">
                <AccordionTrigger className="hover:no-underline py-lg">
                  <div className="flex items-start gap-lg text-left">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-text-dark text-lg">Perpetual bottlenecks are holding you back.</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-20 pr-lg pb-md pt-xs text-text-medium text-base leading-relaxed">
                  You fix sourcing, to discover that assessments are broken. <span className="font-semibold text-text-dark">Fix assessment and onboarding fails</span>. The constraints shift, but <span className="font-semibold text-text-dark">the delays persist</span>?
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
      <section id="services-grid" className="bg-white py-xxl pt-[0px] pb-[0px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-xxl">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md pt-[9px] pb-[9px]">Our Talent Enablement Ecosystem</h2>
            <p className="text-lg text-text-medium mb-lg max-w-4xl mx-auto">
              The Pillars for Building Durable Talent Acquisition Capability
            </p>
            <p className="text-lg text-text-dark max-w-4xl mx-auto">
              Our proven framework provides the structure to build a talent acquisition engine fit for your specific purpose. We recognize that not every situation requires the full ecosystem, so we designed each pillar to deliver essential value on its own.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xxl mb-xxxl">
            <Link href="/services/illuminate" className="service-card group relative overflow-hidden p-xxl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-lg mb-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-8 h-8 text-white group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-blue-700 transition-colors">
                    Illuminate
                  </h3>
                </div>
                <h4 className="text-lg font-semibold text-text-dark mb-md">
                  Predictive Market & Talent Intelligence
                </h4>
                <p className="text-text-medium mb-md">
                  Anticipate shifts, validate strategy, and make data-backed decisions with confidence. We deliver deep market, competitor, and talent insights, analyzed for strategic foresight.
                </p>
                <span className="text-blue-600 font-semibold group-hover:translate-x-2 inline-block transition-transform">Learn more →</span>
              </div>
            </Link>
            <Link href="/services/innovate" className="service-card group relative overflow-hidden p-xxl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-50 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-lg mb-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-8 h-8 text-white group-hover:animate-spin group-hover:[animation-duration:3s]" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-orange-700 transition-colors">
                    Innovate
                  </h3>
                </div>
                <h4 className="text-lg font-semibold text-text-dark mb-md">
                  Scalable System & Process Design
                </h4>
                <p className="text-text-medium mb-md">
                  Applying first principles and design thinking, we architect data-driven, adaptable TA processes and optimize your technology stack to efficiently handle your unique scale, speed, complexity, and compliance needs.
                </p>
                <span className="text-orange-600 font-semibold group-hover:translate-x-2 inline-block transition-transform">Learn more →</span>
              </div>
            </Link>
            <Link href="/services/elevate" className="service-card group relative overflow-hidden p-xxl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 opacity-50 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-lg mb-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-purple-700 transition-colors">
                    Elevate
                  </h3>
                </div>
                <h4 className="text-lg font-semibold text-text-dark mb-md">
                  Next-Gen Capability & AI Enablement
                </h4>
                <p className="text-text-medium mb-md">
                  Expert practitioner led upskilling programs customized to your needs. We use real world examples to empower your recruiters and hiring managers with tactical AI literacy and advanced recruitment expertise.
                </p>
                <span className="text-purple-600 font-semibold group-hover:translate-x-2 inline-block transition-transform">Learn more →</span>
              </div>
            </Link>
            <Link href="/services/accelerate" className="service-card group relative overflow-hidden p-xxl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-50 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-lg mb-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white group-hover:scale-75 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-green-700 transition-colors">
                    Accelerate
                  </h3>
                </div>
                <h4 className="text-lg font-semibold text-text-dark mb-md">
                  Strategically Applied Execution Power
                </h4>
                <p className="text-text-medium mb-md">
                  On demand recruiting muscle and resource elasticity for time critical hires. We deploy seasoned TA professionals applying executive search rigor against all critical and urgent hiring needs, securing the candidates you need.
                </p>
                <span className="text-green-600 font-semibold group-hover:translate-x-2 inline-block transition-transform">Learn more →</span>
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
              <div className="bg-white p-lg rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-md mb-md">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="text-text-medium">Intelligence directly <span className="font-semibold text-text-dark">informs design</span>, ensuring processes, hiring, and tech choices match <em>your</em> specific market context and challenges, thus <span className="font-semibold text-text-dark">preventing costly generic missteps</span>.</p>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-md mb-md">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="text-text-medium">Resilient architecture provides the <span className="font-semibold text-text-dark">essential operating system</span> for advanced skills training. Which translates into <span className="font-semibold text-text-dark">real, measurable productivity improvements and consistent execution</span>, locking in training ROI.</p>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-md mb-md">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="text-text-medium">Empower your team not only with skills but also with the <span className="font-semibold text-text-dark">strategic context</span> and the ability to master the systems while proactively applying insights, fostering <span className="font-semibold text-text-dark">true adaptability and self-sufficiency</span>.</p>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-md mb-md">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="text-text-medium">Perform with <span className="font-semibold text-text-dark">precision and speed</span> <em>because</em> you operate within this enabled ecosystem, guided by intel, <span className="font-semibold text-text-dark">leveraging optimized workflows</span>, and adhering to quality benchmarks.</p>
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
      <section id="roi" className="bg-bg-subtle py-xxxl">
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg mb-xxl">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group h-full flex flex-col">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-gray-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <ArrowLeftRight className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-text-dark text-xl group-hover:text-slate-700 transition-colors min-h-[3.5rem] flex items-center justify-center">The Transactional Treadmill</h3>
                </div>
                <div className="flex-1 px-2">
                  <p className="text-text-medium leading-relaxed text-left">Ineffective processes lead to endless cycles of <span className="font-semibold text-text-dark">repeated agency fees (+15-25%)</span> for hard-to-fill roles, contractor premiums (often exceeding 50%), ongoing replacement costs due to poor hiring decisions, and <span className="font-semibold text-text-dark">lost productivity from churn</span>.</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group h-full flex flex-col">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-text-dark text-xl group-hover:text-amber-700 transition-colors min-h-[3.5rem] flex items-center justify-center">The Cost of Failure</h3>
                </div>
                <div className="flex-1 px-2">
                  <p className="text-text-medium leading-relaxed text-left">What's the <em>true</em> financial impact of a 6-month delay due to talent gaps? The <span className="font-semibold text-text-dark">opportunity cost</span> is often <span className="font-semibold text-text-dark">in the millions</span> in lost pipeline revenue. You could be losing <span className="font-semibold text-text-dark">key market share</span> due to a lack of top-tier GTM talent driving MRR up.</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group h-full flex flex-col">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-text-dark text-xl group-hover:text-rose-700 transition-colors min-h-[3.5rem] flex items-center justify-center">The Strategic Risk Premium</h3>
                </div>
                <div className="flex-1 px-2">
                  <p className="text-text-medium leading-relaxed text-left">Operating without a predictable talent engine forces you to carry a <span className="font-semibold text-text-dark">constant, unquantified risk premium</span>. Surprise compliance fines, missed local labor laws, <span className="font-semibold text-text-dark">burnout-fueled attrition</span>, the question becomes "when" and not "if."</p>
                </div>
              </div>
            </div>
            <div className="text-center mb-xxl">
              <h3 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">Our Solutions Are Engineered for Superior, Demonstrable Long-Term ROI</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xxl">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-green-100">
                <div className="flex items-center gap-md mb-md">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <TrendingDown className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-text-dark font-semibold text-base group-hover:text-green-700 transition-colors leading-tight">Drastically Reducing Operational Waste & External Spend</h4>
                </div>
                <p className="text-text-medium text-sm leading-relaxed">Establishing efficient internal systems lowers costly agency reliance, decreases effective cost-per-hire, prevents rework from bad hiring decisions, and streamlines workflows, yielding direct, measurable cost savings.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-blue-100">
                <div className="flex items-center gap-md mb-md">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-text-dark font-semibold text-base group-hover:text-blue-700 transition-colors leading-tight">Systematically De-Risking Strategic Execution</h4>
                </div>
                <p className="text-text-medium text-sm leading-relaxed">Creating a predictable and reliable talent delivery system removes a variable threatening your business goals and increases the probability of successful outcomes for initiatives like product launches, market expansions, or large-scale transformations.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-purple-100">
                <div className="flex items-center gap-md mb-md">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-text-dark font-semibold text-base group-hover:text-purple-700 transition-colors leading-tight">Building a Tangible Strategic Asset</h4>
                </div>
                <p className="text-text-medium text-sm leading-relaxed">A high-performing internal Talent Acquisition function isn't an expense line or a cost center. Instead, it becomes a competitive advantage, enabling faster adaptation, better talent attraction, higher growth, and ultimately, higher enterprise and equity value.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Engage */}
      <section id="commitment" className="bg-white py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-xxl">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">Your Path to Enabled Talent Acquisition</h2>
            <p className="text-xl text-text-medium mb-md">Flexible Partnership</p>
            <p className="text-lg text-text-dark leading-relaxed">
              We recognize that complex challenges often demand immediate action alongside strategic initiatives. Our partnership model is designed for this reality, meeting you where your needs are most critical while always guiding you toward sustainable capability growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl mb-xxl">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-tf-blue to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-text-dark group-hover:text-tf-blue transition-colors">Flexible Partnership Approach</h3>
              </div>
              <div className="space-y-4">
                <p className="text-text-medium leading-relaxed">
                  Engagements start with a focused diagnostic to create a clear roadmap: perhaps an <span className="font-semibold text-tf-blue">Illuminate</span> deep-dive revealing market realities or an <span className="font-semibold text-tf-orange">Innovate</span> assessment pinpointing process bottlenecks.
                </p>
                <p className="text-text-medium leading-relaxed">
                  Based on your needs, we can deploy <span className="font-semibold text-green-600">Accelerate</span> for immediate, expert execution on urgent priorities. While <em>concurrently</em> implementing foundational <span className="font-semibold text-tf-orange">Innovate</span> process improvements and delivering targeted <span className="font-semibold text-purple-600">Elevate</span> capability building in your teams to ensure lasting impact.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-tf-orange to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-text-dark group-hover:text-tf-orange transition-colors">The Guiding Principle: Strategic Enablement</h3>
              </div>
              <div className="space-y-4">
                <p className="text-text-medium leading-relaxed">
                  Regardless of the starting point, our commitment extends beyond short-term fixes. Every interaction emphasizes <span className="font-semibold text-text-dark">transparent knowledge transfer</span> and practical skill building.
                </p>
                <p className="text-text-medium leading-relaxed">
                  We measure our success by <span className="font-semibold text-text-dark">your team's increasing self-sufficiency</span> and the creation of a robust internal talent engine that provides enduring <span className="font-semibold text-text-dark">strategic control</span>.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-tf-blue/5 to-tf-orange/5 p-8 rounded-xl border border-tf-blue/20">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-text-dark mb-2">Our Commitment</h4>
                <p className="text-text-medium leading-relaxed">
                  Every engagement is designed to build your internal capabilities while delivering immediate value. We don't just solve problems, we transfer the knowledge and systems that prevent them from recurring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="quick-links" className="bg-bg-dark py-xxxl">
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
            <div className="border-t border-gray-700 pt-lg mt-lg">
              <p className="text-white font-semibold mb-lg">Explore the Ecosystem Pillars:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
                <Link href="/services/illuminate" className="group flex items-center gap-md p-md rounded-lg hover:bg-gray-800 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-tf-blue-lighter group-hover:text-tf-orange transition-colors">Illuminate</span>
                </Link>
                <Link href="/services/innovate" className="group flex items-center gap-md p-md rounded-lg hover:bg-gray-800 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-tf-blue-lighter group-hover:text-tf-orange transition-colors">Innovate</span>
                </Link>
                <Link href="/services/elevate" className="group flex items-center gap-md p-md rounded-lg hover:bg-gray-800 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-tf-blue-lighter group-hover:text-tf-orange transition-colors">Elevate</span>
                </Link>
                <Link href="/services/accelerate" className="group flex items-center gap-md p-md rounded-lg hover:bg-gray-800 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-tf-blue-lighter group-hover:text-tf-orange transition-colors">Accelerate</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </ScrollAnimations>
  );
}
