import React from 'react';
import { X, FileText } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function AlgemeneVoorwaardenModal({ isOpen, onClose }) {
  const { language } = useLanguage();

  if (!isOpen) return null;

  const isNL = language === 'nl';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
              <FileText className="w-4 h-4 text-orange-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                {isNL ? 'Algemene Voorwaarden' : 'General Terms & Conditions'}
              </h2>
              <p className="text-xs text-slate-500">{isNL ? 'Versie maart 2026' : 'Version March 2026'}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-6 text-sm text-slate-600 leading-relaxed">

          <section>
            <h3 className="font-semibold text-slate-900 mb-2">
              {isNL ? '1. Identiteit van de ondernemer' : '1. Identity of the business'}
            </h3>
            <p>DB Kozijnen & Deuren<br />
              Spionkopstraat 41, 2572 NL Den Haag<br />
              {isNL ? 'KvK-nummer' : 'KvK number'}: 90024826<br />
              BTW: NL4611.95.094.B.01<br />
              {isNL ? 'Telefoon' : 'Phone'}: +31 6 16649530<br />
              E-mail: dbudeic@yahoo.com
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-slate-900 mb-2">
              {isNL ? '2. Toepasselijkheid' : '2. Applicability'}
            </h3>
            <p>
              {isNL
                ? 'Deze algemene voorwaarden zijn van toepassing op alle offertes, opdrachten en overeenkomsten tussen DB Kozijnen & Deuren en de opdrachtgever.'
                : 'These general terms apply to all quotations, orders, and agreements between DB Kozijnen & Deuren and the client.'}
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-slate-900 mb-2">
              {isNL ? '3. Offertes en prijzen' : '3. Quotations and prices'}
            </h3>
            <p>
              {isNL
                ? 'Alle offertes zijn vrijblijvend en 30 dagen geldig. Prijzen zijn inclusief BTW tenzij anders vermeld. DB Kozijnen & Deuren behoudt zich het recht voor om prijzen aan te passen bij wijzigingen in de opdracht.'
                : 'All quotations are non-binding and valid for 30 days. Prices are inclusive of VAT unless otherwise stated. DB Kozijnen & Deuren reserves the right to adjust prices in the event of changes to the order.'}
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-slate-900 mb-2">
              {isNL ? '4. Uitvoering van de werkzaamheden' : '4. Execution of work'}
            </h3>
            <p>
              {isNL
                ? 'DB Kozijnen & Deuren zal de werkzaamheden naar beste inzicht en vermogen uitvoeren. De opdrachtgever zorgt voor een vrije en veilige toegang tot de werklocatie.'
                : 'DB Kozijnen & Deuren will perform the work to the best of its ability. The client ensures free and safe access to the work location.'}
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-slate-900 mb-2">
              {isNL ? '5. Betaling' : '5. Payment'}
            </h3>
            <p>
              {isNL
                ? 'Betaling dient te geschieden binnen 14 dagen na factuurdatum. Bij niet-tijdige betaling is de opdrachtgever van rechtswege in verzuim en is wettelijke rente verschuldigd.'
                : 'Payment must be made within 14 days of the invoice date. In case of late payment, the client is automatically in default and statutory interest is due.'}
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-slate-900 mb-2">
              {isNL ? '6. Garantie' : '6. Warranty'}
            </h3>
            <p>
              {isNL
                ? 'DB Kozijnen & Deuren staat voor een periode van 12 maanden garant voor gebreken die het gevolg zijn van de uitvoering van de werkzaamheden. Productgaranties vallen onder de voorwaarden van de fabrikant.'
                : 'DB Kozijnen & Deuren guarantees for a period of 12 months for defects resulting from the execution of the work. Product warranties are subject to the manufacturer\'s conditions.'}
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-slate-900 mb-2">
              {isNL ? '7. Aansprakelijkheid' : '7. Liability'}
            </h3>
            <p>
              {isNL
                ? 'De aansprakelijkheid van DB Kozijnen & Deuren is beperkt tot het bedrag dat in het betreffende geval door de aansprakelijkheidsverzekering wordt uitbetaald. DB Kozijnen & Deuren is niet aansprakelijk voor gevolgschade.'
                : 'The liability of DB Kozijnen & Deuren is limited to the amount paid out by the liability insurance in the relevant case. DB Kozijnen & Deuren is not liable for consequential damages.'}
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-slate-900 mb-2">
              {isNL ? '8. Klachten' : '8. Complaints'}
            </h3>
            <p>
              {isNL
                ? 'Klachten dienen binnen 14 dagen na voltooiing van de werkzaamheden schriftelijk (per e-mail) te worden ingediend via dbudeic@yahoo.com. Wij streven ernaar klachten binnen 5 werkdagen te beantwoorden.'
                : 'Complaints must be submitted in writing (by email) within 14 days of completion of the work via dbudeic@yahoo.com. We aim to respond to complaints within 5 business days.'}
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-slate-900 mb-2">
              {isNL ? '9. Toepasselijk recht' : '9. Applicable law'}
            </h3>
            <p>
              {isNL
                ? 'Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in Den Haag.'
                : 'All agreements are governed by Dutch law. Disputes will be submitted to the competent court in The Hague.'}
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors"
          >
            {isNL ? 'Sluiten' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}