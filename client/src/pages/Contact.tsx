import { useState } from 'react';
import { Link } from 'wouter';
import { Users, Settings, Calendar, Mail, MapPin, ArrowRight, Send, CheckCircle2, Clock, Shield } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import ScrollAnimations from '@/components/ScrollAnimations';

const contactSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Please enter a valid email address'),
  companyName: z.string().optional(),
  title: z.string().optional(),
  message: z.string().optional(),
  privacyConsent: z.boolean().refine((val) => val === true, 'You must agree to the privacy policy'),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      companyName: '',
      title: '',
      message: '',
      privacyConsent: false,
    },
  });

  const submitInquiry = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: 'Thank you for your inquiry!',
        description: 'Look for a response from a senior consultant within one business day.',
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: 'Error sending inquiry',
        description: error.message || 'Please try again later.',
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data: ContactForm) => {
    submitInquiry.mutate(data);
  };

  return (
    <ScrollAnimations>
      <div>
        {/* Hero Section */}
        <section id="hero" className="bg-gradient-to-br from-tf-orange/10 to-white py-xxxl geometric-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-lg">
                Let's Solve Your Critical <span className="text-tf-orange">Talent Challenge</span>—Fast.
              </h1>
              <p className="text-lg md:text-xl text-text-medium mb-lg">
                When talent gaps threaten growth, speed and precision matter. Connect directly with senior experts who specialize in complex, high‑stakes hiring.
              </p>
              <div className="bg-gradient-to-r from-tf-orange/10 to-red-50 p-6 rounded-xl border border-tf-orange/20 inline-block">
                <p className="text-lg font-semibold text-text-dark">
                  We answer every legitimate request <span className="text-tf-orange">within one business day</span>—no gate‑keeping, no junior screen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Reminder & Self-Select Links */}
        <section className="bg-bg-subtle py-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-text-dark mb-lg">
                Partnering with The Talent Foundation means investing in <span className="font-semibold text-text-dark">sustainable internal capability</span>—predictable execution, measurable ROI, and reduced risk.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-md text-sm">
                <span className="text-text-medium font-medium">Not sure we're the right fit?</span>
                <div className="flex flex-wrap justify-center gap-md">
                  <Link href="/who-we-serve" className="inline-flex items-center gap-xs text-tf-orange font-semibold hover:text-tf-orange/80 transition-colors">
                    <Users className="w-4 h-4" />
                    Who We Help
                  </Link>
                  <Link href="/services" className="inline-flex items-center gap-xs text-blue-600 font-semibold hover:text-blue-500 transition-colors">
                    <Settings className="w-4 h-4" />
                    Our Approach
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Path - Strategy Call */}
        <section className="bg-white py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-xxl">
                <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
                  Book a No‑Pitch, 30‑Minute Strategy Call
                </h2>
                <p className="text-lg text-text-medium mb-lg">
                  <span className="italic">Clarify your challenge • Explore data‑backed solutions • Decide if enablement is the right path</span>
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-tf-orange/5 to-indigo-50 p-8 rounded-2xl border border-tf-orange/20 mb-xxl">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-tf-orange to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-10 h-10 text-white" />
                  </div>
                  <Button 
                    asChild
                    size="lg" 
                    className="text-lg px-8 py-4 bg-tf-orange hover:bg-tf-orange/90 text-white rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  >
                    <Link href="mailto:hello@talent.foundation?subject=Strategy Call Request">
                      Book Your Strategy Call
                    </Link>
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-text-dark mb-2">100% Senior‑Level Conversation</h3>
                    <p className="text-sm text-text-medium">(Adam Kovacs or principal consultant)</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-text-dark mb-2">Confidential</h3>
                    <p className="text-sm text-text-medium">Focused on your specific objectives</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-text-dark mb-2">Clear Next‑Step Options</h3>
                    <p className="text-sm text-text-medium">Only if mutual value is obvious</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alternate Path - Quick Inquiry Form */}
        <section className="bg-bg-subtle py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-xxl">
                <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-lg">
                  Prefer Email First? Send a Quick Note.
                </h2>
                <p className="text-lg text-text-medium">
                  We'll reply with qualified input or next‑step suggestions—typically within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-dark mb-4">Thank You!</h3>
                  <p className="text-lg text-text-medium">
                    Thanks—look for a response from a senior consultant within one business day.
                  </p>
                </div>
              ) : (
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-text-dark font-semibold">Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your full name" {...field} className="p-3" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-text-dark font-semibold">Company Email *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="you@company.com" {...field} className="p-3" />
                              </FormControl>
                              <FormMessage />
                              <p className="text-xs text-text-medium">Corporate domain preferred</p>
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="companyName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-text-dark font-semibold">Company</FormLabel>
                              <FormControl>
                                <Input placeholder="Company name" {...field} className="p-3" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="title"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-text-dark font-semibold">Title / Role</FormLabel>
                              <FormControl>
                                <Input placeholder="Your title or role" {...field} className="p-3" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-text-dark font-semibold">Your Talent Challenge (short)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Brief description of your talent challenge—helps us prep a useful response"
                                className="min-h-[100px] p-3"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                            <p className="text-xs text-text-medium">Helps us prep a useful response</p>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="privacyConsent"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm font-medium text-text-dark">
                                Privacy Acknowledgement *
                              </FormLabel>
                              <p className="text-xs text-text-medium">
                                I acknowledge that my information will be handled according to The Talent Foundation's privacy policy.
                              </p>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit"
                        disabled={submitInquiry.isPending}
                        size="lg"
                        className="w-full bg-tf-orange hover:bg-tf-orange/90 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                      >
                        {submitInquiry.isPending ? (
                          <>
                            <Clock className="w-4 h-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Inquiry
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Direct Contact Info */}
        <section className="bg-white py-xxxl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-2xl border border-indigo-200">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-text-dark mb-lg">The Talent Foundation</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3">
                      <MapPin className="w-5 h-5 text-tf-orange" />
                      <span className="text-lg text-text-medium">Seattle / Mill Creek, WA • Serving clients globally</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <Mail className="w-5 h-5 text-tf-orange" />
                      <a 
                        href="mailto:hello@talent.foundation" 
                        className="text-lg text-tf-orange hover:text-tf-orange/80 font-semibold transition-colors"
                      >
                        hello@talent.foundation
                      </a>
                    </div>
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