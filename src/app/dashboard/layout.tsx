'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from '@/components/ui/sidebar';
import {
  LayoutDashboard,
  ShieldCheck,
  MessageSquare,
  User,
  LogOut,
  LucideIcon,
  Home,
} from 'lucide-react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ICONS: Record<string, LucideIcon> = {
  LayoutDashboard,
  ShieldCheck,
  MessageSquare,
  User,
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const role = pathname.includes('/borrower') ? 'borrower' : 'lender';

  const navLinks = [
    {
      name: 'Dashboard',
      href: `/dashboard/${role}`,
      icon: 'LayoutDashboard',
    },
    {
      name: 'Verification',
      href: '/dashboard/verification',
      icon: 'ShieldCheck',
    },
    {
      name: 'Messages',
      href: '#',
      icon: 'MessageSquare',
    },
    {
      name: 'Profile',
      href: '#',
      icon: 'User',
    },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader>
            <Logo />
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navLinks.map((link) => {
                const Icon = ICONS[link.icon];
                const isActive = pathname === link.href;
                return (
                  <SidebarMenuItem key={link.href}>
                    <Link href={link.href}>
                      <SidebarMenuButton
                        isActive={isActive}
                        tooltip={{ children: link.name, side: 'right' }}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{link.name}</span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="flex flex-col gap-2">
            <SidebarMenu>
                 <SidebarMenuItem>
                    <Link href="/">
                      <SidebarMenuButton tooltip={{ children: 'Back to Home', side: 'right' }}>
                        <Home className="h-4 w-4" />
                        <span>Back to Home</span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Link href="/">
                      <SidebarMenuButton tooltip={{ children: 'Logout', side: 'right' }}>
                        <LogOut className="h-4 w-4" />
                        <span>Logout</span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="flex-1">
          <header className="flex h-16 items-center justify-between border-b px-6">
            <div className="flex items-center gap-4">
                <SidebarTrigger className="md:hidden" />
                <h1 className="text-xl font-semibold capitalize">
                  {role} Dashboard
                </h1>
            </div>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://picsum.photos/seed/user/40/40" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </header>
          <div className="p-4 md:p-6">{children}</div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
