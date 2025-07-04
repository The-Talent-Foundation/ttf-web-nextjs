import { Link } from 'wouter';
import { Settings, Zap, AlertTriangle, ArrowRight, CheckCircle2, GitBranch, Users, Target, Lightbulb, Award, Search, BarChart3, Cpu, Database, Workflow, Monitor, Cog, Brain, Clock } from 'lucide-react';
import ScrollAnimations from '@/components/ScrollAnimations';

export default function Innovate() {
  return (
    <ScrollAnimations>
      <div>
        {/* Hero Section */}
        <section id="hero" className="bg-gradient-to-br from-orange-50 to-white py-xxxl geometric-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-lg">
                Innovate: Create Your <span className="text-tf-orange">Predictable & Scalable</span> High Performance Talent Engine
              </h1>
              <p className="text-lg md:text-xl text-text-medium mb-xl">
                Stop losing time and money to broken hiring. Turn every process step into a repeatable system. 
                With first-principles and design-thinking rigor, we build the <span className="font-semibold text-text-dark">data driven, resilient</span> talent-acquisition operating system that turns reactive firefighting into a repeatable competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-md justify-center">
                <Link href="/contact" className="btn-primary bg-tf-orange hover:bg-tf-orange/90">
                  Request a System Consultation
                </Link>
                <Link href="/services" className="btn-secondary border-tf-orange text-tf-orange hover:bg-tf-orange hover:text-white">
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
                When the Process Is the Bottleneck, Growth Pays the Price
              </h2>
              <p className="text-lg text-text-medium">
                Patch on patch fixes can't repair systemic failure. Here's how chaos blocks success.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xxl">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-red-700 transition-colors">Draining Drag of Inefficiency</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Manual hand-offs and spreadsheet workflows between the recruiting and hiring teams waste <span className="font-semibold text-text-dark">5-10+ of total staff hours per hire</span>, stretch time-to-start, raise cost-of-hire, and push burnout driven attrition rates high.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-amber-700 transition-colors">Unreliable Quality & Retention</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Lack of standardized assessments don't just cause a bad candidate experience, they also drive up the rate of bad hiring decisions. Each representing a sunk cost of <span className="font-semibold text-text-dark">30%+ of first-year salary</span> and erasing team momentum.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-blue-700 transition-colors">Wasted Technology Investments</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  An expensive and poorly configured ATS, CRM, or candidate sourcing tool will underperform leading to weak user adoption, and documentation compliance. Failing to optimize your tech leaves significant potential efficiency gains unrealized.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-purple-700 transition-colors">Growth Gridlock</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Unpredictable hiring velocity stalls product launches, expansion headcount, and investor timelines, putting strategic objectives at risk.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-tf-orange/10 to-red-50 p-8 rounded-xl border border-tf-orange/20 text-center max-w-4xl mx-auto">
              <p className="text-lg font-semibold text-text-dark">
                Patch on patch fixes can't repair systemic failure. <span className="font-bold text-tf-orange">Innovate replaces chaos with architecture.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="bg-white py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-xxl">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
                Targeted Audit • Custom Blueprint • Measurable Adoption
              </h2>
              <p className="text-lg text-text-medium mb-lg">
                We cut through noise to deliver a <span className="font-semibold text-text-dark italic">bespoke</span> talent-acquisition operating system, engineered for your scale, speed, and complexity.
              </p>
            </div>

            {/* Progressive Disclosure Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xxl">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-tf-orange/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-tf-orange to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-tf-orange transition-colors">Deep Diagnostic & Strategic Audit</h3>
                  <p className="text-sm font-semibold text-text-medium mt-2">Where are we breaking?</p>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Root cause analysis of flows, tools, roles, metrics, and compliance gaps. Pinpoint process, tech, skill, and data chokepoints blocking velocity.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-blue-500/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Workflow className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-blue-700 transition-colors">System Architecture Blueprint</h3>
                  <p className="text-sm font-semibold text-text-medium mt-2">What should the engine look like?</p>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  First-principles mapping of roles, stages, SLAs, and supporting tech. Design streamlined, data driven workflows with clear hand-offs and candidate journeys.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-emerald-500/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Cog className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-emerald-700 transition-colors">Pragmatic Tech Optimisation</h3>
                  <p className="text-sm font-semibold text-text-medium mt-2">How do we make tech actually help?</p>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  ATS/CRM configuration, integration, and automation roadmap, no shelf-ware. Align stack to process, automate low-value tasks, boost recruiter adoption.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-purple-500/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-purple-700 transition-colors">Measurement & Analytics Framework</h3>
                  <p className="text-sm font-semibold text-text-medium mt-2">How will we prove ROI?</p>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Real-time dashboards and KPI loops for continuous improvement. Track the metrics executives care about, velocity, quality, cost, and risk.
                </p>
              </div>
            </div>

            {/* How Innovate Works */}
            <div className="bg-orange-50 p-xxl rounded-lg">
              <h3 className="text-xl font-bold text-text-dark mb-md text-center">Why It Works</h3>
              <div className="flex items-center justify-center gap-md flex-wrap">
                <span className="font-semibold text-text-dark">User-First Design</span>
                <ArrowRight className="w-4 h-4 text-tf-orange" />
                <span className="font-semibold text-text-dark">First-Principles Rigor</span>
              </div>
              <p className="text-text-medium text-center mt-md">
                Solutions centre on recruiter, manager, and candidate experience, then are rebuilt from bedrock business logic, not <span className="font-semibold text-text-dark">"best-practice"</span> templates that crumble under pressure.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-bg-subtle py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-xxl">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
                What You'll Gain: Efficiency, Scalability, Predictability
              </h2>
              <p className="text-lg text-text-medium">
                Transform chaos into a competitive advantage with systematic excellence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xxl">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-tf-orange to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-tf-orange transition-colors">Scale-Ready Foundations</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Handle blitz-growth, PE/VC headcount ramps, or 800-hire facility builds with process capacity that won't buckle.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-emerald-700 transition-colors">Double-Digit Cost Savings</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Streamlined flows and right-sized tech routinely trim <span className="font-semibold text-text-dark">15-30%</span> from true cost-per-hire and reclaim hours of manager time.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-blue-700 transition-colors">Quality & Compliance Locked-In</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Standardised assessment gates and audit-ready data reduce mis-hire rates and de-risk global or regulated hiring.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-purple-700 transition-colors">Board-Level Visibility</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Dashboards translate TA performance into CFO-friendly ROI, supporting budget asks and strategic credibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Innovate Section */}
        <section className="bg-white py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-xxl">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
                The Innovate Difference: Architecture + Enablement = Lasting ROI
              </h2>
              <p className="text-lg text-text-medium">
                Four key differentiators that ensure sustainable transformation.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg mb-xxl">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-tf-orange/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-tf-orange to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-tf-orange transition-colors">Built by Operators, Not Theorists</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Designs come from leaders who ran global TA engines under hyper-scale pressure.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-purple-500/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-purple-700 transition-colors">People-Centred Adoption</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Blueprints integrate with <span className="font-semibold text-text-dark">Elevate</span> programs so your team <span className="italic">masters</span> the new system.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-blue-500/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-blue-700 transition-colors">Ecosystem Intelligence Baked-In</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  <span className="font-semibold text-text-dark">Illuminate</span> market data shapes workflows; outcomes feed seamless <span className="font-semibold text-text-dark">Accelerate</span> execution.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-emerald-500/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-emerald-700 transition-colors">Root-Cause Fixation</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Design-thinking workshops + first-principles analysis eliminate symptom chasing for good.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverable Section */}
        <section className="bg-gradient-to-br from-orange-50 to-white py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-xxl">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
                Your Talent Acquisition Operating-System Blueprint
              </h2>
              <p className="text-lg text-text-medium mb-lg">
                A confidential, actionable playbook that includes all packaged for immediate execution, and measurable, compounding ROI.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xxl">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-tf-orange/20">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-tf-orange to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-text-dark group-hover:text-tf-orange transition-colors">Optimised Process Maps & RACI</h3>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-blue-500/20">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-text-dark group-hover:text-blue-700 transition-colors">Tech Configuration & Automation Plan</h3>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-purple-500/20">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-text-dark group-hover:text-purple-700 transition-colors">KPI Dashboard Schema & Data Dictionary</h3>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-emerald-500/20">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-text-dark group-hover:text-emerald-700 transition-colors">Phased Rollout & Change-Management Roadmap</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-bg-subtle py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-tf-orange/10 to-red-50 p-12 rounded-2xl border border-tf-orange/20 text-center">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-tf-orange to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Settings className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
                    Ready to Replace Fire-Drills with a Predictable Talent Engine?
                  </h2>
                  <p className="text-lg text-text-medium mb-8">
                    Secure a complimentary 30-minute consultation to see how Innovate can de-risk growth and liberate capacity.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-md justify-center">
                  <Link href="/contact" className="btn-primary text-lg px-8 py-4 bg-tf-orange hover:bg-tf-orange/90 text-white rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    Request a System Consultation
                  </Link>
                  <Link href="/services" className="btn-secondary text-lg px-8 py-4 bg-white border-2 border-tf-orange text-tf-orange hover:bg-tf-orange hover:text-white rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    Explore the Full Ecosystem
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="bg-white py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-xxl">
              <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-lg">Part of the Talent Enablement Ecosystem</h3>
              <p className="text-lg text-text-medium">
                Innovate systems integrate seamlessly with our other services for compounding impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xxl">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200 hover:border-blue-300 transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-7 h-7 text-white group-hover:animate-pulse" />
                  </div>
                  <h4 className="text-xl font-bold text-text-dark group-hover:text-blue-700 transition-colors">Informed by Illuminate</h4>
                  <p className="text-sm font-semibold text-text-medium mt-2">Market intelligence</p>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Market data shapes workflow design and process optimization decisions.
                </p>
                <div className="mt-6 text-center">
                  <Link href="/services/illuminate" className="text-blue-600 hover:text-blue-500 font-semibold transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl border border-purple-200 hover:border-purple-300 transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-7 h-7 text-white group-hover:animate-bounce" />
                  </div>
                  <h4 className="text-xl font-bold text-text-dark group-hover:text-purple-700 transition-colors">Enables Elevate</h4>
                  <p className="text-sm font-semibold text-text-medium mt-2">Team capabilities</p>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Well-designed systems enable effective capability development and adoption.
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
                    <Target className="w-7 h-7 text-white group-hover:translate-y-[-4px] transition-transform duration-300" />
                  </div>
                  <h4 className="text-xl font-bold text-text-dark group-hover:text-emerald-700 transition-colors">Powers Accelerate</h4>
                  <p className="text-sm font-semibold text-text-medium mt-2">Expert execution</p>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Optimized systems enable seamless expert execution and delivery.
                </p>
                <div className="mt-6 text-center">
                  <Link href="/services/accelerate" className="text-emerald-600 hover:text-emerald-500 font-semibold transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-tf-orange/10 to-red-50 p-6 rounded-xl border border-tf-orange/20 inline-block">
                <Link href="/services" className="inline-flex items-center text-tf-orange font-semibold hover:text-tf-orange/80 transition-colors text-lg">
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