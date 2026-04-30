"use client";
import { useState } from "react";

const paperMeta = {
  title: "Reshaping the Agriculture Sector of Pakistan through Innovative Agri-Tech Devices to Achieve Food Security",
  authors: [
    { name: "Zainab Ahmed", role: "Lead Author & Correspondence" },
    { name: "Ayesha Alam Khurram", role: "Co-Author" },
    { name: "Shujaat Khanzada", role: "Co-Author" },
  ],
  affiliation: "Department of Agriculture, Crop2X Private Ltd., Karachi 75270, Sindh, Pakistan",
  journal: "Environmental Sciences Proceedings",
  volume: "Vol. 23, No. 1, Article 34",
  doi: "10.3390/environsciproc2022023034",
  published: "4 January 2023",
  presented: "1st International Precision Agriculture Pakistan Conference 2022 (PAPC 2022) — Rawalpindi, Pakistan, 22–24 September 2022",
  license: "CC BY 4.0 Open Access",
  pdfUrl: "https://www.mdpi.com/2673-4931/23/1/34/pdf?version=1675741947",
  sourceUrl: "https://www.mdpi.com/2673-4931/23/1/34",
  keywords: [
    "Precision Agriculture (PA)",
    "Agri-Tech Devices",
    "Remote Sensing",
    "Food Security",
    "Internet of Things (IoT)",
  ],
};

const abstract = `Precision agriculture (PA) has the potential to radically transform agronomic systems. It is an effective approach for viable zone management in the agriculture field. In today's era of finite resources and drastic consequences of climate change, an approach to PA which is an integration of below-the-ground sensors, multispectral satellite imagery, and weather monitoring system is reshaping agriculture from static to smart.

In this paper, a real-time case study at a lemon orchard in Gadap, Sindh, Pakistan is presented where PA practices are being implemented successfully. At the farm, locally developed innovative agri-tech devices are deployed which are embedded with electrical conductivity, soil temperature, soil moisture sensor, and nitrogen, phosphorus, and potassium sensor to monitor real-time conditions of the soil for precision irrigation and fertilizer application.

Along with device data, incorporation of weather data, agronomist advisory and use of satellite imagery offer a full-functioning monitoring system for viable decisions. This system also favors tracking variations in crop health & pest attack for precise pesticide spray. The data output is observed through a web application.

Using these drivers for PA there was increased flowering in the orchard as compared to other farms in the vicinity. Hence, a promising surplus yield and least toxic better fruit quality are being obtained, along with the preservation of biodiversity and environment sustainability.`;

const sections = [
  {
    number: "01",
    title: "Introduction",
    content: `Global food security drives the recent resurgence of interest in agronomic systems. Precision Agriculture (PA) focuses on optimizing farm inputs and contributes to gap fulfillment between crop potential and productivity. Together the IoT-based modules along with sensor probes, multispectral satellite imagery, and weather monitoring systems constitute a management framework to achieve global food security along with the preservation of biodiversity and environment sustainability.

PA was being applied at a lemon farm in Gadap town by Crop2X — an agri-tech company that locally develops IoT devices integrated with web applications to access real-time data of the field. The fertilizer for soil nutrients and pesticide treatment was considered through spatial variability with the aim to use resources efficiently and achieve high-quality fruits.

Results indicated that PA implemented in one cycle of lemon enhanced the number of flowers leading to a greater number of fruit formations. Hence farmers can improve the production of the crops by adopting PA practices to minimize soil degradation, conserve biodiversity, and maintain a sustainable environment.`,
  },
  {
    number: "02",
    title: "Method & Observation",
    content: `The technological approach of PA implemented at the lemon farm aimed to reshape the agriculture practices in a structured path.

The study provided evidence that usage of resources can be reduced by accessing real-time data of the field conditions through IoT devices on a web application coupled with agronomist advisory to take data-driven decisions for:

• Variable application of fertilizers
• Precise irrigation needed by crop for optimal growth
• Locating spatially low vegetation areas in field
• Pesticide spray management at ETL level considering weather data

The highest output with better quality was achieved through PA integrating satellite imagery, fertilizer application, pesticide application, and precision irrigation. The method is evidence of how the application of PA technology is a promising prospect for global food security and reshaping agriculture.`,
  },
  {
    number: "03",
    title: "Results",
    subsections: [
      {
        title: "Satellite Imagery",
        content: "Satellite imagery by using artificial intelligence has become useful data for decision-making in precision agriculture. The interaction of radiation with leaf or canopy changes shows variability in the field through satellite imagery. The low vegetation areas monitored in the lemon farm were due to the cause of pest incidents — treating the localized areas reduced pesticide usage, thus protecting the natural environment.",
      },
      {
        title: "Fertilizer Application",
        content: "Unknown nutrient levels in the field and refraining from soil analysis leads to soil infertility. The soil sensors enable monitoring of NPK trends and other parameters such as soil salinity, EC, TDS, and soil temperature. A known quantity of NPK in soil optimized the usage and avoidance of excess fertilizer. EC functioned as a base in the selection of less alkaline fertilizers and proves to be effective for lemon trees in terms of remarkable production and maintaining soil fertility.",
      },
      {
        title: "Pesticide Application",
        content: "Pest surveillance in the field is influenced by favorable temperature and humidity. Integrating spatial variability and weather conditions in PA, the cost of pesticide application was reduced and profit was maximized. Site-specific applications of selective and bio pesticides were applied that not only contributed to pest control but also had a significant impact on natural biodiversity — proven by the presence of 11 bee hives in the lemon farm. Bees responsible for pollination played a magnificent role in better flowering leading to the highest output in the vicinity.",
      },
      {
        title: "Precision Irrigation",
        content: "IoT devices equipped with soil moisture sensors were placed at certain depths for accurate measurement of the water level in the soil. A precision irrigation time was designed depending on the crop stage, root zone, geographical location, and evapotranspiration. The system is capable of forecasting irrigation required on the basis of water availability and evapotranspiration. This helped in eliminating excessive irrigation and root-related diseases in the orchard, with irrigation management contributing to good flowering and high-quality fruit production.",
      },
      {
        title: "Soil Temperature",
        content: "Plant roots growing in the soil need a conducive environment to transport nutrients and water to the plant. To keep this mechanism optimal, agri-tech devices equipped with soil temperature sensors remarkably influenced soil temperature management. At high soil temperatures, organic matter leaches down the soil and the availability of nutrients through the plant roots is disturbed as the beneficial bacteria die. At the lemon orchard, mulching was done at high soil temperatures to prevent the associated problems, hence achieving the desired output.",
      },
    ],
  },
  {
    number: "04",
    title: "Conclusions",
    content: `Precision agriculture using agri-tech devices was implemented and practiced for a complete cycle of fruiting at a lemon farm.

In reference to the pilot project at lemon farm Gadap, if the same PA technology is implemented on the other farms of the country it can provide accurate data to establish agronomic decisions. The output in precision agriculture was promising in terms of profit and the cost of inputs using remote sensing and agri-tech devices was minimized.

This technology is a breakthrough in uplifting the agricultural production of Pakistan in achieving food security.`,
  },
  {
    number: "05",
    title: "Future Perspective",
    content: `If PA is practically implemented by optimizing the inputs such as water, fertilizer, and pesticide, it will result in high production with increased quantity and quality of fruit.

The integration of AI-powered advisory, satellite imagery, and real-time IoT sensor data represents a scalable model that can be replicated across Pakistan's diverse agricultural zones — bringing transformative impact to smallholder and large-scale farmers alike.`,
  },
];

const citations = [
  { style: "APA", text: `Ahmed, Z., Khurram, A. A., & Khanzada, S. (2022). Reshaping the Agriculture Sector of Pakistan through Innovative Agri-Tech Devices to Achieve Food Security. Environmental Sciences Proceedings, 23(1), 34.` },
  { style: "AMA", text: `Ahmed Z, Khurram AA, Khanzada S. Reshaping the Agriculture Sector of Pakistan through Innovative Agri-Tech Devices to Achieve Food Security. Environmental Sciences Proceedings. 2022;23(1):34.` },
  { style: "Chicago", text: `Ahmed, Zainab, Ayesha Alam Khurram, and Shujaat Khanzada. 2022. "Reshaping the Agriculture Sector of Pakistan through Innovative Agri-Tech Devices to Achieve Food Security" Environmental Sciences Proceedings 23, no. 1: 34.` },
];

export default function WhitePaperPage() {
  const [activeSection, setActiveSection] = useState(null);
  const [copiedCitation, setCopiedCitation] = useState(null);

  const handleCopy = (text, style) => {
    navigator.clipboard.writeText(text);
    setCopiedCitation(style);
    setTimeout(() => setCopiedCitation(null), 2000);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/pricing.png"
            alt="Research Paper"
            className="w-full h-full object-cover scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-black/85" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-green-300 text-sm mb-8">
            <span>Resources</span>
            <span>/</span>
            <span className="text-white">White Paper</span>
          </div>

          {/* Badge row */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-green-600/30 border border-green-500/40 text-green-300 text-xs font-medium px-3 py-1.5 rounded-full">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/></svg>
              Peer-Reviewed Paper
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full">
              Open Access · CC BY 4.0
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full">
              Published {paperMeta.published}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight mb-8">
            {paperMeta.title}
          </h1>

          {/* Authors */}
          <div className="flex flex-wrap gap-6 mb-8">
            {paperMeta.authors.map((a, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-600/40 border border-green-500/50 flex items-center justify-center text-green-300 text-xs font-bold">
                  {a.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{a.name}</p>
                  <p className="text-gray-400 text-xs">{a.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={paperMeta.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-green-900/40"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Download PDF
            </a>
            <a
              href={paperMeta.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              View on MDPI
            </a>
          </div>
        </div>
      </section>

      {/* ── Meta Info Strip ── */}
      <section className="bg-green-600 py-5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-sm">
            <div>
              <p className="text-green-200 text-xs uppercase tracking-wider mb-1">Journal</p>
              <p className="font-medium">{paperMeta.journal}</p>
            </div>
            <div>
              <p className="text-green-200 text-xs uppercase tracking-wider mb-1">Volume / Issue</p>
              <p className="font-medium">{paperMeta.volume}</p>
            </div>
            <div>
              <p className="text-green-200 text-xs uppercase tracking-wider mb-1">DOI</p>
              <a href={`https://doi.org/${paperMeta.doi}`} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline break-all">
                {paperMeta.doi}
              </a>
            </div>
            <div>
              <p className="text-green-200 text-xs uppercase tracking-wider mb-1">Affiliation</p>
              <p className="font-medium text-xs leading-relaxed">{paperMeta.affiliation}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex gap-12">

          {/* Sidebar */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-8 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Sections</p>
                <nav className="space-y-1">
                  <a href="#abstract" className="block text-sm text-gray-500 hover:text-green-600 transition-all py-1.5 border-l-2 border-transparent hover:border-green-500 pl-3">Abstract</a>
                  {sections.map((s) => (
                    <a key={s.number} href={`#section-${s.number}`} className="block text-sm text-gray-500 hover:text-green-600 transition-all py-1.5 border-l-2 border-transparent hover:border-green-500 pl-3">
                      {s.title}
                    </a>
                  ))}
                  <a href="#keywords" className="block text-sm text-gray-500 hover:text-green-600 transition-all py-1.5 border-l-2 border-transparent hover:border-green-500 pl-3">Keywords</a>
                  <a href="#cite" className="block text-sm text-gray-500 hover:text-green-600 transition-all py-1.5 border-l-2 border-transparent hover:border-green-500 pl-3">How to Cite</a>
                  <a href="#conference" className="block text-sm text-gray-500 hover:text-green-600 transition-all py-1.5 border-l-2 border-transparent hover:border-green-500 pl-3">Conference</a>
                </nav>
              </div>

              {/* Quick Download card */}
              <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                <p className="text-xs font-semibold text-green-800 mb-2">Full Paper</p>
                <a
                  href={paperMeta.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-green-700 hover:text-green-900 font-medium transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Download PDF
                </a>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0 space-y-12">

            {/* Abstract */}
            <div id="abstract" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-8 bg-green-500 rounded-full" />
                <h2 className="text-2xl font-bold text-gray-900">Abstract</h2>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 pl-7">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line text-[15px]">{abstract}</p>
              </div>
              <div className="mt-4 border-b border-gray-100" />
            </div>

            {/* Sections */}
            {sections.map((section) => (
              <div key={section.number} id={`section-${section.number}`} className="scroll-mt-8">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-md">{section.number}</span>
                  <div className="w-1 h-8 bg-green-500 rounded-full" />
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>

                <div className="pl-4">
                  {section.content && (
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line text-[15px] mb-4">{section.content}</p>
                  )}
                  {section.subsections && (
                    <div className="space-y-6 mt-4">
                      {section.subsections.map((sub, si) => (
                        <div key={si} className="border-l-2 border-green-200 pl-5">
                          <h3 className="text-base font-semibold text-gray-800 mb-2">
                            3.{si + 1} {sub.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-[15px]">{sub.content}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="mt-8 border-b border-gray-100" />
              </div>
            ))}

            {/* Keywords */}
            <div id="keywords" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-8 bg-green-500 rounded-full" />
                <h2 className="text-2xl font-bold text-gray-900">Keywords</h2>
              </div>
              <div className="pl-4 flex flex-wrap gap-2">
                {paperMeta.keywords.map((kw, i) => (
                  <span key={i} className="bg-green-100 text-green-800 text-sm font-medium px-4 py-1.5 rounded-full border border-green-200">
                    {kw}
                  </span>
                ))}
              </div>
              <div className="mt-8 border-b border-gray-100" />
            </div>

            {/* How to Cite */}
            <div id="cite" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-8 bg-green-500 rounded-full" />
                <h2 className="text-2xl font-bold text-gray-900">How to Cite</h2>
              </div>
              <div className="pl-4 space-y-3">
                {citations.map((c) => (
                  <div key={c.style} className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 group">
                    <span className="shrink-0 text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded mt-0.5">{c.style}</span>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">{c.text}</p>
                    <button
                      onClick={() => handleCopy(c.text, c.style)}
                      className="shrink-0 text-gray-400 hover:text-green-600 transition-colors mt-0.5"
                      title="Copy citation"
                    >
                      {copiedCitation === c.style ? (
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                      )}
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-b border-gray-100" />
            </div>

            {/* Conference */}
            <div id="conference" className="scroll-mt-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-8 bg-green-500 rounded-full" />
                <h2 className="text-2xl font-bold text-gray-900">Conference</h2>
              </div>
              <div className="pl-4">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">1st International Precision Agriculture Pakistan Conference 2022</p>
                    <p className="text-green-700 text-sm font-medium mb-2">PAPC 2022 — "Change the Culture of Agriculture"</p>
                    <p className="text-gray-500 text-sm">📍 Rawalpindi, Pakistan &nbsp;·&nbsp; 22–24 September 2022</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}