import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Cette plateforme a complètement transformé notre manière de travailler. Simple, rapide et efficace.",
    author: "Marie Dupont",
    role: "Responsable produit",
    company: "TechCorp",
    rating: 5,
  },
  {
    quote:
      "Le meilleur investissement que nous ayons fait. Notre productivité a augmenté de 40% en 3 mois.",
    author: "Jean Martin",
    role: "CEO",
    company: "InnovateLab",
    rating: 5,
  },
  {
    quote:
      "Un support client exceptionnel et des fonctionnalités qui répondent vraiment à nos besoins.",
    author: "Sophie Bernard",
    role: "Directrice Marketing",
    company: "DataFlow",
    rating: 5,
  },
];

const TestimonialsSection = () => {
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
            Témoignages
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Ce que disent nos clients
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Découvrez pourquoi des milliers d'entreprises nous font confiance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border rounded-2xl p-8"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-sm">{t.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} • {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
