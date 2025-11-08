"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

type Project = {
  title: string;
  description: string;
  href: string;
  badge: string;
  image: string,
};


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
  const t = useTranslations();

  const projects: Project[] = [
    {
      title: t('realizations.projects.economiam.title'),
      description: t('realizations.projects.economiam.description'),
      href: "https://economiam-dashboard.vercel.app/",
      badge: "Web App",
      image: '/images/economiam.png',
    },
    {
      title: t('realizations.projects.huufit.title'),
      description: t('realizations.projects.huufit.description'),
      href: "https://fitscore.huufit.com/",
      badge: "Landing / Tool",
      image: '/images/fitscore.png',
    },
    {
      title: t('realizations.projects.fermierConnecte.title'),
      description: t('realizations.projects.fermierConnecte.description'),
      href: "https://fermier-connect.vercel.app/",
      badge: "Web App",
      image: '/images/fermier_conecte.png',
    },
    {
      title: t('realizations.projects.loobv.title'),
      description: t('realizations.projects.loobv.description'),
      href: "https://loobv.com/",
      badge: "Web App",
      image: '/images/loobv.png',
    }
  ];
  
  return (
    <section id='realisation' className="w-full py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mb-6 shadow-lg"
          >
            <Lightbulb className="w-8 h-8 text-white" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h1 className="mt-2 text-2xl sm:text-4xl lg:text-6xl font-bold">
              {t('realizations.title')}
            </h1>
            <p className="mt-2 text-sm sm:text-lg lg:text-xl max-w-2xl mx-auto text-slate-600">
              {t('realizations.subtitle')}
            </p>
          </motion.div>
        </motion.div>


        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link
                href={project.href}
                target="_blank"
                className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all duration-300 hover:shadow-xl"
              >
                {/* <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#FF3130]/20 opacity-60 blur-2xl transition group-hover:opacity-80" /> */}

                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-black">
                  {/* Project preview image */}
                  <Image
                    width={700}
                    height={700}
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-[40vh] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-70" /> */}
                </div>

                <div className="mt-4 flex items-start gap-4">

                  <div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-slate-900">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-slate-600">{project.description}</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center text-[#FF3130]">
                  <span className="text-sm font-medium">{t('realizations.view-project')}</span>
                  <ArrowIcon className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


