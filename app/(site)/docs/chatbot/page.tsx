import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BRIVIXEL - Tanya AI",
  description: "Halaman AI Brivixel untuk bertanya apa saja melalui tautan yang tersedia.",
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4 transition-all dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Halaman AI Brivixel</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Selamat datang di halaman AI Brivixel! Anda dapat bertanya apa saja kepada AI kami melalui tautan di bawah ini:
                </p>

                <ul className="list-disc ml-6 text-body-color dark:text-body-color-dark text-base">
                  <li>
                    <b>Tanya AI:</b> Klik pada tautan berikut untuk mengakses halaman Tanya AI Brivixel:
                    {" "}
                    <a href="https://84b0709059baa9ee98.gradio.live" className="text-primary hover:underline">
                      Halaman Tanya AI
                    </a>.
                  </li>
                  <li>
                    <b>Bantuan Teknis:</b> Jika membutuhkan bantuan lebih lanjut, Anda dapat menghubungi kami melalui:
                    {" "}
                    <a href="https://brixel.com/contact" className="text-primary hover:underline">
                      halaman kontak kami
                    </a>.
                  </li>
                </ul>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  AI Brivixel dirancang untuk membantu menjawab berbagai pertanyaan Anda, mulai dari teknologi hingga desain. Jangan ragu untuk mencoba dan eksplorasi!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
