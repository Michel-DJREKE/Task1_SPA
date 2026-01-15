import { motion } from "framer-motion";

const stats = [
  { value: "10k+", label: "Utilisateurs actifs" },
  { value: "99.9%", label: "Disponibilité" },
  { value: "35%", label: "Gain de productivité" },
  { value: "24/7", label: "Support client" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="text-4xl md:text-5xl font-bold">{s.value}</p>
              <p className="mt-2 text-sm opacity-80">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
