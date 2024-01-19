import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router"; // Import the useRouter hook

import Bubbles from "@/components/utils/bubbles";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter(); // Initialize the router

  if (!session) {
    return (
      <div className="homepage">
        <Bubbles />
        <div id="hero"className="text-center text-gray-100 h-screen mt-20">
          <div className="flex flex-col m-4">
            <h1 className="text-6xl mt-28"> Welcome to Washwise</h1>
            <p3 className="text-2xl m-2">Discover the ultimate laundry solution.</p3>
            <p className="mt-4">Are you tired of dealing with the hassle of laundry day?
               Look no further! WashWise is your go-to P2P platform connecting you 
               with experienced "Washers" ready to take care of your laundry needs. 
               Say goodbye to the laundry room and hello to convenience!</p>
          </div>
        <div className="text-center text-gray-900 mt-8">
          <button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="lg rounded bg-gray-100 px-3 text-xl"
          >
            Sign In
          </button>
        </div>
        </div>
{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <div id="info">
          <div className="flex flex-col m-4 mb-20">
            <h1 className="text-5xl text-center text-gray-100">
              Why Choose WashWise?
            </h1>
            <div className="mt-6 rounded flex flex-col items-center pt-4 ">
            <h3 className="text-bold text-2xl text-center text-gray-100">
              Convience at Your Fingertips
            </h3>
            <svg className="w-32 h-32 text-gray-800 dark:text-white mt-4 mb-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
            <path d="M12 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7.5 17.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2ZM12 13H2V4h10v9Z"/>
          </svg>
            <p className="text-center text-gray-100 mb-8">
            No more sorting, washing, or folding. 
            With WashWise, you can schedule a Washer to handle your laundry, and we'll take care of the rest. 
            Enjoy more free time while we handle the dirty work
            </p>

            <h3 className="text-bold text-2xl text-center text-gray-100">
              Experienced Washers
            </h3>
            <svg class="w-32 h-32 text-gray-800 dark:text-white mt-4 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.333 6.764a3 3 0 1 1 3.141-5.023M2.5 16H1v-2a4 4 0 0 1 4-4m7.379-8.121a3 3 0 1 1 2.976 5M15 10a4 4 0 0 1 4 4v2h-1.761M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4 6h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"/>
            </svg>
            <p className="text-center text-gray-100 mb-8">
            Our community of experienced Washers are carefully vetted to ensure top-notch service. 
            You can trust us with your favorite clothes, delicates, and linens. 
            Your satisfaction is our priority.
            </p>

            <h3 className="text-bold text-2xl text-center text-gray-100">
              Affordable and Transparent Pricing
            </h3>
            <svg class="w-32 h-32 text-gray-800 dark:text-white mt-4 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
            </svg>
            <p className="text-center text-gray-100 mb-8">
            With WashWise, you get cost-effective laundry services. 
            Our transparent pricing ensures you know exactly what you're paying for. 
            No hidden fees, just clean clothes and a clear bill.
            </p>

            <h3 className="text-bold text-2xl text-center text-gray-100">
              Flexible Scheduling
            </h3>
            <svg class="w-32 h-32 text-gray-800 dark:text-white mt-4 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path fill="currentColor" d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z"/>
            </svg>
            <p className="text-center text-gray-100 mb-8">
            Whether you need a one-time service or regular assistance, WashWise accommodates your schedule. 
            Simply choose a time that suits you, and our Washers will be there to pick up and deliver your laundry.
            </p>
            </div>
            </div>
        </div>

        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <div id="how">
          <div className="flex flex-col m-4 mb-20">
              <h1 className="text-5xl text-center text-gray-100">
                How it Works:
              </h1>
              <div className="mt-6 rounded flex flex-col items-center pt-4 ">
              <h3 className="text-bold text-2xl text-center text-gray-100">
                Sign Up
              </h3>
              <svg className="w-32 h-32 text-gray-800 dark:text-white mt-4 mb-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
              <path d="M12 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7.5 17.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2ZM12 13H2V4h10v9Z"/>
            </svg>
              <p className="text-center text-gray-100 mb-8">
              Create your WashWise account in minutes. It's free and easy! In minutes you'll be able 
              to take care of your dirty laundry.
              </p>

              <h3 className="text-bold text-2xl text-center text-gray-100">
                Schedule a Washer
              </h3>
              <svg className="w-32 h-32 text-gray-800 dark:text-white mt-4 mb-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
              <path d="M12 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7.5 17.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2ZM12 13H2V4h10v9Z"/>
            </svg>
              <p className="text-center text-gray-100 mb-8">
                Browse through our list of experienced Washers,
                check their reviews, and select the one that suits your needs.
              </p>

              <h3 className="text-bold text-2xl text-center text-gray-100">
                Pickup & Delivery
              </h3>
              <svg className="w-32 h-32 text-gray-800 dark:text-white mt-4 mb-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
              <path d="M12 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7.5 17.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2ZM12 13H2V4h10v9Z"/>
            </svg>
              <p className="text-center text-gray-100 mb-8">
                Your selected Washer will pick up your laundry at the scheduled time
                and return it to you, fresh and clean.
              </p>

              <h3 className="text-bold text-2xl text-center text-gray-100">
                Enjoy Your Free Time
              </h3>
              <svg className="w-32 h-32 text-gray-800 dark:text-white mt-4 mb-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
              <path d="M12 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7.5 17.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2ZM12 13H2V4h10v9Z"/>
            </svg>
              <p className="text-center text-gray-100 mb-8">
              Use the time you saved on laundry day for things you love. 
              WashWise is here to make your life easier.
              </p>

            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

        <div id="footer">
          <div className="flex flex-col m-4 mb-10">
            <div className="text-white">
              <p>
                CONTACT US
                <hr class="w-24"></hr>
              
                Contact Us
                <br></br>
                Careers
              </p>
            </div>
            <div className="text-white">
              LEGAL
              <br></br>
              Legal Terms
              <br></br>
              Privacy Policy
              <br></br>
              Notice about cookie management
              <br></br>
              California Transparency in Supply Chains Act
              <br></br>
              FAQ
            </div>
            <div>
            <p className="text-white">
              Cucamonga Web Solutions 2024.
            </p>

            </div>

          </div>

        </div>


      </div>
    );
  }

  // If the user is authenticated, automatically redirect to /dashboard
  if (session) {
    router.push("/dashboard");
  }

  return (
    <div className="bg-blue-300 min-h-screen min-w-screen">
    <div className="text-6xl text-white">Welcome to Washwise</div>
    </div>
  );
}