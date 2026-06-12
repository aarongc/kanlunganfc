// Kanlungan FC Site Data
// Centralized data file for club information

export const clubInfo = {
  name: "Kanlungan FC",
  fullName: "Kanlungan Football Club",
  tagline: "Cebu's Premier Football Club",
  description: "Building champions on and off the field",
  foundedYear: 2014,
  
  contact: {
    email: "kanlunganfc2.0@gmail.com",
    phone: "0954 227 2602",
    location: {
      city: "Consolacion",
      province: "Cebu",
      country: "Philippines",
      full: "Consolacion, Cebu, Philippines"
    }
  },
  
  social: {
    facebook: {
      name: "@KanlunganFC",
      url: "https://www.facebook.com/people/Kanlungan-FC/100089250671484/"
    }
  },
  
  teams: [
    { name: "U8 Eagles", ages: "Ages 6-8" },
    { name: "U10 Tigers", ages: "Ages 9-10" },
    { name: "U12 Lions", ages: "Ages 11-12" },
    { name: "U16 Warriors", ages: "Ages 13-16" },
    { name: "Adults", ages: "Ages 17+" }
  ],
  
  stats: [
    { value: "12+", label: "Years" },
    { value: "200+", label: "Players" },
    { value: "15", label: "Championships" },
    { value: "50+", label: "Matches" }
  ],
  
  officeHours: {
    weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
    saturday: "Saturday: 9:00 AM - 12:00 PM",
    sunday: "Sunday: Closed"
  }
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/teams", label: "Teams" },
  { href: "/news", label: "News" },
  { href: "/schedule", label: "Schedule" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" }
];

export const galleryImages = [
  { id: 1, src: "/images/gallery/690861702_989453347373012_1903943069353556815_n.jpg", alt: "Kanlungan FC Team Photo 1", height: "h-80", filter: "brightness-110 contrast-105" },
  { id: 2, src: "/images/gallery/692213494_989457164039297_1097634128739699567_n.jpg", alt: "Kanlungan FC Team Photo 2", height: "h-64", filter: "saturate-150 contrast-110" },
  { id: 3, src: "/images/gallery/695597444_989457134039300_5908620124649116912_n.jpg", alt: "Kanlungan FC Team Photo 3", height: "h-96", filter: "sepia-20 brightness-105" },
  { id: 4, src: "/images/gallery/705003240_1002433999408280_1698403333081623728_n.jpg", alt: "Kanlungan FC Team Photo 4", height: "h-72", filter: "contrast-120 saturate-120" },
  { id: 5, src: "/images/gallery/706020757_1001551019496578_1980396648142371333_n.jpg", alt: "Kanlungan FC Team Photo 5", height: "h-64", filter: "brightness-105 saturate-110" },
  { id: 6, src: "/images/gallery/706021267_1001551012829912_3130362631712066626_n.jpg", alt: "Kanlungan FC Team Photo 6", height: "h-80", filter: "contrast-115 brightness-110" },
  { id: 7, src: "/images/gallery/706527641_1001551036163243_7652792319658302076_n.jpg", alt: "Kanlungan FC Team Photo 7", height: "h-72", filter: "saturate-130 contrast-105" },
  { id: 8, src: "/images/gallery/715711673_1012606355057711_2406201888397208618_n.jpg", alt: "Kanlungan FC Team Photo 8", height: "h-96", filter: "brightness-110 sepia-10" },
  { id: 9, src: "/images/gallery/716510802_1012606348391045_2765484153034760177_n.jpg", alt: "Kanlungan FC Team Photo 9", height: "h-64", filter: "contrast-110 saturate-140" },
  { id: 10, src: "/images/gallery/680979200_975879158730431_1321401160795825209_n.jpg", alt: "Kanlungan FC Team Photo 10", height: "h-80", filter: "brightness-115 saturate-120" },
  { id: 11, src: "/images/gallery/658861036_953823130936034_4745056921707352159_n.jpg", alt: "Kanlungan FC Team Photo 11", height: "h-72", filter: "saturate-125 brightness-110" },
  { id: 12, src: "/images/gallery/642400227_930630423255305_2703634313386251260_n.jpg", alt: "Kanlungan FC Team Photo 12", height: "h-64", filter: "contrast-110 saturate-115" }
];
