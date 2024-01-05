import ContactMap from "@/components/contactMap";
import Hero from "@/components/hero";
import Historia from "@/components/history";
import { createClient } from "next-sanity";
import { Key } from "react";
import { fetchHistories } from "./lib/data";

export default async function Home() {
  const histories = await fetchHistories();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero
        title="Escola d'Ensenyances de Gurdjieff"
        subtitle="Grups d'autoconeixement inspirats en 4rt camí"
        backgroundImage="/foto_casa_original.jpg"
        logo="/logo_bram.png"
      />
      {histories.map((history: any) => (
        <Historia
          key={history._id}
          image={history.imageUrl}
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
