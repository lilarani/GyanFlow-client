import ApplicationProcess from "@/components/Career/ApplicationProcess/ApplicationProcess";
import CareerBanner from "@/components/Career/CareerBanner/CareerBanner";
import CareerOpenings from "@/components/Career/CareerOpenings/CareerOpenings";
// import CustomHelmet from '@/components/ui/CustomHelmet';
// import CustomHelmet from "@/components/ui/CustomHelmet";

export default function Career() {
  return (
    <div>
      {/* <CustomHelmet p={'career'}></CustomHelmet> */}

      <CareerBanner />

      <div className="lg:w-10/12 lg:mx-auto">
        <ApplicationProcess />

        <CareerOpenings />
      </div>
    </div>
  );
}
