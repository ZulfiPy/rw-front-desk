"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface RentalAgreementData {
  // Section 1: Renter
  fullName: string;
  phoneNumber: string;
  email: string;
  personalID: string;
  dateOfBirth: string;
  livingAddress: string;
  countryOfBirth: string;
  driversLicenseNumber: string;

  // Section 2: Vehicle
  makeModel: string;
  registrationPlate: string;

  // Section 3: Rental Period
  startDate: string;
  endDate: string;

  // Section 4: Fee
  feeBasis: string;
  paymentProcedure: string;

  // Section 5: Car handing over
  toLessee: string;
  toLessor: string;

  // Section 6: Use
  purposeOfUse: string;
  users: string;

  // Section 7: Odometer image
  odometerImage: File | null;

  // Section 8: Additional Information
  additionalInfo: string;
}

interface RentalAgreementContextType {
  formData: RentalAgreementData;
  updateField: (
    field: keyof RentalAgreementData,
    value: string | File | null,
  ) => void;
  currentStep: "form" | "preview";
  setCurrentStep: (step: "form" | "preview") => void;
  submitAgreement: () => void;
}

const initialFormData: RentalAgreementData = {
  fullName: "IVAN ZELENOV",
  phoneNumber: "+372 5191 1103",
  email: "zeliva@gmail.com",
  personalID: "39207013001",
  dateOfBirth: "01.07.1992",
  livingAddress: "Paekaare 69-69, Tallinn",
  countryOfBirth: "Estonia",
  driversLicenseNumber: "EV999888",
  makeModel: "Toyota Corolla",
  registrationPlate: "169JFX",
  startDate: "",
  endDate: "Tähtajatu",
  feeBasis: "Kokkuleppe",
  paymentProcedure: "Ettemakse",
  toLessee: "Pille 11/5, Tallinn",
  toLessor: "Pille 11/5, Tallinn",
  purposeOfUse: "Sõidujagamine",
  users: "IVAN ZELENOV (39207013001) - EV999888;",
  odometerImage: null,
  additionalInfo:
    "Deposit 200€ makstud sularahas ja tagastatakse sularahas 2. Läbisõidupiirang 2000 km nädalas. Lisakilomeeter 0,10€ 3. Omavastutus kuni 500€ iga kaskokindlustuse kindlustusjuhtumi\n" +
    "kohta. 4. Minimaalne rendiperiood 5 nädalat, vähema rendiperioodi puhul trahv 100€ 5. Lepingu lõpetamise etteteatamine 1 nädal. Punkti rikkumise puhul trahv 100€ 6. Olerex(123ABC)\n" +
    "või Eesti Gaas(123ABC) kütusekaardi asendamise teenustasu 10€ 7. Deposit tagastatakse 5 tööpäevä jooksul peale auto tagastamist, juhul kui deposit oli tehtud. 8. Auto peab olema\n" +
    "puhas seest ja väljast. Vastasel puhul rendileandja võib nõuda kuni 100 eur teenustasu 9. Kütusenäidikud peavad olema samal tasemel, mis sõiduki väljastamise ajal. Vastasel puhul\n" +
    "rendileandja võib nõuda kuni 100 eur teenustasu. 10. Aknapesuvedeliku juurde valamine 10€",
};

const RentalAgreementContext = createContext<RentalAgreementContextType | null>(
  null,
);

export function RentalAgreementProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] =
    useState<RentalAgreementData>(initialFormData);
  const [currentStep, setCurrentStep] = useState<"form" | "preview">("form");

  const updateField = (
    field: keyof RentalAgreementData,
    value: string | File | null,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const submitAgreement = () => {
    setCurrentStep("preview");
  };

  return (
    <RentalAgreementContext.Provider
      value={{
        formData,
        updateField,
        currentStep,
        setCurrentStep,
        submitAgreement,
      }}
    >
      {children}
    </RentalAgreementContext.Provider>
  );
}

export const useRentalAgreement = () => {
  const context = useContext(RentalAgreementContext);
  if (!context) {
    throw new Error(
      "useRentalAgreement must be used within RentalAgreementProvider",
    );
  }
  return context;
};
