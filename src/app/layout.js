import { Geist, Geist_Mono, Manrope, Playfair_Display, Poppins, DM_Sans, Roboto } from "next/font/google";
import "../../global.css";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const playfair = Playfair_Display({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
});
const roboto = Roboto({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const manrope = Manrope({
  weight: '500',
  subsets: ['latin'],
});
const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
});
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Velusy",
  description: "Velusy app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${roboto.variable} ${manrope.variable} ${poppins.variable} ${dmSans.variable}`}
    >
      <head />
      <body>
        {/* Google Translate Script */}
        <Script
          id="google-translate-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
              }
            `,
          }}
        />
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        {/* ...existing code... */}
        {children}
      </body>
    </html>
  );
}