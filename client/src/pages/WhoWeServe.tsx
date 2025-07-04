import { Link } from 'wouter';
import { Users, Settings, ArrowRight } from 'lucide-react';

export default function WhoWeServe() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-tf-blue-light to-white py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-md">
              Who We Serve: <span className="text-tf-orange">Focused Expertise</span> for Complex Challenges
            </h1>
            <p className="text-lg text-text-medium">
              We partner exclusively with organizations facing <span className="font-semibold text-text-dark">complex talent demands</span> where standard approaches fail. Our specialized knowledge delivers <span className="font-semibold text-text-dark">tailored solutions where generic approaches fall short</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Advantage */}
      <section className="bg-bg-subtle py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">The Strategic Advantage of Specialization</h2>
            <p className="text-lg text-text-medium mb-lg">
              Standard talent acquisition approaches often stumble when faced with unique market conditions, specialized skill requirements, or complex organizational dynamics.
            </p>
            <p className="text-lg text-text-dark">
              Our deep focus on specific challenge types enables <span className="font-semibold text-text-dark">unmatched pattern recognition</span>, <span className="font-semibold text-text-dark">more relevant benchmarks</span>, <span className="font-semibold text-text-dark">faster diagnostics</span>, and <span className="font-semibold text-text-dark">highly effective, tailored solutions</span>. This specialization translates directly into <span className="font-semibold text-text-dark">lower risk, faster and more predictable results</span>, and <span className="font-semibold text-text-dark">significantly higher ROI</span> for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="bg-white py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-xxl">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">Our Areas of Deep Expertise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xxl">
            <div className="bg-white p-xxl rounded-lg shadow-lg border border-border-light hover:shadow-xl transition-shadow">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-lg flex items-center justify-center text-gray-500 text-sm">
                [Placeholder: Reduced Time-to-Fill Graph]
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-md">Solving Specialized Talent Velocity (ICP #1)</h3>
              <blockquote className="border-l-4 border-tf-blue-lighter pl-md mb-md italic text-text-medium">
                "We need to hire 50 specialized engineers in 6 months, but our current process takes 4 months per hire."
              </blockquote>
              <p className="text-text-medium mb-md">
                Organizations experiencing rapid growth or product launches that demand specialized skills at unprecedented speed and scale.
              </p>
              <p className="text-text-dark mb-lg">
                <strong>Our Focused Value:</strong> <span className="font-semibold text-text-dark">Accelerate</span> specialized talent pipelines with <span className="font-semibold text-text-dark">Illuminate</span> market intelligence, enabling predictable hiring velocity.
              </p>
              <div className="pt-md border-t border-border-light">
                <Link href="/contact" className="inline-flex items-center text-tf-blue font-medium hover:text-tf-orange transition-colors">
                  Explore Specialized Talent Solutions
                  <ArrowRight className="ml-xs w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-xxl rounded-lg shadow-lg border border-border-light hover:shadow-xl transition-shadow">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-lg flex items-center justify-center text-gray-500 text-sm">
                [Placeholder: AI Adoption Metrics Dashboard]
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-md">AI-Enabled Talent Transformation (ICP #2)</h3>
              <blockquote className="border-l-4 border-tf-blue-lighter pl-md mb-md italic text-text-medium">
                "Our recruiters are drowning in manual work while AI tools sit unused."
              </blockquote>
              <p className="text-text-medium mb-md">
                Organizations struggling to leverage AI and automation in their talent acquisition processes effectively.
              </p>
              <p className="text-text-dark mb-lg">
                <strong>Our Focused Value:</strong> <span className="font-semibold text-text-dark">Elevate</span> teams with practical AI literacy while <span className="font-semibold text-text-dark">Innovate</span> creates seamless AI-human workflows.
              </p>
              <div className="pt-md border-t border-border-light">
                <Link href="/contact" className="inline-flex items-center text-tf-blue font-medium hover:text-tf-orange transition-colors">
                  Discover AI Enablement Programs
                  <ArrowRight className="ml-xs w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-xxl rounded-lg shadow-lg border border-border-light hover:shadow-xl transition-shadow">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-lg flex items-center justify-center text-gray-500 text-sm">
                [Placeholder: Market Expansion Timeline]
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-md">Strategic Market Expansion (ICP #3)</h3>
              <blockquote className="border-l-4 border-tf-blue-lighter pl-md mb-md italic text-text-medium">
                "We're entering new markets but don't understand the local talent landscape."
              </blockquote>
              <p className="text-text-medium mb-md">
                Companies expanding into new geographic markets or launching new product lines requiring unknown talent profiles.
              </p>
              <p className="text-text-dark mb-lg">
                <strong>Our Focused Value:</strong> <span className="font-semibold text-text-dark">Illuminate</span> provides market intelligence while <span className="font-semibold text-text-dark">Innovate</span> designs location-specific processes.
              </p>
              <div className="pt-md border-t border-border-light">
                <Link href="/contact" className="inline-flex items-center text-tf-blue font-medium hover:text-tf-orange transition-colors">
                  Plan Your Market Expansion
                  <ArrowRight className="ml-xs w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-xxl rounded-lg shadow-lg border border-border-light hover:shadow-xl transition-shadow">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-lg flex items-center justify-center text-gray-500 text-sm">
                [Placeholder: Portfolio Scaling Metrics]
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-md">VC Portfolio Scaling (ICP #4)</h3>
              <blockquote className="border-l-4 border-tf-blue-lighter pl-md mb-md italic text-text-medium">
                "Our portfolio companies need consistent talent strategies that scale with their growth."
              </blockquote>
              <p className="text-text-medium mb-md">
                Venture capital firms seeking to provide standardized talent enablement across their portfolio companies.
              </p>
              <p className="text-text-dark mb-lg">
                <strong>Our Focused Value:</strong> <span className="font-semibold text-text-dark">Innovate</span> creates scalable frameworks while <span className="font-semibold text-text-dark">Elevate</span> builds consistent capabilities across portfolios.
              </p>
              <div className="pt-md border-t border-border-light">
                <Link href="/contact" className="inline-flex items-center text-tf-blue font-medium hover:text-tf-orange transition-colors">
                  Explore Portfolio Solutions
                  <ArrowRight className="ml-xs w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section className="bg-bg-subtle py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">Our Enablement Approach: Maximizing Value Through Partnership</h2>
            <p className="text-lg text-text-dark mb-xxl">
              Our collaborative methodology ensures optimal outcomes by aligning our expertise with your specific context and objectives.
            </p>
            <div className="space-y-lg">
              <div className="flex items-start gap-md">
                <div className="w-6 h-6 bg-tf-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-xs">A Clear Mandate and Strategic Alignment</h3>
                  <p className="text-text-medium">Leadership commitment to talent as a strategic priority, with clear success metrics and resource allocation.</p>
                </div>
              </div>
              <div className="flex items-start gap-md">
                <div className="w-6 h-6 bg-tf-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-xs">Leadership Commitment to Change</h3>
                  <p className="text-text-medium">Willingness to evolve processes, invest in capability building, and support team development during transformation.</p>
                </div>
              </div>
              <div className="flex items-start gap-md">
                <div className="w-6 h-6 bg-tf-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-xs">Openness to Data-Driven Insights</h3>
                  <p className="text-text-medium">Receptiveness to market intelligence, process optimization recommendations, and evidence-based decision making.</p>
                </div>
              </div>
              <div className="flex items-start gap-md">
                <div className="w-6 h-6 bg-tf-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-xs">A Focus on Long-Term Capability Building</h3>
                  <p className="text-text-medium">Investment in sustainable internal capabilities rather than quick fixes or temporary solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right Fit */}
      <section className="bg-white py-xxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-tf-blue-light p-lg rounded-lg">
              <h3 className="text-lg font-semibold text-text-dark mb-xs">Ensuring the Right Fit</h3>
              <p className="text-text-medium">
                We're <span className="font-semibold text-text-dark">committed to transparency</span> about fit and compatibility. If we're not the right partner for your specific challenge, we'll tell you directly and help you find a better solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-dark py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-md">
              Ready to Tackle Your Specific Challenge?
            </h2>
            <p className="text-lg text-tf-blue-lighter mb-xxl">
              If your situation aligns with our areas of expertise, let's explore how our specialized approach can deliver the predictable results your organization needs.
            </p>
            <div className="mb-xxl">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-block mb-lg">
                Discuss Your Specific Challenge
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-lg">
              <Link href="/services" className="text-tf-blue-lighter hover:text-tf-orange transition-colors border-b border-tf-blue-lighter pb-1">
                Review Our Services
              </Link>
              <Link href="/about" className="text-tf-blue-lighter hover:text-tf-orange transition-colors border-b border-tf-blue-lighter pb-1">
                Learn About Our Approach
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
