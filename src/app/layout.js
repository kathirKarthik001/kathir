import { Poppins } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { GoogleTagManager } from "@next/third-parties/google";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Kathir Karthik M",
  description: "Kathir Karthik M - A passionate Full Stack Developer.",
  keywords: [
    "Kathir Karthik M",
    "MERN Stack Developer",
    "React.js",
    "Next.js",
    "Firebase",
    "JavaScript Developer",
    "Full-Stack Developer",
    "Software Engineer",
    "SDE",
  ].join(", "),
  author: "Kathir Karthik M",
  og: {
    title: "Kathir Karthik M ",
    description: "Kathir Karthik M - A passionate Full Stack Developer.",
    type: "website",
    url: "",
    image: "",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kathir Karthik M ",
    description: "Kathir Karthik M - A passionate Full Stack Developer.",
    image: "",
    site: "",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-black overflow-x-hidden w-screen h-screen antialiased`}
      >
        <GoogleTagManager gtmId="G-LXPBL5QZKN" />
        <BackgroundBeams />
        {children}
      </body>
    </html>
  );
}
