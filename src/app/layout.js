import { Geist, Geist_Mono,Manrope,Playfair_Display,Poppins,DM_Sans,Roboto} from "next/font/google";
import "../../global.css";

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
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400","700"] });

export const metadata = {
  title: "Velusy",
  description: "Velusy app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
