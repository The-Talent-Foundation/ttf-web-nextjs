import { useState } from 'react';
import { Link } from 'wouter';
import { Users, Settings } from 'lucide-react';
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
        description: 'We typically respond within one business day.',
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
        {/* Header */}
        <section id="hero" className="bg-white py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-md">
              Let's Solve Your <span className="text-tf-orange">Talent Challenge</span>
            </h1>
            <p className="text-lg text-text-medium">
              Ready to transform your talent acquisition from a constraint into a <span className="font-semibold text-text-dark">strategic advantage</span>? We specialize in solving <span className="font-semibold text-text-dark">high-stakes, complex talent challenges</span> that standard approaches can't handle. We <span className="font-semibold text-text-dark">typically respond within one business day</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Value Reinforcement */}
      <section className="bg-bg-subtle py-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-text-dark mb-md">
              We focus on building <span className="font-semibold text-text-dark">sustainable internal capability</span> that delivers <span className="font-semibold text-text-dark">lasting, predictable results</span>.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-lg text-sm">
              <span className="text-text-medium">Unsure where to start?</span>
              <Link href="/who-we-serve" className="inline-flex items-center gap-xs text-tf-blue font-medium hover:text-tf-orange transition-colors">
                <Users className="w-4 h-4" />
                Review Who We Serve
              </Link>
              <Link href="/services" className="inline-flex items-center gap-xs text-tf-blue font-medium hover:text-tf-orange transition-colors">
                <Settings className="w-4 h-4" />
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Call Scheduler */}
      <section className="bg-white py-xxxl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xxl items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-md">
                Schedule Your Complimentary Strategic Assessment
              </h2>
              <p className="text-lg text-text-dark mb-md">
                The most effective way to explore how we can help is through a direct conversation about your specific situation.
              </p>
              <div className="flex items-start gap-md mb-lg">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80" 
                  alt="Adam Kovacs" 
                  className="w-20 h-20 rounded-full shadow-sm object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-text-medium">
                    This 30-minute call is a <span className="font-semibold text-text-dark">no-obligation, collaborative discussion</span> about your talent challenges and potential solutions. Consider it <span className="font-semibold text-text-dark">your first step towards achieving predictable talent results</span>.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-100 border border-border-light rounded-lg p-lg h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p className="text-sm mb-md">[Placeholder: Embedded Scheduling Tool]</p>
                  <p className="text-xs">Calendly/SavvyCal iframe integration</p>
                  <p className="text-xs">Ensure styling matches TF brand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="bg-bg-subtle py-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-text-dark mb-md">Prefer to Send a Message?</h3>
            <p className="text-text-medium mb-lg">
              Use the simple form below to share your challenge and we'll respond with initial thoughts and next steps.
            </p>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-lg text-center">
                <h4 className="font-semibold text-green-800 mb-xs">Thank you for your inquiry!</h4>
                <p className="text-green-700 text-sm">We typically respond within one business day.</p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-lg">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-text-dark font-medium">
                          Full Name <span className="text-sm text-text-medium">(Required)</span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="focus:ring-tf-blue focus:border-tf-blue"
                          />
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
                        <FormLabel className="text-text-dark font-medium">
                          Company Email <span className="text-sm text-text-medium">(Required)</span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            {...field} 
                            className="focus:ring-tf-blue focus:border-tf-blue"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-text-dark font-medium">
                          Company Name <span className="text-sm text-text-medium">(Optional)</span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="focus:ring-tf-blue focus:border-tf-blue"
                          />
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
                        <FormLabel className="text-text-dark font-medium">
                          Your Title <span className="text-sm text-text-medium">(Optional)</span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="focus:ring-tf-blue focus:border-tf-blue"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-text-dark font-medium">
                          How can we help? <span className="text-sm text-text-medium">(Optional)</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={4} 
                            className="focus:ring-tf-blue focus:border-tf-blue resize-y"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="privacyConsent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox 
                            checked={field.value} 
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-sm text-text-medium">
                          I agree to the <a href="#" className="text-tf-blue hover:text-tf-orange transition-colors">Privacy Policy</a>
                        </FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="btn-secondary"
                    disabled={submitInquiry.isPending}
                  >
                    {submitInquiry.isPending ? 'Sending...' : 'Send Inquiry'}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="bg-white py-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block text-left border-t border-border-light pt-md">
              <p className="font-semibold text-text-dark text-sm mb-xs">The Talent Foundation</p>
              <p className="text-sm mb-xs">
                <a href="mailto:hello@thetalentfoundation.com" className="text-tf-blue hover:text-tf-orange transition-colors">
                  hello@thetalentfoundation.com
                </a>
              </p>
              <p className="text-sm text-text-medium">Global Remote Operations</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </ScrollAnimations>
  );
}
