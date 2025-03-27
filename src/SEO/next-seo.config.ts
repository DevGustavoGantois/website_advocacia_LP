import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Camila Oliveira | Advocacia Especializada',
    description:
      'Camila Oliveira oferece assessoria jurídica de excelência, com soluções personalizadas e estratégicas nas áreas de direito civil, trabalhista, empresarial e mais. Atendimento especializado para cada cliente, com foco em resultados efetivos e éticos.',
    openGraph: {
      type: 'website',
      url: 'https://www.camilaadvocacia.com.br/',
      title: 'Camila Oliveira | Advocacia Especializada',
      description:
        'Camila Oliveira oferece assessoria jurídica de excelência, com soluções personalizadas e estratégicas nas áreas de direito civil, trabalhista, empresarial e mais. Atendimento especializado para cada cliente, com foco em resultados efetivos e éticos.',
      images: [
        {
          url: 'https://www.camilaadvocacia.com.br/LogoPrimary.svg',
          width: 1200,
          height: 630,
          alt: 'Logo Camila Oliveira Advocacia',
        },
      ],
      siteName: 'Camila Oliveira Advocacia Especializada',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@CamilaOliveira',
      creator: '@devgustavogantois_',
      title: 'Camila Oliveira | Advocacia Especializada',
      description:
        'Assessoria jurídica especializada em diversas áreas do direito, com soluções estratégicas e personalizadas para cada cliente, visando sempre resultados justos e eficazes.',
      images: ['https://www.camilaadvocacia.com.br/LogoPrimary.svg'],
    },
    robots: {
      index: true,
      follow: true,
    },
    keywords: 'advocacia especializada, direito civil, direito trabalhista, direito empresarial, consultoria jurídica, assessoria jurídica, solução estratégica, direito de família, contratos empresariais, consultoria para empresas, defesa trabalhista, advocacia ética, atendimento personalizado, serviços jurídicos, advogada Camila Oliveira, resultados eficazes',
};
