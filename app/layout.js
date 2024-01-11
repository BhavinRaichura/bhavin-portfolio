/* eslint-disable padded-blocks */
import "./globals.css"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Bhavin Raichura",
  description: "Full Stack Developer and NIT Raipur Alumnus skilled in C++, Next.js, JavaScript, React.js, Flask, Python, and diverse databases. I excel in bridging creativity with functionality, leveraging a dynamic toolkit to deliver captivating web solutions and bring ideas to life",
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/ScrollMagic.min.js"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Crystian%20 Sarghe"></link>
        <meta name="keywords" content="Full Stack Developer, NIT Raipur, C++, Next.js, JavaScript, React.js, Flask, Python, Web Development, Software Development"/>
        <meta name="author" content="Bhavin Raichura"/>

        <meta property="og:title" content="Bhavin Raichura - Full Stack Developer"/>
        <meta property="og:description" content="Passionate Full Stack Developer and NIT Raipur Alumnus skilled in C++, Next.js, JavaScript, React.js, Flask, Python, and diverse databases. Bringing innovative ideas to life through a seamless blend of front-end and back-end technologies."/>
        
        <meta name="twitter:title" content="Bhavin Raichura - Full Stack Developer"/>
        <meta name="twitter:description" content="Passionate Full Stack Developer and NIT Raipur Alumnus skilled in C++, Next.js, JavaScript, React.js, Flask, Python, and diverse databases. Bringing innovative ideas to life through a seamless blend of front-end and back-end technologies."/>
        
        <meta property="profile:username" content="bhavin-raichura-93a657191"/>

        <meta name="octolytics-actor-id" content="BhavinRaichura"/>

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
