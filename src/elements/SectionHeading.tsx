type SectionHeadingProps = {
  id: string;
  children: React.ReactNode;
};

function SectionHeading({ id, children }: SectionHeadingProps) {
  return (
    <h2 id={id} className="pb-10 text-xl font-bold text-primary-200 uppercase lg:sr-only">
      {children}
    </h2>
  );
}

export default SectionHeading;
