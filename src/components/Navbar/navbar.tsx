"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-30 w-full bg-background px-6 py-3 flex items-center justify-center border-none">
      <div className="w-full max-w-7xl flex items-center justify-between">
        {/* Left logo and nav links */}
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center" passHref>
            <img
              src="/mock-paylix-logo.svg"
              alt="Paylix logo"
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-6 text-[16px] font-medium text-foreground bg-transparent shadow-none">
              {/* Features dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent px-0 py-0 h-auto text-[16px] font-medium text-foreground hover:text-muted-foreground transition-colors flex items-center gap-1">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[200px] bg-popover rounded-md shadow-lg p-2 mt-2">
                  <ul className="flex flex-col gap-1">
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="#feature1"
                          className="block px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground"
                        >
                          Feature 1
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="#feature2"
                          className="block px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground"
                        >
                          Feature 2
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="#feature3"
                          className="block px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground"
                        >
                          Feature 3
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {/* Other nav links */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a
                    href="#pricing"
                    className="hover:text-muted-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a
                    href="#fees"
                    className="hover:text-muted-foreground transition-colors"
                  >
                    Fees
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a
                    href="#resources"
                    className="hover:text-muted-foreground transition-colors"
                  >
                    Resources
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a
                    href="#blog"
                    className="hover:text-muted-foreground transition-colors"
                  >
                    Blog
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a
                    href="#stories"
                    className="hover:text-muted-foreground transition-colors"
                  >
                    Stories
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center border border-foreground rounded-full px-3 py-1.5 gap-2 text-foreground font-semibold text-[15px] hover:bg-accent hover:text-accent-foreground transition"
            passHref
          >
            <img
              src="/mock-paylix-logo.svg"
              alt="Paylix logo small"
              height={20}
              className="h-5 w-auto"
            />
            <span className="text-xs font-mono tracking-wide">PAY</span>
          </Link>
          <button className="bg-muted text-foreground rounded-full px-6 py-2 font-medium text-[15px] hover:bg-accent hover:text-accent-foreground transition">
            Login
          </button>
          <button className="bg-foreground text-background rounded-full px-7 py-2 font-semibold text-[15px] flex items-center gap-2 hover:bg-muted hover:text-foreground transition">
            Get Started <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
