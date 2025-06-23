"use client";
import { UserButton, OrganizationSwitcher } from "@clerk/nextjs";
const Nav = () => {
  return (
    <nav className="p-4 flex justify-between items-center">
      <div>
        <h1 className="font-semibold text-2xl">Inkthread</h1>
      </div>
      <div className="flex items-center space-x-4">
        <OrganizationSwitcher
            appearance={{
                elements: {
                organizationSwitcherButton: "bg-white text-gray-800 hover:bg-gray-100",
                organizationSwitcherPopover: "bg-white shadow-lg rounded-lg",
                },
            }} 
        afterSelectOrganizationUrl={"/org/:slug"}
        />
        <UserButton />
      </div>
    </nav>
  );
};

export default Nav;
