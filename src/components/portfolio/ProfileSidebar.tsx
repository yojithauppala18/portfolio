import { Mail, Phone, MapPin, Calendar, Github, Linkedin, ExternalLink } from "lucide-react";
import avatar from "@/assets/avatar.png";

const ProfileSidebar = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "yojitha.188@gmail.com", href: "mailto:yojitha.188@gmail.com" },
    { icon: Phone, label: "Phone", value: "(469) 688-7337", href: "tel:+14696887337" },
    { icon: Calendar, label: "Birthday", value: "August 1, 1999" },
    { icon: MapPin, label: "Location", value: "Dallas, TX, USA" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/yojitha", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/yojitha-uppala-07b6b1178/", label: "LinkedIn" },
  ];

  return (
    <aside className="w-full lg:w-80 lg:min-w-80 lg:sticky lg:top-8 lg:self-start">
      <div className="bg-card rounded-3xl p-6 gold-border card-shadow">
        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-secondary">
            <img
              src={avatar}
              alt="Yojitha Uppala"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center mb-6">
          <h1 className="text-xl font-semibold text-foreground mb-2">Yojitha Uppala</h1>
          <span className="inline-block px-4 py-1.5 bg-secondary rounded-lg text-xs font-medium text-muted-foreground">
            Data Engineer | AI/ML Engineer
          </span>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border mb-6" />

        {/* Contact Info */}
        <ul className="space-y-4 mb-6">
          {contactInfo.map((item, index) => (
            <li key={index} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 gold-border">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm text-foreground hover:text-primary transition-colors truncate block"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-foreground truncate">{item.value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <div className="flex justify-center gap-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center gold-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label={link.label}
            >
              <link.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
