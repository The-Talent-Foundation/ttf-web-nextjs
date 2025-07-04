import { Link } from 'wouter';
import { Lightbulb, TrendingUp, Eye, BarChart, Search, Users, Target, CheckCircle2, ArrowRight, Zap, Award, Shield, Brain, Settings, Clock, Star } from 'lucide-react';
import ScrollAnimations from '@/components/ScrollAnimations';

export default function About() {
  return (
    <ScrollAnimations>
      <div>
        {/* Hero Section */}
        <section id="hero" className="bg-gradient-to-br from-indigo-50 to-white py-xxxl geometric-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-lg">
                Expertise Forged in <span className="text-tf-orange">Complexity.</span> Enablement, Not Band-Aids.
              </h1>
              <p className="text-lg md:text-xl text-text-medium mb-xl">
                Traditional recruiting collapses under hypergrowth, global expansion, or niche skill scarcity. 
                We design systems so it never happens again.
              </p>
              <div className="flex flex-col sm:flex-row gap-md justify-center">
                <Link href="/contact" className="btn-primary bg-tf-orange hover:bg-tf-orange/90">
                  Talk with Adam
                </Link>
                <Link href="/services" className="btn-secondary border-tf-orange text-tf-orange hover:bg-tf-orange hover:text-white">
                  Explore the Ecosystem
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why We Exist - The Enablement Thesis */}
        <section className="bg-bg-subtle py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-xxl">
                <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
                  Buying Hires Is Easy. Building Capability Is Advantage.
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xxl">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-dark group-hover:text-red-700 transition-colors">Endless Agency Fees</h3>
                  </div>
                  <p className="text-text-medium leading-relaxed text-center">
                    <span className="font-semibold text-text-dark">Rent outcomes</span> and lock you into dependency without building internal strength.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Settings className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-dark group-hover:text-amber-700 transition-colors">Point-Solution "Fixes"</h3>
                  </div>
                  <p className="text-text-medium leading-relaxed text-center">
                    Treat symptoms, not root causes, leaving fundamental problems unsolved.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-dark group-hover:text-emerald-700 transition-colors">Internal Data-Driven Engine</h3>
                  </div>
                  <p className="text-text-medium leading-relaxed text-center">
                    Delivers <span className="font-semibold text-text-dark">compounding ROI</span> and lower long-term risk through sustained capability.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-tf-orange/10 to-red-50 p-8 rounded-xl border border-tf-orange/20 text-center">
                <p className="text-lg font-semibold text-text-dark">
                  Everything we do reinforces that principle: <span className="font-bold text-blue-600">Illuminate</span> → <span className="font-bold text-tf-orange">Innovate</span> → <span className="font-bold text-purple-600">Elevate</span> → <span className="font-bold text-emerald-600">Accelerate</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Guiding Principles */}
        <section className="bg-white py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-xxl">
                <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">Our Guiding Principles</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xxl">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-blue-500/20">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-dark group-hover:text-blue-700 transition-colors">Design Thinking</h3>
                  </div>
                  <p className="text-text-medium leading-relaxed">
                    User-first diagnostics ensure we solve the <span className="font-semibold text-text-dark italic">right</span> problems and drive rapid adoption.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-purple-500/20">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-dark group-hover:text-purple-700 transition-colors">First-Principles Rigor</h3>
                  </div>
                  <p className="text-text-medium leading-relaxed">
                    We rebuild from bedrock logic, never copy-pasting <span className="font-semibold text-text-dark">"best practice"</span> templates.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-emerald-500/20">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-dark group-hover:text-emerald-700 transition-colors">Continuous Improvement</h3>
                  </div>
                  <p className="text-text-medium leading-relaxed">
                    Data loops and small iterations compound efficiency and quality over time.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-amber-500/20">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-dark group-hover:text-amber-700 transition-colors">Radical Transparency</h3>
                  </div>
                  <p className="text-text-medium leading-relaxed">
                    Clear metrics, blunt feedback, and honest feasibility checks de-risk the partnership.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-tf-orange/10 to-indigo-50 p-8 rounded-xl border border-tf-orange/20">
                <blockquote className="text-center text-lg font-medium text-text-dark mb-4 italic">
                  "Real success is when clients outgrow the need for external recruiters because we helped them build the engine."
                </blockquote>
                <cite className="block text-center text-tf-orange font-semibold">Adam Kovacs</cite>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Profile */}
        <section className="bg-bg-subtle py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-xxl items-center mb-xxl">
                <div className="md:col-span-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
                    Adam Kovacs: Architect of High-Performance Talent Systems
                  </h2>
                  <p className="text-lg text-text-medium mb-lg">
                    Adam stays hands on with every engagement with no handoff to junior teams.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end">
                  <div className="w-64 h-64 bg-gradient-to-br from-tf-orange/20 to-indigo-100 rounded-full flex items-center justify-center shadow-xl">
                    <div className="w-56 h-56 bg-white rounded-full flex items-center justify-center">
                      <div className="w-48 h-48 bg-gradient-to-br from-tf-orange to-indigo-600 rounded-full flex items-center justify-center">
                        <Users className="w-24 h-24 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <BarChart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-dark group-hover:text-red-700 transition-colors">Scale Under Pressure</h3>
                  </div>
                  <p className="text-text-medium leading-relaxed">
                    Led global TA at Amazon | AWS, delivering <span className="font-semibold text-text-dark">thousands</span> of technical & leadership hires per year during hyper-growth.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Search className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-dark group-hover:text-blue-700 transition-colors">Intel Pioneer</h3>
                  </div>
                  <p className="text-text-medium leading-relaxed">
                    Founded AWS Talent Intelligence to break niche skill scarcity with data driven market insight.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-dark group-hover:text-emerald-700 transition-colors">Capability Builder</h3>
                  </div>
                  <p className="text-text-medium leading-relaxed">
                    Designed training adopted by <span className="font-semibold text-text-dark">1,300+</span> TA pros worldwide, measurably lifting sourcing speed and assessment quality.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-dark group-hover:text-purple-700 transition-colors">Industry Voice</h3>
                  </div>
                  <p className="text-text-medium leading-relaxed">
                    International speaker who demystifies AI and data strategy for practical TA impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Our Boutique Model Works Better */}
        <section className="bg-white py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-xxl">
                <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
                  Why Our Boutique Model Works Better
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-tf-orange/20">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-tf-orange to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-dark group-hover:text-tf-orange transition-colors">Narrow Focus, Deep Mastery</h3>
                  </div>
                  <p className="text-text-medium leading-relaxed">
                    <span className="font-semibold text-text-dark">100%</span> of our time is spent on complex enablement, not broad-market recruiting.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-blue-500/20">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-dark group-hover:text-blue-700 transition-colors">Direct Senior Expertise</h3>
                  </div>
                  <p className="text-text-medium leading-relaxed">
                    You work with principals start to finish with zero leverage model dilution.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-emerald-500/20">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-dark group-hover:text-emerald-700 transition-colors">Agility & Customisation</h3>
                  </div>
                  <p className="text-text-medium leading-relaxed">
                    Lean structure means faster pivots and solutions tailored to your exact context.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-purple-500/20">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Settings className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-dark group-hover:text-purple-700 transition-colors">Integrated Ecosystem</h3>
                  </div>
                  <p className="text-text-medium leading-relaxed">
                    Strategy, process, skills, and execution connect seamlessly for outsized, lasting ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrity & Fit */}
        <section className="bg-bg-subtle py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-12 rounded-2xl shadow-xl">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-tf-orange to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">Integrity & Fit</h2>
                </div>
                <div className="space-y-6 text-center">
                  <p className="text-lg text-text-dark">
                    We're the right partner when you need to <span className="font-bold text-tf-orange">build</span> lasting capability, not just fill a req.
                  </p>
                  <p className="text-lg text-text-medium">
                    If contingency search or temp staffing solves your issue faster, we'll recommend alternatives. 
                    <span className="font-semibold text-text-dark">Your outcome {'>'}our revenue.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-tf-orange/10 to-indigo-50 p-12 rounded-2xl border border-tf-orange/20 text-center">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-tf-orange to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
                    Ready to Turn Talent Into a Durable Competitive Edge?
                  </h2>
                  <p className="text-lg text-text-medium mb-8">
                    Schedule a candid strategy conversation. If we're not the best fit, we'll say so and point you to who is.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-md justify-center">
                  <Link href="/contact" className="btn-primary text-lg px-8 py-4 bg-tf-orange hover:bg-tf-orange/90 text-white rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    Schedule a Strategy Call
                  </Link>
                  <div className="flex flex-col sm:flex-row gap-md justify-center">
                    <Link href="/who-we-serve" className="btn-secondary text-lg px-6 py-4 bg-white border-2 border-tf-orange text-tf-orange hover:bg-tf-orange hover:text-white rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                      See Who We Serve
                    </Link>
                    <Link href="/contact" className="btn-secondary text-lg px-6 py-4 bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ScrollAnimations>
  );
}