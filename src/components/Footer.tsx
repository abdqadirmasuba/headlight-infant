import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import schoolLogo from "@/assets/school-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Classes", href: "#classes" },
    { name: "Staff", href: "#staff" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  const programs = [
    "Baby Nursery",
    "Middle Nursery", 
    "Top Nursery",
    "Primary 1-3",
    "Primary 4-7",
    "PLE Preparation"
  ];

  return (
    <footer className="bg-school-navy text-school-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={schoolLogo}
                alt="HeadLight Infants School Logo"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold">HeadLight Infants</h3>
                <p className="text-sm text-school-white/80">You reap what you sow</p>
              </div>
            </div>
            <p className="text-school-white/80 text-sm leading-relaxed">
              Providing quality nursery and primary education in Kayunga, Uganda 
              since February 2019. Nurturing young minds for a brighter tomorrow.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-8 h-8 bg-school-white/10 rounded-full flex items-center justify-center hover:bg-school-yellow hover:text-school-navy transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-school-white/10 rounded-full flex items-center justify-center hover:bg-school-yellow hover:text-school-navy transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-school-white/10 rounded-full flex items-center justify-center hover:bg-school-yellow hover:text-school-navy transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-school-white/80 hover:text-school-yellow transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <li key={index}>
                  <span className="text-school-white/80 text-sm">
                    {program}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-school-yellow mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-school-white/80">
                    Kayunga District<br />
                    Uganda, Central Region
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-school-yellow mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="text-sm text-school-white/80">
                    <a href="tel:+256755138789" className="hover:text-school-yellow transition-colors">
                      +256 755 138 789
                    </a>
                  </p>
                  <p className="text-sm text-school-white/80">
                    <a href="tel:+256771653448" className="hover:text-school-yellow transition-colors">
                      +256 771 653 448
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-school-yellow mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-school-white/80">
                    <a href="mailto:info@headlightinfants.ac.ug" className="hover:text-school-yellow transition-colors">
                      info@headlightinfants.ac.ug
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-school-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-school-white/80">
                © {currentYear} HeadLight Infants School. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-school-white/80">
                School Hours: Mon-Fri 7:00 AM - 5:00 PM
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-sm text-school-white/80 hover:text-school-yellow transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-school-white/80 hover:text-school-yellow transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;