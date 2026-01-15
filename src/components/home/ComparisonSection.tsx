import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const features = [
  { name: "Interface intuitive", us: true, others: true },
  { name: "Support 24/7", us: true, others: false },
  { name: "Intégrations natives", us: true, others: true },
  { name: "API complète", us: true, others: false },
  { name: "Mises à jour gratuites", us: true, others: false },
  { name: "Formation incluse", us: true, others: false },
  { name: "Sécurité avancée", us: true, others: true },
  { name: "Déploiement privé", us: true, others: false },
];

const ComparisonSection = () => {
  return (
    <section id="comparison" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full">
            Comparaison
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Pourquoi nous choisir ?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Voyez comment nous nous démarquons de la concurrence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card border rounded-2xl overflow-hidden">
           
            <div className="grid grid-cols-3 bg-secondary/50 p-4 border-b">
              <div className="text-sm font-semibold text-muted-foreground">
                Fonctionnalité
              </div>
              <div className="text-center">
                <span className="text-sm font-semibold text-primary">
                  MonApp
                </span>
              </div>
              <div className="text-center">
                <span className="text-sm font-semibold text-muted-foreground">
                  Autres
                </span>
              </div>
            </div>

            
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`grid grid-cols-3 p-4 items-center ${
                  i !== features.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="text-sm font-medium">{feature.name}</div>
                <div className="flex justify-center">
                  {feature.us ? (
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 bg-destructive/10 rounded-full flex items-center justify-center">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                  )}
                </div>
                <div className="flex justify-center">
                  {feature.others ? (
                    <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-muted-foreground" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 bg-destructive/10 rounded-full flex items-center justify-center">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
