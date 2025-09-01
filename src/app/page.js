// In your page.js (or page.tsx)
import Navbar from "@/components/Navbar";
import Heropage from "@/components/Heropage";
import OurServices from "@/components/OurServices";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <Heropage/>
      <OurServices/>
    </div>
  );
}