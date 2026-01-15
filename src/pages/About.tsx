import { motion } from "framer-motion";
import { Users, Target, Heart } from "lucide-react";
import Layout from "@/components/layout/Layout";

/* ---------------- VALUES ---------------- */
const values = [
  {
    icon: Target,
    title: "Notre mission",
    description:
      "Concevoir des solutions digitales fiables et utiles, pensées pour répondre à de vrais besoins métiers.",
  },
  {
    icon: Heart,
    title: "Nos valeurs",
    description:
      "Exigence, transparence et sens du détail guident chacune de nos décisions.",
  },
  {
    icon: Users,
    title: "Notre équipe",
    description:
      "Des profils complémentaires unis par la passion du numérique et du travail bien fait.",
  },
];

/* ---------------- PAGE ---------------- */
const About = () => {
  return (
    <Layout>

      {/* ================= HERO ================= */}
      <section className="py-24 bg-background border-b">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block mb-4 text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full">
              À propos
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Une équipe engagée
              <span className="text-primary"> au service du digital</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground">
              Nous accompagnons les entreprises et les porteurs de projets
              dans la conception de solutions digitales performantes,
              durables et orientées utilisateurs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Notre histoire
              </h2>

              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Notre aventure est née d’un constat simple : trop de solutions
                  digitales sont complexes, peu adaptées aux usages réels
                  et difficiles à maintenir.
                </p>
                <p>
                  Nous avons donc choisi une approche différente, centrée sur
                  la clarté, la performance et l’expérience utilisateur.
                </p>
                <p>
                  Chaque projet est conçu avec rigueur, en collaboration
                  étroite avec nos clients, afin de livrer des solutions
                  réellement utiles et évolutives.
                </p>
              </div>
            </motion.div>

            {/* VISUAL */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl border bg-card p-10 text-center shadow-sm">
                <div className="text-5xl font-bold text-primary mb-2">5+</div>
                <p className="text-muted-foreground">
                  années d’expérience dans le digital
                </p>
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-24 bg-secondary/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ce qui nous guide
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Des principes clairs qui structurent notre manière de travailler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-background border rounded-2xl p-8 text-center hover:shadow-md transition"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10k+", label: "Utilisateurs" },
              { number: "50+", label: "Projets livrés" },
              { number: "99%", label: "Satisfaction client" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <p className="text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default About;
