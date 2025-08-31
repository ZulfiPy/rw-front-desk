import { RentalAgreementProvider } from "@/context/RentalAgreementContext";
import React from "react";

export default function AgreementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RentalAgreementProvider>{children}</RentalAgreementProvider>;
}
