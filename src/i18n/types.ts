// الأنواع المشتركة لمحتوى الموقع ثنائي اللغة. كل حقل نصي هنا يُترجم في
// src/messages/ar.ts و src/messages/en.ts — لا تضف نصوصاً مباشرة هنا.

export type Locale = "ar" | "en";

export type NavLink = {
  label: string;
  href: string;
};

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export type AboutContent = {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  cta: { label: string; href: string };
  process: ProcessStep[];
};

export type Industry = {
  title: string;
  // عنوان فرعي مختصر يُعرض داخل لوحة التفاصيل. اتركه فارغاً لإخفائه.
  shortLabel: string;
  description: string;
  capabilities: string[];
};

export type IndustriesContent = {
  eyebrow: string;
  heading: string;
  description: string;
  capabilitiesLabel: string;
  cta: { label: string; href: string };
  items: Industry[];
};

export type CaseStudyResult = {
  value: string;
  label: string;
};

export type CaseStudy = {
  title: string;
  description: string;
  // مسار صورة واقعية (اختياري). اتركه فارغاً لاستخدام الرسم التوضيحي البديل ريثما تتوفر صور حقيقية.
  image: string;
  results: CaseStudyResult[];
  href: string;
};

export type AlliedCompany = {
  name: string;
  tagline: string;
  logo: string;
  address: string;
  phones: string[];
  email: string;
};

export type AlliedCompaniesContent = {
  eyebrow: string;
  heading: string;
  description: string;
  items: AlliedCompany[];
};

export type Strength = {
  title: string;
  description: string;
};

export type TrustStat = {
  value: string;
  label: string;
};

export type WhyUsContent = {
  // يُركَّب مع اسم الشركة: "{eyebrowPrefix} {companyName}" مثل "لماذا [اسم الشركة]" أو "Why [Company Name]".
  eyebrowPrefix: string;
  heading: string;
  description: string;
  strengths: Strength[];
  trustStats: TrustStat[];
};

export type FinalCtaContent = {
  heading: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type SolutionItem = {
  title: string;
  description: string;
  href: string;
};

export type SolutionsPageContent = {
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
  };
  items: SolutionItem[];
  cardCta: string;
  cta: {
    heading: string;
    button: { label: string; href: string };
  };
};

export type Capability = {
  title: string;
  description: string;
};

export type ProcessStage = {
  index: string;
  title: string;
};

export type ServiceResult = {
  value: string;
  label: string;
};

export type ServicePageContent = {
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    image: string;
  };
  capabilitiesHeading: string;
  capabilities: Capability[];
  process: {
    heading: string;
    stages: ProcessStage[];
  };
  trust: {
    heading: string;
    points: string[];
  };
  cta: {
    heading: string;
    button: { label: string; href: string };
  };
};

export type AiPageContent = Omit<ServicePageContent, "trust"> & {
  results: {
    heading: string;
    items: ServiceResult[];
  };
};

export type CustomizationPageContent = ServicePageContent;

export type DataManagementPageContent = Omit<ServicePageContent, "process"> & {
  process: {
    heading: string;
    // مخطط رحلة البيانات — عناوين المراحل فقط بترتيب التدفق (الأول ← الأخير).
    stages: string[];
  };
};

export type DashboardKpi = {
  label: string;
  value: string;
};

export type DashboardsPageContent = Omit<ServicePageContent, "process"> & {
  dashboardPreview: {
    heading: string;
    // بيانات توضيحية فقط لعرض شكل الواجهة — بدون أي وظائف أو بيانات حقيقية.
    kpis: DashboardKpi[];
    lineChartLabel: string;
    donutChartLabel: string;
  };
};

export type ConsultationPageContent = ServicePageContent;
export type ImplementationPageContent = ServicePageContent;
export type ProjectManagementPageContent = ServicePageContent;
export type QualityAssurancePageContent = ServicePageContent;
export type InfrastructurePageContent = ServicePageContent;
export type CybersecurityPageContent = ServicePageContent;

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterLinkGroup = {
  title: string;
  links: FooterLink[];
};

export type FooterContent = {
  contactHeading: string;
  linkedinLabel: string;
  linkGroups: FooterLinkGroup[];
  contact: {
    email: string;
    phone: string;
    city: string;
    linkedin: string;
  };
  legalLinks: FooterLink[];
  // النص الذي يلي اسم الشركة في سطر الحقوق، مثل "جميع الحقوق محفوظة." أو "All rights reserved."
  copyrightSuffix: string;
};

export type Dictionary = {
  companyName: string;
  logoSrc: string;
  description: string;
  nav: NavLink[];
  cta: { label: string; href: string };
  // نصوص قصيرة مشتركة بين عدة مكونات غير مرتبطة بقسم محدد.
  common: {
    openMenu: string;
    closeMenu: string;
    imagePlaceholder: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    // النصوص داخل الرسم التوضيحي لنموذج لوحة المعلومات في الـHero (DashboardMockup).
    mockup: {
      ariaLabel: string;
      kpis: { label: string; value: string }[];
      lineChartTitle: string;
      barChartTitle: string;
    };
  };
  stats: { value: string; label: string }[];
  services: {
    eyebrow: string;
    title: string;
    description: string;
    link: { label: string; href: string };
    items: { title: string; description: string; href: string }[];
  };
  about: AboutContent;
  industries: IndustriesContent;
  alliedCompanies: AlliedCompaniesContent;
  whyUs: WhyUsContent;
  finalCta: FinalCtaContent;
  footer: FooterContent;
  solutionsPage: SolutionsPageContent;
  aiPage: AiPageContent;
  customizationPage: CustomizationPageContent;
  dataManagementPage: DataManagementPageContent;
  dashboardsPage: DashboardsPageContent;
  consultationPage: ConsultationPageContent;
  implementationPage: ImplementationPageContent;
  projectManagementPage: ProjectManagementPageContent;
  qualityAssurancePage: QualityAssurancePageContent;
  infrastructurePage: InfrastructurePageContent;
  cybersecurityPage: CybersecurityPageContent;
};
