import FraudShield from "@/components/Fraud-Shield/fraud-shield";
import { Hero } from "@/components/Hero/hero";
import Payments from "@/components/Payments/payments";
import Marketing from "@/components/Marketing/marketing";
import Developers from "@/components/Dev/developer";
export default function Home() {
  return (
    <div className="rounded-t-3xl">
      <Hero />
      <Payments />
      <FraudShield />
      <Marketing />
      <Developers />
    </div>
  );
}
