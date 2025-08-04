import { IBM_Plex_Mono, IBM_Plex_Sans, } from "next/font/google";


export const plexMono = IBM_Plex_Mono({
    variable: "--font-plexMono",
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
});


export const plexSans = IBM_Plex_Sans({
    variable: "--font-plexSans",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});