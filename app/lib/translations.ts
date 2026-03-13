export type Language = "lt" | "en";

export const translations = {
  lt: {
    nav: {
      home: "Pradžia",
      services: "Paslaugos",
      contact: "Kontaktai",
      langToggle: "EN",
    },
    hero: {
      badge: "Patikimas techninis partneris",
      videoTagline: "Važiuokite be trukdžių,\nvažiuokite su TomTecha",
      headline: "Profesionalus elektros sistemų remontas",
      subheadline:
        "Hibridinių ir elektrinių automobilių baterijų remontas. Vėjo jėgainių techninė priežiūra ir remontas.",
      cta: "Susisiekite su mumis",
      ctaServices: "Mūsų paslaugos",
      trustBadge1: "10+ metų patirtis",
      trustBadge2: "Sertifikuoti specialistai",
      trustBadge3: "Garantija kiekvienam darbui",
    },
    services: {
      badge: "Ką mes siūlome",
      title: "Mūsų paslaugos",
      subtitle:
        "Specializuojamės pažangių technologijų priežiūroje ir remonte, suteikdami kokybiškas paslaugas su garantija.",
      battery: {
        title: "Automobilių baterijos remontas",
        description:
          "Profesionalus hibridinių ir elektrinių automobilių baterijų diagnostika, remontas ir keitimas. Naudojame naujausią įrangą ir originalias dalis.",
        hybrid: {
          title: "Hibridiniai automobiliai",
          desc: "HV baterijų diagnostika ir ląstelių keitimas. Dirbame su Toyota, Lexus, Honda, Ford ir kt.",
          features: [
            "Baterijos diagnostika",
            "Ląstelių keitimas",
            "BMS kalibravimas",
            "Galios atkūrimas",
          ],
        },
        plugin: {
          title: "Plug-in elektriniai automobiliai",
          desc: "Pilnas PHEV ir BEV baterijų pakų remontas bei modernizavimas. Dirbame su visais modeliais.",
          features: [
            "Baterijos pakų remontas",
            "Įkrovimo sistemos tikrinimas",
            "Ląstelių balansavimas",
            "Saugos sistemos tikrinimas",
          ],
        },
      },
      wind: {
        title: "Vėjo jėgainių remontas",
        description:
          "Vėjo jėgainių techninė priežiūra, diagnostika ir remontas. Pasirūpiname, kad jūsų jėgainės veiktų efektyviai ir patikimai.",
        features: [
          "Techninė priežiūra",
          "Gedimų diagnostika",
          "Mechaniniai remontai",
          "Elektros sistemų remontas",
          "Prevencinis aptarnavimas",
          "Avarinė pagalba",
        ],
      },
      cta: "Gauti pasiūlymą",
    },
    why: {
      badge: "Kodėl mes",
      title: "Mūsų privalumai",
      items: [
        {
          title: "Ilgametė patirtis",
          desc: "Daugiau nei 10 metų elektros sistemų remonto patirtis. Tūkstančiai sėkmingai atliktų darbų.",
        },
        {
          title: "Sertifikuoti specialistai",
          desc: "Mūsų komanda turi aukščiausio lygio sertifikatus ir nuolat tobulina žinias.",
        },
        {
          title: "Kokybės garantija",
          desc: "Kiekvienam atliktam darbui suteikiame garantiją. Jūsų pasitenkinimas – mūsų prioritetas.",
        },
        {
          title: "Greitas aptarnavimas",
          desc: "Suprantame, kad laikas vertingas. Stengiamės užbaigti darbus kuo greičiau neprarandant kokybės.",
        },
      ],
    },
    contact: {
      badge: "Susisiekite",
      title: "Parašykite mums",
      subtitle:
        "Turite klausimų ar norite gauti pasiūlymą? Susisiekite su mumis – atsakysime per 24 valandas.",
      form: {
        name: "Jūsų vardas",
        namePlaceholder: "Vardas Pavardė",
        email: "El. paštas",
        emailPlaceholder: "vardas@example.com",
        phone: "Telefonas",
        phonePlaceholder: "+370 600 00000",
        service: "Paslauga",
        servicePlaceholder: "Pasirinkite paslaugą",
        serviceOptions: [
          "Hibridinio automobilio baterija",
          "Elektromobilio baterija",
          "Vėjo jėgainės remontas",
          "Kita",
        ],
        message: "Žinutė",
        messagePlaceholder:
          "Aprašykite problemą arba klausimą...",
        submit: "Siųsti žinutę",
        sending: "Siunčiama...",
        success: "Žinutė išsiųsta! Susisieksime su jumis netrukus.",
        error: "Klaida. Bandykite dar kartą.",
      },
      info: {
        title: "Kontaktinė informacija",
        phone: "Telefonas",
        email: "El. paštas",
        address: "Adresas",
        addressValue: "Lietuva",
        hours: "Darbo valandos",
        hoursValue: "Pirm–Penk: 8:00–18:00\nŠeš: 9:00–14:00",
      },
    },
    footer: {
      rights: "Visos teisės saugomos.",
      tagline: "Profesionalus elektros sistemų remontas",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      contact: "Contact",
      langToggle: "LT",
    },
    hero: {
      badge: "Your trusted technical partner",
      videoTagline: "Drive without worries,\ndrive with TomTecha",
      headline: "Professional Electrical Systems Repair",
      subheadline:
        "Hybrid & electric vehicle battery repairs. Wind turbine maintenance and repair services.",
      cta: "Contact Us",
      ctaServices: "Our Services",
      trustBadge1: "10+ years experience",
      trustBadge2: "Certified specialists",
      trustBadge3: "Warranty on every job",
    },
    services: {
      badge: "What we offer",
      title: "Our Services",
      subtitle:
        "We specialize in advanced technology maintenance and repair, delivering quality services with a warranty.",
      battery: {
        title: "Car Battery Repairs",
        description:
          "Professional hybrid and electric vehicle battery diagnostics, repair and replacement. We use the latest equipment and original parts.",
        hybrid: {
          title: "Hybrid vehicles",
          desc: "HV battery diagnostics and cell replacement. We work with Toyota, Lexus, Honda, Ford and more.",
          features: [
            "Battery diagnostics",
            "Cell replacement",
            "BMS calibration",
            "Power restoration",
          ],
        },
        plugin: {
          title: "Plug-in electric vehicles",
          desc: "Full PHEV and BEV battery pack repair and modernization. Compatible with all models.",
          features: [
            "Battery pack repair",
            "Charging system check",
            "Cell balancing",
            "Safety system check",
          ],
        },
      },
      wind: {
        title: "Wind Turbine Repairs",
        description:
          "Wind turbine maintenance, diagnostics and repair. We ensure your turbines run efficiently and reliably.",
        features: [
          "Preventive maintenance",
          "Fault diagnostics",
          "Mechanical repairs",
          "Electrical system repairs",
          "Scheduled servicing",
          "Emergency assistance",
        ],
      },
      cta: "Get a quote",
    },
    why: {
      badge: "Why us",
      title: "Our advantages",
      items: [
        {
          title: "Years of experience",
          desc: "Over 10 years of electrical systems repair experience. Thousands of successfully completed jobs.",
        },
        {
          title: "Certified specialists",
          desc: "Our team holds top-level certifications and continuously improves their knowledge.",
        },
        {
          title: "Quality warranty",
          desc: "We provide a warranty on every completed job. Your satisfaction is our priority.",
        },
        {
          title: "Fast service",
          desc: "We understand your time is valuable. We strive to complete work as quickly as possible without compromising quality.",
        },
      ],
    },
    contact: {
      badge: "Get in touch",
      title: "Write to us",
      subtitle:
        "Have questions or want a quote? Contact us and we'll respond within 24 hours.",
      form: {
        name: "Your name",
        namePlaceholder: "First Last",
        email: "Email",
        emailPlaceholder: "name@example.com",
        phone: "Phone",
        phonePlaceholder: "+370 600 00000",
        service: "Service",
        servicePlaceholder: "Select a service",
        serviceOptions: [
          "Hybrid vehicle battery",
          "Electric vehicle battery",
          "Wind turbine repair",
          "Other",
        ],
        message: "Message",
        messagePlaceholder: "Describe your issue or question...",
        submit: "Send message",
        sending: "Sending...",
        success: "Message sent! We will contact you shortly.",
        error: "Error. Please try again.",
      },
      info: {
        title: "Contact information",
        phone: "Phone",
        email: "Email",
        address: "Address",
        addressValue: "Lithuania",
        hours: "Working hours",
        hoursValue: "Mon–Fri: 8:00–18:00\nSat: 9:00–14:00",
      },
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Professional electrical systems repair",
    },
  },
} satisfies Record<string, unknown>;

export type Translations = typeof translations.lt;
