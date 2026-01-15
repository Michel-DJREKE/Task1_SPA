import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useApp } from "@/context/AppContext";

const NewsletterSection = () => {
  const { state, setNewsletterSubscribed } = useApp();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
   
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setNewsletterSubscribed(true);
    setIsSubmitting(false);
    setEmail("");
  };

  return (
    <section id="newsletter" className="py-20 bg-secondary/30 border-y">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold">
            Restez informé des dernières nouveautés
          </h2>
          <p className="mt-4 text-muted-foreground">
            Inscrivez-vous à notre newsletter pour recevoir nos conseils, mises
            à jour et offres exclusives.
          </p>

          {state.newsletterSubscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 flex items-center justify-center gap-3 text-primary"
            >
              <CheckCircle className="w-6 h-6" />
              <span className="font-medium">
                Merci ! Vous êtes maintenant inscrit.
              </span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Entrez votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12"
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="h-12"
                >
                  {isSubmitting ? (
                    "Inscription..."
                  ) : (
                    <>
                      S'inscrire
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Pas de spam. Désinscription à tout moment.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
