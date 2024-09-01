import Link from "next/link";
import { Button } from "./button";

export function Header() {
  return (
    <header className="mx-auto flex max-w-screen-2xl items-center justify-between gap-5 px-5 py-6 lg:px-7 lg:py-8">
      <div className="flex items-center">
        <strong className="text-nowrap text-2xl font-bold text-slate-800">
          Luiz Pinturas
        </strong>
      </div>

      <nav className="flex flex-1 items-center justify-between text-sm font-semibold leading-6 text-slate-700">
        <ul className="flex w-full items-center justify-end gap-x-8">
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

      <div className="ml-6 border-l border-slate-200 pl-6">
        <Button type="button" size="md" enphasis="high" className="text-nowrap">
          Simular Orçamento
        </Button>
      </div>
    </header>
  );
}
