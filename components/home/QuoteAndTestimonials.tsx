import QuoteForm from "../QuoteForm";
import Testimonials from "./Testimonials";

export default function QuoteAndTestimonials() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-start">
        <QuoteForm />
        <Testimonials />
      </div>
    </section>
  );
}
