type TagProps = {
  value: string;
};

function Tag({ value }: TagProps) {
  return (
    <div className="bg-accent-800 text-accent-200 rounded-full px-4 py-1 font-bold text-sm">
      {value}
    </div>
  );
}

export default Tag;
