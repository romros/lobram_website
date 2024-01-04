import Hero from "@/components/hero";
import EnsenyantsTreball from "./ui/ensenyants_treball";
import GrupsDeTreballSection from "./ui/grup_de_treball";

export default function ActivitiesPage() {
  return (
    <main>
      <Hero
        title="Grups de treball"
        backgroundImage="/terra_blur.jpg"
        height="h-[20vh]"
      />
      <div className="flex flex-col lg:flex-row justify-center items-stretch w-full ">
        <div className="w-full lg:w-1/3 bg-blue-100 p-4">
          <GrupsDeTreballSection />
        </div>
        <div className="w-full lg:w-1/3 flex justify-center items-center p-4 bg-gradient-to-b lg:bg-gradient-to-r from-blue-100 to-blue-900">
          <img
            src="/flor_transparent.png"
            alt="Flor Transparent"
            className="max-h-full max-w-full"
          />
        </div>
        <div className="w-full lg:w-1/3 bg-blue-900 p-4">
          <EnsenyantsTreball />
        </div>
      </div>
      <Hero
        title="Dances sagrades"
        backgroundImage="/terra_blur.jpg"
        height="h-[20vh]"
      />
      <div className="flex flex-col lg:flex-row justify-center items-stretch w-full ">
        <div className="w-full lg:w-1/3 bg-blue-900 p-4">
          <EnsenyantsTreball />
        </div>
        <div className="w-full lg:w-1/3 flex justify-center items-center p-4 bg-gradient-to-b lg:bg-gradient-to-r from-blue-900 to-blue-100">
          <img
            src="/flor_transparent.png"
            alt="Flor Transparent"
            className="max-h-full max-w-full"
          />
        </div>
        <div className="w-full lg:w-1/3 bg-blue-100 p-4">
          <GrupsDeTreballSection />
        </div>
      </div>
    </main>
  );
}
