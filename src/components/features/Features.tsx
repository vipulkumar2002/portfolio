import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/feature";

const Features = () => {
  return (
    <section
      id="features"
      className="featureComponent w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {featuresData.map((item: any) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Features;