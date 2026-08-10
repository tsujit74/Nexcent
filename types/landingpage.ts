export interface LinkItem {
  label: string;
  href: string;
}

export interface ButtonData extends LinkItem {
  variant?: "primary" | "link";
}

export interface ImageData {
  src: string;
  alt: string;
}

export interface HeaderData {
  logo: {
    name: string;
    image: string;
    alt: string;
    href: string;
  };
  navigation: LinkItem[];
  actions: ButtonData[];
}

export interface HeroData {
  title: string[];
  description: string;
  button: LinkItem;
  image: ImageData;
}

export interface ClientLogo extends ImageData {
  name: string;
}

export interface ClientsData {
  title: string;
  description: string;
  logos: ClientLogo[];
}

export interface CommunityCard {
  title: string;
  description: string;
  icon: string;
}

export interface CommunityData {
  title: string[];
  description: string;
  cards: CommunityCard[];
}

export interface FeatureData {
  id: string;
  title: string;
  description: string;
  button: LinkItem;
  image: ImageData;
  imagePosition: "left" | "right";
}

export interface StatisticItem {
  value: string;
  label: string;
  icon: string;
}

export interface StatisticsData {
  title: string[];
  description: string;
  items: StatisticItem[];
}

export interface TestimonialData {
  image: ImageData;
  quote: string;
  author: {
    name: string;
    company: string;
  };
  customerLink: LinkItem;
}

export interface BlogPost {
  title: string;
  image: ImageData;
  link: string;
}

export interface BlogData {
  title: string;
  description: string;
  posts: BlogPost[];
}

export interface CtaData {
  title: string[];
  button: LinkItem;
}

export interface FooterColumn {
  title: string;
  links: LinkItem[];
}

export interface NewsletterData {
  title: string;
  placeholder: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface FooterData {
  copyright: string;
  rights: string;
  company: FooterColumn;
  support: FooterColumn;
  newsletter: NewsletterData;
  socialLinks: SocialLink[];
}

export interface LandingPageData {
  header: HeaderData;
  hero: HeroData;
  clients: ClientsData;
  community: CommunityData;
  features: FeatureData[];
  statistics: StatisticsData;
  testimonial: TestimonialData;
  blog: BlogData;
  cta: CtaData;
  footer: FooterData;
}
