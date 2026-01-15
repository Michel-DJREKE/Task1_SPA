import { motion } from "framer-motion";
import { Users, Settings, BarChart3, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Users,
    step: "01",
    title: "Inscription",
    text: "Créez votre compte en quelques minutes et accédez à toutes les fonctionnalités.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Configuration",
    text: "Personnalisez la plateforme selon vos besoins et préférences.",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Analyse",
    text: "Suivez vos performances en temps réel avec nos tableaux de bord.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Résultats",
    text: "Optimisez vos processus et atteignez vos objectifs plus rapidement.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full">
            Processus
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Comment ça fonctionne
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            En seulement 4 étapes simples, commencez à transformer votre façon
            de travailler.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="bg-card border rounded-2xl p-8 text-center h-full">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {step.step}
                </span>
                <div className="w-14 h-14 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.text}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
