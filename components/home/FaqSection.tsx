import SectionHeading from "../SectionHeading";
import FAQ from "../FAQ";

export default function FaqSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="grid-pattern absolute inset-0 opacity-50" aria-hidden />
      <div className="container-x relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="Any Questions"
          title="Do you have any question? Find answer here"
          description="The questions shippers ask us most often, answered without the sales gloss. If yours is not here, our team will answer it the same day."
        />
        <FAQ />
      </div>
    </section>
  );
}
