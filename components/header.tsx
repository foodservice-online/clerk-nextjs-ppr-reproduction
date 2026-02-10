import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between border-b border-gray-500 p-4">
            <h1>
                <Link href="/">App Name</Link>
            </h1>
            <p>User here</p>
        </header>
    );
}
