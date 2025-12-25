"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ShieldCheck,
  Sparkles,
  Video,
  Calendar,
  Users,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t bg-linear-to-b from-background via-background to-muted/40">
      {/* TOP ACCENT LINE */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-500/40 to-transparent" />

      <div className="container mx-auto max-w-7xl px-6 py-20">
        {/* MAIN GRID */}
        <div className="grid gap-12 lg:grid-cols-5">
          {/* BRAND / ABOUT */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-emerald-500" />
              <h2 className="text-2xl font-bold tracking-tight">
                InterviewHub
              </h2>
            </div>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              InterviewHub is a modern video interviewing platform designed
              for structured, secure, and efficient hiring. We help companies
              and candidates connect seamlessly through real-time interviews,
              scheduling, and collaboration tools.
            </p>

            {/* TRUST BADGES */}
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1 rounded-full border px-3 py-1">
                <ShieldCheck className="h-3 w-3 text-emerald-500" />
                Secure by Design
              </span>
              <span className="rounded-full border px-3 py-1">
                Real-Time Video
              </span>
              <span className="rounded-full border px-3 py-1">
                Role-Based Access
              </span>
            </div>
          </div>

          {/* PRODUCT */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Product
            </h3>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/interviews" className="hover:text-foreground">
                  Interviews
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-foreground">
                  Schedule Interview
                </Link>
              </li>
              <li>
                <Link href="/join" className="hover:text-foreground">
                  Join Interview
                </Link>
              </li>
              <li>
                <Link href="/recordings" className="hover:text-foreground">
                  Recordings
                </Link>
              </li>
            </ul>
          </div>

          {/* PLATFORM */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Platform
            </h3>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Video className="h-4 w-4 text-emerald-500" />
                Live Video Interviews
              </li>
              <li className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-emerald-500" />
                Smart Scheduling
              </li>
              <li className="flex items-center gap-2">
                <Users className="h-4 w-4 text-emerald-500" />
                Interviewer & Candidate Roles
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                Secure Authentication
              </li>
            </ul>
          </div>

          {/* SUPPORT & RESOURCES */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Support
            </h3>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/help" className="hover:text-foreground">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* SEPARATOR */}
        <div className="my-12 h-px bg-linear-to-r from-transparent via-border to-transparent" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} InterviewHub. All rights reserved.
          </p>

          {/* SOCIAL + CONTACT */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:support@interviewhub.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              support@interviewhub.com
            </a>

            <div className="flex items-center gap-3">
              <Link
                href="https://github.com"
                target="_blank"
                className="rounded-full border p-2 text-muted-foreground hover:border-foreground hover:text-foreground"
              >
                <Github className="h-4 w-4" />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="rounded-full border p-2 text-muted-foreground hover:border-foreground hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </Link>

              <Link
                href="https://twitter.com"
                target="_blank"
                className="rounded-full border p-2 text-muted-foreground hover:border-foreground hover:text-foreground"
              >
                <Twitter className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
