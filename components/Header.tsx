'use client'

import Link from "next/link"
import Container from "./ui/container"
import { Button } from "./ui/button";
import { Menu, Moon, ShoppingCartIcon, Sun } from "lucide-react";
import ProfileButton from "./ui/ProfileButton";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const routes = [
  {
    href: '/',
    label: 'Products'
  },
  {
    href: '/',
    label: 'Categories'
  },
  {
    href: '/',
    label: 'On Sale'
  }
];

const Header = () => {

  const { theme, setTheme } = useTheme();

  return (
    <header className="sm:flex sm:justify-between items-center py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center">
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 w-6 md:hidden" />
              </SheetTrigger>

              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {routes.map((route, i) => (
                    <Link
                      key={i}
                      href={route.href}
                      className="block px-2 py-1 text-lg"
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            
            {/* Company Logo */}
            <Link href='/' className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">
                STORE NAME
              </h1>
            </Link>
          </div>

          {/* Links */}
          <nav className="mx-6 items-center space-x-4 lg:space-x-6 hidden md:block">
            {
              routes.map((route, idx) => (
                <Button key={idx} asChild variant="ghost">
                  <Link href={route.href} className="text-sm font-medium transition-colors">
                    {route.label}
                  </Link>
                </Button>
              ))
            }
          </nav>

          {/* Shopping Cart, theme Switcher and profile button */}
          <div className="flex items-center">
            <Button variant='ghost' size='icon' className="mr-2" aria-label="Shopping Cart">
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="sr-only">Shopping Cart</span>
            </Button>

            <Button variant='ghost' size='icon' aria-label="Toggle theme" className="mr-6" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>

            <ProfileButton />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header