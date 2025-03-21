import CareerBanner from "@/components/Career/CareerBanner/CareerBanner";
import CustomHelmet from "@/components/ui/CustomHelmet";
import React from "react";

export default function Career() {
  return (
    <div>
      <CustomHelmet p={"career"}></CustomHelmet>
      <CareerBanner />
    </div>
  );
}
