import { features } from "../Constant";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);
const Reward = () => (
  <section id="reward" name="reward" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        What You Will get <br className="sm:block hidden" />
        After Participating
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ab, placeat
        eligendi iusto cum eos explicabo, non in quas iste, incidunt sed? Alias
        assumenda cum libero repellat ex expedita vero!
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Reward;
