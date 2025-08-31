"use client";

import RentalAgreementForm from "@/components/RentalAgreementForm";
import RentalAgreementPreview from "@/components/RentalAgreementPreview";
import { useRentalAgreement } from "@/context/RentalAgreementContext";

function AgreementContent() {
  const { currentStep } = useRentalAgreement();

  return (
    <div className="container mx-auto min-h-screen flex flex-col items-center">
      <div className="my-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 drop-shadow-[0_0_20px_rgba(0,0,0,0.6)] dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] text-center sm:text-left filter brightness-125 animate-pulse">
          Rental Agreement
        </h1>
      </div>

      {currentStep === "form" ? (
        <RentalAgreementForm />
      ) : (
        <RentalAgreementPreview />
      )}
    </div>
  );
}

export default function AgreementPage() {
  return <AgreementContent />;
}
