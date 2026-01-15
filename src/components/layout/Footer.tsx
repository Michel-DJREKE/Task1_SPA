import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/40 border-t border-border">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
         
          <div className="md:col-span-2">
            <Link
              to="/"
              className="text-2xl font-bold text-foreground tracking-tight"
            >
              Mon<span className="text-primary">App</span>
            </Link>

            <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
              MonApp est une application web moderne conçue pour offrir
              une expérience utilisateur fluide, intuitive et performante.
            </p>
          </div>

         
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-primary transition"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/a-propos"
                  className="text-sm text-muted-foreground hover:text-primary transition"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
              Contact
            </h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                contact@monapp.tg
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                +228 70 03 30 02
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                Lomé, Togo
              </li>
            </ul>
          </div>
        </div>

      
        <div className="mt-14 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} MonApp — Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
