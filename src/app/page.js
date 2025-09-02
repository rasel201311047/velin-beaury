// In your page.js (or page.tsx)
import Navbar from "@/components/Navbar";
import Heropage from "@/components/Heropage";
import OurServices from "@/components/OurServices";
import OurWork from "@/components/OurWork";
import ComingSoon from "@/components/ComingSoon";
import Platfrom from "@/components/Platfrom";
import ContractUs from "@/components/ContractUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar/>
      <Heropage/>
      <OurServices/>
      <OurWork/>
      <ComingSoon/>
      <Platfrom/>
      <ContractUs/>
      <Footer/>
    </div>
  );
}