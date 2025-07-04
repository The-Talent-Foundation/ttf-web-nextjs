import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Illuminate from "@/pages/services/Illuminate";
import Innovate from "@/pages/services/Innovate";
import Elevate from "@/pages/services/Elevate";
import Accelerate from "@/pages/services/Accelerate";
import WhoWeServe from "@/pages/WhoWeServe";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/services/illuminate" component={Illuminate} />
        <Route path="/services/innovate" component={Innovate} />
        <Route path="/services/elevate" component={Elevate} />
        <Route path="/services/accelerate" component={Accelerate} />
        <Route path="/who-we-serve" component={WhoWeServe} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="tf-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
