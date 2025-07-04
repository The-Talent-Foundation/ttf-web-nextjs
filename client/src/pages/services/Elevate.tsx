import { Link } from 'wouter';
import { Zap, Brain, Users, AlertTriangle, ArrowRight, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';

export default function Elevate() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tf-blue-light to-white py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-md">
              Elevate: Build Your <span className="text-tf-orange">AI-Powered Talent Team</span>
            </h1>
            <p className="text-lg md:text-xl text-text-medium mb-xl">
              Is your team truly equipped for the future of talent acquisition? We build <span className="font-semibold text-text-dark">advanced capabilities and strategic AI literacy needed to drive measurable results</span> 
              in today's complex talent landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-md">
              <Link href="/contact" className="btn-primary">
                Build Your AI-Ready Team
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
              Are Outdated Skills Holding Your Team Back?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              <div className="bg-white p-lg rounded-lg shadow-sm border border-border-light">
                <div className="flex items-start gap-md">
                  <AlertTriangle className="w-6 h-6 text-tf-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-text-dark mb-xs"><span className="text-tf-orange">80% of teams</span> underutilize AI tools</h3>
                    <p className="text-text-medium text-sm">Expensive technology investments deliver minimal ROI due to capability gaps.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm border border-border-light">
                <div className="flex items-start gap-md">
                  <AlertTriangle className="w-6 h-6 text-tf-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-text-dark mb-xs">Traditional training <span className="text-tf-orange">fails to stick</span></h3>
                    <p className="text-text-medium text-sm">Generic programs don't address real-world challenges your team faces daily.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm border border-border-light">
                <div className="flex items-start gap-md">
                  <AlertTriangle className="w-6 h-6 text-tf-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-text-dark mb-xs">Strategic thinking gaps limit impact</h3>
                    <p className="text-text-medium text-sm">Teams operate tactically while business demands strategic talent partnership.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm border border-border-light">
                <div className="flex items-start gap-md">
                  <AlertTriangle className="w-6 h-6 text-tf-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-text-dark mb-xs">Top performers leave for growth</h3>
                    <p className="text-text-medium text-sm">Without development paths, your best talent seeks opportunities elsewhere.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-xl text-center">
              <p className="text-lg font-semibold text-text-dark">
                Skills gaps don't just limit productivity—they <span className="text-tf-orange">threaten your competitive position</span>.
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
              Transform Your Team into Strategic Talent Advisors
            </h2>
            <p className="text-lg text-text-medium mb-xxl">
              Elevate delivers <span className="font-semibold text-text-dark">practical, role-specific capability building</span> that transforms how your team 
              leverages AI, data, and strategic thinking to drive business results.
            </p>

            {/* Core Capabilities */}
            <div className="space-y-xl mb-xxl">
              <div>
                <h3 className="text-2xl font-bold text-text-dark mb-lg flex items-center gap-md">
                  <Sparkles className="w-8 h-8 text-tf-blue" />
                  AI & Automation Mastery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md pl-12">
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Prompt engineering for recruitment-specific use cases</p>
                  </div>
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">AI tool selection and optimization for your tech stack</p>
                  </div>
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Automated workflow design and implementation</p>
                  </div>
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Ethical AI usage and bias mitigation strategies</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-text-dark mb-lg flex items-center gap-md">
                  <Brain className="w-8 h-8 text-tf-blue" />
                  Strategic Business Partnership
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md pl-12">
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Workforce planning and talent strategy development</p>
                  </div>
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Data storytelling and executive communication</p>
                  </div>
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Business case development and ROI demonstration</p>
                  </div>
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Consultative partnering with hiring managers</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-text-dark mb-lg flex items-center gap-md">
                  <Users className="w-8 h-8 text-tf-blue" />
                  Advanced Recruitment Excellence
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md pl-12">
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Executive search methodologies for all levels</p>
                  </div>
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Technical assessment and evaluation frameworks</p>
                  </div>
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Diversity sourcing and inclusive hiring practices</p>
                  </div>
                  <div className="flex items-start gap-sm">
                    <CheckCircle2 className="w-5 h-5 text-tf-blue flex-shrink-0 mt-1" />
                    <p className="text-text-medium">Candidate experience design and employer branding</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Training Approach */}
            <div className="bg-tf-blue-light p-xxl rounded-lg">
              <h3 className="text-xl font-bold text-text-dark mb-md">The Elevate Learning Experience</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
                <div>
                  <h4 className="font-semibold text-text-dark mb-xs">Real-World Application</h4>
                  <p className="text-text-medium text-sm">Learn through actual challenges from your environment, not generic case studies.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-text-dark mb-xs">Cohort-Based Learning</h4>
                  <p className="text-text-medium text-sm">Build capabilities alongside peers, creating lasting internal support networks.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-text-dark mb-xs">Continuous Reinforcement</h4>
                  <p className="text-text-medium text-sm">Ongoing coaching and support ensure skills translate into daily practice.</p>
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
              Capability Building That Delivers ROI
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xxl">
              <div className="bg-white p-lg rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-tf-orange mb-xs">35%</div>
                <p className="text-text-dark font-semibold mb-xs">Productivity Increase</p>
                <p className="text-text-medium text-sm">Through AI adoption and process optimization</p>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-tf-orange mb-xs">92%</div>
                <p className="text-text-dark font-semibold mb-xs">Skill Application Rate</p>
                <p className="text-text-medium text-sm">Participants actively using new capabilities</p>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-tf-orange mb-xs">4.8/5</div>
                <p className="text-text-dark font-semibold mb-xs">Stakeholder Satisfaction</p>
                <p className="text-text-medium text-sm">From hiring managers on TA partnership</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg text-text-dark mb-lg">
                <span className="font-semibold">Ready to unlock your team's full potential?</span>
              </p>
              <Link href="/contact" className="btn-primary">
                Design Your Capability Program
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
                Elevate programs leverage <Link href="/services/illuminate" className="text-tf-blue hover:text-tf-orange transition-colors font-semibold">Illuminate</Link> insights, 
                master <Link href="/services/innovate" className="text-tf-blue hover:text-tf-orange transition-colors font-semibold">Innovate</Link> systems, 
                and enhance <Link href="/services/accelerate" className="text-tf-blue hover:text-tf-orange transition-colors font-semibold">Accelerate</Link> execution—building 
                comprehensive organizational capability.
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