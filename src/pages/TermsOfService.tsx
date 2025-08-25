import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Pakalpojumu noteikumi</h1>
          
          <div className="prose prose-lg text-muted-foreground space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Vispārīgie noteikumi</h2>
              <p>
                Šie pakalpojumu noteikumi reglamentē Datu Servisi sniegto pakalpojumu izmantošanu. 
                Izmantojot mūsu pakalpojumus, jūs piekrītat šiem noteikumiem.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Pakalpojumu apraksts</h2>
              <p>
                Datu Servisi sniedz specializētus tehnoloģiju integrācijas pakalpojumus valsts pārvaldes 
                organizācijām, tostarp:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>Sistēmu integrāciju</li>
                <li>Datu migrāciju</li>
                <li>Biznesa procesu optimizāciju</li>
                <li>Tehnisko konsultāciju pakalpojumus</li>
                <li>Sistēmu uzturēšanu un atbalstu</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Klienta saistības</h2>
              <p>
                Klients apņemas:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>Sniegt precīzu un pilnīgu informāciju</li>
                <li>Ievērot visus spēkā esošos normatīvos aktus</li>
                <li>Nodrošināt nepieciešamo piekļuvi sistēmām un datiem</li>
                <li>Laikus veikt maksājumus par sniegtajiem pakalpojumiem</li>
                <li>Informēt par jebkādām izmaiņām, kas var ietekmēt pakalpojumu sniegšanu</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Datu Servisi saistības</h2>
              <p>
                Mēs apņemamies:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>Sniegt kvalitatīvus pakalpojumus saskaņā ar noslēgtajiem līgumiem</li>
                <li>Ievērot konfidencialitāti un datu drošības prasības</li>
                <li>Informēt par jebkādām problēmām vai kavējumiem</li>
                <li>Nodrošināt atbilstošu tehnisko atbalstu</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Maksājumu noteikumi</h2>
              <p>
                Maksājumi par pakalpojumiem veicami saskaņā ar noslēgtajiem līgumiem. 
                Nokavējuma gadījumā var tikt piemērotas līgumsoda sankcijas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Atbildības ierobežojumi</h2>
              <p>
                Datu Servisi neuzņemas atbildību par:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>Zaudējumiem, kas radušies klienta nepareizu datu dēļ</li>
                <li>Trešo personu darbībām</li>
                <li>Nepārvaramas varas apstākļiem</li>
                <li>Klienta sistēmu darbības traucējumiem</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Konfidencialitāte</h2>
              <p>
                Abas puses apņemas neizpaust otra līgumslēdzēja konfidenciālo informāciju 
                trešajām personām un izmantot to tikai līguma izpildes nolūkos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Strīdu risināšana</h2>
              <p>
                Strīdi risināmi sarunu ceļā. Ja vienošanās netiek panākta, strīdi izskatāmi 
                Latvijas Republikas tiesās saskaņā ar Latvijas Republikas normatīvajiem aktiem.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Noteikumu izmaiņas</h2>
              <p>
                Datu Servisi patur tiesības jebkurā laikā veikt izmaiņas šajos noteikumos, 
                informējot klientus par izmaiņām ne vēlāk kā 30 dienas iepriekš.
              </p>
            </section>

            <p className="text-sm text-muted-foreground mt-8">
              Pēdējoreiz atjaunināts: 2025. gada janvāris
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;