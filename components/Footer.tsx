import Link from "next/link";
import { clinic, hours, navLinks, doctor } from "@/lib/data";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-paper/12 bg-ink">
      <div className="wrap py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo tone="paper" />
            <p className="mt-5 max-w-[36ch] text-sm text-paper/55">
              Instituto de tricologia clínica em Moema, São Paulo. Investigação
              da queda capilar e protocolos individualizados.
            </p>
            <a
              href={clinic.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 border border-paper/20 px-4 py-2.5 mono text-xs uppercase tracking-[0.12em] text-paper/75 transition-colors duration-200 hover:border-gold hover:text-gold"
            >
              Instagram {clinic.instagramHandle}
            </a>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="eyebrow text-paper/45">Navegação</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper/70 transition-colors duration-200 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-paper/45">Contato</h2>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              <li className="max-w-[26ch] text-paper/55">{clinic.address}</li>
              <li>
                <a
                  href={clinic.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper/70 transition-colors duration-200 hover:text-gold"
                >
                  WhatsApp {clinic.whatsappLabel}
                </a>
              </li>
              <li>
                <a
                  href={clinic.emailHref}
                  className="text-paper/70 transition-colors duration-200 hover:text-gold"
                >
                  {clinic.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-paper/45">Horários</h2>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {hours.map((h) => (
                <li key={h.days} className="text-paper/55">
                  <span className="block text-paper/70">{h.days}</span>
                  {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-paper/12 pt-9">
          <h2 className="eyebrow text-paper/45">Responsável técnico</h2>
          <p className="mt-4 text-base text-paper">{doctor.name}</p>
          <p className="mt-1 text-sm text-paper/55">
            {doctor.role} · {doctor.credentials.join(" · ")}
          </p>
          <p className="mt-6 max-w-[80ch] text-xs leading-relaxed text-paper/45">
            O instituto atua com avaliação tricológica, protocolos capilares,
            acompanhamento e gerenciamento da saúde do couro cabeludo, dentro
            do escopo de atuação do profissional responsável. As informações
            desta página têm caráter informativo e não substituem uma avaliação
            presencial individualizada.
          </p>
        </div>

        <div className="mt-10 border-t border-paper/12 pt-8 text-xs text-paper/45">
          © {new Date().getFullYear()} SmileSkin · Instituto de Tricologia ·
          Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
