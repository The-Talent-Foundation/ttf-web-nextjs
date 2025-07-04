import { Link } from 'wouter';
import { Lightbulb, TrendingUp, Eye, BarChart, Search, Users, Target, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-xxl items-center">
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-md">
                Expertise Forged in <span className="text-tf-orange">Real-World Complexity</span>
              </h1>
              <p className="text-lg text-text-medium">
                <span className="font-semibold text-tf-orange">The Talent Foundation</span> is a <span className="font-semibold text-text-dark">Boutique Talent Enablement Agency</span> that partners with organizations where standard talent acquisition approaches create <span className="font-semibold text-text-dark">unacceptable risk and unpredictable outcomes</span>. We exist to help you <span className="font-semibold text-text-dark">build your organization's sustainable talent capability</span> for <span className="font-semibold text-text-dark">predictable results and lasting strategic advantage</span>.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400" 
                alt="Adam Kovacs - Founder" 
                className="w-80 h-80 rounded-full shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-bg-subtle py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">Our Guiding Principles and Philosophy</h2>
            <p className="text-lg text-text-dark mb-xxl">
              True talent advantage comes from <span className="font-semibold text-text-dark">sustainable internal strength</span> and <span className="font-semibold text-text-dark">long-term strategic control</span>, not from dependency on external resources. This philosophy drives everything we do and ensures <span className="font-semibold text-text-dark">superior ROI</span> for our clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xxl">
              <div className="bg-white p-lg rounded-lg border border-border-light">
                <div className="mb-md">
                  <Lightbulb className="w-6 h-6 text-tf-blue" />
                </div>
                <h3 className="font-semibold text-text-dark mb-xs">Design Thinking for Impact</h3>
                <p className="text-text-medium text-sm">
                  We apply human-centered design principles to talent challenges, ensuring solutions are both innovative and practical, leading to <span className="font-semibold text-text-dark">faster adoption & measurable ROI</span>.
                </p>
              </div>
              <div className="bg-white p-lg rounded-lg border border-border-light">
                <div className="mb-md">
                  <TrendingUp className="w-6 h-6 text-tf-blue" />
                </div>
                <h3 className="font-semibold text-text-dark mb-xs">Growth Mindset</h3>
                <p className="text-text-medium text-sm">
                  We believe in continuous learning and adaptation, building systems that evolve with your organization and deliver <span className="font-semibold text-text-dark">better, more efficient results over time</span>.
                </p>
              </div>
              <div className="bg-white p-lg rounded-lg border border-border-light">
                <div className="mb-md">
                  <Eye className="w-6 h-6 text-tf-blue" />
                </div>
                <h3 className="font-semibold text-text-dark mb-xs">Radical Transparency</h3>
                <p className="text-text-medium text-sm">
                  We operate with complete openness about our methods, progress, and results. This transparency <span className="font-semibold text-text-dark">de-risks collaboration</span> and ensures aligned expectations.
                </p>
              </div>
            </div>
            <blockquote className="border-l-4 border-tf-blue pl-lg italic text-lg text-text-dark mb-lg">
              "The best talent strategies aren't just about finding people—they're about building the organizational capability to consistently attract, develop, and retain the right people for sustained competitive advantage."
            </blockquote>
            <cite className="text-right block text-text-medium">– Adam Kovacs</cite>
            <p className="text-text-dark mt-lg">
              These principles underpin our entire <Link href="/services" className="text-tf-blue hover:text-tf-orange transition-colors font-semibold">Talent Enablement Ecosystem</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="bg-white py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">Meet Adam Kovacs, Founder & Principal</h2>
            <p className="text-lg text-text-dark mb-xxl">
              The Talent Foundation's strategies and methodologies are built on Adam's extensive experience solving talent challenges at unprecedented scale and complexity.
            </p>
            <div className="space-y-lg">
              <div className="flex items-start gap-md">
                <div className="flex-shrink-0 mt-1">
                  <BarChart className="w-6 h-6 text-tf-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-xs">Mastering Scale & Complexity</h3>
                  <p className="text-text-medium">
                    At <span className="font-semibold text-text-dark">Amazon/AWS</span>, Adam led global talent acquisition initiatives delivering <span className="font-semibold text-text-dark">thousands of hires</span> across diverse markets, building the systems and processes that enabled unprecedented growth.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-md">
                <div className="flex-shrink-0 mt-1">
                  <Search className="w-6 h-6 text-tf-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-xs">Pioneering Intelligence-Driven Approaches</h3>
                  <p className="text-text-medium">
                    Adam pioneered the <span className="font-semibold text-text-dark">AWS Talent Intelligence function</span>, <span className="font-semibold text-text-dark">proving the power of data-driven talent strategies</span> in complex, high-velocity environments.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-md">
                <div className="flex-shrink-0 mt-1">
                  <Users className="w-6 h-6 text-tf-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-xs">Building Lasting Capability</h3>
                  <p className="text-text-medium">
                    Through training and development programs reaching <span className="font-semibold text-text-dark">over 1,300 recruiters and hiring managers</span>, Adam has consistently <span className="font-semibold text-text-dark">measurably built lasting internal capability</span> rather than temporary solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-md">
                <div className="flex-shrink-0 mt-1">
                  <Target className="w-6 h-6 text-tf-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-xs">Thought Leadership & Innovation</h3>
                  <p className="text-text-medium">
                    Adam is an <span className="font-semibold text-text-dark">international speaker</span> and thought leader in <span className="font-semibold text-text-dark">AI-enabled recruitment</span>, sharing insights that shape industry best practices.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-xxl pt-xxl border-t border-border-light">
              <p className="text-lg text-text-dark">
                This deep, practical experience in solving talent challenges at scale is what enables The Talent Foundation to deliver predictable, superior results where standard approaches fail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Boutique Advantage */}
      <section className="bg-bg-subtle py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">The Advantage of Boutique Focus</h2>
            <p className="text-lg text-text-dark mb-xxl">
              We intentionally operate as a boutique consultancy because it enables us to deliver superior value through deep specialization and direct senior-level engagement.
            </p>
            <div className="space-y-lg">
              <div className="flex items-start gap-md">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-tf-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-xs">Deep Specialization</h3>
                  <p className="text-text-medium">
                    Our focused expertise in complex talent challenges enables pattern recognition and solution development that generalist firms cannot match.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-md">
                <div className="flex-shrink-0 mt-1">
                  <Lightbulb className="w-6 h-6 text-tf-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-xs">Direct Senior Expertise</h3>
                  <p className="text-text-medium">
                    You work directly with senior practitioners, not junior consultants learning on your dime. Every engagement benefits from decades of proven experience.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-md">
                <div className="flex-shrink-0 mt-1">
                  <TrendingUp className="w-6 h-6 text-tf-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-xs">Greater Agility & Customization</h3>
                  <p className="text-text-medium">
                    Without the constraints of large firm bureaucracy, we can rapidly adapt our approach to your specific needs and market conditions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-md">
                <div className="flex-shrink-0 mt-1">
                  <Users className="w-6 h-6 text-tf-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-xs">Committed Partnership</h3>
                  <p className="text-text-medium">
                    Our success depends entirely on your success. We're invested in long-term relationships and sustainable capability building, not short-term revenue extraction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="bg-white py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">Your Success Defines Our Success</h2>
            <p className="text-lg text-text-dark mb-md">
              Partnership is at the heart of everything we do. We believe in <span className="font-semibold text-text-dark">radical transparency</span>, honest communication, and finding the <span className="font-semibold text-text-dark">absolute best fit</span> for every collaboration.
            </p>
            <p className="text-lg text-text-dark">
              We believe in doing what's right, even when it's not immediately profitable. If we're not the right fit for your challenge, we'll tell you directly and help you find a better solution. <span className="font-semibold text-text-dark">Your strategic success is our priority</span>, not our revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Right Fit */}
      <section className="bg-bg-subtle py-xl">
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
              Partner with Proven Expertise
            </h2>
            <p className="text-lg text-tf-blue-lighter mb-xxl">
              Ready to move beyond unpredictable talent outcomes and build the strategic capability your organization needs to thrive?
            </p>
            <div className="mb-xxl">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-block mb-lg">
                Discuss Your Enablement Strategy
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-lg">
              <Link href="/services" className="text-tf-blue-lighter hover:text-tf-orange transition-colors border-b border-tf-blue-lighter pb-1">
                Explore Our Services
              </Link>
              <Link href="/who-we-serve" className="text-tf-blue-lighter hover:text-tf-orange transition-colors border-b border-tf-blue-lighter pb-1">
                See Who We Serve
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
