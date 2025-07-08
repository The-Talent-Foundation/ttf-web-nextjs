import { Link } from 'wouter';
import { useEffect } from 'react';
import { Zap, Brain, Users, AlertTriangle, ArrowRight, CheckCircle2, Sparkles, TrendingUp, Target, Settings, Lightbulb, Award, BookOpen, BarChart3, Star, Search, Cpu } from 'lucide-react';
import ScrollAnimations from '@/components/ScrollAnimations';

export default function Elevate() {
  // Handle scroll to anchor on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <ScrollAnimations>
      <div>
        {/* Hero Section */}
        <section id="hero" className="bg-gradient-to-br from-purple-50 to-white py-xxxl geometric-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-lg">
                Elevate: Build an <span className="text-purple-600">AI-Savvy, High-Performance</span> TA Team
              </h1>
              <p className="text-lg md:text-xl text-text-medium mb-xl">
                Skills gaps drain speed, quality, and budget, Elevate transforms recruiters into strategic, metric-moving operators. 
                Expert-led, bespoke programs embed advanced techniques and critical AI literacy so your team delivers measurable hiring outcomes, fast.
              </p>
              <div className="flex flex-col sm:flex-row gap-md justify-center">
                <a href="https://cal.com/adamkovacs/the-talent-foundation" target="_blank" rel="noopener noreferrer" className="btn-primary bg-purple-600 hover:bg-purple-700">
                  Request Skill Needs Assessment
                </a>
                <Link href="/services" className="btn-secondary border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
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
                When Capability Lags, Execution (and Revenue) Suffer
              </h2>
              <p className="text-lg text-text-medium">
                Skills inertia isn't a nuisance; it's a strategic liability. Here's how capability gaps damage performance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xxl">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-red-700 transition-colors">Strategic Incapability Drag</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Out of date skills throttle delivery on growth initiatives, putting launches and expansions at risk.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-blue-700 transition-colors">AI Adoption Gap</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Competitors wield AI to halve sourcing cycles while your team wrestles with basic prompts, or ignores the tools entirely.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-amber-700 transition-colors">Tech ROI Squandered</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  A six to seven figure TA stack sees less than 50% adoption, forfeiting efficiency gains and leaving data holes executives can't trust.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-purple-700 transition-colors">Bad-Hire & Agency Bleed</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Weak assessment and agency dependence add 15-25% fees and 30%+ salary losses per mis-hire, costs that compound quarter after quarter.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-600/10 to-indigo-50 p-8 rounded-xl border border-purple-600/20 text-center max-w-4xl mx-auto">
              <p className="text-lg font-semibold text-text-dark">
                Skills inertia isn't a nuisance; it's a <span className="font-bold text-purple-600">strategic liability</span>. Elevate replaces guess-and-hope with mastery.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="bg-white py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-xxl">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
                Capability Audit • Bespoke Curriculum • Applied Mastery
              </h2>
              <p className="text-lg text-text-medium mb-lg">
                We cut through noise to deliver <span className="font-semibold text-text-dark">durable</span> skill upgrades tied directly to your business goals.
              </p>
            </div>

            {/* Progressive Disclosure Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xxl">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-purple-600/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-purple-600 transition-colors">Capability Diagnostic & Skill Map</h3>
                  <p className="text-sm font-semibold text-text-medium mt-2">Where are the gaps?</p>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Evidence-based assessment of team proficiency, AI readiness, and tech usage. Uncover critical skill, adoption, and mindset shortfalls blocking results.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-indigo-500/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-indigo-600 transition-colors">Bespoke Curriculum Design</h3>
                  <p className="text-sm font-semibold text-text-medium mt-2">What do we teach?</p>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Role specific modules matched to scaling, global, or niche-talent demands. Design laser-focused learning paths linked to strategic objectives.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-emerald-500/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-emerald-700 transition-colors">Strategic AI Enablement</h3>
                  <p className="text-sm font-semibold text-text-medium mt-2">How do we embed AI?</p>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Literacy, use cases, governance, and hands on prompt labs that drive real productivity. Shift from "tool dabbling" to strategic, ethical AI deployment that sticks.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-amber-500/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-amber-700 transition-colors">Applied Projects & Coaching</h3>
                  <p className="text-sm font-semibold text-text-medium mt-2">How do we lock in ROI?</p>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Live scenarios on active requisitions, plus 30-day reinforcement and Q&A support. Ensure new skills translate into metrics the C-suite cares about.
                </p>
              </div>
            </div>

            {/* How Elevate Works */}
            <div className="bg-purple-50 p-xxl rounded-lg">
              <h3 className="text-xl font-bold text-text-dark mb-md text-center">Why It Works</h3>
              <div className="flex items-center justify-center gap-md flex-wrap">
                <span className="font-semibold text-text-dark">Practitioner-Led</span>
                <ArrowRight className="w-4 h-4 text-purple-600" />
                <span className="font-semibold text-text-dark">Application-First</span>
              </div>
              <p className="text-text-medium text-center mt-md">
                Frameworks come from leaders who built global TA functions and scaled AI in the wild, then are practiced on your <span className="font-semibold text-text-dark italic">actual</span> roles for immediate ROI.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="bg-bg-subtle py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-xxl">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
                What You'll Gain: Speed, Quality, Savings, Resilience
              </h2>
              <p className="text-lg text-text-medium">
                Transform your team into a high-impact, strategic force that delivers measurable results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xxl">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-purple-600 transition-colors">Master Complexity & Niche Talent</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  AI-augmented sourcing and advanced assessments cut time-to-fill for hard roles by <span className="font-semibold text-text-dark">25-45%</span>.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-emerald-700 transition-colors">Unlock Recruiter Productivity</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Modern workflows and automation lift quality placements per recruiter by <span className="font-semibold text-text-dark">20-40%</span>, freeing budget for growth.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-amber-700 transition-colors">Boost Hire Quality & Retention</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Structured, bias-mitigated assessment reduces costly mis-hires by <span className="font-semibold text-text-dark">20-40%</span> and improves first-year performance.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-red-700 transition-colors">Slash Agency & Rework Spend</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Internal mastery shrinks reliance on contingency search, eliminating <span className="font-semibold text-text-dark">15-25% fees</span> and re-hire costs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Elevate Section */}
        <section id="cta" className="bg-white py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-xxl">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
                The Elevate Difference: Mastery that Sticks and Scales
              </h2>
              <p className="text-lg text-text-medium">
                Four key differentiators that ensure lasting capability transformation.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg mb-xxl">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-purple-600/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-purple-600 transition-colors">Built by Operators, Not Lecturers</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Programs are authored and delivered by practitioners who ran hyper-scale TA teams and pioneered AI adoption.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-emerald-500/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-emerald-700 transition-colors">Context-Driven, Never Generic</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Curricula are custom-mapped to <span className="italic">your</span> strategy, market, and tech stack, no off-the-shelf fluff.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-amber-500/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-amber-700 transition-colors">Embedded Practice = Retention</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Real role projects, peer simulations, and post session coaching turn knowledge into habit.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-blue-500/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-blue-700 transition-colors">Ecosystem Leverage</h3>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Insights from Illuminate shape relevance; skills plug directly into Innovate processes for compounding impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverable Section */}
        <section className="bg-gradient-to-br from-purple-50 to-white py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-xxl">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
                Your Talent Capability Blueprint
              </h2>
              <p className="text-lg text-text-medium mb-lg">
                A confidential package including everything ready for immediate rollout and a measurable performance lift.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg mb-xxl">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-purple-600/20">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-text-dark group-hover:text-purple-600 transition-colors">Skill-gap Analysis & Priority Matrix</h3>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-emerald-500/20">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-text-dark group-hover:text-emerald-700 transition-colors">Custom Learning Path & Module Outlines</h3>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-amber-500/20">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-text-dark group-hover:text-amber-700 transition-colors">AI-enablement Governance & Tool Kit</h3>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-blue-500/20">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-text-dark group-hover:text-blue-700 transition-colors">Success Metrics and Tracking Dashboard</h3>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-red-500/20">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-text-dark group-hover:text-red-700 transition-colors">30-day Reinforcement & Q&A Schedule</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="benefits" className="bg-bg-subtle py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-purple-600/10 to-indigo-50 p-12 rounded-2xl border border-purple-600/20 text-center">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
                    Ready to Turn Your Team into a High-Impact, AI Ready Powerhouse?
                  </h2>
                  <p className="text-lg text-text-medium mb-8">
                    Secure a complimentary blueprint session to see exactly how Elevate can close critical skill gaps and drive hiring results.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-md justify-center">
                  <a href="https://cal.com/adamkovacs/the-talent-foundation" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    Request Skill Needs Assessment
                  </a>
                  <Link href="/services" className="btn-secondary text-lg px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
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
                Elevate capabilities integrate seamlessly with our other services for compounding impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xxl">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200 hover:border-blue-300 transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-7 h-7 text-white group-hover:animate-pulse" />
                  </div>
                  <h4 className="text-xl font-bold text-text-dark group-hover:text-blue-700 transition-colors">Shaped by Illuminate</h4>
                  <p className="text-sm font-semibold text-text-medium mt-2">Market intelligence</p>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Market insights shape curriculum relevance and skills prioritization.
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
                  <h4 className="text-xl font-bold text-text-dark group-hover:text-tf-orange transition-colors">Plugs into Innovate</h4>
                  <p className="text-sm font-semibold text-text-medium mt-2">Process optimization</p>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Enhanced capabilities enable effective adoption of new processes and systems.
                </p>
                <div className="mt-6 text-center">
                  <Link href="/services/innovate" className="text-tf-orange hover:text-tf-orange/80 font-semibold transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl border border-emerald-200 hover:border-emerald-300 transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-7 h-7 text-white group-hover:translate-y-[-4px] transition-transform duration-300" />
                  </div>
                  <h4 className="text-xl font-bold text-text-dark group-hover:text-emerald-700 transition-colors">Enables Accelerate</h4>
                  <p className="text-sm font-semibold text-text-medium mt-2">Expert execution</p>
                </div>
                <p className="text-text-medium leading-relaxed text-center">
                  Skilled teams can effectively utilize expert execution services and learn from them.
                </p>
                <div className="mt-6 text-center">
                  <Link href="/services/accelerate" className="text-emerald-600 hover:text-emerald-500 font-semibold transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600/10 to-indigo-50 p-6 rounded-xl border border-purple-600/20 inline-block">
                <Link href="/services" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors text-lg">
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