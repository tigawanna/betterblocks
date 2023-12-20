/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fCRCXlXPWvd
 */
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/ui/avatar";
import { CardHeader, CardContent, Card } from "@/components/shadcn/ui/card";
import Image from "next/image";

export default function Component() {
  return (
    <>
      {/* <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <HomeIcon className="h-6 w-6" />
          <span className="sr-only">Real Estate Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Listings
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header> */}
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  About Real Estate Inc
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Real Estate Inc is a trusted real estate company that has been in the industry for
                  over 20 years. We are committed to providing our clients with the best possible
                  service and ensuring they find the perfect property.
                </p>
              </div>
            </div>
            <Image
              alt="About us"
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
              height="300"
              src="/assets/modern-rustic.jpg"
              width="1270"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Values</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our core values guide us in all that we do at Real Estate Inc. They represent what
                  we stand for and how we conduct ourselves.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Integrity</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We act with honesty and hold ourselves accountable for our actions.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Excellence</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We strive for excellence and take pride in the quality of our work.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Customer Focus</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We put our customers at the heart of everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Meet Our Team
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Meet the dedicated team of professionals who make Real Estate Inc the trusted real
                estate company it is today.
              </p>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Avatar>
                    <AvatarImage src="/male.jpg" alt="@doe" />
                    <AvatarFallback>Doe</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-bold mt-4">John Doe</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CEO</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    John is the driving force behind Real Estate Inc. He has over 30 years of
                    experience in the real estate industry.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Avatar>
                    <AvatarImage src="/female.jpg" alt="@jane" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-bold mt-4">Jane Smith</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CFO</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Jane is responsible for managing our finances. She has a keen eye for detail and
                    a passion for numbers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Avatar>
                    <AvatarImage src="/male.jpg" alt="@bob" />
                    <AvatarFallback>bob</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-bold mt-4">Bob Johnson</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CTO</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Bob oversees all technology at Real Estate Inc. He is always looking for ways to
                    innovate and improve our services.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Contact Us</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have questions or want to learn more about us? Feel free to reach out. We’d love to
                hear from you.
              </p>
            </div>
            <div className="flex justify-center space-x-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}


