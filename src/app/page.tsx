import Button from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { Banknote, CirclePercent, ClipboardClock, DoorOpen, MapPin, ShieldCheck, Star, User } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="relative overflow-hidden bg-white">
        {/* Left Gradient Circle - Teal (#006979 at 20% opacity) */}
        <div
          className="absolute top-20 left-0 w-[500px] h-[900px] md:w-[1000px] md:h-[2000px] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/4 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(0, 105, 121, 0.2) 0%, rgba(0, 105, 121, 0.1) 40%, transparent 70%)'
          }}
        />

        {/* Right Gradient Circle - Peach (#FEDEBC at 40% opacity) */}
        <div
          className="absolute top-64 md:top-0 right-0 w-[500px] h-[900px] md:w-[1000px] md:h-[2000px] rounded-full blur-3xl translate-x-1/2 -translate-y-1/4 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(254, 222, 188, 0.4) 0%, rgba(254, 222, 188, 0.2) 40%, transparent 70%)'
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-5 md:px-10 pt-32 md:pt-40">
          <div className="flex flex-col items-center gap-16">
            {/* Top Content - Text and Buttons */}
            <div className="text-center space-y-5 max-w-4xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
                Discover & Book the Best Salons Near You — Anytime, Anywhere
              </h1>
              <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Beautify connects you with trusted salons around your location.
                Browse services, compare prices, unlock exclusive discounts, and
                book appointments instantly — all from one app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition-colors">
                  Download on the App Store
                </Button>
                <button className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition-colors">
                  Download on the PlayStore
                </button>
              </div>
            </div>

            {/* Bottom Content - Phone Mockup */}
            <div className="relative flex justify-center w-full max-w-2xl">
              {/* Feature Badges */}
              <div className="absolute top-8 left-0 md:left-12 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg z-20 animate-float">
                Secure payments
              </div>
              <div className="absolute top-32 right-0 md:right-16 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg z-20 animate-float-delayed">
                Trusted salons
              </div>
              <div className="absolute bottom-24 left-0 md:left-20 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg z-20 animate-float">
                Instant booking
              </div>

              {/* Phone Mockup */}
              <div className="relative">
                <Image
                  src={"/hero-mockup.png"}
                  alt="Hero Mockup"
                  width={300}
                  height={300}
                  className="drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="px-5 md:px-10 py-[70px]">
        <div className="container mx-auto space-y-[50px]">
          <div className="flex flex-col items-center justify-center gap-2.5">
            <h1 className="text-2xl md:text-5xl max-w-full md:max-w-2xl text-center">Everything You Need for Salon Care. Nothing You Don&apos;t.</h1>
            <p className="text-center max-w-full md:max-w-2xl">Beautify is designed to simplify your salon experience — from discovering nearby salons to booking appointments and enjoying exclusive deals, all in one seamless platform.</p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto">

            <div className="bg-[#F5F7FB] rounded-md p-5 flex flex-col justify-between gap-16">
              <div className="bg-linear-to-r from-[#006979] to-[#00434D] p-3.5 rounded-full w-fit">
                <MapPin className="text-white" />
              </div>

              <div>
                <h3 className="text-2xl">Easy Salon Discovery</h3>
                <p>Find top-rated salons near your home using real-time location. No more guessing or asking around.</p>
              </div>
            </div>

            <div className="bg-[#006979] rounded-md flex items-end justify-center">
              <Image src={'/section-2.png'} alt="Beautify Mockup" width={200} height={200} />
            </div>

            <div className="bg-[#F5F7FB] rounded-md p-5 flex flex-col justify-between gap-16">
              <div className="bg-linear-to-r from-[#006979] to-[#00434D] p-3.5 rounded-full w-fit">
                <DoorOpen className="text-white" />
              </div>

              <div>
                <h3 className="text-2xl">Doorstep Services</h3>
                <p>Select salons offer professional services at your doorstep for maximum convenience.</p>
              </div>
            </div>

            <div className="bg-[#F5F7FB] rounded-md p-5 flex flex-col justify-between gap-16">
              <div className="bg-linear-to-r from-[#006979] to-[#00434D] p-3.5 rounded-full w-fit">
                <ClipboardClock className="text-white" />
              </div>

              <div>
                <h3 className="text-2xl">Appointment Booking</h3>
                <p>Book salon appointments instantly with real-time availability — no calls, no waiting.</p>
              </div>
            </div>

            <div className="bg-[#F5F7FB] rounded-md p-5 flex flex-col justify-between gap-16">
              <div className="bg-linear-to-r from-[#006979] to-[#00434D] p-3.5 rounded-full w-fit">
                <CirclePercent className="text-white" />
              </div>

              <div>
                <h3 className="text-2xl">Exclusive Discounts</h3>
                <p>Explore special offers and discounted services available only on Beautify.</p>
              </div>
            </div>

            <div className="bg-[#F5F7FB] rounded-md p-5 flex flex-col justify-between gap-16">
              <div className="bg-linear-to-r from-[#006979] to-[#00434D] p-3.5 rounded-full w-fit">
                <Star className="text-white" />
              </div>

              <div>
                <h3 className="text-2xl">Reviews & Ratings</h3>
                <p>Make informed decisions with genuine customer reviews and transparent ratings.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="px-5 md:px-10 py-[70px]">
        <div className="container mx-auto space-y-[50px]">
          <div className="flex flex-col items-center justify-center gap-2.5">
            <h1 className="text-2xl md:text-5xl max-w-full md:max-w-2xl text-center">Why Thousands Trust Beautify</h1>
            <p className="text-center max-w-full md:max-w-2xl">We are building Pakistan&apos;s most reliable salon discovery and booking platform — focused on convenience, quality, and trust.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto">

            <div className="bg-[#F5F3FF] rounded-md flex flex-col gap-6 justify-between p-5 pb-0">
              <div className="bg-linear-to-r from-[#006979] to-[#00434D] p-3.5 rounded-full w-fit">
                <ShieldCheck className="text-white" />
              </div>

              <div>
                <h3 className="text-2xl">Verified Salons</h3>
                <p>All salons on Beautify are verified to ensure quality and professionalism.</p>
              </div>

              <div className="flex items-end justify-center">
                <Image src={"/verified-salons.png"} alt="Verified Salons" width={300} height={300} />
              </div>
            </div>

            <div className="bg-[#F5F3FF] rounded-md flex flex-col gap-6 justify-between p-5 pb-0">
              <div className="bg-linear-to-r from-[#006979] to-[#00434D] p-3.5 rounded-full w-fit">
                <User className="text-white" />
              </div>

              <div>
                <h3 className="text-2xl">Real-Time Availability</h3>
                <p>No fake listings. What you see is what&apos;s available.</p>
              </div>

              <div className="flex items-end justify-center">
                <Image src={"/real-time.png"} alt="Real-Time Availability" width={300} height={300} />
              </div>
            </div>

            <div className="bg-[#F5F3FF] rounded-md flex flex-col gap-6 justify-between p-5 pb-0">
              <div className="bg-linear-to-r from-[#006979] to-[#00434D] p-3.5 rounded-full w-fit">
                <Banknote className="text-white" />
              </div>

              <div>
                <h3 className="text-2xl">Transparent Pricing</h3>
                <p>Clear service prices with no hidden charges.</p>
              </div>

              <div className="flex items-end justify-center">
                <Image src={"/pricing.png"} alt="Transparent Pricing" width={300} height={300} />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="px-5 md:px-10 py-[70px]">
        <div className="container mx-auto space-y-[50px]">
          <div className="flex flex-col items-center justify-center gap-5 bg-linear-to-r from-[#006979] to-[#00434D] p-5 rounded-md text-white py-[70px]">
            <div>
              <h2 className="text-2xl md:text-5xl max-w-full md:max-w-2xl text-center">Download Beautify & Elevate Your Salon Experience</h2>
              <p className="text-center max-w-full md:max-w-2xl">Discover salons, book instantly, and enjoy exclusive deals — all in one app.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition-colors">
                Download on the App Store
              </Button>
              <button className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition-colors">
                Download on the PlayStore
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-5 md:px-10 py-[70px] bg-[#F5F7FB]">
        <div className="container mx-auto space-y-[50px]">
          <div className="flex flex-col items-center justify-center gap-2.5">
            <h1 className="text-2xl md:text-5xl max-w-full md:max-w-2xl text-center">Frequently Asked Questions</h1>
            <p className="text-center max-w-full md:max-w-2xl">Got questions? We&apos;ve got answers. Learn more about how Beautify works.</p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-lg p-6 md:p-8 shadow-sm">
            <Accordion
              items={[
                {
                  question: "Is Beautify free to use?",
                  answer: "Yes, Beautify is completely free for users."
                },
                {
                  question: "Can I pay at the salon?",
                  answer: "Yes, both online and pay-at-salon options are available."
                },
                {
                  question: "Are salons verified?",
                  answer: "Yes, all salons go through a verification process."
                }
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
