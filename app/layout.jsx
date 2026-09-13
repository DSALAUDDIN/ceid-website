import "./globals.css";
export const metadata = {
  title: "CEID — Centre for Equity, Inclusion and Development",
  description: "People · Evidence · Inclusive Change",
};
export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
