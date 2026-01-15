import { motion } from "framer-motion";

const partners = [
  { name: "TechCorp", logo: "TC" },
  { name: "InnovateLab", logo: "IL" },
  { name: "DataFlow", logo: "DF" },
  { name: "CloudSync", logo: "CS" },
  { name: "SecureNet", logo: "SN" },
];

const TrustSection = () => {
  return (
    <section className="py-16 bg-secondary/30 border-y">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-8"
        >
          Ils nous font déjà confiance
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center flex-wrap gap-8 md:gap-12"
        >
          {partners.map((partner, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-muted-foreground/60 hover:text-primary transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center font-bold text-sm">
                {partner.logo}
              </div>
              <span className="font-medium">{partner.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
