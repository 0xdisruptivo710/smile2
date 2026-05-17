# design.md — SmileSkin · Instituto de Tricologia

> Sistema visual, conteúdo e princípios da landing.
> Fonte da verdade. Se o código diverge daqui, alinhar os dois.

---

## 0. Posicionamento

Não é "mais uma clínica de cabelo". É um instituto de tricologia clínica:
científico, sério, técnico, especializado em investigação da queda capilar e
protocolos individualizados. A página vende por autoridade, ciência e
segurança, nunca por promessa milagrosa ou linguagem agressiva.

Equilíbrio da comunicação: ciência + humanização, autoridade + acessibilidade,
sofisticação + clareza, técnica + conexão emocional.

Direção em uma frase: **luxo discreto, minimalismo elegante, sofisticação
médica sem cara de hospital, percepção de instituto internacional**.

---

## 1. Escopo de atuação (limite legal — obrigatório)

A comunicação respeita o escopo do profissional responsável (Farmacêutico
Esteta com RQE Tricologia). **Nunca** invadir ato médico:

- Usar: avaliação tricológica, investigação, tricoscopia, protocolos
  capilares, acompanhamento, gerenciamento capilar, fortalecimento, saúde do
  couro cabeludo.
- Evitar: "diagnóstico médico", "cura", "tratamento de doença", promessa de
  resultado, prazo mágico.
- O questionário de pré-avaliação é educativo e orientativo — aponta fatores a
  investigar, nunca um diagnóstico.

---

## 2. Identidade

| Campo | Valor |
|---|---|
| Nome | SmileSkin · Instituto de Tricologia |
| Endereço | Av. Bem-te-vi, 333 · CJ 111 · Moema · SP · 04524-030 |
| WhatsApp | (11) 91646-0110 |
| Email | contato@smileskin.com.br |
| Instagram | @smileskin.estetica |
| Responsável técnico | Dr. Deli Brito · Farmacêutico Esteta · RQE Tricologia 11810-92 · RQE Estética 7629-54 · CRF/SP 52.349 |

---

## 3. Tokens (ver `app/globals.css`)

### 3.1. Cor — clínico premium, fundo claro

```
--paper      #FBFBF9   fundo principal (branco quente)
--sand       #F1F0EC   seção alternada
--mist       #E8E7E1   superfície/track
--white      #FFFFFF   cards
--line       #E4E2DB   bordas e divisores
--ink        #1C2B3A   azul-petróleo — texto, blocos profundos, CTA
--ink-soft   #45525F   texto secundário
--ink-mute   #8B939C   texto terciário, captions
--gold       #C8A86B   accent — linhas, pontos, detalhes
--gold-deep  #A98842   accent em texto (eyebrow, números)
```

Fundo sempre claro. Apenas duas seções em `--ink` (impacto emocional e
fechamento/footer) — azul-petróleo profundo, nunca preto. O dourado é detalhe:
linhas, marcadores, números, sublinhado. Nunca área grande, nunca glow.

### 3.2. Tipografia

```
--font-display  Schibsted Grotesk   títulos; weight 700; tracking -0.022em
--font-body     Hanken Grotesk      corpo; line-height 1.62
```

- `.display` — Schibsted Grotesk 700, headlines.
- `.eyebrow` — Hanken 600, caixa-alta, tracking 0.18em, cor `--gold-deep`.
- Hierarquia por escala e peso; dentro de uma headline, partes secundárias em
  `--ink-mute` para contraste interno.

### 3.3. Espaço, raio, sombra

- Container `max-width: 1200px`; gutter 24 → 40px.
- Seção: padding-block 88 → 120 → 160px. Bastante respiro.
- Raio: xs 6 · sm 10 · md 16 · lg 22 · xl 30. Botões em pill.
- Sombra suave tingida de `--ink` só em cards (`--shadow-card`, `--shadow-lift`).

---

## 4. Motion

Discreto e elegante, easing exponencial, sem bounce.

- Reveal de seção: opacity + y, 0.8s, `whileInView` margem -12%.
- Hero: stagger no carregamento; sublinhado dourado desenhado (scaleX).
- Quiz e FAQ: transições de estado com `AnimatePresence`.
- `prefers-reduced-motion`: tudo cai para fade curto.

---

## 5. Estrutura da página (4 atos)

**Atenção** — Header · Hero · Faixa de autoridade.
**Identificação e educação** — Causas multifatoriais · Investigação (método) ·
Tecnologia · Impacto emocional.
**Autoridade e profundidade** — Protocolos · Visão multiprofissional · Dr. Deli
· Produção científica · Registros de acompanhamento · Depoimentos.
**Conversão** — Questionário de pré-avaliação · FAQ · CTA final · Footer.

CTA flutuante (WhatsApp desktop / barra fixa mobile).

---

## 6. Conteúdo e tom

- Pecar pelo excesso de conteúdo, nunca pela superficialidade. Página longa e
  densa de propósito.
- Gatilhos: autoridade, prova social, ciência, segurança, pertencimento,
  exclusividade acessível — sempre na versão sóbria.
- Antes/depois: apresentado como "registros de acompanhamento" / tricoscopia,
  com ressalva ética. Nunca slider apelativo.
- Banido: promessa exagerada, urgência fake, linguagem de funil, número
  inventado, travessão (em dash), stock photo, estética de harmonização
  genérica.

---

## 7. Imagens

- `public/images/tricologia/` — registros reais de tricoscopia (paciente real,
  com autorização). Confirmar legendas com o Dr. Deli.
- Sem foto da clínica, da equipe ou de bastidores ainda — seções de produção
  científica e mídia ficam com espaços marcados "em breve" para preencher.
- Sem stock photo.
