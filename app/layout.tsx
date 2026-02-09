import { Navbar } from '../components/Navbar'; // Importamos tu nuevo componente
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar /> 
        {children}
      </body>
    </html>
  );
}