"use client";

import Link from "next/link";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Portal,
} from "@radix-ui/react-popover";
import { useState } from "react";
import { Hamburger } from "@/assets/icons/Hamburger";
import { WhatsAppIcon } from "@/assets/icons/WhatsAppIcon";
import { IconButton } from "../icon-button";
import { Button } from "../button";

export function DropdownMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild className="">
        <IconButton type="button" size="md" enphasis="medium">
          <Hamburger className="size-6" />
        </IconButton>
      </PopoverTrigger>

      <Portal>
        <PopoverContent
          className="z-20 flex-row rounded-sm border bg-white p-1.5"
          align="end"
        >
          <Link href="/#services" onClick={() => setOpen(false)}>
            <Button size="lg" enphasis="link" className="w-full text-left">
              Serviços
            </Button>
          </Link>

          <Link href="/#localization" onClick={() => setOpen(false)}>
            <Button size="lg" enphasis="link" className="w-full text-left">
              Localização
            </Button>
          </Link>

          <div className="my-4 w-full border-t border-slate-200" />

          <Link href="https://wa.me/5511995861460" target="_blank">
            <Button type="button" size="lg" enphasis="high" className="w-full">
              <span className="flex items-center justify-center gap-2">
                Entre em contato
                <WhatsAppIcon width="0.875rem" height="0.875rem" />
              </span>
            </Button>
          </Link>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}
