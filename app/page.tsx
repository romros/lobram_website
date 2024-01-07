import Historia from "@/components/history";
import Hero from "@/components/hero";
import { fetchCapsalera, fetchHistories } from "./lib/data";
import { LocalizedText } from "./lib/definitions";

export default async function Home() {
  const histories = await fetchHistories();
  const hero = await fetchCapsalera("/");
  // Ajusta això per assegurar que estàs passant un objecte de tipus LocalizedText
  const hero_title: LocalizedText = hero?.title || { ca: "" };
  const hero_subtitle: LocalizedText = hero?.subtitle || { ca: "" };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero
        lang="ca"
        title={hero_title}
        subtitle={hero_subtitle}
        backgroundImage={hero?.imatge?._url || ""}
        logo={hero?.imatge_logo?._url || ""}
      />

      {histories.map((history: any) => (
        <Historia
          key={history._id}
          image={history.imatge?._url || ""}
          title={history.title}
          description={history.description}
          text_button={history.text_button}
          link_button={history.link_button}
          foto_esquerra={history.foto_esquerra}
          is_markdown={true}
          lang="ca"
        />
      ))}
    </main>
  );
}
