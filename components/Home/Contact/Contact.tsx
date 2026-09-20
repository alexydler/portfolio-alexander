import type { IconType } from "react-icons";
import { BiEnvelope } from "react-icons/bi";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: IconType;
  hoverClass: string;
  external?: boolean;
};

const contactLinks: ContactLink[] = [
  {
    label: "Instagram",
    value: "@alex_ydler",
    href: "https://www.instagram.com/alex_ydler/",
    icon: FaInstagram,
    hoverClass: "hover:border-pink-400/50 hover:bg-pink-500/10",
    external: true,
  },
  {
    label: "GitHub",
    value: "alexydler",
    href: "https://github.com/alexydler",
    icon: FaGithub,
    hoverClass: "hover:border-white/40 hover:bg-white/10",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Alexander Ydler",
    href: "https://www.linkedin.com/in/alexander-ydler-a217bb1b9",
    icon: FaLinkedinIn,
    hoverClass: "hover:border-blue-400/50 hover:bg-blue-500/10",
    external: true,
  },
  {
    label: "Correo",
    value: "alexanderydler@gmail.com",
    href: "mailto:alexanderydler@gmail.com",
    icon: BiEnvelope,
    hoverClass: "hover:border-cyan-300/50 hover:bg-cyan-300/10",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-900 px-5 pb-24 pt-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center" data-aos="fade-up">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Contacto</p>
          <h1 className="mt-4 text-3xl font-bold text-gray-100 md:text-5xl">
            Conectemos por <span className="text-cyan-300">aquí</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Puedes conocer más sobre mi trabajo o escribirme directamente a través de estas plataformas.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {contactLinks.map(({ label, value, href, icon: Icon, hoverClass, external }, index) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={`${label}: ${value}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`group flex items-center gap-5 rounded-2xl border border-slate-700 bg-[#14134145] p-5 transition-all duration-300 hover:-translate-y-1 ${hoverClass}`}
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-950/70 text-white transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-6 w-6" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-bold uppercase tracking-wider text-cyan-300">{label}</span>
                <span className="mt-1 block break-words text-base font-semibold text-gray-200 sm:text-lg">{value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
