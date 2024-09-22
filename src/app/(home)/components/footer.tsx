import { Call } from "@/assets/icons/call";
import { PersonMail } from "@/assets/icons/person-mail";
import { WhatsAppIcon } from "@/assets/icons/whatsapp";
import { SectionContainer } from "@/components/section-container";
import Link from "next/link";

export function Footer() {
  return (
    <div className="border-t-2 border-gray-100">
      <SectionContainer className="divide-y divide-slate-200">
        <div className="flex">
          <div className="w-1/2 flex-none space-y-10 sm:space-y-8 lg:flex lg:space-y-0">
            <div className="lg:w-1/2 lg:flex-none">
              <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                Navegue
              </h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/#services" className="hover:text-sky-500">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="/#localization" className="hover:text-sky-500">
                    Localização
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="hover:text-sky-500">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="#top" className="hover:text-sky-500">
                    Topo da página
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-1/2 flex-none space-y-10 sm:space-y-8 lg:flex lg:space-y-0">
            <div className="lg:w-1/2 lg:flex-none">
              <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                Contato
              </h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    href="https://wa.me/5511995861460"
                    target="_blank"
                    className="hover:text-sky-500"
                  >
                    <span className="flex items-center gap-2">
                      WhatsApp
                      <WhatsAppIcon width="0.875rem" height="0.875rem" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:luiz@email.com"
                    className="hover:text-sky-500"
                  >
                    <span className="flex items-center gap-2">
                      luiz@email.com
                      <PersonMail width="1.2rem" height="1.2rem" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+5511995861460"
                    className="hover:text-sky-500"
                  >
                    <span className="flex items-center gap-2">
                      (11) 99586-1460
                      <Call width="1.2rem" height="1.2rem" />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-10">
          <div className="flex items-center">
            <strong className="text-nowrap text-2xl font-bold text-slate-800">
              Luiz Pinturas
            </strong>
          </div>

          <div className="mt-4 text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} Luiz Pinturas. Todos os direitos
              reservados.
            </p>
          </div>

          <div className="mt-4 text-slate-500">
            <p>
              Desenvolvido por{" "}
              <Link
                href="https://www.linkedin.com/in/luiz-thiago-096718206"
                target="_blank"
                className="hover:text-sky-500"
                rel="noreferrer"
              >
                Luiz Thiago
              </Link>
            </p>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
