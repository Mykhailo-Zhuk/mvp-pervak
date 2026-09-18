"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ArrowRight, Sparkles, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("@/components/theme-toggle").then((m) => m.ThemeToggle), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/40 via-transparent to-transparent dark:from-amber-900/20" />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 text-white">
            <Sparkles className="h-4 w-4" />
          </div>
          <span>Ресторан Первак</span>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm">
            <Link href="/admin">Адмін</Link>
          </Button>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-12 pb-12 text-center sm:pt-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-300">
            <Sparkles className="h-3 w-3" />
            MVP демо · QR-меню · Онлайн-бронювання
          </div>
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">
            Українська кухня в серці Києва
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-zinc-600 dark:text-zinc-400">
            8 залів, літня тераса, власна пекарня. Традиційні страви за старовинними рецептами. Бронювання столів онлайн.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" />Київ, вул. Рогнідинська, 2</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />Пн-Нд 11:00-23:00</span>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <a href="tel:+38(044)2350952" className="inline-flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+38 (044) 235-09-52</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/menu/pervak" className="inline-flex items-center gap-2">
                <UtensilsCrossed className="h-5 w-5 flex-shrink-0" />
                <span>Переглянути меню</span>
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/menu/pervak" className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-amber-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 text-white">🍽️</div>
            <h3 className="mb-2 text-lg font-semibold">QR-меню</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Гарне цифрове меню з QR-кодом. Клієнти замовляють зі смартфона.</p>
            <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber-600">Перейти →</div>
          </Link>
          <Link href="/book/stol-bronyuvannya" className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-amber-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 text-white">📅</div>
            <h3 className="mb-2 text-lg font-semibold">Бронювання столу</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Клієнт обирає залу, дату, час і кількість гостей онлайн.</p>
            <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-600">Забронювати →</div>
          </Link>
          <Link href="/book/banket-zal" className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-amber-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 text-white">🎉</div>
            <h3 className="mb-2 text-lg font-semibold">Банкетний зал</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Оренда банкетного залу для весілля, корпоративу, дня народження.</p>
            <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-violet-600">Дізнатись →</div>
          </Link>
        </div>
      </section>

      <footer className="relative z-10 border-t border-zinc-200 py-8 text-center text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
        <div className="mx-auto max-w-6xl px-6">
          MVP by <a href="https://t.me/Zhuk_Mykhailo" className="text-amber-600 hover:underline dark:text-amber-400">Mykhailo Zhuk</a> · Next.js 14 · MIT License
        </div>
      </footer>
    </main>
  );
}
