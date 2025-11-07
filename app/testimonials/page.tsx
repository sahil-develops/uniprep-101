import Testimonials from "@/app/components/Testimonials/testimonials";
import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/navbar";

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen ">
      <Navbar color={'black'} />
      <Testimonials withBackground />
      <Footer />
    </main>
  );
}

