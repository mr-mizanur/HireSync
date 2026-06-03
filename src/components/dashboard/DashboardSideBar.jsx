"use client";
import { Bars, Bell, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons";
import { Button, Drawer, DrawerContent, DrawerTrigger, DrawerBackdrop, DrawerDialog, DrawerHeader, DrawerHeading, DrawerBody, DrawerCloseTrigger } from "@heroui/react";

export function DashboardSideBar() {
  const navItems = [
    { icon: House, label: "Home" },
    { icon: Magnifier, label: "Search" },
    { icon: Bell, label: "Notifications" },
    { icon: Envelope, label: "Messages" },
    { icon: Person, label: "Profile" },
    { icon: Gear, label: "Settings" },
  ];

  const navContent = (
    <nav className="flex flex-col gap-1 w-full">
      {navItems.map((item) => (
        <button
          key={item.label}
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-[#1a1a1a] transition-all"
          type="button"
        >
          <item.icon className="size-5" />
          {item.label}
        </button>
      ))}
    </nav>
  );

  return (
    <>
      {/* ডেস্কটপ সাইডবার: শুধুমাত্র বড় স্ক্রিনে দেখা যাবে (lg:block) */}
      <aside className="hidden lg:block w-64 h-screen bg-[#0a0a0a] border-r border-gray-800 p-4">
        <div className="mb-8 px-4 text-white font-bold text-xl">HireSync</div>
        {navContent}
      </aside>

      {/* মোবাইল ড্রয়ার: শুধুমাত্র ছোট স্ক্রিনে বাটন দেখা যাবে */}
      <div className="lg:hidden p-4">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="flat" className="bg-[#1a1a1a] text-white">
              <Bars /> Menu
            </Button>
          </DrawerTrigger>
          <DrawerBackdrop />
          <DrawerContent className="bg-[#0a0a0a] border-r border-gray-800 text-white">
            <DrawerDialog>
              <DrawerHeader className="flex justify-between items-center">
                <DrawerHeading>Navigation</DrawerHeading>
                <DrawerCloseTrigger />
              </DrawerHeader>
              <DrawerBody>{navContent}</DrawerBody>
            </DrawerDialog>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}