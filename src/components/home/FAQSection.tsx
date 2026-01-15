import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Comment fonctionne la période d'essai gratuite ?",
    answer:
      "Vous pouvez essayer toutes les fonctionnalités du plan Pro pendant 14 jours sans engagement. Aucune carte de crédit n'est requise pour commencer.",
  },
  {
    question: "Puis-je changer de plan à tout moment ?",
    answer:
      "Oui, vous pouvez passer à un plan supérieur ou inférieur à tout moment. Les changements prennent effet immédiatement et sont proratisés.",
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer:
      "Absolument. Nous utilisons le chiffrement de bout en bout et nos serveurs sont hébergés dans des centres de données certifiés. Vos données sont sauvegardées quotidiennement.",
  },
  {
    question: "Y a-t-il une limite au nombre d'utilisateurs ?",
    answer:
      "Le plan Starter permet jusqu'à 3 utilisateurs. Les plans Pro et Enterprise n'ont pas de limite d'utilisateurs.",
  },
  {
    question: "Proposez-vous des intégrations avec d'autres outils ?",
    answer:
      "Oui, nous proposons des intégrations natives avec plus de 50 outils populaires (Slack, Google Workspace, Microsoft 365, etc.) et une API complète pour vos intégrations personnalisées.",
  },
  {
    question: "Comment fonctionne le support client ?",
    answer:
      "Le plan Starter inclut le support par email. Le plan Pro offre un support prioritaire avec réponse sous 4h. Le plan Enterprise inclut un gestionnaire de compte dédié et un support 24/7.",
  },
];

const FAQSection = () => {
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
            FAQ
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Retrouvez les réponses aux questions les plus courantes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border rounded-xl px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
