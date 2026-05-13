interface SectionTitleProps {
  id: string;
  children: React.ReactNode;
}

export const SectionTitle = ({ id, children }: SectionTitleProps) => {
  return (
    <h2
      id={id}
      className="text-[clamp(1.5rem,5vw,2.5rem)] md:text-5xl font-black uppercase tracking-tighter text-black break-words hyphens-auto"
    >
      {children}
    </h2>
  );
};
