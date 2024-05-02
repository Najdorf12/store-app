import imgAbout1 from "/images/photos/model.jpeg";
import imgAbout2 from "/images/photos/model2.jpeg";
import imgAbout3 from "/images/photos/model3.jpeg";
import imgAbout4 from "/images/photos/model4.jpeg";
import imgAbout5 from "/images/photos/model5.jpeg";
import imgAbout6 from "/images/photos/model6.jpeg";
import imgAbout7 from "/images/photos/model7.jpeg";

const About = () => {
  return (
    <section className="relative w-full bg-[#1a8e79] pt-6  flex flex-col items-center lg:flex-row lg:justify-center lg:gap-20 lg:pt-20 ">
      <article
        style={{
          WebkitTextFillColor: "transparent",
          WebkitTextStroke: "1px white",
        }}
        className=" flex flex-col items-center font-text font-bold text-4xl tracking-[.2rem] text-zinc-100 lg:text-6xl"
      >
        <h2>LOREM IMPSUM</h2>
        <h2
          style={{
            WebkitTextStroke: "1px #dbf01f",
          }}
          className=""
        >
          LOREM IMPSUM
        </h2>
        <h2>LOREM IMPSUM</h2>
        <picture className="max-w-72 mt-6 lg:max-w-96 lg:mt-12">
          <img className="w-full rounded-lg" src={imgAbout1} />
        </picture>
      </article>

      <div className="flex flex-col items-center ">
        <picture className="max-w-72 mt-6 lg:max-w-96">
          <img className="w-full rounded-lg " src={imgAbout3} alt="" />
        </picture>
        <article className=" px-4 py-3 my-6 max-w-[500px]">
          <p className="text-gray-300 font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            dolor fugiat delectus cupiditate natus quam possimus totam
            praesentium, rem facere, blanditiis, mollitia ullam animi ipsa
            itaque nam. Nihil, et quos.Nihil, et quos?Nihil, et quos.
          </p>
        </article>
      </div>
     
    </section>
  );
};
export default About;
