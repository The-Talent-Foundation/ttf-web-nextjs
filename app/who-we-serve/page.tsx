import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Who We Serve | The Talent Foundation',
  description: 'Focused expertise for your most critical, complex talent challenges. Partner with leaders navigating demanding inflection points and strategic transformations.',
};

export default function WhoWeServePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tf-blue to-tf-orange text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Focused Expertise for Your Most Critical, Complex Talent Challenges
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-5xl mx-auto">
            Standard approaches fail when the stakes are highest. The Talent Foundation partners exclusively with ambitious leaders navigating demanding inflection points: rapid growth, critical transformations, high-risk global expansion, essential capability builds. We deliver specialized talent enablement solutions architected for your specific context, ensuring predictable results where generalist methods create risk and frustration.
          </p>
        </div>
      </section>

      {/* Focus Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">The Undeniable Strategic Advantage of Deep Specialization</h2>
            <div className="text-lg text-gray-700 space-y-6">
              <p>
                Let's be direct: complexity demands focus. Attempting to solve high-stakes talent challenges with generic approaches or partners spread thin across unrelated domains is inherently risky and inefficient. <strong>The Talent Foundation deliberately concentrates its entire expertise solely on these specific, demanding scenarios.</strong>
              </p>
              <p>
                This relentless focus cultivates <strong>unmatched pattern recognition for subtle risks, generates far more relevant performance benchmarks, enables significantly faster diagnostics, and allows us to architect uniquely effective, battle-tested enablement solutions.</strong> For organizations like yours, grappling with these specific high-stakes challenges, our specialization translates directly into:
              </p>
              <ul className="space-y-4 mt-8">
                <li className="flex items-start">
                  <span className="text-tf-orange font-bold mr-3">•</span>
                  <span><strong>Significantly Lower Execution Risk:</strong> We've navigated these waters before.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tf-orange font-bold mr-3">•</span>
                  <span><strong>Demonstrably Faster, More Predictable Results:</strong> Proven methods mean less trial-and-error (often improving critical timelines by 30-50%+).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tf-orange font-bold mr-3">•</span>
                  <span><strong>Superior Long-Term ROI:</strong> Building targeted capability delivers far greater value than perpetual reliance on fragmented solutions.</span>
                </li>
              </ul>
              <p className="text-xl font-semibold text-center mt-8 text-indigo-600">
                We succeed in complexity because deep specialization is our strategic commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Areas of Deep Expertise - Where TF Delivers Transformative Value</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Solving Critical Niche Talent Velocity Challenges",
                  voiceOfCustomer: "Our innovation hinges on hiring elite [AI/Cyber/Bio] experts. Six months+ vacancy isn't just slow; it's handing the market to competitors!",
                  challenge: "Intense global competition for hyper-scarce technical or scientific talent creates crippling bottlenecks. Your standard TA process likely delivers months of delay (costing potentially $Ms/quarter in opportunity) and fails to consistently attract or assess true A-players.",
                  value: "We diagnose the true velocity chokepoint (precision sourcing? credible assessment? offer strategy?). Our integrated enablement solution combines immediate expert execution (Accelerate using advanced techniques), deep market/competitor intelligence (Illuminate), and crucial internal skill building (Elevate) to build your sustainable engine for securing niche talent measurably faster (targeting 30-50% TtF reduction) without compromising quality.",
                  nextStep: "See how Accelerate + Elevate win the war for niche talent.",
                  links: ["/services/accelerate", "/services/elevate"]
                },
                {
                  title: "Executing Predictable PE/VC Portfolio Scaling & Value Creation",
                  voiceOfCustomer: "The Value Creation Plan demands we double headcount profitably within 18 months. We need absolute execution reliability and talent ROI, not excuses.",
                  challenge: "Executing aggressive PE/VC growth mandates requires extreme speed, talent quality, scalability, and demonstrable ROI. Talent failures directly threaten VCP milestones, investor confidence, and exit multiples (easily impacting valuation by $10M-$100M+). Predictability is non-negotiable.",
                  value: "We understand the unique demands of the PE/VC lifecycle. We implement scalable, metrics-driven TA operating systems (Innovate), provide actionable talent ROI dashboards aligned with VCPs (Illuminate), deploy specialized Accelerate execution tuned for investor velocity, and build sustainable Elevate capability – reliably transforming talent into a measurable driver of accelerated value creation and successful exits.",
                  nextStep: "Explore our IIEA framework architected for PE/VC VCP execution & IRR.",
                  links: ["/services"]
                },
                {
                  title: "De-Risking & Accelerating Critical First Global Expansion",
                  voiceOfCustomer: "Entering Asia is key, but navigating local compliance AND finding leaders in Singapore seems like a minefield. Failure here isn't an option.",
                  challenge: "Your first major international leap introduces immense unknowns and magnified risks: complex compliance, unfamiliar talent pools, cultural pitfalls. Missteps create costly delays (3-6+ months lost easily), critical hiring failures, and potentially crippling legal/financial penalties (easily 6-7 figures) that jeopardize the entire expansion strategy.",
                  value: "We act as your expert guide, systematically de-risking global launch. We deliver crucial local market & compliance intelligence (Illuminate), architect efficient globally consistent yet locally compliant hiring processes (Innovate), provide expert execution for foundational hires (Accelerate), and build your internal team's vital global TA competency (Elevate) – enabling faster, safer, sustainable international growth.",
                  nextStep: "See how Illuminate + Innovate provide the blueprint for compliant global market entry.",
                  links: ["/services/illuminate", "/services/innovate"]
                },
                {
                  title: "Architecting Your Scalable, High-Performing TA Function",
                  voiceOfCustomer: "We just closed Series C. Ad-hoc hiring is killing us! We need a professional, predictable TA engine built for scale, starting yesterday.",
                  challenge: "Your existing chaotic or non-existent hiring process is actively hindering growth, causing internal friction, delivering poor hires (costing 30%+ salary each), and racking up massive hidden inefficiency costs (easily $1M+ annually for rapidly scaling companies). You lack the system for predictable success.",
                  value: "We are architects and builders of high-performance TA functions. We provide the strategic blueprint & rigorous process design (Innovate), implement the necessary technology enablement, build foundational team capability through targeted Elevate programs, and provide essential Accelerate execution support during the transition – rapidly creating the predictable, metrics-driven, scalable internal TA engine essential to reliably fuel your next stage of growth.",
                  nextStep: "Discover how Innovate + Elevate rapidly build your strategic TA capability.",
                  links: ["/services/innovate", "/services/elevate"]
                },
                {
                  title: "Enabling Your Critical Technology Transformation with the Right Talent",
                  voiceOfCustomer: "This $50M cloud migration is mission-critical, but sourcing enough engineers with these specific modern skills feels impossible. The project timeline is slipping.",
                  challenge: "Your vital technology modernization project is directly jeopardized by an acute scarcity of essential modern skills. Talent bottlenecks cause costly delays (often adding 20-40%+ to project timelines/budgets), increase failure risk (>50% of large tech projects underperform), and force extreme reliance on expensive external consultants.",
                  value: "We de-risk your critical transformation by ensuring talent enables, not blocks, success. We combine rapid, precise acquisition of critical external skills (Accelerate) with data-driven strategies to effectively upskill/reskill your internal workforce (Elevate), building the sustainable internal capability needed to fully realize the transformation's intended ROI and manage the new technology stack confidently long-term.",
                  nextStep: "Learn how Accelerate + Elevate secure talent to ensure transformation success.",
                  links: ["/services/accelerate", "/services/elevate"]
                },
                {
                  title: "Winning the Market with High-Velocity Go-To-Market Team Builds",
                  voiceOfCustomer: "Our disruptive product must capture the market lead in Q3. We need a fully ramped, elite GTM team on day one. Speed and quality are non-negotiable.",
                  challenge: "You face a narrow, hyper-competitive window for a make-or-break new product launch. Building the specialized Go-To-Market team (Sales, Marketing, CS) at the required extreme velocity is impossible internally, directly risking launch failure and forfeiture of potentially >50% of first-year revenue potential to faster competitors.",
                  value: "We are specialists in executing high-velocity GTM team builds under intense pressure. Our Accelerate service leverages deep GTM talent expertise to deliver high-performing individuals at the speed your launch demands. This is often coupled with targeted Elevate programs for rapid, effective onboarding – ensuring your team captures critical market share from day one.",
                  nextStep: "See how Accelerate executes high-velocity GTM builds to secure market leadership.",
                  links: ["/services/accelerate"]
                },
                {
                  title: "Executing High-Volume, High-Complexity Hiring Projects Reliably",
                  voiceOfCustomer: "Staffing this major new facility means hiring 800+ across multiple shifts, including 150 skilled technicians needing specific certs, while meeting stringent safety regulations – all in 5 months. Our current process can't handle this.",
                  challenge: "Undertaking massive, time-bound hiring projects compounded by significant complexity (niche skills within volume, strict compliance, multi-location logistics) inevitably breaks standard TA systems. This creates high risk of project failure (missing critical deadlines can cost $Ks-$Ms daily), serious compliance breaches (potential 7-figure fines), inconsistent quality, and massive inefficiency (inflating project talent costs by 20-40%+).",
                  value: "We architect and execute robust, scalable solutions designed specifically for this extreme dual pressure. We blend rigorous process engineering (Innovate), scalable expert execution support (Accelerate), and targeted team/manager training (Elevate) to reliably deliver quality talent at volume, ensuring on-time project success while rigorously managing complexity and risk.",
                  nextStep: "Explore our Integrated Services for mastering complex hiring at scale.",
                  links: ["/services"]
                }
              ].map((area, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-4 text-indigo-600">{area.title}</h3>
                  <div className="mb-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                    <p className="text-sm italic text-blue-800">"{area.voiceOfCustomer}"</p>
                  </div>
                  <div className="space-y-4 text-sm text-gray-700">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">The Challenge:</h4>
                      <p>{area.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Our Focused Enablement Value:</h4>
                      <p>{area.value}</p>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="font-semibold text-violet-600">{area.nextStep}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Enablement Partnership Drives Transformational Value With Leaders Who Are...</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our collaborative, capability-building model achieves the greatest strategic impact and ROI when partnered with organizations possessing these core characteristics:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "Strategically Mandated",
                  description: "Possessing a clear executive mandate recognizing talent acquisition as mission-critical and requiring fundamental improvement, not just tactical fixes."
                },
                {
                  icon: "🤝",
                  title: "Committed to Capability",
                  description: "Viewing the investment in robust talent systems, processes, and skills as building a crucial, long-term strategic asset."
                },
                {
                  icon: "💡",
                  title: "Open to Insight",
                  description: "Willingness to rigorously examine existing practices, embrace data-driven decisions, and adopt proven modern methodologies for superior results."
                },
                {
                  icon: "📊",
                  title: "Focused on Sustainable Outcomes",
                  description: "Prioritizing lasting internal strength, predictable high performance, and enduring strategic advantage over temporary, fragmented solutions."
                }
              ].map((characteristic, index) => (
                <div key={index} className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">{characteristic.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-indigo-600 mb-2">{characteristic.title}</h3>
                      <p className="text-gray-700">{characteristic.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Right Fit Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Ensuring the Right Fit: Our Commitment to Strategic Enablement</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our deep expertise is laser-focused on <strong>enablement</strong> solutions for the complex, high-stakes talent challenges outlined above. This is where we deliver uniquely transformative value. Consequently, TF is generally <em>not</em> the optimal partner for standard, low-volume contingency searches or basic temporary staffing where <strong>building enduring internal capability and strategic process improvement is not the primary objective.</strong> Our belief in <strong>radical transparency</strong> means we'll be upfront if another approach better suits your immediate, non-strategic needs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Facing a High-Stakes Talent Challenge? Let's Discuss a Strategic Solution.</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            If your organization confronts the type of complexity where standard approaches create unacceptable risk, The Talent Foundation offers specialized expertise grounded in proven enablement frameworks. Explore how our strategic partnership can deliver predictable results and build your lasting capability.
          </p>
          <div className="space-x-4 space-y-4 md:space-y-0">
            <Link 
              href="/contact" 
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-lg"
            >
              Discuss Your Specific Strategic Challenge
            </Link>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link 
                href="/services" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Explore Our Services
              </Link>
              <Link 
                href="/about" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Learn About Our Approach
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}