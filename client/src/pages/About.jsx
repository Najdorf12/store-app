import imgAbout1 from "/images/photos/model.jpeg";
import imgAbout8 from "/images/photos/model13.jpeg";

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
          <img className="w-full rounded-lg " src={imgAbout8} alt="" />
        </picture>
        <article className=" px-4 py-3 my-6 max-w-[500px]">
          <p className="text-gray-200 font-text2 font-medium text-base text-center ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />  Adipisci
            dolor fugiat delectus cupiditate natus quam possimus totam
            praesentium, rem facere.<br />
            <p className=" font-cursive text-4xl mt-4 text-gray-700 font-semibold">Lorem Impsum</p>
          </p>
        </article>
      </div>
     
    </section>
  );
};
export default About;
