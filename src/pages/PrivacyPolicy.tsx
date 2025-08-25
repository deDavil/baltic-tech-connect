import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privātuma politika</h1>
          
          <div className="prose prose-lg text-muted-foreground space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Vispārīgie noteikumi</h2>
              <p>
                Datu Servisi respektē jūsu privātumu un apņemas aizsargāt jūsu personas datus. 
                Šī privātuma politika skaidro, kā mēs apkopojam, izmantojam un aizsargājam jūsu informāciju.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Datu apkopošana</h2>
              <p>
                Mēs apkopojam informāciju, ko jūs mums sniedzat tieši, piemēram, aizpildot kontaktformulāru 
                vai sazināoties ar mums pa e-pastu. Šī informācija var ietvert:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>Vārds un uzvārds</li>
                <li>E-pasta adrese</li>
                <li>Tālruņa numurs</li>
                <li>Uzņēmuma nosaukums</li>
                <li>Ziņojuma saturs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Datu izmantošana</h2>
              <p>
                Jūsu personas datus mēs izmantojam šādos nolūkos:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>Atbildēšanai uz jūsu jautājumiem</li>
                <li>Pakalpojumu sniegšanai</li>
                <li>Komunikācijai par mūsu pakalpojumiem</li>
                <li>Juridisko pienākumu izpildei</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Datu drošība</h2>
              <p>
                Mēs īstenojam atbilstošus tehniskos un organizatoriskos pasākumus, lai aizsargātu 
                jūsu personas datus pret nejaušu vai nelikumīgu iznīcināšanu, zaudēšanu, izmaiņām 
                vai neatļautu piekļuvi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Jūsu tiesības</h2>
              <p>
                Saskaņā ar VDAR jums ir tiesības:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>Piekļūt saviem personas datiem</li>
                <li>Labot nepareizus datus</li>
                <li>Dzēst savus datus</li>
                <li>Ierobežot datu apstrādi</li>
                <li>Datu pārnesamība</li>
                <li>Iebilst pret datu apstrādi</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Kontaktinformācija</h2>
              <p>
                Ja jums ir jautājumi par šo privātuma politiku vai vēlaties īstenot savas tiesības, 
                lūdzu, sazinieties ar mums.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Izmaiņas politikā</h2>
              <p>
                Mēs paturam tiesības atjaunināt šo privātuma politiku. Par būtiskām izmaiņām 
                mēs informēsim jūs, publicējot jauno versiju mūsu tīmekļa vietnē.
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

export default PrivacyPolicy;