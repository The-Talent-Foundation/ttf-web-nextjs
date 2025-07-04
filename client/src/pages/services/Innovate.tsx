import { Link } from 'wouter';
import { Settings, Zap, AlertTriangle, ArrowRight, CheckCircle2, GitBranch, Users } from 'lucide-react';

export default function Innovate() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tf-blue-light to-white py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-md">
              Innovate: Architect Your <span className="text-tf-orange">Scalable Talent Engine</span>
            </h1>
            <p className="text-lg md:text-xl text-text-medium mb-xl">
              Is your hiring process designed for yesterday's challenges? We apply <span className="font-semibold text-text-dark">first principles and design thinking</span> 
              to build talent acquisition systems that are <span className="font-semibold text-text-dark">resilient</span>, scale effortlessly, 
              <span className="font-semibold text-text-dark">and directly enable your strategic objectives</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-md">
              <Link href="/contact" className="btn-primary">
                Build Your Scalable System
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
              When Your Hiring Process Becomes Your Biggest Constraint
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              <div className="bg-white p-lg rounded-lg shadow-sm border border-border-light">
                <div className="flex items-start gap-md">
                  <AlertTriangle className="w-6 h-6 text-tf-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-text-dark mb-xs">Processes break at <span className="text-tf-orange">50% scale</span></h3>
                    <p className="text-text-medium text-sm">What worked for 10 hires per month collapses at 50, creating chaos and delays.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm border border-border-light">
                <div className="flex items-start gap-md">
                  <AlertTriangle className="w-6 h-6 text-tf-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-text-dark mb-xs">Teams spend <span className="text-tf-orange">70% of time</span> on manual tasks</h3>
                    <p className="text-text-medium text-sm">Valuable talent acquisition professionals waste time on repetitive, low-value work.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm border border-border-light">
                <div className="flex items-start gap-md">
                  <AlertTriangle className="w-6 h-6 text-tf-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-text-dark mb-xs">Technology becomes a burden, not an enabler</h3>
                    <p className="text-text-medium text-sm">Expensive tools sit unused while teams revert to spreadsheets and email.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm border border-border-light">
                <div className="flex items-start gap-md">
                  <AlertTriangle className="w-6 h-6 text-tf-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-text-dark mb-xs">Quality deteriorates under pressure</h3>
                    <p className="text-text-medium text-sm">Rushed processes lead to bad hires, creating a vicious cycle of turnover and rework.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-xl text-center">
              <p className="text-lg font-semibold text-text-dark">
                Broken processes don't just slow hiring—they <span className="text-tf-orange">sabotage your entire growth strategy</span>.
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
              Design Systems That Scale With Your Ambitions
            </h2>
            <p className="text-lg text-text-medium mb-xxl">
              Innovate transforms your talent acquisition from a constraint into a competitive advantage through 
              <span className="font-semibold text-text-dark"> systematic design, intelligent automation, and continuous optimization</span>.
            </p>

            {/* Core Capabilities */}
            <div className="space-y-xl mb-xxl">
              <div>
                <h3 className="text-2xl font-bold text-text-dark mb-lg flex items-center gap-md">
                  <GitBranch className="w-8 h-8 text-tf-blue" />
                  Process Architecture & Design
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md pl-12">
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">End-to-end talent acquisition workflow mapping and optimization</p>
                  </div>
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Role-specific hiring playbooks for consistent excellence</p>
                  </div>
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Scalable interview frameworks and assessment methodologies</p>
                  </div>
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Compliance and governance frameworks for regulated industries</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-text-dark mb-lg flex items-center gap-md">
                  <Zap className="w-8 h-8 text-tf-blue" />
                  Technology & Automation Strategy
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md pl-12">
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">ATS/HRIS optimization and integration architecture</p>
                  </div>
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">AI-powered automation for screening and engagement</p>
                  </div>
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Data pipeline design for real-time analytics and insights</p>
                  </div>
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Tool stack rationalization and ROI optimization</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-text-dark mb-lg flex items-center gap-md">
                  <Users className="w-8 h-8 text-tf-blue" />
                  Organizational Design & Enablement
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md pl-12">
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">TA team structure optimization for scale and specialization</p>
                  </div>
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Hiring manager partnership frameworks and SLAs</p>
                  </div>
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Performance metrics and continuous improvement systems</p>
                  </div>
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Change management and adoption acceleration programs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-tf-blue-light p-xxl rounded-lg">
              <h3 className="text-xl font-bold text-text-dark mb-md">The Innovate Advantage</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
                <div>
                  <h4 className="font-semibold text-text-dark mb-xs">Built for Reality</h4>
                  <p className="text-text-medium text-sm">Systems designed around your actual constraints, culture, and objectives—not theoretical best practices.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-text-dark mb-xs">Future-Proof Architecture</h4>
                  <p className="text-text-medium text-sm">Flexible frameworks that evolve with your business, preventing constant expensive rebuilds.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-text-dark mb-xs">Measurable Impact</h4>
                  <p className="text-text-medium text-sm">Every design decision tied to specific business outcomes and ROI targets.</p>
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
              Systems That Deliver Predictable Excellence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xxl">
              <div className="bg-white p-lg rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-tf-orange mb-xs">60%</div>
                <p className="text-text-dark font-semibold mb-xs">Reduction in Time-to-Fill</p>
                <p className="text-text-medium text-sm">Through optimized workflows and automation</p>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-tf-orange mb-xs">3x</div>
                <p className="text-text-dark font-semibold mb-xs">Recruiter Productivity Gain</p>
                <p className="text-text-medium text-sm">By eliminating manual tasks and bottlenecks</p>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-tf-orange mb-xs">85%</div>
                <p className="text-text-dark font-semibold mb-xs">Quality of Hire Improvement</p>
                <p className="text-text-medium text-sm">Through better assessment and matching</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg text-text-dark mb-lg">
                <span className="font-semibold">Ready to build a talent engine that scales?</span>
              </p>
              <Link href="/contact" className="btn-primary">
                Design Your Future-State System
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
                Innovate systems are informed by <Link href="/services/illuminate" className="text-tf-blue hover:text-tf-orange transition-colors font-semibold">Illuminate</Link> intelligence, 
                provide the foundation for <Link href="/services/elevate" className="text-tf-blue hover:text-tf-orange transition-colors font-semibold">Elevate</Link> training, 
                and enable <Link href="/services/accelerate" className="text-tf-blue hover:text-tf-orange transition-colors font-semibold">Accelerate</Link> execution—creating 
                lasting organizational capability.
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