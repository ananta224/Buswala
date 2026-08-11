import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title:"Odisha Bus Playlist", description:"19+ years of Odia nostalgia." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}