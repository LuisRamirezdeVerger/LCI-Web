interface SectionTitleProps {
  id: string;
  children: React.ReactNode;
}

export const SectionTitle = ({ id, children }: SectionTitleProps) => {
  return (
    <h2
      id={id}
      className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black"
    >
      {children}
    </h2>
  );
};
