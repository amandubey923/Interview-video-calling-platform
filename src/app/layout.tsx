import type { Metadata } from "next";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "./globals.css";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { ConvexClerkProvider } from "@/components/providers/ConvexClerkProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Video Calling Interview Platform",
  description: "Interview platform for the candidate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className="antialiased">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SignedIn>
              {/* FLEX COLUMN LAYOUT */}
              <div className="flex min-h-screen flex-col">
                <Navbar />

                {/* MAIN CONTENT */}
                <main className="flex-1 px-4 sm:px-6 lg:px-8">
                  {children}
                </main>

                {/* FOOTER */}
                <Footer />
              </div>
            </SignedIn>

            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </ThemeProvider>

          <Toaster />
        </body>
      </html>
    </ConvexClerkProvider>
  );
}
