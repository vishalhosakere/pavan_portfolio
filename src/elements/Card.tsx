import Tag from "./Tag";

type CardProps = {
  year: string;
  title: string;
  subtitle: string;
  description: string[];
  tags: string[];
};

const Card = ({ year, title, subtitle, description, tags }: CardProps) => {
  return (
    <li className="mb-12">
      <div className="group grid rounded-lg border-2 border-transparent p-4 transition-colors duration-100 sm:grid-cols-10 lg:group-hover/list:opacity-50 lg:hover:border-edge lg:hover:bg-surface hover:opacity-100!">
        {year && <p className="mt-1 text-sm sm:col-span-3">{year}</p>}
        <div className={year ? "sm:col-span-7" : "sm:col-span-10 sm:mx-10"}>
          <h3 className="text-xl font-normal text-fg-strong lg:group-hover:text-accent">{title}</h3>
          {subtitle && <p className="text-lg lg:group-hover:text-fg-strong">{subtitle}</p>}
          <ul className="mt-3 list-disc">
            {description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          {tags.length > 0 && (
            <ul aria-label="Tools and skills" className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <Tag value={tag} key={idx} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
};

export default Card;
