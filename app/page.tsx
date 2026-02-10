import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="py-10">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
        </div>
        <div className="flex flex-col gap-6">
          <Link href='/static-page'>
            <strong>Static page</strong> - works fine ✅
          </Link>
          <Link href='/sign-in'>
            <strong>Sign in page</strong> - works fine with routing="hash" but not with routing="path" (suspect same issue as dynamic routes) ❓
          </Link>
          <Link href='/protected'>
            <strong>Protected page</strong> - works fine using proxy.ts to protect this route ✅
          </Link>
          <Link href='/dynamic-page'>
              <strong>Dynamic page with loading</strong> - works fine, we access auth data, page is suspended correctly and PPR works ✅
          </Link>
          <Link href='/dynamic-route/123'>
            <strong>Dynamic route with static content</strong> - doesn't work, we don't access auth data, just static content, but it still breaks PPR for dynamic routes ❌
          </Link>
          <Link href='/dynamic-route-2/123'>
            <strong>Dynamic route with loading</strong> - doesn't work, we don't access auth data, just static data but we try to suspend anyway, but it still breaks PPR for dynamic routes ❌
          </Link>
          <Link href='/dynamic-route-3/123'>
            <strong>Dynamic route with loading</strong> - doesn't work, direct copy of "dynamic page with loading"  ❌
          </Link>
          <Link href="/search-params?foo=bar">
            <strong>Page with search params</strong> - works fine, we can access search params and it doesn't break PPR ✅
          </Link>
        </div>
      </main>
    </div>
  );
}
