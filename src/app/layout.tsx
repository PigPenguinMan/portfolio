import Navbar from "./components/navbar";

export const metadata = {
  title: "Next-PortFolio",
};


const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <body >
          <Navbar />
        {children}
      </body>
    </html>
  );
}
 
export default RootLayout;