# claude.md — SmileSkin

> Instruções operacionais para o Claude Code trabalhar nesse repositório.
> Lê esse arquivo inteiro antes de tocar em qualquer linha de código.

---

## O que é esse projeto

Site institucional + landing pages da **SmileSkin**, uma clínica de estética e odontologia em Moema, São Paulo, com sub-marca de escola (InnovareSS) para profissionais da área.

O site atual está em WordPress com o tema Impreza. Está sendo refeito do zero por dois motivos:

1. WordPress + Impreza limita o nível de polimento visual que a marca pede.
2. Carregamento lento, dependência de tema fechado, impossível de iterar rápido.

A meta é uma stack moderna, leve, com a estética de uma marca editorial premium e a clareza de uma clínica séria.

---

## Stack

| Camada | Escolha | Por quê |
|---|---|---|
| Framework | **Next.js 15 (App Router)** | SSR pra SEO, RSC pra performance, ecossistema |
| Linguagem | **TypeScript** strict | Sem `any`. Sem `// @ts-ignore`. |
| Estilização | **Tailwind CSS v4** | Tokens do `design.md` viram CSS vars + Tailwind config |
| UI base | **shadcn/ui** | Copia componentes em vez de instalar lib pesada |
| Animação | **Framer Motion** | Único permitido. Sem GSAP, sem Lottie em tela. |
| Imagens | **next/image** | Sempre. Nunca `<img>` puro. |
| Fontes | **next/font/google** | Fraunces + Inter Tight + JetBrains Mono |
| Form | **react-hook-form + zod** | Validação tipada |
| Analytics | **Plausible** ou **Umami** | Sem GA4 padrão (LGPD-friendly) |
| Deploy | **Vercel** | Edge functions pra ISR |
| CMS de blog | A definir (Sanity, Contentlayer, ou MDX local) | Decidir na sprint do blog |

**Versões fixas:** sempre que adicionar dependência nova, fixa a versão no `package.json` sem caret (`"^"`). Updates passam por PR explícito.

---

## Estrutura de pastas

```
.
├── app/
│   ├── (site)/              # rotas públicas, layout com header/footer
│   │   ├── page.tsx                # home
│   │   ├── nossa-historia/page.tsx
│   │   ├── nosso-fundador/page.tsx
│   │   ├── nosso-jeito-de-cuidar/page.tsx
│   │   ├── estrutura-e-tecnologia/page.tsx
│   │   ├── etica-e-seguranca/page.tsx
│   │   ├── tratamentos/
│   │   │   ├── page.tsx                  # índice
│   │   │   └── [slug]/page.tsx           # tratamento individual
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   └── contato/page.tsx
│   ├── (innovaress)/        # sub-marca, layout próprio
│   │   └── ...
│   ├── api/
│   │   └── lead/route.ts    # form de contato
│   ├── layout.tsx           # root, fontes, metadata global
│   └── globals.css          # tokens, reset, vars
│
├── components/
│   ├── ui/                  # shadcn (Button, Input, etc.)
│   ├── site/                # Header, Footer, Hero, etc.
│   ├── blocks/              # blocos de seção reutilizáveis
│   └── motion/              # Reveal, Stagger, Parallax wrappers
│
├── lib/
│   ├── utils.ts             # cn(), formatters
│   ├── analytics.ts
│   └── seo.ts               # metadata helpers
│
├── content/                 # MDX se for esse caminho
│   └── blog/
│
├── public/
│   ├── images/
│   └── og/
│
├── design.md                # sistema visual — fonte da verdade
├── claude.md                # esse arquivo
└── README.md
```

---

## Skills do repo UI-UX pro max

Esse projeto consome as seguintes skills do repositório UI-UX pro max do Aios. Antes de qualquer task de UI, consulta a skill aplicável.

| Skill | Quando usar |
|---|---|
| **front-end** | Toda task que envolve estrutura de componente React, padrão de props, layout. É o ponto de partida para qualquer arquivo `.tsx` novo. |
| **stitch google** | Tasks que envolvem geração ou refinamento de blocos visuais — landing sections, cards, layouts complexos. Usar a skill quando precisar de variações rápidas para validar com o cliente. |
| **impeccable** | QA visual. Antes de marcar uma feature como completa, rodar a impeccable skill no componente. Ela pega pixel-pushing fino (alinhamento de baseline, ritmo vertical, contraste real). |
| **humanizer** | Todo texto que vai pro usuário final passa pela humanizer antes de commit. Headlines, CTAs, microcopy, meta-descriptions, alt text descritivo. Esse é o filtro anti-IA da copy. |

**Regra de ouro:** essas skills não são opcionais. Se você está prestes a escrever copy de marketing e não rodou a humanizer, para e roda primeiro. Se você está prestes a fechar PR de uma seção e não passou pela impeccable, não está pronto.

---

## design.md é lei

O arquivo `design.md` (raiz do repo) é a fonte da verdade para tudo que é visual, motion e copy. Antes de:

- adicionar uma cor → confere se já está em `design.md`. Se não, **não adiciona** — pergunta primeiro.
- criar um componente novo → confere se algo similar já está documentado.
- escrever uma headline → confere os moldes em `design.md §5.4`.
- decidir uma duração de animação → confere `design.md §4.3`.

Se o `design.md` não responde uma pergunta, aplica `design.md §10` (a ordem de decisão). Se a decisão for grande, abre issue antes.

**Sincronia:** quando uma decisão de design nova for tomada em código, atualiza `design.md` na mesma PR. Código sem doc é débito.

---

## Convenções de código

### Componentes

```tsx
// 1. Server Component por padrão. Só vira "use client" se precisar de:
//    - useState, useEffect, useRef
//    - Framer Motion
//    - Event handlers em DOM

// 2. Props tipadas com interface, exportada se for reutilizável.
interface HeroProps {
  eyebrow: string;
  title: string;
  lede: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

// 3. Componente como função declarada, nunca arrow + export default na mesma linha.
export function Hero({ eyebrow, title, lede, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="...">
      {/* ... */}
    </section>
  );
}
```

### Classes Tailwind

- Use `cn()` (de `lib/utils.ts`) sempre que houver classes condicionais.
- Ordem de classes: layout → spacing → typography → color → border → effect → state. O plugin `prettier-plugin-tailwindcss` cuida disso automaticamente — não brigue com ele.
- Não criar custom classes em `globals.css` se uma utility resolve. CSS modules estão banidos.

### Tokens

Cores e espaçamento vêm de CSS vars (em `globals.css`) referenciadas no `tailwind.config.ts`. Nunca hard-coda `#EFCF87` em JSX. Sempre `bg-sand` ou `bg-[var(--sand)]`.

### Imagens

```tsx
import Image from "next/image";

<Image
  src="/images/dr-deli-clinica.jpg"
  alt="Dr. Deli Brito durante atendimento na sala 2 da SmileSkin"
  width={1200}
  height={1500}
  className="rounded-[var(--r-lg)] object-cover"
  priority={false}  // true apenas no hero
/>
```

Alt nunca é genérica ("foto de médico"). Sempre descritiva e específica.

### Motion

```tsx
"use client";
import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export function RevealOnScroll({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15%" }}
      variants={reveal}
    >
      {children}
    </motion.div>
  );
}
```

Todo motion respeita `prefers-reduced-motion`. Wrappers de motion já tratam isso internamente.

### Forms

`react-hook-form` + zod schema co-localizado:

```tsx
const leadSchema = z.object({
  name: z.string().min(2, "Como podemos te chamar?"),
  whatsapp: z.string().regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, "Telefone no formato (11) 91234-5678"),
  email: z.string().email("Esse email não parece válido"),
  message: z.string().optional(),
});
```

Mensagens de erro **passam pela humanizer**. Não pode soar robótica.

### Acessibilidade

Não é checkbox final — é durante. Para cada componente:

- Foco visível sempre.
- ARIA quando o HTML semântico não cobre. Não jogar ARIA em tudo.
- Teste com Tab. Se você consegue navegar, está OK. Se trava, conserta.
- `alt` em toda imagem, `aria-label` em todo botão sem texto visível.
- Contraste verificado com a paleta de `design.md §2.1`.

---

## Workflow

### Antes de começar uma task

1. Lê o `design.md` se a task envolve UI ou copy.
2. Confere se o componente que vai construir já existe em `components/`. Se existe e precisa mudar — atualiza no lugar, não cria irmão.
3. Se a task tem copy, separa o conteúdo do componente. Copy vai em arquivo separado (ex: `content/home.ts`) para passar pela humanizer sem mexer no JSX.

### Durante

- Commits pequenos, mensagem em português, no presente: "adiciona hero da home", "ajusta cor de hover do botão primário".
- Branch por feature: `feat/hero-home`, `fix/header-mobile`, `chore/upgrade-next`.
- Cada PR linka a issue correspondente.

### Antes de fechar PR

Checklist mínimo:

- [ ] Build passa (`pnpm build`)
- [ ] Lint passa (`pnpm lint`)
- [ ] Types passam (`pnpm typecheck`)
- [ ] Lighthouse mobile: Performance 95+, Accessibility 100, SEO 100
- [ ] Testado em Chrome + Safari mobile (não só DevTools)
- [ ] Copy passou pela humanizer skill
- [ ] Visual passou pela impeccable skill
- [ ] `prefers-reduced-motion` testado (DevTools → Rendering)
- [ ] Não há `console.log` deixado pra trás
- [ ] Não há TODO no código sem issue linkada

---

## Performance — metas duras

| Métrica | Meta |
|---|---|
| LCP | < 2.0s mobile, < 1.2s desktop |
| INP | < 200ms |
| CLS | < 0.05 |
| Bundle de home (first load JS) | < 90kb |
| Imagens | sempre AVIF + WebP fallback, srcset por breakpoint |
| Fontes | preload + `font-display: swap` |

**Não vamos perder a estética em nome de performance, mas também não vamos perder performance em nome de motion.** Quando bater conflito, motion é o primeiro a ceder.

---

## SEO

Cada página tem:

```tsx
export const metadata: Metadata = {
  title: "Nome da página · SmileSkin",
  description: "150-160 caracteres específicos da página",
  openGraph: { /* gerada por lib/seo.ts */ },
  alternates: { canonical: "/url-canonica" },
};
```

JSON-LD `MedicalBusiness` no `app/layout.tsx`, com os dados de §1 do `design.md`. Em páginas de tratamento, adicionar `MedicalProcedure`.

---

## O que NUNCA fazer

1. **Não inventa números.** "Mais de 10.000 clientes atendidos" só se for verdade documentada. Quando em dúvida, omite.
2. **Não usa stock photo.** A clínica é real, as pessoas são reais, as fotos têm que ser reais. Se ainda não tem, deixa placeholder estilizado.
3. **Não escreve copy direto no JSX.** Tudo em arquivos `content/*.ts` para passar pela humanizer.
4. **Não adiciona cor fora do `design.md`.** Se o design pediu, atualiza `design.md` primeiro.
5. **Não usa `dangerouslySetInnerHTML`** a não ser pra JSON-LD.
6. **Não cria componente sem checar shadcn/ui.** Se existe Button no shadcn, usa o Button — não recria.
7. **Não animações infinitas em loop** (logo girando, partículas, etc).
8. **Não popups de "aceite os cookies"** com cara de site de notícias. Banner discreto, fixo bottom, dismissable. LGPD sem feiura.
9. **Não usa `any` em TypeScript.** Se precisa, usa `unknown` e refina.
10. **Não escreve `@ts-ignore`.** Resolve o tipo ou pergunta.

---

## Comandos úteis

```bash
# Dev
pnpm dev                    # localhost:3000

# Qualidade
pnpm lint                   # eslint
pnpm typecheck              # tsc --noEmit
pnpm format                 # prettier

# Build
pnpm build                  # build de produção
pnpm start                  # roda o build local

# Análise
pnpm analyze                # bundle analyzer
pnpm lighthouse             # roda lighthouse local
```

---

## Contato e contexto

- **Cliente final:** Dr. Deli Brito + Dra. Vitória Barros (SmileSkin)
- **Agência:** Aios (consultoria de marketing, automação e tecnologia)
- **Repositório de skills compartilhadas:** UI-UX pro max

Quando algo não está claro nesse documento ou no `design.md`, **pergunta antes de adivinhar**. Decisões silenciosas são as que viram dívida.
