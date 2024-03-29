import { useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar";

const navigation = [
  { name: "Home", to: "/", current: false },
  { name: "Courses", to: "/courses", current: false },
  { name: "Updates", to: "/updates", current: false },
  { name: "Contact us", to: "/contactus", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Disclosure as="nav" className="bg-Headecolor">
        {({ open }) => (
          <>
            <div className="px-2 sm:px-2 lg:px-2">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="relative  inline-flex items-center justify-center rounded-md p-2 text-textColor hover:bg-babyPinkColor hover:text-white focus:outline-none focus:ring-2 focus:ring-inset ">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          className={classNames(
                            item.current
                              ? "bg-darkBlueColor text-white"
                              : "text-textColor hover:bg-babyPinkColor hover:text-white",
                            "rounded-full px-3 py-2 text-sm font-medium "
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 text-center">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={classNames(
                    item.current
                        ? "bg-darkBlueColor text-white"
                        : "text-textColor hover:bg-babyPinkColor hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
