import { Link } from 'wouter';
import { Play, Rocket, Target, AlertTriangle, ArrowRight, CheckCircle2, Clock, Award } from 'lucide-react';

export default function Accelerate() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tf-blue-light to-white py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-md">
              Accelerate: Secure <span className="text-tf-orange">High-Impact Talent</span> When Time Matters
            </h1>
            <p className="text-lg md:text-xl text-text-medium mb-xl">
              Bridge critical talent gaps with immediate, expert execution. We combine <span className="font-semibold text-text-dark">strategic rigor—like executive search methodology—</span>with 
              the agility your urgent needs demand, delivering <span className="font-semibold text-text-dark">speed, precision, and lasting impact</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-md">
              <Link href="/contact" className="btn-primary">
                Solve Your Critical Gap
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Our Full Ecosystem
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-bg-subtle py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-xxl">
              Vacancies Stalling Strategy? The Compound Cost of Waiting
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              <div className="bg-white p-lg rounded-lg shadow-sm border border-border-light">
                <div className="flex items-start gap-md">
                  <AlertTriangle className="w-6 h-6 text-tf-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-text-dark mb-xs">Critical roles empty for <span className="text-tf-orange">120+ days</span></h3>
                    <p className="text-text-medium text-sm">Meanwhile, competitors launch products, close deals, and capture your market share.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm border border-border-light">
                <div className="flex items-start gap-md">
                  <AlertTriangle className="w-6 h-6 text-tf-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-text-dark mb-xs">Burnout cascades through teams</h3>
                    <p className="text-text-medium text-sm">Overloaded staff covering gaps leads to resignations, creating a vicious cycle.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm border border-border-light">
                <div className="flex items-start gap-md">
                  <AlertTriangle className="w-6 h-6 text-tf-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-text-dark mb-xs">Panic hiring creates long-term damage</h3>
                    <p className="text-text-medium text-sm">Rushed decisions lead to poor culture fit and performance issues lasting years.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm border border-border-light">
                <div className="flex items-start gap-md">
                  <AlertTriangle className="w-6 h-6 text-tf-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-text-dark mb-xs">Strategic initiatives stall indefinitely</h3>
                    <p className="text-text-medium text-sm">Without key talent, transformation programs lose momentum and credibility.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-xl text-center">
              <p className="text-lg font-semibold text-text-dark">
                Every day without critical talent <span className="text-tf-orange">compounds risk and opportunity cost</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-white py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">
              Expert Execution When Every Week Counts
            </h2>
            <p className="text-lg text-text-medium mb-xxl">
              Accelerate delivers <span className="font-semibold text-text-dark">immediate, expert talent acquisition capacity</span> precisely calibrated to your needs—from 
              individual critical hires to entire team builds.
            </p>

            {/* Core Capabilities */}
            <div className="space-y-xl mb-xxl">
              <div>
                <h3 className="text-2xl font-bold text-text-dark mb-lg flex items-center gap-md">
                  <Target className="w-8 h-8 text-tf-blue" />
                  Critical Role Acquisition
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md pl-12">
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Executive and senior leadership searches</p>
                  </div>
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Specialized technical and niche skill acquisition</p>
                  </div>
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Confidential replacement searches</p>
                  </div>
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Competitive talent acquisition and poaching</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-text-dark mb-lg flex items-center gap-md">
                  <Rocket className="w-8 h-8 text-tf-blue" />
                  Team Building at Scale
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md pl-12">
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">New market or location launches</p>
                  </div>
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Product team rapid assembly</p>
                  </div>
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">M&A integration talent needs</p>
                  </div>
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Seasonal and project-based scaling</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-text-dark mb-lg flex items-center gap-md">
                  <Clock className="w-8 h-8 text-tf-blue" />
                  Flexible Engagement Models
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md pl-12">
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Project-based critical hire support</p>
                  </div>
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Embedded recruiter partnerships</p>
                  </div>
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">On-demand surge capacity</p>
                  </div>
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Strategic sourcing partnerships</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Execution Excellence */}
            <div className="bg-tf-blue-light p-xxl rounded-lg">
              <h3 className="text-xl font-bold text-text-dark mb-md">The Accelerate Difference</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
                <div>
                  <h4 className="font-semibold text-text-dark mb-xs">Executive Search Rigor</h4>
                  <p className="text-text-medium text-sm">Every search—regardless of level—benefits from proven executive search methodology.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-text-dark mb-xs">Speed Without Compromise</h4>
                  <p className="text-text-medium text-sm">Rapid execution that maintains quality through systematic processes and expertise.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-text-dark mb-xs">Knowledge Transfer</h4>
                  <p className="text-text-medium text-sm">We strengthen your team's capabilities while solving immediate needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-bg-subtle py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-xxl text-center">
              Execution Excellence That Delivers Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xxl">
              <div className="bg-white p-lg rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-tf-orange mb-xs">28 Days</div>
                <p className="text-text-dark font-semibold mb-xs">Average Time-to-Fill</p>
                <p className="text-text-medium text-sm">For critical roles across all levels</p>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-tf-orange mb-xs">94%</div>
                <p className="text-text-dark font-semibold mb-xs">First-Year Retention</p>
                <p className="text-text-medium text-sm">Quality hires that last and perform</p>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-tf-orange mb-xs">3:1</div>
                <p className="text-text-dark font-semibold mb-xs">ROI Within 90 Days</p>
                <p className="text-text-medium text-sm">From productivity gains vs. vacancy costs</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg text-text-dark mb-lg">
                <span className="font-semibold">Critical roles can't wait. Let's solve your talent gap today.</span>
              </p>
              <Link href="/contact" className="btn-primary">
                Activate Expert Support Now
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
                Accelerate execution is powered by <Link href="/services/illuminate" className="text-tf-blue hover:text-tf-orange transition-colors font-semibold">Illuminate</Link> intelligence, 
                leverages <Link href="/services/innovate" className="text-tf-blue hover:text-tf-orange transition-colors font-semibold">Innovate</Link> processes, 
                and applies <Link href="/services/elevate" className="text-tf-blue hover:text-tf-orange transition-colors font-semibold">Elevate</Link> best practices—delivering 
                superior results through integrated expertise.
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
  );
}