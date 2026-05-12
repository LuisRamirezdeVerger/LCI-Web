interface SectionTitleProps {
  id: string;
  children: React.ReactNode;
}

export const SectionTitle = ({ id, children }: SectionTitleProps) => {
  return (
    <h2
      id={id}
      className="text-[1.75rem] sm:text-3xl md:text-5xl font-black uppercase tracking-tighter text-black break-words hyphens-auto"
    >
      {children}
    </h2>
  );
};
