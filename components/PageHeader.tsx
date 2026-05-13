interface PageHeaderProps {
  titulo: string;
  acento: string;
  descripcion: React.ReactNode;
}

export const PageHeader = ({ titulo, acento, descripcion }: PageHeaderProps) => {
  return (
    <header className="border-b-4 border-black pb-[clamp(2rem,5dvh,4rem)] flex flex-col gap-[clamp(1rem,2dvh,1.5rem)]">
      <h1 className="text-[clamp(2.25rem,8vw,4.5rem)] md:text-7xl font-[900] text-black tracking-tighter uppercase leading-none break-words hyphens-auto">
        {titulo} <br />
        <span className="text-gray-400">{acento}</span>
      </h1>
      <p className="text-[clamp(1rem,2.5vw,1.25rem)] md:text-xl text-black font-medium max-w-[40rem] leading-relaxed break-words">
        {descripcion}
      </p>
    </header>
  );
};
