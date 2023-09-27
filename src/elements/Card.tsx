import Tag from "./Tag";
import { PiArrowRightBold } from "react-icons/pi";

type CardProps = {
  year: string;
  title: string;
  description: string[];
  tags: string[];
};

const Card = ({ year, title, description, tags }: CardProps) => {
  return (
    <li className="mb-12">
      <div className="group rounded-lg hover:!opacity-100 border-transparent hover:border-accent-800 border-2 group-hover/list:opacity-50 grid sm:grid-cols-8 p-4 transition-colors duration-100 cursor-pointer">
        {year && <div className="sm:col-span-2 mt-1 text-sm">{year}</div>}
        <div className={year !== "" ? "sm:col-span-6" : "sm:col-span-8"}>
          <div className="text-xl text-primary-200 group-hover:text-accent-200 flex items-center gap-2">
            {title}
            <PiArrowRightBold className="group-hover:translate-x-2 duration-200" />
          </div>
          <ol className="list-disc">
            {description.map((item, idx) => {
              return <li key={idx}>{item}</li>;
            })}
          </ol>
          <div className="flex mt-5 gap-2 flex-wrap">
            {tags.map((tag, idx) => {
              return <Tag value={tag} key={idx} />;
            })}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
