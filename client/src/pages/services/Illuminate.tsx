import { Link } from 'wouter';
import { Lightbulb, Search, TrendingUp, AlertTriangle, ArrowRight, CheckCircle2, Brain, Target, ChevronDown, MapPin, Users, DollarSign, Sparkles } from 'lucide-react';
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Illuminate() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setFlippedCards(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tf-blue-light to-white py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-md">
              Illuminate: Strategic Foresight for <span className="text-tf-orange">Talent Growth and Expansion</span>
            </h1>
            <p className="text-lg md:text-xl text-text-medium mb-md font-semibold">
              One blind talent bet can cost millions, Illuminate the data to win them all.
            </p>
            <p className="text-lg text-text-medium mb-xl">
              Stop navigating mission‑critical initiatives blindfolded. Deep, synthesized market, competitor, and workforce intelligence, 
              filtered through real execution insight that lets you <span className="font-semibold text-text-dark">anticipate shifts, validate multi‑million‑dollar strategies, 
              and build the workforce your future demands</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-md">
              <Link href="/contact" className="btn-primary">
                Request a Strategic Intelligence Briefing
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore the Enablement Ecosystem
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
              When Talent Intelligence Is Missing, Costs Explode
            </h2>
            <Accordion type="single" collapsible className="space-y-md">
              <AccordionItem value="expansion" className="bg-white rounded-lg px-lg shadow-sm border border-border-light">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-start gap-md text-left">
                    <AlertTriangle className="w-6 h-6 text-tf-orange flex-shrink-0 mt-1" />
                    <h3 className="font-semibold text-text-dark">Expansion roulette.</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-10 text-text-medium">
                  Unseen competition causing local talent shortages, compliance traps, and pay realities can derail a new market entry before the first hire. Costly delays are draining both budgets and morale.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="attrition" className="bg-white rounded-lg px-lg shadow-sm border border-border-light">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-start gap-md text-left">
                    <AlertTriangle className="w-6 h-6 text-tf-orange flex-shrink-0 mt-1" />
                    <h3 className="font-semibold text-text-dark">Profit‑draining attrition.</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-10 text-text-medium">
                  Mis‑benchmarked rewards based on flawed compensation reports or unaddressed competitor poaching are fueling double‑digit regrettable turnover and six‑figure replacement costs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ambush" className="bg-white rounded-lg px-lg shadow-sm border border-border-light">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-start gap-md text-left">
                    <AlertTriangle className="w-6 h-6 text-tf-orange flex-shrink-0 mt-1" />
                    <h3 className="font-semibold text-text-dark">Competitive ambush.</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-10 text-text-medium">
                  Rival hiring sprints by competitors to dominate the talent market for critical AI or Cyber skills, along with targeted campaigns executed against you, will stall your growth roadmap.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="surprises" className="bg-white rounded-lg px-lg shadow-sm border border-border-light">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-start gap-md text-left">
                    <AlertTriangle className="w-6 h-6 text-tf-orange flex-shrink-0 mt-1" />
                    <h3 className="font-semibold text-text-dark">Strategic surprises.</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-10 text-text-medium">
                  Approving major initiatives (M&A, large-scale transformations) based on thoughts and opinions, rather than hard data on talent and market feasibility? You're exposing yourself to costs and delays.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="mt-xl text-center">
              <p className="text-lg font-semibold text-text-dark">
                Ignoring talent intelligence doesn't save money, it causes <span className="text-tf-orange">systemic blindness</span>. Illuminate research service replaces guesswork with data‑driven clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-white py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md text-center">
              Targeted Questions • Expert Answers • Immediate Action
            </h2>
            <p className="text-lg text-text-medium mb-xxl text-center">
              We cut through the noise, delivering targeted, synthesized, in-depth intelligence tailored to your most critical talent and business decisions.
            </p>

            {/* Flip Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xxl">
              {/* Card 1 */}
              <div
                className="bg-gradient-to-br from-tf-blue-light to-white p-xl rounded-lg shadow-lg cursor-pointer transition-all hover:shadow-xl min-h-[300px]"
                onClick={() => toggleCard(0)}
              >
                {!flippedCards.includes(0) ? (
                  <div>
                    <MapPin className="w-12 h-12 text-tf-blue mb-md" />
                    <h3 className="text-xl font-bold text-text-dark mb-md">Where can we hire scarce talent at scale?</h3>
                    <p className="text-text-medium">
                      Assess talent density, skills availability, true compensation realities, competitor saturation, and compliance factors to 
                      <span className="font-semibold"> confidently inform location strategy, remote work policies, and targeted recruitment efforts.</span>
                    </p>
                    <p className="text-sm text-tf-blue mt-md">Click to see details →</p>
                  </div>
                ) : (
                  <div>
                    <h4 className="font-bold text-text-dark mb-md">Talent Market Mapping & Feasibility Analysis</h4>
                    <ul className="space-y-sm text-text-medium text-sm">
                      <li className="italic">"What are the top 3 locations globally with availability to realistically source 50+ Senior Machine Learning engineers experienced in regulated industries within 6 months?"</li>
                      <li className="italic">"What are the actual total compensation market rates vs. self-reported survey data?"</li>
                      <li className="italic">"What specific local nuances impact hiring speed in Locations A vs. B?"</li>
                    </ul>
                    <p className="text-sm text-tf-blue mt-md">Click to go back →</p>
                  </div>
                )}
              </div>

              {/* Card 2 */}
              <div
                className="bg-gradient-to-br from-tf-blue-light to-white p-xl rounded-lg shadow-lg cursor-pointer transition-all hover:shadow-xl min-h-[300px]"
                onClick={() => toggleCard(1)}
              >
                {!flippedCards.includes(1) ? (
                  <div>
                    <Users className="w-12 h-12 text-tf-blue mb-md" />
                    <h3 className="text-xl font-bold text-text-dark mb-md">How are my competitors really staffing and paying?</h3>
                    <p className="text-text-medium">
                      Uncover crucial insights into competitor talent strategies, organizational structures, compensation philosophies, and sourcing channels to inform your own competitive positioning and proactively counter threats.
                    </p>
                    <p className="text-sm text-tf-blue mt-md">Click to see details →</p>
                  </div>
                ) : (
                  <div>
                    <h4 className="font-bold text-text-dark mb-md">Competitor Intelligence & Counter Strategy Planning</h4>
                    <ul className="space-y-sm text-text-medium text-sm">
                      <li className="italic">"How is Competitor X structuring compensation and total rewards for their new Design team?"</li>
                      <li className="italic">"Which research labs and companies are their primary sources for hiring top AI talent?"</li>
                      <li className="italic">"What specific value proposition resonates with the talent they're targeting?"</li>
                    </ul>
                    <p className="text-sm text-tf-blue mt-md">Click to go back →</p>
                  </div>
                )}
              </div>

              {/* Card 3 */}
              <div
                className="bg-gradient-to-br from-tf-blue-light to-white p-xl rounded-lg shadow-lg cursor-pointer transition-all hover:shadow-xl min-h-[300px]"
                onClick={() => toggleCard(2)}
              >
                {!flippedCards.includes(2) ? (
                  <div>
                    <DollarSign className="w-12 h-12 text-tf-blue mb-md" />
                    <h3 className="text-xl font-bold text-text-dark mb-md">What does a winning offer actually cost?</h3>
                    <p className="text-text-medium">
                      Access role‑specific, geo‑calibrated compensation and benefits data to ensure that your offers are competitive enough to secure key talent while also retaining high-performing critical employees.
                    </p>
                    <p className="text-sm text-tf-blue mt-md">Click to see details →</p>
                  </div>
                ) : (
                  <div>
                    <h4 className="font-bold text-text-dark mb-md">Compensation & Total Rewards Benchmarking</h4>
                    <ul className="space-y-sm text-text-medium text-sm">
                      <li className="italic">"What is the true, competitive market rate (including base, bonus, equity trends, and key benefits) for Principal Product Managers in the Bay Area versus fully remote?"</li>
                      <li className="italic">"How do cash compensation expectations of Robotics Engineering candidates in Boston compare to expectations in London, Berlin, or Singapore?"</li>
                      <li className="italic">"What additional talent pool would become available if you raised the top of your salary band by 10%?"</li>
                    </ul>
                    <p className="text-sm text-tf-blue mt-md">Click to go back →</p>
                  </div>
                )}
              </div>

              {/* Card 4 */}
              <div
                className="bg-gradient-to-br from-tf-blue-light to-white p-xl rounded-lg shadow-lg cursor-pointer transition-all hover:shadow-xl min-h-[300px]"
                onClick={() => toggleCard(3)}
              >
                {!flippedCards.includes(3) ? (
                  <div>
                    <Sparkles className="w-12 h-12 text-tf-blue mb-md" />
                    <h3 className="text-xl font-bold text-text-dark mb-md">Which future skill demands will break our roadmap?</h3>
                    <p className="text-text-medium">
                      Map skill requirements tied to your roadmap. Analyze internal strengths and gaps compared to external supply and demand to build workforce plans, advise on build vs buy decisions, and target high-ROI upskilling programs.
                    </p>
                    <p className="text-sm text-tf-blue mt-md">Click to see details →</p>
                  </div>
                ) : (
                  <div>
                    <h4 className="font-bold text-text-dark mb-md">Skills Foresight & Strategic Workforce Planning</h4>
                    <ul className="space-y-sm text-text-medium text-sm">
                      <li className="italic">"Based on the external supply, cost realities, and our current capability gaps, which domain expertise should we upskill internally to plug hiring gaps?"</li>
                      <li className="italic">"What's the optimal, data-driven build or buy strategy to achieve our growth goals?"</li>
                      <li className="italic">"What emerging skills will our current team lack for the 12-month product roadmap?"</li>
                    </ul>
                    <p className="text-sm text-tf-blue mt-md">Click to go back →</p>
                  </div>
                )}
              </div>
            </div>

            {/* How Illuminate Works */}
            <div className="bg-tf-blue-light p-xxl rounded-lg">
              <h3 className="text-xl font-bold text-text-dark mb-md text-center">How Illuminate Works</h3>
              <div className="flex items-center justify-center gap-md flex-wrap">
                <span className="font-semibold text-text-dark">Data</span>
                <ArrowRight className="w-4 h-4 text-tf-blue" />
                <span className="font-semibold text-text-dark">Analytics</span>
                <ArrowRight className="w-4 h-4 text-tf-blue" />
                <span className="font-semibold text-text-dark">Synthesis</span>
              </div>
              <p className="text-text-medium text-center mt-md">
                The Talent Foundation's unique advantage lies not just in robust <span className="font-semibold text-text-dark">data aggregation</span> and <span className="font-semibold text-text-dark">advanced analytics</span>, 
                but in the crucial layer of <span className="font-semibold text-text-dark">synthesis and strategic interpretation by seasoned TA execution experts</span>. 
                We don't just present data. We also tell you <span className="italic">what it means</span> for your talent strategy and <span className="italic">how</span> it 
                directly informs practical process design, effective capability building, and precise hiring execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-bg-subtle py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-xxl text-center">
              What You'll Gain: Drive Strategy & Mitigate Risk
            </h2>
            <Accordion type="single" collapsible className="space-y-md">
              <AccordionItem value="derisk" className="bg-white rounded-lg px-lg shadow-sm">
                <AccordionTrigger className="hover:no-underline">
                  <h3 className="font-semibold text-text-dark">De‑risked major strategic investments.</h3>
                </AccordionTrigger>
                <AccordionContent className="text-text-medium">
                  Make confident go/no-go decisions on location expansion, M&A, or complex transformation projects with clear, localized, and validated data on talent feasibility, costs, compliance landscape, and other associated risks.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="competitive" className="bg-white rounded-lg px-lg shadow-sm">
                <AccordionTrigger className="hover:no-underline">
                  <h3 className="font-semibold text-text-dark">Secured competitive advantage.</h3>
                </AccordionTrigger>
                <AccordionContent className="text-text-medium">
                  Proactively identify and map niche talent pools before competitors, enabling targeted talent acquisition. Build data-informed attraction and retention strategies based on competitor vulnerabilities.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="optimized" className="bg-white rounded-lg px-lg shadow-sm">
                <AccordionTrigger className="hover:no-underline">
                  <h3 className="font-semibold text-text-dark">Optimized workforce spending.</h3>
                </AccordionTrigger>
                <AccordionContent className="text-text-medium">
                  Ensure competitive, efficient, and fiscally responsible compensation structures. Justify budgets and optimize workforce planning using <span className="font-semibold">actionable market data</span>. Avoid overspending on premium panic-hires or losing key talent due to uncompetitive offers in new or existing locations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="futureproof" className="bg-white rounded-lg px-lg shadow-sm">
                <AccordionTrigger className="hover:no-underline">
                  <h3 className="font-semibold text-text-dark">Future‑proofed talent strategy.</h3>
                </AccordionTrigger>
                <AccordionContent className="text-text-medium">
                  Anticipate future skill needs tied to your roadmap. Based on robust data, build informed location strategies, sourcing initiatives, and mobility programs. Prepare your workforce for future market shifts and reduce vulnerability to sudden talent shortages.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Why Illuminate Section */}
      <section className="bg-white py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md text-center">
              The Illuminated Difference: Actionable Foresight, Not Just Hindsight Data
            </h2>
            <div className="space-y-lg">
              <Accordion type="single" collapsible>
                <AccordionItem value="synthesis" className="border rounded-lg px-lg">
                  <AccordionTrigger className="hover:no-underline">
                    <h3 className="font-semibold text-text-dark">1. Deep strategic synthesis, not a data dump.</h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-text-medium">
                    Forget generic reports and the spreadsheet overwhelm. Unlike data brokers providing raw feeds, the Talent Foundation delivers <span className="font-semibold">expertly synthesized intelligence</span>. 
                    Our seasoned practitioners translate complex data points into clear implications and pragmatic, actionable strategic recommendations directly applicable to <span className="italic">your immediate challenges and operational context</span>.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="operational" className="border rounded-lg px-lg">
                  <AccordionTrigger className="hover:no-underline">
                    <h3 className="font-semibold text-text-dark">2. Operationally grounded in the reality of execution.</h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-text-medium">
                    Our insights aren't academic exercises. Instead, they are filtered through decades of <span className="font-semibold">deep TA and operational execution experience</span>. 
                    We understand <span className="italic">how</span> this intelligence must translate into effective process redesign, targeted team development, and precise execution to yield tangible business results.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="proactive" className="border rounded-lg px-lg">
                  <AccordionTrigger className="hover:no-underline">
                    <h3 className="font-semibold text-text-dark">3. Proactive foresight, not just postmortem analysis.</h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-text-medium">
                    We prioritize identifying emerging talent trends, future skill needs crucial for your growth goals, and potential competitor talent moves before they impact you. 
                    This anticipatory intelligence, which often provides months of lead time, enables you to proactively shape your strategy instead of the constantly reactive course correction.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverable Section */}
      <section className="bg-gradient-to-br from-tf-blue-light to-white py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">
              Your Strategic Talent Intelligence Compass: Guiding Confident Decisions
            </h2>
            <p className="text-lg text-text-medium mb-xl">
              Move beyond guesswork. The Illuminate research service delivers a comprehensive and confidential <span className="font-semibold text-text-dark">Strategic Intelligence Compass</span>. 
              Your essential guide for navigating complex talent decisions. This powerful tool synthesizes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xl">
              <div className="bg-white p-lg rounded-lg shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-tf-blue mx-auto mb-md" />
                <h3 className="font-semibold text-text-dark mb-xs">Rigorously Researched Market & Competitor Insights.</h3>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-tf-blue mx-auto mb-md" />
                <h3 className="font-semibold text-text-dark mb-xs">Granular Talent Pool & Compensation Benchmarking Data.</h3>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-tf-blue mx-auto mb-md" />
                <h3 className="font-semibold text-text-dark mb-xs">Actionable Skills Foresight & Risk Analysis.</h3>
              </div>
              <div className="bg-white p-lg rounded-lg shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-tf-blue mx-auto mb-md" />
                <h3 className="font-semibold text-text-dark mb-xs">Expert Interpretation & Clear Strategic Recommendations.</h3>
              </div>
            </div>
            <p className="text-lg text-text-medium">
              It provides the <span className="font-semibold text-text-dark">validated intelligence foundation</span> required to effectively target and execute talent strategies, 
              maximizing your chance of success in competitive environments.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-bg-subtle py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">
              Make Your Next Move With Data‑Driven Confidence
            </h2>
            <p className="text-lg text-text-medium mb-xl">
              Stop risking critical initiatives on talent assumptions or incomplete information. Book a briefing and see precisely how Illuminate can provide the clarity your leadership and goals demand.
            </p>
            <div className="flex flex-col sm:flex-row gap-md justify-center">
              <Link href="/contact" className="btn-primary">
                Request a Strategic Intelligence Briefing
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore the Full Ecosystem
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
                Illuminate intelligence directly informs <Link href="/services/innovate" className="text-tf-blue hover:text-tf-orange transition-colors font-semibold">Innovate</Link> process design, 
                guides <Link href="/services/elevate" className="text-tf-blue hover:text-tf-orange transition-colors font-semibold">Elevate</Link> capability building, 
                and powers <Link href="/services/accelerate" className="text-tf-blue hover:text-tf-orange transition-colors font-semibold">Accelerate</Link> execution—creating a 
                multiplier effect across your entire talent strategy.
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