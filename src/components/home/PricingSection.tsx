import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "0€",
    period: "/mois",
    description: "Parfait pour découvrir la plateforme",
    features: [
      "Jusqu'à 3 projets",
      "1 Go de stockage",
      "Support par email",
      "Fonctionnalités de base",
    ],
    cta: "Commencer gratuitement",
    popular: false,
  },
  {
    name: "Pro",
    price: "29€",
    period: "/mois",
    description: "Pour les équipes en croissance",
    features: [
      "Projets illimités",
      "50 Go de stockage",
      "Support prioritaire",
      "Fonctionnalités avancées",
      "Analyses détaillées",
      "Intégrations API",
    ],
    cta: "Essayer 14 jours gratuits",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Sur mesure",
    period: "",
    description: "Pour les grandes organisations",
    features: [
      "Tout du plan Pro",
      "Stockage illimité",
      "Support dédié 24/7",
      "SLA personnalisé",
      "Formation sur site",
      "Déploiement privé",
    ],
    cta: "Nous contacter",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full">
            Tarifs
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Des prix adaptés à vos besoins
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Choisissez le plan qui correspond le mieux à votre situation. Pas de
            frais cachés.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-card border rounded-2xl p-8 ${
                plan.popular
                  ? "border-primary shadow-lg scale-105"
                  : "hover:border-primary/20"
              } transition-all`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Populaire
                </span>
              )}
              <h3 className="font-semibold text-xl">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">
                {plan.description}
              </p>
              <div className="mt-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full mt-8 ${plan.popular ? "shadow-glow" : ""}`}
                variant={plan.popular ? "default" : "outline"}
                asChild
              >
                <Link to="/contact">{plan.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
