import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Mail, 
  Calendar, 
  FileText, 
  Database, 
  Cloud,
  Smartphone,
  Globe,
  Lock
} from "lucide-react";

const integrations = [
  { icon: MessageSquare, name: "Slack", category: "Communication" },
  { icon: Mail, name: "Gmail", category: "Email" },
  { icon: Calendar, name: "Google Calendar", category: "Productivité" },
  { icon: FileText, name: "Notion", category: "Documentation" },
  { icon: Database, name: "MongoDB", category: "Base de données" },
  { icon: Cloud, name: "AWS", category: "Cloud" },
  { icon: Smartphone, name: "Mobile Apps", category: "Mobile" },
  { icon: Globe, name: "Webhooks", category: "API" },
  { icon: Lock, name: "OAuth 2.0", category: "Sécurité" },
];

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full">
            Intégrations
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Connectez vos outils favoris
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Notre plateforme s'intègre parfaitement avec plus de 50 outils
            populaires pour une expérience fluide.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
          {integrations.map((integration, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group"
            >
              <div className="bg-card border rounded-xl p-4 flex flex-col items-center justify-center aspect-square hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <integration.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="mt-2 text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                  {integration.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Et bien plus encore... Découvrez notre{" "}
            <span className="text-primary font-medium cursor-pointer hover:underline">
              marketplace d'intégrations
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
