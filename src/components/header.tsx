import Link from "next/link";
import { Button } from "./button";

export function Header() {
  return (
    <header className="max-w-screen-2xl mx-auto py-6 lg:py-8 px-5 lg:px-7 flex items-center justify-between gap-5">
      <div className="flex items-center">
        <strong className="text-2xl font-bold text-slate-800 text-nowrap">
          Luiz Pinturas
        </strong>
      </div>

      <nav className="flex flex-1 items-center justify-between text-slate-700 font-semibold text-sm leading-6">
        <ul className="flex items-center gap-x-8 justify-end w-full">
          <li>
            <Link href="#services" className="hover:text-sky-500">
              Início
            </Link>
          </li>
          <li>
            <Link href="/#" className="hover:text-sky-500">
              Serviços
            </Link>
          </li>
          <li>
            <Link href="/#" className="hover:text-sky-500">
              Contato
            </Link>
          </li>
        </ul>
      </nav>

      <div className="border-slate-200 border-l ml-6 pl-6">
        <Button type="button" size="md" enphasis="high" className="text-nowrap">
          Simular Orçamento
        </Button>
      </div>
    </header>
  );
}
