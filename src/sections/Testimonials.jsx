import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GowlCard from "../components/GowlCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐️ Customer feedback highlights"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial, index) => (
            <div className="mb-6" key={index}>
              <GowlCard card={testimonial} index={index}>
                <div className="flex items-center gap-3">
                  <div>
                    <img src={testimonial.imgPath} alt="" />
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-white-50">{testimonial.mentions}</p>
                  </div>
                </div>
              </GowlCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
