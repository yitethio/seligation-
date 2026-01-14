import { motion } from "framer-motion";
import { Phone, Users, BarChart3 } from "lucide-react";

const services = [
  {
    id: "cold-calling",
    title: "Cold Calling",
    description: "We don’t just make calls; we build momentum. Our team handles the heavy lifting—navigating gatekeepers and qualifying leads—so your calendar stays full of high-value opportunities.",
    icon: Phone,
    delay: 0.1,
  },
  {
    id: "virtual-assistance",
    title: "Virtual Assistance",
    description: "Bridge the gap between a cluttered to-do list and a streamlined operation. Instant Scalability, Operational Velocity, and Focused Leadership for your growing business.",
    icon: Users,
    delay: 0.2,
  },
  {
    id: "sdr-services",
    title: "SDR Services",
    description: "Proactively hunt, engage, and qualify your future customers. Combining Speed (rapid market entry) with Delegation (expert execution) to scale your sales pipeline.",
    icon: BarChart3,
    delay: 0.3,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 -skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 text-foreground leading-tight">
            Comprehensive solutions for <br />
            <span className="text-primary italic">sustainable growth.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              className="group p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/20 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold font-display mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
