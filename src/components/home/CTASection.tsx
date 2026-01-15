import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 mb-6 text-sm font-medium bg-white/10 px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4" />
            Offre limitée
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Prêt à passer à la vitesse supérieure ?
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Rejoignez plus de 10 000 entreprises qui ont déjà transformé leur
            façon de travailler. Commencez gratuitement dès aujourd'hui.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link to="/contact">
                Commencer gratuitement
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
              asChild
            >
              <Link to="/a-propos">Découvrir la plateforme</Link>
            </Button>
          </div>

          <p className="mt-6 text-sm opacity-70">
            Pas de carte de crédit requise • Configuration en 2 minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
