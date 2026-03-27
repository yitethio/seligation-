import { motion } from "framer-motion";

export function BookingSection() {
    return (
        <section id="book-session" className="py-24 md:py-32 bg-secondary/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground"
                    >
                        Book a Session
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-muted-foreground pb-4"
                    >
                        Schedule a time to discuss how we can accelerate your growth. Select an available time below.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Subtle container around iframe */}
                    <div className="bg-card border border-border/50 rounded-2xl shadow-xl overflow-hidden relative">
                        {/* Loading state / placeholder base if iframe takes time */}
                        <div className="absolute inset-0 -z-10 bg-secondary/20 animate-pulse"></div>

                        <iframe
                            src="https://calendly.com/yitbarek7003/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                            width="100%"
                            height="700"
                            frameBorder="0"
                            scrolling="no"
                            title="Book a 30-minute Consultation"
                            className="w-full bg-transparent"
                            style={{ minHeight: "700px" }}
                        ></iframe>
                    </div>

                    <div className="mt-6 text-center">
                        <a
                            href="https://calendly.com/yitbarek7003/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:text-primary/80 transition-colors font-medium hover:underline flex items-center justify-center gap-1"
                        >
                            Having trouble? Book here
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
