import Link from "next/link";
import { WhatsAppIcon } from "@/assets/icons/whatsapp";
import { Button } from "../button";
import { DropdownMenu } from "./dropdown-menu";

export function Header() {
  return (
    <header className="mx-auto flex max-w-screen-2xl items-center justify-between gap-5 px-5 py-6 lg:px-7 lg:py-8">
      <div className="flex items-center">
        <strong className="text-nowrap text-2xl font-bold text-slate-800">
          Luiz Pinturas
        </strong>
      </div>

      <div className="grid place-items-center sm:hidden">
        <DropdownMenu />
      </div>

      <div className="hidden items-center sm:flex">
        <nav className="flex flex-1 items-center justify-between text-sm font-semibold leading-6 text-slate-700">
          <ul className="flex w-full items-center justify-end gap-x-8">
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
          </ul>
        </nav>

        <div className="ml-6 border-l border-slate-200 pl-6">
          <Link href="https://wa.me/5511995861460" target="_blank">
            <Button
              type="button"
              size="md"
              enphasis="high"
              className="text-nowrap"
            >
              <span className="flex items-center gap-2">
                Entre em contato
                <WhatsAppIcon width="0.875rem" height="0.875rem" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
