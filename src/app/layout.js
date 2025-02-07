import { Geist, Geist_Mono , Roboto , Poppins} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin-ext"], 
  weight: ["400", "700"], 
  style: ["normal", "italic" ], 
  display: "swap", 
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kathir Karthik M | MERN Stack Developer & Tech Enthusiast",
  description:
    "Kathir Karthik M - A passionate MERN Stack Developer specializing in React Native, Firebase, Next.js, and full-stack development. Explore projects, blogs, and insights on modern web technologies.",
  keywords: [
    "Kathir Karthik M",
    "MERN Stack Developer",
    "React Native",
    "Next.js",
    "Firebase",
    "JavaScript Developer",
    "Full-Stack Developer",
    "Software Engineer",
  ].join(", "),
  author: "Kathir Karthik M",
  og: {
    title: "Kathir Karthik M | MERN Stack Developer & Tech Enthusiast",
    description:
      "Explore the portfolio and blogs of Kathir Karthik M, a full-stack developer experienced in React Native, Next.js, and Firebase.",
    type: "website",
    url: "",
    image: "",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kathir Karthik M | MERN Stack Developer & Tech Enthusiast",
    description:
      "Discover the work and insights of Kathir Karthik M, an expert in React Native, Next.js, and full-stack development.",
    image: "https://your-website-url.com/twitter-image.jpg",
    site: "@yourTwitterHandle",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}  h-screen w-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
