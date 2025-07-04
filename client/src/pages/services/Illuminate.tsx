import { Link } from 'wouter';
import { Lightbulb, Search, TrendingUp, AlertTriangle, ArrowRight, CheckCircle2, Brain, Target, ChevronDown, MapPin, Users, DollarSign, Sparkles } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollAnimations from '@/components/ScrollAnimations';

export default function Illuminate() {

  return (
    <ScrollAnimations>
      <div>
        {/* Hero Section */}
        <section id="hero" className="bg-gradient-to-br from-tf-blue-light to-white py-xxxl geometric-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-md">
              Illuminate: Strategic Foresight for <span className="text-tf-orange">Talent Growth and Expansion</span>
            </h1>
            <p className="text-lg md:text-xl text-text-medium mb-md font-semibold">
              One blind talent bet can cost millions, Illuminate the data to win them all.
            </p>
            <p className="text-lg text-text-medium mb-xl">
              Stop navigating mission‑critical initiatives blindfolded. Deep, synthesized market, competitor, and workforce intelligence, 
              filtered through real execution insight that lets you <span className="font-semibold text-text-dark">anticipate shifts, validate multi‑million‑dollar strategies, 
              and build the workforce your future demands</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-md">
              <Link href="/contact" className="btn-primary">
                Request a Strategic Intelligence Briefing
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore the Enablement Ecosystem
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-bg-subtle py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-xxl">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
              When Talent Intelligence Is Missing, Costs Explode
            </h2>
            <p className="text-lg text-text-medium">
              Blind decisions in talent strategy can cost millions. Here's how intelligence gaps create systematic risk.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xxl">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text-dark group-hover:text-red-700 transition-colors">Expansion Roulette</h3>
              </div>
              <p className="text-text-medium leading-relaxed text-center">
                Unseen competition causing local talent shortages, compliance traps, and pay realities can derail a new market entry before the first hire. Costly delays are draining both budgets and morale.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text-dark group-hover:text-amber-700 transition-colors">Profit-Draining Attrition</h3>
              </div>
              <p className="text-text-medium leading-relaxed text-center">
                Mis-benchmarked rewards based on flawed compensation reports or unaddressed competitor poaching are fueling double-digit regrettable turnover and six-figure replacement costs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text-dark group-hover:text-purple-700 transition-colors">Competitive Ambush</h3>
              </div>
              <p className="text-text-medium leading-relaxed text-center">
                Rival hiring sprints by competitors to dominate the talent market for critical AI or Cyber skills, along with targeted campaigns executed against you, will stall your growth roadmap.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-gray-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text-dark group-hover:text-slate-700 transition-colors">Strategic Surprises</h3>
              </div>
              <p className="text-text-medium leading-relaxed text-center">
                Approving major initiatives (M&A, large-scale transformations) based on thoughts and opinions, rather than hard data on talent and market feasibility? You're exposing yourself to costs and delays.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-tf-orange/10 to-red-50 p-8 rounded-xl border border-tf-orange/20 text-center max-w-4xl mx-auto">
            <p className="text-lg font-semibold text-text-dark">
              Ignoring talent intelligence doesn't save money, it causes <span className="text-tf-orange">systemic blindness</span>. Illuminate research service replaces guesswork with data‑driven clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-white py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md text-center">
              Targeted Questions • Expert Answers • Immediate Action
            </h2>
            <p className="text-lg text-text-medium mb-xxl text-center">
              We cut through the noise, delivering targeted, synthesized, in-depth intelligence tailored to your most critical talent and business decisions.
            </p>

            {/* Progressive Disclosure Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xxl">
              {/* Card 1 */}
              <div className="insight-card group relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 p-xl rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 min-h-[340px] reveal-on-scroll">
                <div className="relative z-10">
                  <MapPin className="w-12 h-12 text-blue-600 mb-md group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-text-dark mb-md group-hover:text-blue-700 transition-colors">
                    Where can we hire scarce talent at scale?
                  </h3>
                  <p className="text-text-medium mb-md">
                    Assess talent density, skills availability, true compensation realities, competitor saturation, and compliance factors to 
                    <span className="font-semibold"> confidently inform location strategy, remote work policies, and targeted recruitment efforts.</span>
                  </p>
                  
                  <div className="insight-details opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/90 backdrop-blur-sm p-md rounded-lg mt-md border border-blue-200">
                    <h4 className="font-bold text-blue-700 mb-sm text-sm">Example Intelligence:</h4>
                    <ul className="space-y-xs text-text-medium text-xs">
                      <li className="italic">"Top 3 locations to source 50+ Senior ML engineers within 6 months"</li>
                      <li className="italic">"Actual compensation vs. survey data discrepancies"</li>
                      <li className="italic">"Local hiring speed factors Location A vs. B"</li>
                      <li className="italic">"Remote work impact on compensation expectations"</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="insight-card group relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100 p-xl rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 min-h-[340px] reveal-on-scroll">
                <div className="relative z-10">
                  <Users className="w-12 h-12 text-orange-600 mb-md group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-text-dark mb-md group-hover:text-orange-700 transition-colors">
                    How are my competitors really staffing and paying?
                  </h3>
                  <p className="text-text-medium mb-md">
                    Uncover crucial insights into competitor talent strategies, organizational structures, compensation philosophies, and sourcing channels to inform your own competitive positioning and proactively counter threats.
                  </p>
                  
                  <div className="insight-details opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/90 backdrop-blur-sm p-md rounded-lg mt-md border border-orange-200">
                    <h4 className="font-bold text-orange-700 mb-sm text-sm">Example Intelligence:</h4>
                    <ul className="space-y-xs text-text-medium text-xs">
                      <li className="italic">"Competitor X compensation structure for new Design teams"</li>
                      <li className="italic">"Research labs and companies for hiring top AI talent"</li>
                      <li className="italic">"Value propositions that resonate with their targets"</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="insight-card group relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 p-xl rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 min-h-[340px] reveal-on-scroll">
                <div className="relative z-10">
                  <DollarSign className="w-12 h-12 text-purple-600 mb-md group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-text-dark mb-md group-hover:text-purple-700 transition-colors">
                    What does a winning offer actually cost?
                  </h3>
                  <p className="text-text-medium mb-md">
                    Access role‑specific, geo‑calibrated compensation and benefits data to ensure that your offers are competitive enough to secure key talent while also retaining high-performing critical employees.
                  </p>
                  
                  <div className="insight-details opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/90 backdrop-blur-sm p-md rounded-lg mt-md border border-purple-200">
                    <h4 className="font-bold text-purple-700 mb-sm text-sm">Example Intelligence:</h4>
                    <ul className="space-y-xs text-text-medium text-xs">
                      <li className="italic">"True market rates for Principal PMs: Bay Area vs. remote"</li>
                      <li className="italic">"Robotics Engineering comp: Boston vs. London/Berlin/Singapore"</li>
                      <li className="italic">"Talent pool expansion with 10% salary band increase"</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="insight-card group relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 p-xl rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 min-h-[340px] reveal-on-scroll">
                <div className="relative z-10">
                  <Sparkles className="w-12 h-12 text-green-600 mb-md group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-text-dark mb-md group-hover:text-green-700 transition-colors">
                    Which future skill demands will break our roadmap?
                  </h3>
                  <p className="text-text-medium mb-md">
                    Map skill requirements tied to your roadmap. Analyze internal strengths and gaps compared to external supply and demand to build workforce plans, advise on build vs buy decisions, and target high-ROI upskilling programs.
                  </p>
                  
                  <div className="insight-details opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/90 backdrop-blur-sm p-md rounded-lg mt-md border border-green-200">
                    <h4 className="font-bold text-green-700 mb-sm text-sm">Example Intelligence:</h4>
                    <ul className="space-y-xs text-text-medium text-xs">
                      <li className="italic">"Optimal build vs. buy strategy based on supply/cost realities"</li>
                      <li className="italic">"Data-driven upskilling recommendations"</li>
                      <li className="italic">"Emerging skills gaps for 12-month roadmap"</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            {/* How Illuminate Works */}
            <div className="bg-tf-blue-light p-xxl rounded-lg">
              <h3 className="text-xl font-bold text-text-dark mb-md text-center">How Illuminate Works</h3>
              <div className="flex items-center justify-center gap-md flex-wrap">
                <span className="font-semibold text-text-dark">Data</span>
                <ArrowRight className="w-4 h-4 text-tf-blue" />
                <span className="font-semibold text-text-dark">Analytics</span>
                <ArrowRight className="w-4 h-4 text-tf-blue" />
                <span className="font-semibold text-text-dark">Synthesis</span>
              </div>
              <p className="text-text-medium text-center mt-md">
                The Talent Foundation's unique advantage lies not just in robust <span className="font-semibold text-text-dark">data aggregation</span> and <span className="font-semibold text-text-dark">advanced analytics</span>, 
                but in the crucial layer of <span className="font-semibold text-text-dark">synthesis and strategic interpretation by seasoned TA execution experts</span>. 
                We don't just present data. We also tell you <span className="italic">what it means</span> for your talent strategy and <span className="italic">how</span> it 
                directly informs practical process design, effective capability building, and precise hiring execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-bg-subtle py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-xxl">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
              What You'll Gain: Drive Strategy & Mitigate Risk
            </h2>
            <p className="text-lg text-text-medium">
              Transform uncertainty into strategic advantage with data-driven intelligence that powers confident decision-making.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xxl">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-tf-blue to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text-dark group-hover:text-tf-blue transition-colors">De-risked Major Strategic Investments</h3>
              </div>
              <p className="text-text-medium leading-relaxed text-center">
                Make confident go/no-go decisions on location expansion, M&A, or complex transformation projects with clear, localized, and validated data on talent feasibility, costs, compliance landscape, and other associated risks.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text-dark group-hover:text-emerald-700 transition-colors">Secured Competitive Advantage</h3>
              </div>
              <p className="text-text-medium leading-relaxed text-center">
                Proactively identify and map niche talent pools before competitors, enabling targeted talent acquisition. Build data-informed attraction and retention strategies based on competitor vulnerabilities.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-tf-orange to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text-dark group-hover:text-tf-orange transition-colors">Optimized Workforce Spending</h3>
              </div>
              <p className="text-text-medium leading-relaxed text-center">
                Ensure competitive, efficient, and fiscally responsible compensation structures. Justify budgets and optimize workforce planning using <span className="font-semibold text-text-dark">actionable market data</span>. Avoid overspending on premium panic-hires or losing key talent due to uncompetitive offers in new or existing locations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text-dark group-hover:text-purple-700 transition-colors">Future-Proofed Talent Strategy</h3>
              </div>
              <p className="text-text-medium leading-relaxed text-center">
                Anticipate future skill needs tied to your roadmap. Based on robust data, build informed location strategies, sourcing initiatives, and mobility programs. Prepare your workforce for future market shifts and reduce vulnerability to sudden talent shortages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Illuminate Section */}
      <section className="bg-white py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-xxl">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
              The Illuminated Difference: Actionable Foresight, Not Just Hindsight Data
            </h2>
            <p className="text-lg text-text-medium">
              Three key differentiators that set our intelligence apart from generic data services.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg mb-xxl">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-tf-blue/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-tf-blue to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text-dark group-hover:text-tf-blue transition-colors">Deep Strategic Synthesis</h3>
                <p className="text-sm font-semibold text-text-medium mt-2">Not a data dump</p>
              </div>
              <p className="text-text-medium leading-relaxed">
                Forget generic reports and the spreadsheet overwhelm. Unlike data brokers providing raw feeds, the Talent Foundation delivers <span className="font-semibold text-text-dark">expertly synthesized intelligence</span>. 
                Our seasoned practitioners translate complex data points into clear implications and pragmatic, actionable strategic recommendations directly applicable to <span className="italic">your immediate challenges and operational context</span>.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-tf-orange/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-tf-orange to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text-dark group-hover:text-tf-orange transition-colors">Operationally Grounded</h3>
                <p className="text-sm font-semibold text-text-medium mt-2">Not just theory</p>
              </div>
              <p className="text-text-medium leading-relaxed">
                Our insights aren't academic exercises. Instead, they are filtered through decades of <span className="font-semibold text-text-dark">deep TA and operational execution experience</span>. 
                We understand <span className="italic">how</span> this intelligence must translate into effective process redesign, targeted team development, and precise execution to yield tangible business results.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-emerald-500/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text-dark group-hover:text-emerald-700 transition-colors">Proactive Foresight</h3>
                <p className="text-sm font-semibold text-text-medium mt-2">Not just postmortem analysis</p>
              </div>
              <p className="text-text-medium leading-relaxed">
                We prioritize identifying emerging talent trends, future skill needs crucial for your growth goals, and potential competitor talent moves before they impact you. 
                This anticipatory intelligence, which often provides months of lead time, enables you to proactively shape your strategy instead of the constantly reactive course correction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverable Section */}
      <section className="bg-gradient-to-br from-tf-blue-light to-white py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">
              Your Strategic Talent Intelligence Compass: Guiding Confident Decisions
            </h2>
            <p className="text-lg text-text-medium mb-xl">
              Move beyond guesswork. The Illuminate research service delivers a comprehensive and confidential <span className="font-semibold text-text-dark">Strategic Intelligence Compass</span>. 
              Your essential guide for navigating complex talent decisions. This powerful tool synthesizes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xl">
              <div className="bg-white p-lg rounded-lg shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-tf-blue mx-auto mb-md" />
                <h3 className="font-semibold text-text-dark mb-xs">Rigorously Researched Market & Competitor Insights.</h3>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-tf-blue mx-auto mb-md" />
                <h3 className="font-semibold text-text-dark mb-xs">Granular Talent Pool & Compensation Benchmarking Data.</h3>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-tf-blue mx-auto mb-md" />
                <h3 className="font-semibold text-text-dark mb-xs">Actionable Skills Foresight & Risk Analysis.</h3>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-tf-blue mx-auto mb-md" />
                <h3 className="font-semibold text-text-dark mb-xs">Expert Interpretation & Clear Strategic Recommendations.</h3>
              </div>
            </div>
            <p className="text-lg text-text-medium">
              It provides the <span className="font-semibold text-text-dark">validated intelligence foundation</span> required to effectively target and execute talent strategies, 
              maximizing your chance of success in competitive environments.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-bg-subtle py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">
              Make Your Next Move With Data‑Driven Confidence
            </h2>
            <p className="text-lg text-text-medium mb-xl">
              Stop risking critical initiatives on talent assumptions or incomplete information. Book a briefing and see precisely how Illuminate can provide the clarity your leadership and goals demand.
            </p>
            <div className="flex flex-col sm:flex-row gap-md justify-center">
              <Link href="/contact" className="btn-primary">
                Request a Strategic Intelligence Briefing
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore the Full Ecosystem
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="bg-white py-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-r from-tf-orange/10 to-tf-blue/10 p-lg rounded-lg">
              <h3 className="text-lg font-semibold text-text-dark mb-xs">Part of the Talent Enablement Ecosystem</h3>
              <p className="text-text-medium mb-md">
                Illuminate intelligence directly informs <Link href="/services/innovate" className="text-tf-blue hover:text-tf-orange transition-colors font-semibold">Innovate</Link> process design, 
                guides <Link href="/services/elevate" className="text-tf-blue hover:text-tf-orange transition-colors font-semibold">Elevate</Link> capability building, 
                and powers <Link href="/services/accelerate" className="text-tf-blue hover:text-tf-orange transition-colors font-semibold">Accelerate</Link> execution—creating a 
                multiplier effect across your entire talent strategy.
              </p>
              <Link href="/services" className="inline-flex items-center text-tf-blue font-medium hover:text-tf-orange transition-colors">
                Explore the Full Ecosystem
                <ArrowRight className="ml-xs w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </ScrollAnimations>
  );
}