type TagProps = {
  value: string;
};

function Tag({ value }: TagProps) {
  return <li className="rounded-full bg-tag px-4 py-1 text-sm font-bold text-tag-fg">{value}</li>;
}

export default Tag;
