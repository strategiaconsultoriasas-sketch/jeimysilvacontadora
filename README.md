# Jeimy Silva Contadora — Landing

Sitio web profesional de **Jeimy Marisela Silva Molano**, Contadora Pública (T.P. 264278-T JCC).

- **URL:** https://www.jeimysilvacontadora.com
- **Stack:** [Astro](https://astro.build/) 5 + [Tailwind CSS](https://tailwindcss.com/) 3
- **Deploy:** Vercel (estático)

## Desarrollo local

```bash
npm install
npm run dev          # servidor de desarrollo en http://localhost:4321
npm run build        # genera /dist listo para producción
npm run preview      # sirve el build de producción
```

## Estructura

```
src/
├── components/      # Hero, Services, About, Segments, Clients, Contact, Footer, Navbar
├── layouts/
│   └── Base.astro   # SEO + fuentes + JSON-LD + reveal-on-scroll
├── lib/
│   └── site.ts      # Datos centralizados (teléfono, email, helper WhatsApp)
├── pages/
│   └── index.astro  # Única página — compone todos los componentes
└── styles/
    └── global.css   # Tailwind + utilidades propias (.btn, .card, .eyebrow…)
public/
├── images/          # Fotos de Jeimy en webp
├── favicon.svg
└── robots.txt
```

## Cambiar datos

Toda la información editable vive en `src/lib/site.ts` (teléfono, email, dominio) y en cada componente `.astro` para textos de sección. Las fotos en `public/images/` son `.webp` optimizadas.

---

Desarrollado por **Strategia Consultoría e Innovación** · https://strategaconsultoria.com
