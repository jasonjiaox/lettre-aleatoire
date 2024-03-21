import Link from "next/link"
import {siteConfig} from "@/config/site"
import {AleatoireLettre} from "@/components/aleatoire-lettre";
import {SocialMediaShare} from "@/components/social-media-share";

import * as React from "react";


export default async function IndexPage() {

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-20">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Générateur de lettre
          </h1>

          <AleatoireLettre/>

          <SocialMediaShare name={siteConfig.name} shareUrl={siteConfig.url} urlNoHttp={siteConfig.urlNoHttp}/>

        </div>
      </section>

      <section
        id="propos"
        className="container space-y-10 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-8 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            À propos de la lettre aléatoire
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Le Générateur de Lettre Aléatoire est un outil en ligne gratuit qui vous permet de générer des lettres
            aléatoires. Le processus est assez simple. Il vous suffit de cliquer sur le bouton &quot;Générer&quot; et
            vos lettres aléatoires apparaîtront. Le résultat sera actuellement une lettre minuscule anglaise
            aléatoire(a-z). De plus, d&#39;autres options telles que des chiffres aléatoires, des symboles aléatoires ou
            même des caractères aléatoires en français, espagnol, allemand, russe, chinois, japonais seront développées
            à l&#39;avenir.
          </p>
        </div>

        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-8 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Questions fréquemment posées
          </h2>
          <h3 className="text-2xl font-semibold leading-[1.1] sm:text-2xl md:text-3xl">
            Combien de lettres aléatoires y a-t-il dans l&#39;alphabet?
          </h3>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Il y a actuellement 26 lettres dans l&#39;alphabet anglais. Les 26 lettres vont de la lettre minuscule A (la
            première lettre) à la lettre minuscule Z (la 26e lettre).
          </p>
          <h3 className="text-2xl font-semibold leading-[1.1] sm:text-2xl md:text-3xl">
            Ce générateur ne produit-il que des lettres anglaises aléatoires?
          </h3>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Actuellement, la valeur par défaut est pour les lettres anglaises. D&#39;autres langues telles que le
            français, l&#39;espagnol, l&#39;allemand, le russe, le chinois, les lettres japonaises seront bientôt
            développées.
          </p>
        </div>
      </section>

      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Fièrement Open Source
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Lettre Aléatoire est open source et propulsé par des logiciels libres. <br />{" "}
            Le code est disponible sur {" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .{" "}
          </p>
        </div>
      </section>
    </>
  )
}
