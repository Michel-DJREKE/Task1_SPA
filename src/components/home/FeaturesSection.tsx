import { motion } from "framer-motion";
import { Zap, Shield, Sparkles, BarChart3, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Performance optimale",
    description:
      "Une architecture moderne pensée pour la rapidité et la stabilité.",
  },
  {
    icon: Shield,
    title: "Sécurité avancée",
    description:
      "Protection complète de vos données avec des standards élevés.",
  },
  {
    icon: Sparkles,
    title: "Design professionnel",
    description: "Une interface élégante et intuitive, orientée utilisateur.",
  },
  {
    icon: BarChart3,
    title: "Analyses détaillées",
    description: "Tableaux de bord complets pour suivre vos performances.",
  },
  {
    icon: Clock,
    title: "Gain de temps",
    description: "Automatisez vos tâches répétitives et gagnez en efficacité.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Travaillez en équipe avec des outils de collaboration intégrés.",
  },
];

const FeaturesSection = () => {
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
            Fonctionnalités
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Une solution pensée pour durer
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Nous combinons technologie, sécurité et design pour vous offrir la
            meilleure expérience possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border rounded-2xl p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
