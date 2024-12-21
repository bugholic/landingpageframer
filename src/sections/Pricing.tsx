"use client";
import CheckIcon from "@/assets/check.svg";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title p-2">Pricing</h2>
          <p className="section-desc mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div
                className={twMerge(
                  "card",
                  inverse === true && `border-black bg-black text-white`
                )}
                key={title}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      inverse && "text-white/60"
                    )}
                  >
                    {title}
                  </h3>
                  {popular && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] bg-clip-text text-transparent"
                        animate={{
                          backgroundPositionX: "100%",
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                  <span className="tracking-tight text-black/50 font-bold">
                    /month
                  </span>
                </div>
                <button
                  className={twMerge(
                    "btn btn-primary w-full mt-[30px]",
                    inverse && "bg-white text-black"
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                    <li className="text-sm flex items-center gap-4;">
                      <CheckIcon className="w-6 h-6 inline-flex items-center justify-center" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
