import Link from "next/link";
import { MountainIcon } from "./MountainIcon";

/**
 * @returns Header component.
 */
export default function Header() {
  return (
    <header className="flex h-14 items-center px-4 lg:px-6">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <MountainIcon className="size-6" />
        <span className="sr-only">Blockchain ML Product</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="#"
          className="text-sm font-medium underline-offset-4 hover:underline"
          prefetch={false}
        >
          For Betting Experts
        </Link>
        <Link
          href="#"
          className="text-sm font-medium underline-offset-4 hover:underline"
          prefetch={false}
        >
          For Bettors
        </Link>
        <Link
          href="#"
          className="text-sm font-medium underline-offset-4 hover:underline"
          prefetch={false}
        >
          Pricing
        </Link>
        <Link
          href="#"
          className="text-sm font-medium underline-offset-4 hover:underline"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
