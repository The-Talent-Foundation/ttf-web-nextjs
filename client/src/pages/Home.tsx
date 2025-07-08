import { Link } from 'wouter';
import { 
  TrendingDown, 
  Users, 
  DollarSign, 
  Infinity,
  Lightbulb,
  Settings,
  Zap,
  Play,
  AlertTriangle,
  Target,
  CheckCircle2,
  Brain,
  Rocket,
  LineChart,
  Award,
  TrendingUp,
  BarChart3,
  Building
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollAnimations from '@/components/ScrollAnimations';

// Import logo images
import logo1 from '@assets/egyes-fotor-202407301827_1751590492554.png'; // Amazon
import logo2 from '@assets/harmas-fotor-2024073018422_1751590492559.png'; // Hinge Health
import logo3 from '@assets/Fleetio_ideAFrNyyy_0_1751599619994.png'; // Fleetio
import logo4 from '@assets/kettes-fotor-202407301834_1751590492559.png'; // AWS
import logo5 from '@assets/360_social (1)_1751601458500.png'; // 360 Social Impact Studios
import logo6 from '@assets/negyes-fotor-20240730175643_1751590492559.png'; // Lyft
import logo7 from '@assets/otos_1751590492559.png'; // DevMatch

export default function Home() {
  const logos = [
    { src: logo1, alt: "Amazon", name: "Amazon" },
    { src: logo2, alt: "Hinge Health", name: "Hinge Health" },
    { src: logo3, alt: "Fleetio", name: "Fleetio" },
    { src: logo4, alt: "AWS", name: "AWS" },
    { src: logo5, alt: "360 Social Impact Studios", name: "360 Social Impact Studios" },
    { src: logo6, alt: "Lyft", name: "Lyft" },
    { src: logo7, alt: "DevMatch", name: "DevMatch" },
  ];

  return (
    <ScrollAnimations>
      <div>
        {/* Hero Section */}
        <section id="hero" className="bg-gradient-to-br from-tf-blue-light to-white py-xxxl geometric-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-sm leading-tight">
              Is Your Talent Strategy <span className="text-tf-orange">Fueling Growth</span> or Slowing It Down?
            </h1>
            <p className="text-lg md:text-xl text-text-medium mb-xl max-w-3xl mx-auto leading-relaxed mt-[15px] mb-[15px]">
              A single gap in critical skills or hard to hire talent can stall product launches, slow workforce expansion, and bleed tens of thousands in value each month.
            </p>
            <div className="bg-white p-lg rounded-lg shadow-lg mb-xl">
              <p className="text-lg font-semibold text-text-dark mb-md mt-[4px] mb-[4px]">
                <span className="text-tf-orange font-bold">The Talent Foundation</span> partners with ambitious leaders to design and build the predictable, resilient, and reliable strategic talent capability needed to achieve your critical business objectives.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-md justify-center">
              <a href="https://cal.com/adamkovacs/the-talent-foundation" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
                Diagnose Your Talent Risks
              </a>
              <Link href="/services#services-grid" className="btn-secondary text-lg px-8 py-4">
                Explore the Enablement Ecosystem
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white py-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-text-medium mb-lg">Some of the companies Adam Kovacs provided his expertise to</h2>
            <div className="max-w-full mx-auto overflow-hidden">
              <div className="flex animate-scroll items-center">
                {/* First set of logos */}
                {logos.map((logo, index) => (
                  <div key={`first-${index}`} className="flex-shrink-0 w-40 px-6 py-2">
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="h-12 w-auto mx-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" 
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {logos.map((logo, index) => (
                  <div key={`second-${index}`} className="flex-shrink-0 w-40 px-6 py-2">
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="h-12 w-auto mx-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="bg-bg-subtle py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto reveal-on-scroll">
            <div className="text-center mb-xxl">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">The Cost of Standing Still</h2>
              <p className="text-lg text-text-medium">
                <span className="font-semibold text-text-dark">Conventional talent acquisition breaks down when pressure rises.</span> Does any of this hit home?
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-md">
              <AccordionItem value="niche-skills" className="bg-white rounded-lg px-lg shadow-sm border border-border-light card-hover">
                <AccordionTrigger className="hover:no-underline py-lg">
                  <div className="flex items-start gap-lg text-left">
                    <div className="w-12 h-12 bg-gradient-to-br from-tf-orange to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingDown className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-text-dark text-lg">Niche-skill gaps stall product launches.</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-20 pr-lg pb-md pt-xs text-text-medium text-base leading-relaxed">
                  Are <span className="font-semibold text-text-dark">elusive technical or specialized skills</span> delaying crucial product development or market expansion, <span className="font-semibold text-text-dark">costing you market advantage</span>?
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="unpredictable" className="bg-white rounded-lg px-lg shadow-sm border border-border-light card-hover">
                <AccordionTrigger className="hover:no-underline py-lg">
                  <div className="flex items-start gap-lg text-left">
                    <div className="w-12 h-12 bg-gradient-to-br from-tf-blue to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Infinity className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-text-dark text-lg">Unpredictable hiring wrecks delivery timelines.</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-20 pr-lg pb-md pt-xs text-text-medium text-base leading-relaxed">
                  Is <span className="font-semibold text-text-dark">chaotic and unpredictable hiring</span> velocity and inconsistent quality jeopardizing delivery timelines or crucial goals, silently erasing your planned ROI?
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="blind" className="bg-white rounded-lg px-lg shadow-sm border border-border-light card-hover">
                <AccordionTrigger className="hover:no-underline py-lg">
                  <div className="flex items-start gap-lg text-left">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-text-dark text-lg">Running blind without talent market intelligence.</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-20 pr-lg pb-md pt-xs text-text-medium text-base leading-relaxed">
                  Is <span className="font-semibold text-text-dark">expansion or workforce-growth planning</span> built on guesswork, forcing risky bets on locations, salaries, and timelines that explode later?
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="firefighting" className="bg-white rounded-lg px-lg shadow-sm border border-border-light card-hover">
                <AccordionTrigger className="hover:no-underline py-lg">
                  <div className="flex items-start gap-lg text-left">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-text-dark text-lg">Your team is stuck in constant firefighting mode.</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-20 pr-lg pb-md pt-xs text-text-medium text-base leading-relaxed">
                  Are nonstop <span className="font-semibold text-text-dark">last-minute urgent hires</span> dragging leaders into interview marathons and draining team morale because key roles still can't be staffed on schedule?
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="text-center mt-xxl">
              <p className="text-lg font-semibold text-text-dark">
                Patchwork fixes won't solve these. You need a system built for complexity, focused on strategically building capability and resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution - IIEA Ecosystem */}
      <section id="solution" className="bg-white py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-xxl reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">A Purpose-Built Operating System for Your Talent Acquisition</h2>
            <p className="text-lg text-text-medium max-w-4xl mx-auto">
              We move far beyond the tired limitations of transactional recruiting. The four interconnected pillars of our <span className="font-semibold text-tf-orange">Talent Enablement Ecosystem</span> transform hiring from a risk into a predictable and repeatable process and a competitive advantage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg mb-xxl">
            <Link href="/services/illuminate#solution" className="service-card group relative overflow-hidden p-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center reveal-on-scroll bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-md group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-8 h-8 text-white group-hover:animate-pulse" />
                </div>
                <h3 className="font-semibold text-text-dark mb-xs group-hover:text-blue-700 transition-colors">Illuminate</h3>
                <p className="text-sm text-text-medium">Predictive market and talent intelligence to gain critical foresight and spot risk early.</p>
              </div>
            </Link>
            <Link href="/services/innovate" className="service-card group relative overflow-hidden p-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center reveal-on-scroll bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-50 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-md group-hover:scale-110 transition-all duration-300">
                  <Settings className="w-8 h-8 text-white group-hover:animate-spin group-hover:[animation-duration:3s]" />
                </div>
                <h3 className="font-semibold text-text-dark mb-xs group-hover:text-orange-700 transition-colors">Innovate</h3>
                <p className="text-sm text-text-medium">Data-driven systems and agentic workflows designed for scale and efficiency.</p>
              </div>
            </Link>
            <Link href="/services/elevate" className="service-card group relative overflow-hidden p-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center reveal-on-scroll bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 opacity-50 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-md group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white group-hover:animate-bounce" />
                </div>
                <h3 className="font-semibold text-text-dark mb-xs group-hover:text-purple-700 transition-colors">Elevate</h3>
                <p className="text-sm text-text-medium">Embedding next-generation skills and crucial AI literacy within your team.</p>
              </div>
            </Link>
            <Link href="/services/accelerate" className="service-card group relative overflow-hidden p-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center reveal-on-scroll bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-50 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-md group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white group-hover:scale-75 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-text-dark mb-xs group-hover:text-green-700 transition-colors">Accelerate</h3>
                <p className="text-sm text-text-medium">On-demand expert execution power deployed with strategic precision for time-critical hires.</p>
              </div>
            </Link>
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
      <section id="benefits" className="bg-bg-subtle py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-xxl reveal-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">Why We Succeed Where Others Stall</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg auto-rows-fr">
              <div className="bg-white p-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 reveal-on-scroll group h-full">
                <div className="flex items-start gap-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-tf-orange to-red-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-dark mb-sm text-lg group-hover:text-tf-orange transition-colors">System, not Band-Aid</h3>
                    <p className="text-text-medium leading-relaxed">We holistically identify and fix root causes, not symptoms.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 reveal-on-scroll group h-full">
                <div className="flex items-start gap-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-tf-blue to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-dark mb-sm text-lg group-hover:text-tf-blue transition-colors">Capability Transfer</h3>
                    <p className="text-text-medium leading-relaxed">Your team ends every engagement stronger, without costly external dependencies.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 reveal-on-scroll group h-full">
                <div className="flex items-start gap-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <LineChart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-dark mb-sm text-lg group-hover:text-purple-700 transition-colors">Expertise in complex scaling</h3>
                    <p className="text-text-medium leading-relaxed">From blitz-scaling to global expansions and product roll-outs.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 reveal-on-scroll group h-full">
                <div className="flex items-start gap-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-dark mb-sm text-lg group-hover:text-green-700 transition-colors">Metric Obsession</h3>
                    <p className="text-text-medium leading-relaxed">We track business impact, not vanity KPIs. Our success is measured by <em>your</em> success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Teaser */}
      <section className="bg-white py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">When We Help</h2>
            <p className="text-lg text-text-medium mb-xxl">
              The Talent Foundation specializes in partnering with ambitious organizations facing critical talent challenges associated with:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg mb-xxl">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-blue-100">
                <div className="flex items-center gap-md">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-text-dark font-semibold text-base group-hover:text-blue-700 transition-colors leading-tight">Strategic Hiring and Talent Pipelining</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-emerald-100">
                <div className="flex items-center gap-md">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-text-dark font-semibold text-base group-hover:text-emerald-700 transition-colors leading-tight">AI-Literacy Upskilling</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-orange-100">
                <div className="flex items-center gap-md">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-text-dark font-semibold text-base group-hover:text-orange-700 transition-colors leading-tight">Launching New Products or Markets</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-purple-100">
                <div className="flex items-center gap-md">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-text-dark font-semibold text-base group-hover:text-purple-700 transition-colors leading-tight">Venture Capital Portfolio Scaling</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-gray-50 p-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-slate-100">
                <div className="flex items-center gap-md">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-gray-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-text-dark font-semibold text-base group-hover:text-slate-700 transition-colors leading-tight">Critical Organizational Function Builds</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-cyan-100">
                <div className="flex items-center gap-md">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-text-dark font-semibold text-base group-hover:text-cyan-700 transition-colors leading-tight">Urgent Niche Skill Development</p>
                </div>
              </div>
            </div>
            <Link href="/who-we-serve" className="text-tf-blue font-semibold hover:text-tf-orange transition-colors">
              Discover Our Areas of Specialized Expertise →
            </Link>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section id="proven-partner" className="bg-bg-subtle py-xxxl">
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
              <div className="text-center border-b-2 md:border-b-0 border-gray-300 pb-lg md:pb-0">
                <h3 className="font-semibold text-text-dark mb-xs">First Principles Thinking</h3>
                <p className="text-text-medium text-sm">Deconstructing challenges to design and build fundamentally superior solutions.</p>
              </div>
              <div className="text-center border-b-2 md:border-b-0 md:border-l-2 md:border-r-2 border-gray-300 pb-lg md:pb-0 md:px-xxl relative">
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
              <a href="https://cal.com/adamkovacs/the-talent-foundation" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4 inline-block mb-lg">
                Schedule Strategic Assessment
              </a>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-md text-left max-w-2xl mx-auto">
                <div className="flex items-center gap-md">
                  <div className="w-8 h-8 bg-tf-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <p className="text-white text-sm"><span className="font-semibold">Pre-call brief</span> – You answer five context questions</p>
                </div>
                <div className="flex items-center gap-md">
                  <div className="w-8 h-8 bg-tf-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <p className="text-white text-sm"><span className="font-semibold">30m call</span> – We unpack your talent constraint</p>
                </div>
                <div className="flex items-center gap-md">
                  <div className="w-8 h-8 bg-tf-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <p className="text-white text-sm"><span className="font-semibold">Rapid analysis</span> – Within 48h, summarized analysis and options</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-lg mt-lg">
              <p className="text-white font-semibold mb-md">Ready to turn talent from constraint to edge?</p>
              <div className="flex justify-center">
                <Link href="/services" className="text-tf-blue-lighter hover:text-tf-orange transition-colors border-b border-tf-blue-lighter pb-1">
                  Explore Our Services
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
