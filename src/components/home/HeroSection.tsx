import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const pulseAnimation = {
  initial: { scale: 1, opacity: 0.5 },
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 hero-grid opacity-30" />
      <motion.div
        variants={pulseAnimation}
        initial="initial"
        animate="animate"
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-glow rounded-full blur-3xl"
      />
      <motion.div
        variants={pulseAnimation}
        initial="initial"
        animate="animate"
        style={{ animationDelay: "2s" }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-glow rounded-full blur-3xl"
      />

      <div className="container relative mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
               Découvrez nos fonctionnalités 2026
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Accélérez vos projets avec
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                une plateforme fiable
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Une solution complète pour optimiser vos processus, améliorer
              votre productivité et offrir une expérience utilisateur de
              qualité.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap">
              <Button size="lg" className="shadow-glow" asChild>
                <Link to="/contact">
                  Commencer gratuitement
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/a-propos">En savoir plus</Link>
              </Button>
            </div>

           
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
           <div className="rounded-2xl border bg-card shadow-xl p-4 md:p-6">
              <img
                src="/public/assets/dashboard_image.png"
                alt="Dashboard de la plateforme"
                className="rounded-xl w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
