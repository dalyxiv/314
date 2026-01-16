import { Linkedin, Mail, FileText } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/50 relative">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src={logo} alt="3:14 Three Fourteen" className="h-12" />
            <p className="text-muted-foreground text-sm tracking-wider">Luck, Engineered.</p>
          </div>
          
          {/* Links */}
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-secondary transition-colors flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              <span className="hidden sm:inline">Contact</span>
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-secondary transition-colors flex items-center gap-2"
            >
              <FileText className="w-5 h-5" />
              <span className="hidden sm:inline">Apply</span>
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-secondary transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Three Fourteen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
