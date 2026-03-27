import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Services } from "@/components/Services";
import { ContactForm } from "@/components/ContactForm";
import { BookingSection } from "@/components/BookingSection";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { LazyHeroImage } from "@/components/LazyHeroImage";

export default function Home() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 md:px-6 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 -z-10" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 -z-10" />

        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-8 text-foreground">
                Growth is only sustainable when it is <span className="text-primary italic">accurate.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-lg leading-relaxed font-light">
                Our mission is to bridge the gap between high-level strategy and daily execution.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToContact} size="lg" variant="premium" className="text-lg px-8 h-14">
                  Get Started
                </Button>
                {/* <Button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 h-14 border-primary/20 hover:bg-secondary"
                >
                  Explore Services
                </Button> */}
              </div>
            </motion.div>

            {/* Abstract visual element for Hero */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative bg-secondary/20 backdrop-blur-sm border border-white/50 p-8 flex items-center justify-center">
                {/* Decorative Pattern */}
                <div className="grid grid-cols-2 gap-4 w-full h-full opacity-90 transition-all duration-500">
                  {/* To add images, place files in the 'public' folder (e.g., 'public/hero-1.jpg') and update these URLs */}
                  <LazyHeroImage
                    src="/hero-1.jpg"
                    className="bg-primary/20 rounded-2xl w-full h-full"
                  />
                  <LazyHeroImage
                    src="/hero-2.jpg"
                    className="bg-primary/30 rounded-2xl w-full h-[80%] mt-auto"
                  />
                  <LazyHeroImage
                    src="/hero-3.jpg"
                    className="bg-primary/40 rounded-2xl w-full h-[80%]"
                  />
                  <LazyHeroImage
                    src="/hero-4.jpg"
                    className="bg-primary/20 rounded-2xl w-full h-full"
                  />
                </div>

                {/* Floating Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-border/50"
                >
                  <div className="h-2 w-12 bg-primary/20 rounded mb-4" />
                  <div className="h-4 w-3/4 bg-foreground/10 rounded mb-2" />
                  <div className="h-4 w-1/2 bg-foreground/10 rounded" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="animate-bounce" size={16} />
        </motion.div>
      </section>

      <Services />

      {/* ABOUT / MISSION SECTION */}
      <section id="about" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold mb-8"
            >
              Why Seligation?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {/*
## Changes Made

### [index.css](file:///home/yitethio/Work/seligation/seligation-/client/src/index.css)
- Added a custom `@keyframes shimmer` and `.animate-shimmer` class using the project's brand mocha color.

### [LazyHeroImage.tsx](file:///home/yitethio/Work/seligation/seligation-/client/src/components/LazyHeroImage.tsx)
- Implemented a relative container with `overflow-hidden`.
- Added a skeleton overlay that uses the `animate-shimmer` class while the image is loading.
- Added a subtle placeholder color (`bg-primary/5`) for the time before the image enters the viewport.

### [Home.tsx](file:///home/yitethio/Work/seligation/seligation-/client/src/pages/Home.tsx)
- Integrated the `LazyHeroImage` component into the hero section pattern.
- Updated all four decorative shapes to use lazy loading and skeleton loaders.

## Verification Results

### Manual Verification
- When you first load the page or scroll down, you will see a subtle mocha-tinted shimmer effect in the empty shapes while the images are downloading.
- Once downloaded, the images will smoothly fade in over 1 second.
*/}
              In a world obsessed with speed, we focus on <strong className="text-primary font-medium">velocity</strong>—speed with direction. We understand that scaling a business isn't just about doing more; it's about doing the right things, consistently and effectively. We integrate seamlessly into your operations to become the engine of your growth.
            </motion.p>
          </div>
        </div>
      </section>

      <BookingSection />

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 md:py-32 px-4 md:px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-primary font-medium tracking-wider uppercase text-sm">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 leading-tight">
                Ready to accelerate your <br />
                <span className="text-primary">growth journey?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-md">
                Whether you need a dedicated virtual assistant, a high-performance SDR team, or strategic cold calling—we're here to help you scale.
              </p>

              <div className="space-y-6">
                {/* <div className="flex items-center gap-4 p-4 bg-secondary/20 rounded-lg border border-secondary">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  </div>
                  <div>
                    <h4 className="font-bold">Accepting New Clients</h4>
                    <p className="text-sm text-muted-foreground">Slots available for Q4 2024</p>
                  </div>
                </div> */}
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* UNIQUE FOOTER */}
      <footer className="bg-foreground text-background py-16 px-5 md:px-6 relative overflow-hidden">
        {/* Large Typography Element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
          <span className="text-[17vw] font-display font-bold leading-none select-none whitespace-nowrap absolute -bottom-[5vw] left-0">
            SELIGATION
          </span>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-display font-bold mb-6">Seligation.</h3>
              <p className="text-white/60 max-w-sm">
                Bridging the gap between strategy and execution. Your partner in sustainable, accurate growth.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-primary">Navigation</h4>
              <ul className="space-y-3 text-white/60">
                <li><button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">About</button></li>
                <li><button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-primary">Connect</h4>
              <ul className="space-y-3 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/seligation?igsh=eXdxOG1uZDB2d2Vz" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
            <p>&copy; {new Date().getFullYear()} Seligation Inc. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
