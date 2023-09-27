import aboutData from "@/data/aboutme.json";

function AboutMe() {
  return (
    <section className="flex flex-col gap-4 pb-24" id="about">
      <h3 className="flex lg:hidden text-primary-200 text-xl uppercase font-bold pb-10">
        About
      </h3>
      {aboutData.map((para, idx) => {
        return (
          <p key={idx} className="text-lg">
            {para}
          </p>
        );
      })}
    </section>
  );
}

export default AboutMe;
