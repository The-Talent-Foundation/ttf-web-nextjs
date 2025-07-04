import { Link } from 'wouter';
import { Play, Rocket, Target, AlertTriangle, ArrowRight, CheckCircle2, Clock, Award, Users, Settings, Lightbulb, Search, TrendingUp, Zap, Brain, Shield, Monitor, BarChart3, Calendar } from 'lucide-react';
import ScrollAnimations from '@/components/ScrollAnimations';

export default function Accelerate() {
  return (
    <ScrollAnimations>
      <div>
        {/* Hero Section */}
        <section id="hero" className="bg-gradient-to-br from-emerald-50 to-white py-xxxl geometric-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-lg">
                Accelerate: Access <span className="text-emerald-600">Expert Execution</span> Without the Wait
              </h1>
              <p className="text-lg md:text-xl text-text-medium mb-xl">
                Critical roles demand expertise you can't build overnight. 
                Get immediate access to <span className="font-semibold text-text-dark">senior-level talent acquisition specialists</span> who deliver executive-search rigor at startup speed. 
                Bridge the gap while you build capacity—or supplement it when stakes are highest.
              </p>
              <div className="flex flex-col sm:flex-row gap-md justify-center">
                <Link href="/contact" className="btn-primary bg-emerald-600 hover:bg-emerald-700">
                  Request Expert Support
                </Link>
                <Link href="/services" className="btn-secondary border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white">
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
                When Critical Roles Can't Wait for Capacity Building
              </h2>
              <p className="text-lg text-text-medium">
                Some missions are too urgent—and too important—for trial-and-error. Here's when internal limits damage outcomes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xxl">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-red-700 transition-colors">Revenue-Critical Hiring Delays</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  C-suite, VP-level, and niche technical roles staying open for <span className="font-semibold text-text-dark">4+ months</span> can delay product launches, market expansion, and investment timelines.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-amber-700 transition-colors">Mis-Hire Risk at Senior Levels</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Bad senior hires cost <span className="font-semibold text-text-dark">2-3x annual salary</span> in replacement, lost productivity, and team disruption. Stakes are highest where experience matters most.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-blue-700 transition-colors">Under-Resourced for Complexity</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Global searches, hyper-competitive talent markets, and regulation-heavy industries require specialist knowledge most internal teams lack.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-purple-700 transition-colors">Executive Expectations vs. Reality</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Boards and investors expect <span className="font-semibold text-text-dark">search-firm calibre</span> results without wanting to pay search-firm rates or timelines.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-emerald-600/10 to-teal-50 p-8 rounded-xl border border-emerald-600/20 text-center max-w-4xl mx-auto">
              <p className="text-lg font-semibold text-text-dark">
                Some missions are too urgent for trial-and-error. <span className="font-bold text-emerald-600">Accelerate delivers expertise when it counts.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="bg-white py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-xxl">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
                Strategic Assessment • Expert Execution • Quality Assurance
              </h2>
              <p className="text-lg text-text-medium mb-lg">
                We plug experienced talent acquisition specialists into your most critical searches, delivering <span className="font-semibold text-text-dark">quality outcomes</span> at the pace your business demands.
              </p>
            </div>

            {/* Progressive Disclosure Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xxl">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-emerald-600/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-emerald-600 transition-colors">Strategic Role Assessment</h3>
                  <p className="text-sm font-semibold text-text-medium mt-2">What does success look like?</p>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Market mapping, compensation benchmarking, and stakeholder alignment. Define the profile, timeline, and success metrics before launch.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-blue-500/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-blue-700 transition-colors">Senior-Level Search Execution</h3>
                  <p className="text-sm font-semibold text-text-medium mt-2">How do we find the best?</p>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Executive-search methodology: direct approach, multi-channel sourcing, and rigorous assessment frameworks. No shortcuts, no compromises.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-purple-500/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-purple-700 transition-colors">Assessment & Reference Excellence</h3>
                  <p className="text-sm font-semibold text-text-medium mt-2">How do we de-risk the decision?</p>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Structured competency interviews, case-study simulations, and deep-dive reference calls. Reduce uncertainty, improve hire quality.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-amber-500/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-amber-700 transition-colors">Negotiation & Closing Support</h3>
                  <p className="text-sm font-semibold text-text-medium mt-2">How do we secure the win?</p>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Compensation structuring, offer strategy, and onboarding support. Navigate complexities to close your top choice.
                </p>
              </div>
            </div>

            {/* How Accelerate Works */}
            <div className="bg-emerald-50 p-xxl rounded-lg">
              <h3 className="text-xl font-bold text-text-dark mb-md text-center">Why It Works</h3>
              <div className="flex items-center justify-center gap-md flex-wrap">
                <span className="font-semibold text-text-dark">Practitioner Depth</span>
                <ArrowRight className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold text-text-dark">Immediate Impact</span>
              </div>
              <p className="text-text-medium text-center mt-md">
                Senior specialists who've delivered <span className="font-semibold text-text-dark italic">hundreds</span> of C-suite, VP, and specialist roles across industries integrate into your team instantly.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-bg-subtle py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-xxl">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
                What You'll Gain: Speed, Quality, Risk Mitigation
              </h2>
              <p className="text-lg text-text-medium">
                Transform critical gaps into competitive advantages with expert execution.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xxl">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-emerald-600 transition-colors">Immediate Velocity Without Learning Curves</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Specialists plug into your search within <span className="font-semibold text-text-dark">72 hours</span>, delivering experienced execution from day one.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-blue-700 transition-colors">Executive-Search Quality at Internal Speed</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Rigorous process without executive search timelines—deliver <span className="font-semibold text-text-dark">10-15% better</span> hire quality in faster cycles.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-purple-700 transition-colors">Risk Mitigation & Compliance Assurance</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Structured assessment reduces senior-level mis-hire risk by <span className="font-semibold text-text-dark">40-60%</span> while ensuring regulatory and bias-mitigation compliance.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-amber-700 transition-colors">Knowledge Transfer & Skill Building</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Your team learns advanced techniques during collaboration, building capacity for future searches.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When to Use Accelerate */}
        <section className="bg-white py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-xxl">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
                When to Deploy Accelerate: Critical Scenarios
              </h2>
              <p className="text-lg text-text-medium">
                Four high-stakes situations where expert execution delivers outsized ROI.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg mb-xxl">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-emerald-600/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-emerald-600 transition-colors">Revenue-Critical Leadership Gaps</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  When C-suite, revenue leadership, or key technical roles block product launches, funding, or market expansion.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-blue-500/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-blue-700 transition-colors">Hyper-Competitive Talent Markets</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  For AI/ML, cybersecurity, biotech, or other specialist roles where demand outstrips supply <span className="font-semibold text-text-dark">10:1</span>.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-purple-500/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-purple-700 transition-colors">Board & Investor Scrutiny</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  When hiring outcomes will be evaluated at board-level and failure could affect funding or strategic credibility.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-amber-500/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-amber-700 transition-colors">Capacity-Building Bridge</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  While your team builds capability or during peak hiring cycles where internal bandwidth is stretched thin.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverable Section */}
        <section className="bg-gradient-to-br from-emerald-50 to-white py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-xxl">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
                Your Search Success Package
              </h2>
              <p className="text-lg text-text-medium mb-lg">
                A comprehensive delivery including search execution, risk mitigation, and knowledge transfer.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg mb-xxl">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-emerald-600/20">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-text-dark group-hover:text-emerald-600 transition-colors">Complete Search Documentation</h3>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-blue-500/20">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-text-dark group-hover:text-blue-700 transition-colors">Candidate Assessment Reports</h3>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-purple-500/20">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-text-dark group-hover:text-purple-700 transition-colors">Market Intelligence Summary</h3>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-amber-500/20">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-text-dark group-hover:text-amber-700 transition-colors">Process & Methodology Transfer</h3>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-red-500/20">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-text-dark group-hover:text-red-700 transition-colors">90-Day Success Metrics Tracking</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-bg-subtle py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-emerald-600/10 to-teal-50 p-12 rounded-2xl border border-emerald-600/20 text-center">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Play className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
                    Ready to Secure Critical Talent Without the Wait?
                  </h2>
                  <p className="text-lg text-text-medium mb-8">
                    Get immediate access to expert search support. Discuss your urgent needs in a confidential consultation.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-md justify-center">
                  <Link href="/contact" className="btn-primary text-lg px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    Request Expert Support
                  </Link>
                  <Link href="/services" className="btn-secondary text-lg px-8 py-4 bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
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
                Accelerate execution integrates seamlessly with our other services for compounding impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xxl">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200 hover:border-blue-300 transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-7 h-7 text-white group-hover:animate-pulse" />
                  </div>
                  <h4 className="text-xl font-bold text-text-dark group-hover:text-blue-700 transition-colors">Powered by Illuminate</h4>
                  <p className="text-sm font-semibold text-text-medium mt-2">Market intelligence</p>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Market insights enhance search strategy and candidate targeting.
                </p>
                <div className="mt-6 text-center">
                  <Link href="/services/illuminate" className="text-blue-600 hover:text-blue-500 font-semibold transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-tf-orange/10 to-red-50 p-8 rounded-xl border border-tf-orange/20 hover:border-tf-orange/40 transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-tf-orange to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-7 h-7 text-white group-hover:rotate-90 transition-transform duration-500" />
                  </div>
                  <h4 className="text-xl font-bold text-text-dark group-hover:text-tf-orange transition-colors">Enhanced by Innovate</h4>
                  <p className="text-sm font-semibold text-text-medium mt-2">System optimization</p>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Optimized processes enable more effective expert execution and integration.
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
                  <h4 className="text-xl font-bold text-text-dark group-hover:text-purple-700 transition-colors">Enables Elevate</h4>
                  <p className="text-sm font-semibold text-text-medium mt-2">Knowledge transfer</p>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Expert execution provides learning opportunities for team capability development.
                </p>
                <div className="mt-6 text-center">
                  <Link href="/services/elevate" className="text-purple-600 hover:text-purple-500 font-semibold transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-600/10 to-teal-50 p-6 rounded-xl border border-emerald-600/20 inline-block">
                <Link href="/services" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-500 transition-colors text-lg">
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