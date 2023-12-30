import { overlock, quattrocento } from "@/app/ui/fonts";
import { builder } from "@builder.io/sdk";
import ReactMarkdown from "react-markdown";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function Home() {
  const content = await builder
    .get("contingut-general-md", {
      userAttributes: {
        "query.data.id": "politica_privacitat",
      },
    })
    .toPromise();

  let titols = content.data?.titol; // Suposant que això és un array d'objectes
  let contents = content.data?.content; // Suposant que això és un array d'objectes
  let titolEnCatala = titols.find((titol: any) => titol.item.lang === "ca")
    ?.item.content;
  let contentEnCatala = contents.find(
    (content: any) => content.item.lang === "ca"
  )?.item.content;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center w-full">
        <h1
          className={`${quattrocento.className} antialiased self-stretch text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold`}
          style={{ fontWeight: 800 }}
        >
          {titolEnCatala}
        </h1>
        <div className="markdown-content flex flex-col items-center justify-center w-full">
          {/* Utilitza ReactMarkdown per renderitzar el contingut Markdown */}
          <ReactMarkdown
            className={`${overlock.className} text-xl sm:text-xl md:text-2xl lg:text-5xl`}
          >
            {contentEnCatala}
          </ReactMarkdown>
        </div>
      </div>
    </main>
  );
}
