import { Link } from 'wouter';
import { Users, Settings, ArrowRight, Target, TrendingUp, Globe, Cog, Zap, Rocket, Building, CheckCircle2, Shield, Lightbulb, BarChart3, Award, Clock } from 'lucide-react';
import ScrollAnimations from '@/components/ScrollAnimations';

export default function WhoWeServe() {
  return (
    <ScrollAnimations>
      <div>
        {/* Hero Section */}
        <section id="hero" className="bg-gradient-to-br from-blue-50 to-white py-xxxl geometric-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-lg">
                Focused Expertise for Your Most <span className="text-tf-orange">Critical, Complex</span> Talent Challenges
              </h1>
              <p className="text-lg md:text-xl text-text-medium mb-lg">
                <span className="font-semibold text-text-dark">Standard approaches fail when the stakes are highest.</span> The Talent Foundation partners exclusively with ambitious leaders navigating demanding inflection points: rapid growth, critical transformations, high-risk global expansion, essential capability builds.
              </p>
              <div className="bg-gradient-to-r from-tf-orange/10 to-blue-50 p-6 rounded-xl border border-tf-orange/20 inline-block">
                <p className="text-lg font-semibold text-text-dark">
                  We deliver specialized <span className="text-tf-orange">talent enablement</span> solutions architected for your specific context, ensuring predictable results where generalist methods create risk and frustration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Advantage of Specialization */}
        <section id="overview" className="bg-bg-subtle py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-xxl">
                <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
                  The Undeniable Strategic Advantage of Deep Specialization
                </h2>
                <p className="text-lg text-text-medium mb-lg">
                  Let's be direct: complexity demands focus. Attempting to solve high-stakes talent challenges with generic approaches or partners spread thin across unrelated domains is inherently risky and inefficient.
                </p>
                <p className="text-lg text-text-dark">
                  <span className="font-semibold text-tf-orange">The Talent Foundation deliberately concentrates its entire expertise solely on these specific, demanding scenarios.</span>
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xxl">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-dark group-hover:text-red-700 transition-colors">Significantly Lower Execution Risk</h3>
                  </div>
                  <p className="text-text-medium leading-relaxed text-center">
                    We've navigated these waters before with proven methodologies.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-dark group-hover:text-emerald-700 transition-colors">Faster, More Predictable Results</h3>
                  </div>
                  <p className="text-text-medium leading-relaxed text-center">
                    Proven methods mean less trial-and-error (often improving critical timelines by <span className="font-semibold text-text-dark">30-50%+</span>).
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-dark group-hover:text-blue-700 transition-colors">Superior Long-Term ROI</h3>
                  </div>
                  <p className="text-text-medium leading-relaxed text-center">
                    Building targeted capability delivers far greater value than perpetual reliance on fragmented solutions.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-lg font-semibold text-text-dark">
                  We succeed in complexity because <span className="text-tf-orange">deep specialization is our strategic commitment.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Areas of Deep Expertise */}
        <section id="client-types" className="bg-white py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-xxl">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
                Our Areas of Deep Expertise
              </h2>
              <p className="text-lg text-text-medium max-w-4xl mx-auto">
                Where The Talent Foundation delivers transformative value through specialized enablement solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
              {/* Card 1: Specialized Talent Velocity */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-blue-500/20">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-blue-700 transition-colors mb-2">
                    Solving Critical Niche Talent Velocity Challenges
                  </h3>
                  <p className="text-sm italic text-text-medium mb-4">
                    "Our innovation hinges on hiring elite [AI/Cyber/Bio] experts. Six months+ vacancy isn't just slow; it's handing the market to competitors!"
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-text-medium leading-relaxed">
                    <span className="font-semibold text-text-dark">The Challenge:</span> Intense global competition for hyper-scarce technical or scientific talent creates crippling bottlenecks.
                  </p>
                  <p className="text-text-medium leading-relaxed">
                    <span className="font-semibold text-text-dark">Our Value:</span> Integrated enablement solution targeting <span className="font-semibold text-text-dark">30-50% time-to-fill reduction</span> without compromising quality.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Link href="/services/accelerate" className="text-emerald-600 hover:text-emerald-500 font-semibold text-sm transition-colors">
                      Accelerate →
                    </Link>
                    <Link href="/services/elevate" className="text-purple-600 hover:text-purple-500 font-semibold text-sm transition-colors">
                      Elevate →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2: PE/VC Portfolio Scaling */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-emerald-500/20">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-emerald-700 transition-colors mb-2">
                    Executing Predictable PE/VC Portfolio Scaling & Value Creation
                  </h3>
                  <p className="text-sm italic text-text-medium mb-4">
                    "The Value Creation Plan demands we double headcount profitably within 18 months. We need absolute execution reliability and talent ROI, not excuses."
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-text-medium leading-relaxed">
                    <span className="font-semibold text-text-dark">The Challenge:</span> Executing aggressive PE/VC growth mandates requires extreme speed, talent quality, scalability, and demonstrable ROI.
                  </p>
                  <p className="text-text-medium leading-relaxed">
                    <span className="font-semibold text-text-dark">Our Value:</span> Metrics-driven TA operating systems aligned with VCPs, reliably transforming talent into measurable value creation driver.
                  </p>
                  <div className="mt-4">
                    <Link href="/services" className="text-tf-orange hover:text-tf-orange/80 font-semibold text-sm transition-colors">
                      Explore IIEA Framework →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 3: Global Expansion */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-purple-500/20">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-purple-700 transition-colors mb-2">
                    De-Risking & Accelerating Critical First Global Expansion
                  </h3>
                  <p className="text-sm italic text-text-medium mb-4">
                    "Entering Asia is key, but navigating local compliance AND finding leaders in Singapore seems like a minefield. Failure here isn't an option."
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-text-medium leading-relaxed">
                    <span className="font-semibold text-text-dark">The Challenge:</span> First major international leap introduces immense unknowns and magnified risks.
                  </p>
                  <p className="text-text-medium leading-relaxed">
                    <span className="font-semibold text-text-dark">Our Value:</span> Systematically de-risk global launch with local market intelligence and globally consistent yet locally compliant processes.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Link href="/services/illuminate" className="text-blue-600 hover:text-blue-500 font-semibold text-sm transition-colors">
                      Illuminate →
                    </Link>
                    <Link href="/services/innovate" className="text-tf-orange hover:text-tf-orange/80 font-semibold text-sm transition-colors">
                      Innovate →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 4: TA Function Build */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-tf-orange/20">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-tf-orange to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Cog className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-tf-orange transition-colors mb-2">
                    Architecting Your Scalable, High-Performing TA Function
                  </h3>
                  <p className="text-sm italic text-text-medium mb-4">
                    "We just closed Series C. Ad-hoc hiring is killing us! We need a professional, predictable TA engine built for scale, starting yesterday."
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-text-medium leading-relaxed">
                    <span className="font-semibold text-text-dark">The Challenge:</span> Existing chaotic hiring process is actively hindering growth and causing massive hidden costs.
                  </p>
                  <p className="text-text-medium leading-relaxed">
                    <span className="font-semibold text-text-dark">Our Value:</span> Architects of high-performance TA functions that create predictable, metrics-driven, scalable internal engines.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Link href="/services/innovate" className="text-tf-orange hover:text-tf-orange/80 font-semibold text-sm transition-colors">
                      Innovate →
                    </Link>
                    <Link href="/services/elevate" className="text-purple-600 hover:text-purple-500 font-semibold text-sm transition-colors">
                      Elevate →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 5: Technology Transformation */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-amber-500/20">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-amber-700 transition-colors mb-2">
                    Enabling Critical Technology Transformation with the Right Talent
                  </h3>
                  <p className="text-sm italic text-text-medium mb-4">
                    "This $50M cloud migration is mission-critical, but sourcing enough engineers with these specific modern skills feels impossible. The project timeline is slipping."
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-text-medium leading-relaxed">
                    <span className="font-semibold text-text-dark">The Challenge:</span> Vital technology modernization jeopardized by acute scarcity of essential modern skills.
                  </p>
                  <p className="text-text-medium leading-relaxed">
                    <span className="font-semibold text-text-dark">Our Value:</span> De-risk transformation by ensuring talent enables, not blocks, success through rapid acquisition and upskilling.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Link href="/services/accelerate" className="text-emerald-600 hover:text-emerald-500 font-semibold text-sm transition-colors">
                      Accelerate →
                    </Link>
                    <Link href="/services/elevate" className="text-purple-600 hover:text-purple-500 font-semibold text-sm transition-colors">
                      Elevate →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 6: GTM Launch */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-red-500/20">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-red-700 transition-colors mb-2">
                    Winning the Market with High-Velocity Go-To-Market Team Builds
                  </h3>
                  <p className="text-sm italic text-text-medium mb-4">
                    "Our disruptive product must capture the market lead in Q3. We need a fully ramped, elite GTM team on day one. Speed and quality are non-negotiable."
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-text-medium leading-relaxed">
                    <span className="font-semibold text-text-dark">The Challenge:</span> Narrow, hyper-competitive window for make-or-break product launch requiring extreme velocity.
                  </p>
                  <p className="text-text-medium leading-relaxed">
                    <span className="font-semibold text-text-dark">Our Value:</span> Specialists in executing high-velocity GTM team builds that capture critical market share from day one.
                  </p>
                  <div className="mt-4">
                    <Link href="/services/accelerate" className="text-emerald-600 hover:text-emerald-500 font-semibold text-sm transition-colors">
                      See Accelerate →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Value */}
        <section id="case-studies" className="bg-bg-subtle py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-xxl">
                <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
                  Our Enablement Partnership Drives Transformational Value
                </h2>
                <p className="text-lg text-text-medium">
                  Our collaborative, capability-building model achieves the greatest strategic impact and ROI when partnered with organizations possessing these core characteristics:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-dark group-hover:text-blue-700 transition-colors">Strategically Mandated</h3>
                  </div>
                  <p className="text-text-medium leading-relaxed">
                    Possessing a clear executive mandate recognizing talent acquisition as mission-critical and requiring fundamental improvement, not just tactical fixes.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-dark group-hover:text-emerald-700 transition-colors">Committed to Capability</h3>
                  </div>
                  <p className="text-text-medium leading-relaxed">
                    Viewing the investment in robust talent systems, processes, and skills as building a crucial, long-term strategic asset.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-dark group-hover:text-purple-700 transition-colors">Open to Insight</h3>
                  </div>
                  <p className="text-text-medium leading-relaxed">
                    Willingness to rigorously examine existing practices, embrace data-driven decisions, and adopt proven modern methodologies for superior results.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-tf-orange to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-dark group-hover:text-tf-orange transition-colors">Focused on Sustainable Outcomes</h3>
                  </div>
                  <p className="text-text-medium leading-relaxed">
                    Prioritizing lasting internal strength, predictable high performance, and enduring strategic advantage over temporary, fragmented solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Fit Section */}
        <section id="success-metrics" className="bg-white py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-2xl border border-indigo-200">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
                    Ensuring the Right Fit: Our Commitment to Strategic Enablement
                  </h2>
                </div>
                <div className="space-y-6 text-center">
                  <p className="text-lg text-text-dark">
                    Our deep expertise is laser-focused on <span className="font-bold text-indigo-600">enablement</span> solutions for the complex, high-stakes talent challenges outlined above. This is where we deliver uniquely transformative value.
                  </p>
                  <p className="text-lg text-text-medium">
                    Consequently, TF is generally not the optimal partner for standard, low-volume contingency searches or basic temporary staffing where building enduring internal capability and strategic process improvement is not the primary objective.
                  </p>
                  <p className="text-lg text-text-dark">
                    Our belief in <span className="font-semibold text-indigo-600">radical transparency</span> means we'll be upfront if another approach better suits your immediate, non-strategic needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="case-studies" className="bg-bg-subtle py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-tf-orange/10 to-indigo-50 p-12 rounded-2xl border border-tf-orange/20 text-center">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-tf-orange to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
                    Facing a High-Stakes Talent Challenge? Let's Discuss a Strategic Solution.
                  </h2>
                  <p className="text-lg text-text-medium mb-8">
                    If your organization confronts the type of complexity where standard approaches create unacceptable risk, The Talent Foundation offers specialized expertise grounded in proven enablement frameworks.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-md justify-center mb-6">
                  <a href="https://cal.com/adamkovacs/the-talent-foundation" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4 bg-tf-orange hover:bg-tf-orange/90 text-white rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    Discuss Your Specific Strategic Challenge
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row gap-md justify-center">
                  <Link href="/services" className="text-blue-600 hover:text-blue-500 font-semibold transition-colors">
                    Explore Our Services
                  </Link>
                  <Link href="/about" className="text-indigo-600 hover:text-indigo-500 font-semibold transition-colors">
                    Learn About Our Approach
                  </Link>
                  <Link href="/contact" className="text-tf-orange hover:text-tf-orange/80 font-semibold transition-colors">
                    Contact Us
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