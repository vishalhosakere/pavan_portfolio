type TagProps = {
  value: string;
};

function Tag({ value }: TagProps) {
  return <li className="rounded-full bg-accent-800 px-4 py-1 text-sm font-bold text-accent-200">{value}</li>;
}

export default Tag;
