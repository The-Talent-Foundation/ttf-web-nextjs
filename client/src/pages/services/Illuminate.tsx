import { Link } from 'wouter';
import { Lightbulb, Search, TrendingUp, AlertTriangle, ArrowRight, CheckCircle2, Brain, Target, ChevronDown, MapPin, Users, DollarSign, Sparkles, BarChart3, Compass, FileText, Zap, Settings, Award, Rocket, Play } from 'lucide-react';
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
              Illuminate: Strategic Foresight for <span className="text-blue-600">Talent Growth and Expansion</span>
            </h1>
            <p className="text-lg md:text-xl text-text-medium mb-md font-semibold">
              One blind talent bet can cost millions, Illuminate the data to win them all.
            </p>
            <p className="text-lg text-text-medium mb-xl">
              Stop navigating mission-critical initiatives blindfolded. Deep, synthesized market, competitor, and workforce intelligence, 
              filtered through real execution insight that lets you <span className="font-semibold text-text-dark">anticipate shifts, validate multi-million-dollar strategies, 
              and build the workforce your future demands</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-md">
              <a href="https://cal.com/adamkovacs/the-talent-foundation" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Request a Strategic Intelligence Briefing
              </a>
              <Link href="/services" className="btn-secondary">
                Explore the Enablement Ecosystem
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="bg-bg-subtle py-xxxl">
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
                Misbenchmarked rewards based on flawed compensation reports or unaddressed competitor poaching are fueling double-digit regrettable turnover and six-figure replacement costs.
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
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200 text-center max-w-4xl mx-auto">
            <p className="text-lg font-semibold text-text-dark">
              Ignoring talent intelligence doesn't save money, it causes <span className="text-blue-600">systemic blindness</span>. Illuminate research service replaces guesswork with data driven clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="bg-white py-xxxl">
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
                    Access role specific, geo calibrated compensation and benefits data to ensure that your offers are competitive enough to secure key talent while also retaining high performing critical employees.
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
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200">
              <h3 className="text-2xl font-bold text-text-dark mb-lg text-center">How Illuminate Works</h3>
              <div className="flex items-center justify-center gap-6 flex-wrap mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <span className="font-semibold text-text-dark">Data</span>
                </div>
                <ArrowRight className="w-6 h-6 text-blue-600" />
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <span className="font-semibold text-text-dark">Analytics</span>
                </div>
                <ArrowRight className="w-6 h-6 text-blue-600" />
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <span className="font-semibold text-text-dark">Synthesis</span>
                </div>
              </div>
              <p className="text-text-medium text-center leading-relaxed">
                The Talent Foundation's unique advantage lies not just in robust <span className="font-semibold text-blue-600">data aggregation</span> and <span className="font-semibold text-blue-600">advanced analytics</span>, 
                but in the crucial layer of <span className="font-semibold text-blue-600">synthesis and strategic interpretation by seasoned TA execution experts</span>. 
                We don't just present data. We also tell you <span className="italic font-medium text-text-dark">what it means</span> for your talent strategy and <span className="italic font-medium text-text-dark">how</span> it 
                directly informs practical process design, effective capability building, and precise hiring execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-bg-subtle py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-xxl">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
              What You'll Gain: Drive Strategy & Mitigate Risk
            </h2>
            <p className="text-lg text-text-medium">
              Transform uncertainty into strategic advantage with data driven intelligence that powers confident decision making.
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
      <section id="cta" className="bg-white py-xxxl">
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
          <div className="text-center max-w-4xl mx-auto mb-xxl">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
              Your Strategic Talent Intelligence Compass: Guiding Confident Decisions
            </h2>
            <p className="text-lg text-text-medium mb-lg">
              Move beyond guesswork. The Illuminate research service delivers a comprehensive and confidential <span className="font-semibold text-text-dark">Strategic Intelligence Compass</span>. 
              Your essential guide for navigating complex talent decisions.
            </p>
            <p className="text-xl font-bold text-text-dark mb-lg">This powerful tool synthesizes:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xxl">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-tf-blue/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-tf-blue to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text-dark group-hover:text-tf-blue transition-colors">Market & Competitor Insights</h3>
                <p className="text-sm font-semibold text-text-medium mt-2">Rigorously researched</p>
              </div>
              <p className="text-text-medium leading-relaxed">
                Deep analysis of market dynamics, competitor positioning, and talent acquisition strategies to give you strategic visibility into the competitive landscape.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-emerald-500/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text-dark group-hover:text-emerald-700 transition-colors">Talent Pool & Compensation Data</h3>
                <p className="text-sm font-semibold text-text-medium mt-2">Granular benchmarking</p>
              </div>
              <p className="text-text-medium leading-relaxed">
                Detailed talent availability, skill distribution, and compensation benchmarking data to inform your hiring strategy and budget planning.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-purple-500/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text-dark group-hover:text-purple-700 transition-colors">Skills Foresight & Risk Analysis</h3>
                <p className="text-sm font-semibold text-text-medium mt-2">Actionable intelligence</p>
              </div>
              <p className="text-text-medium leading-relaxed">
                Forward-looking analysis of emerging skill requirements, talent shortages, and strategic risks to help you stay ahead of market changes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-tf-orange/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-tf-orange to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text-dark group-hover:text-tf-orange transition-colors">Expert Interpretation & Recommendations</h3>
                <p className="text-sm font-semibold text-text-medium mt-2">Clear strategic guidance</p>
              </div>
              <p className="text-text-medium leading-relaxed">
                Seasoned practitioner insights that translate complex data into clear, actionable recommendations tailored to your specific strategic context.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200 text-center max-w-4xl mx-auto">
            <p className="text-lg font-semibold text-text-dark">
              It provides the <span className="font-bold text-blue-600">validated intelligence foundation</span> required to effectively target and execute talent strategies, 
              maximizing your chance of success in competitive environments.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="benefits" className="bg-bg-subtle py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-tf-blue/10 to-tf-orange/10 p-12 rounded-2xl border border-tf-blue/20 text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-tf-blue to-tf-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
                  Make Your Next Move With Data-Driven Confidence
                </h2>
                <p className="text-lg text-text-medium mb-8">
                  Stop risking critical initiatives on talent assumptions or incomplete information. Book a briefing and see precisely how Illuminate can provide the clarity your leadership and goals demand.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-md justify-center">
                <a href="https://cal.com/adamkovacs/the-talent-foundation" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4 bg-tf-blue hover:bg-tf-blue/90 text-white rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  Request a Strategic Intelligence Briefing
                </a>
                <Link href="/services" className="btn-secondary text-lg px-8 py-4 bg-white border-2 border-tf-blue text-tf-blue hover:bg-tf-blue hover:text-white rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  Explore the Full Ecosystem
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section id="cta" className="bg-white py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-xxl">
            <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-lg">Part of the Talent Enablement Ecosystem</h3>
            <p className="text-lg text-text-medium">
              Illuminate intelligence creates a multiplier effect across your entire talent strategy through seamless integration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xxl">
            <div className="bg-gradient-to-br from-tf-orange/10 to-red-50 p-8 rounded-xl border border-tf-orange/20 hover:border-tf-orange/40 transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-tf-orange to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="w-7 h-7 text-white group-hover:rotate-90 transition-transform duration-500" />
                </div>
                <h4 className="text-xl font-bold text-text-dark group-hover:text-tf-orange transition-colors">Informs Innovate</h4>
                <p className="text-sm font-semibold text-text-medium mt-2">Process design</p>
              </div>
              <p className="text-text-medium leading-relaxed text-center">
                Intelligence directly guides process optimization and workflow design decisions.
              </p>
              <div className="mt-6 text-center">
                <Link href="/services/innovate" className="text-tf-orange hover:text-tf-orange/80 font-semibold transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl border border-purple-200 hover:border-purple-300 transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-7 h-7 text-white group-hover:animate-bounce" />
                </div>
                <h4 className="text-xl font-bold text-text-dark group-hover:text-purple-700 transition-colors">Guides Elevate</h4>
                <p className="text-sm font-semibold text-text-medium mt-2">Capability building</p>
              </div>
              <p className="text-text-medium leading-relaxed text-center">
                Data insights shape targeted capability development and team enhancement strategies.
              </p>
              <div className="mt-6 text-center">
                <Link href="/services/elevate" className="text-purple-600 hover:text-purple-500 font-semibold transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl border border-emerald-200 hover:border-emerald-300 transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-7 h-7 text-white group-hover:scale-75 transition-transform duration-300" />
                </div>
                <h4 className="text-xl font-bold text-text-dark group-hover:text-emerald-700 transition-colors">Powers Accelerate</h4>
                <p className="text-sm font-semibold text-text-medium mt-2">Execution excellence</p>
              </div>
              <p className="text-text-medium leading-relaxed text-center">
                Strategic intelligence enables precise, high-impact execution and delivery.
              </p>
              <div className="mt-6 text-center">
                <Link href="/services/accelerate" className="text-emerald-600 hover:text-emerald-500 font-semibold transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-tf-blue/10 to-tf-orange/10 p-6 rounded-xl border border-tf-blue/20 inline-block">
              <Link href="/services" className="inline-flex items-center text-tf-blue font-semibold hover:text-tf-orange transition-colors text-lg">
                Explore the Full Ecosystem
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </ScrollAnimations>
  );
}