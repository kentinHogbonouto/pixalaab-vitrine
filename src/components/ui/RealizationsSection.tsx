import Link from "next/link";

type Project = {
  title: string;
  description: string;
  href: string;
  badge: string;
  image: string,
};

const projects: Project[] = [
  {
    title: "Economiam",
    description:
      "Plateforme de commande et livraison de repas pour entreprises. UX rapide, clair, à impact social.",
    href: "https://economiam-dashboard.vercel.app/",
    badge: "Web App",
    image: '/images/economiam.png',
  },
  {
    title: "HuuFIT Fitscore",
    description:
      "Calculateur fitness & onboarding à l'application HuuFIT. Données locales, expérience fluide.",
    href: "https://fitscore.huufit.com/",
    badge: "Landing / Tool",
    image: '/images/fitscore.jpg',
  },
  {
    title: "Fermier Connecte",
    description:
      "Plateforme de mise en relation pour producteurs et acheteurs. Mise en avant des produits locaux et commande simplifiée.",
    href: "https://fermier-connect.vercel.app/",
    badge: "Web App",
    image: '/images/fermier_connect.jpg',
  },
];

function ArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M5 12h14M13 5l7 7-7 7"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


export function RealizationsSection() {
  return (
    <section id='realisation' className="w-full py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#FF3130]">
              Réalisations
            </p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">
              Nos projets récents
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Une sélection de produits délivrés avec qualité, performance et sens du détail.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#FF3130]/20 opacity-60 blur-2xl transition group-hover:opacity-80" />

              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-100">
                {/* Project preview image */}
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-70" />
              </div>

              <div className="mt-4 flex items-start gap-4">
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-slate-600">{project.description}</p>
                </div>
              </div>

              <div className="mt-6 flex items-center text-[#FF3130]">
                <span className="text-sm font-medium">Voir le projet</span>
                <ArrowIcon className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


