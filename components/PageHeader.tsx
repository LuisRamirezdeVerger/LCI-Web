interface PageHeaderProps {
  titulo: string;
  acento: string;
  descripcion: React.ReactNode;
}

export const PageHeader = ({ titulo, acento, descripcion }: PageHeaderProps) => {
  return (
    <header className="border-b-4 border-black pb-[3rem] md:pb-[4rem] flex flex-col gap-[1.5rem]">
      <h1 className="text-5xl md:text-7xl font-[900] text-black tracking-tighter uppercase leading-none">
        {titulo} <br />
        <span className="text-gray-400">{acento}</span>
      </h1>
      <p className="text-lg md:text-xl text-black font-medium max-w-[40rem] leading-relaxed">
        {descripcion}
      </p>
    </header>
  );
};
