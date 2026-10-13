export const site = {
  name: 'Jeimy Silva · Contadora Pública',
  shortName: 'Jeimy Silva',
  profession: 'Contadora Pública',
  tagline: 'Revisoría fiscal, auditoría forense y gerencia financiera',
  pitch:
    'Protejo el patrimonio de empresas y personas con control contable riguroso, estrategia tributaria legal y claridad financiera para tomar mejores decisiones.',
  fullName: 'Jeimy Marisela Silva Molano',
  tp: '264278-T (JCC)',
  yearsExperience: '+10',
  coverage: 'Boyacá · Casanare · Cundinamarca',
  email: 'jeimy.contadora@gmail.com',
  phoneDisplay: '+57 310 858 9523',
  phoneRaw: '573108589523',
  whatsappMessage:
    'Hola Jeimy, vi tu página y quisiera agendar una asesoría contable.',
  url: 'https://www.jeimysilvacontadora.com',
};

export const whatsappLink = (msg = site.whatsappMessage) =>
  `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(msg)}`;
