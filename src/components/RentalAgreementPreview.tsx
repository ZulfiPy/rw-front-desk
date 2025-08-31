"use client";

import { useRentalAgreement } from "@/context/RentalAgreementContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  CalendarIcon,
  CarIcon,
  UserIcon,
  PrinterIcon,
  EditIcon,
} from "lucide-react";

export default function RentalAgreementPreview() {
  const { formData, setCurrentStep } = useRentalAgreement();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-4xl mx-auto p-6">
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center border-b border-slate-200/60 bg-gradient-to-r from-slate-50 to-white py-4">
            <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
              Rendileping
            </h1>
          </CardHeader>

          <CardContent className="p-6 space-y-6">
            <div className="bg-slate-50/50 p-4 rounded-lg border border-slate-200/60">
              <p className="text-sm leading-relaxed text-slate-700">
                <span className="font-bold text-slate-900">RW-Rent OÜ</span>,
                registrikoodiga{" "}
                <span className="font-bold text-slate-900">14237154</span>,
                asukohaga{" "}
                <span className="font-bold text-slate-900">
                  Põlva maakond, Kanepi vald, Soodoma küla, Mäe, 63124
                </span>{" "}
                (edaspidi{" "}
                <span className="font-bold text-slate-900">Rendileandja</span>),
                mida esindab juhatuse liige{" "}
                <span className="font-bold text-slate-900">Tauno Liiv</span>,
                sõlmib alltoodud rendilevõtjaga (edaspidi{" "}
                <span className="font-bold text-slate-900">Rendilevõtja</span>{" "}
                või <span className="font-bold text-slate-900">Pool</span> või
                koos Rendileandjaga{" "}
                <span className="font-bold text-slate-900">Pooled</span>)
                sõiduki (edaspidi{" "}
                <span className="font-bold text-slate-900">Sõiduk</span>)
                rendilepingu (edaspidi{" "}
                <span className="font-bold text-slate-900">Leping</span>):
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <UserIcon className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold text-slate-800">
                  Lepingu üksikasjad
                </h2>
              </div>

              <div className="space-y-4">
                {/* Personal Information Section */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200/60">
                  <h3 className="text-base font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <UserIcon className="w-4 h-4" />
                    Isikuandmed
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-white/80 p-3 rounded-lg">
                      <div className="text-xs font-medium text-slate-600 mb-1">
                        Täisnimi
                      </div>
                      <div className="text-sm text-slate-900 font-medium">
                        {formData.fullName}
                      </div>
                    </div>
                    <div className="bg-white/80 p-3 rounded-lg">
                      <div className="text-xs font-medium text-slate-600 mb-1">
                        Isikukood
                      </div>
                      <div className="text-sm text-slate-900 font-medium">
                        {formData.personalID}
                      </div>
                    </div>
                    <div className="bg-white/80 p-3 rounded-lg">
                      <div className="text-xs font-medium text-slate-600 mb-1">
                        Telefoninumber
                      </div>
                      <div className="text-sm text-slate-900 font-medium">
                        {formData.phoneNumber}
                      </div>
                    </div>
                    <div className="bg-white/80 p-3 rounded-lg">
                      <div className="text-xs font-medium text-slate-600 mb-1">
                        E-post
                      </div>
                      <div className="text-sm text-slate-900 font-medium">
                        {formData.email}
                      </div>
                    </div>
                    <div className="bg-white/80 p-3 rounded-lg">
                      <div className="text-xs font-medium text-slate-600 mb-1">
                        Sünniaeg
                      </div>
                      <div className="text-sm text-slate-900 font-medium">
                        {formData.dateOfBirth}
                      </div>
                    </div>
                    <div className="bg-white/80 p-3 rounded-lg">
                      <div className="text-xs font-medium text-slate-600 mb-1">
                        Sünnikoht
                      </div>
                      <div className="text-sm text-slate-900 font-medium">
                        {formData.countryOfBirth}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    <div className="bg-white/80 p-3 rounded-lg">
                      <div className="text-xs font-medium text-slate-600 mb-1">
                        Elukoha aadress
                      </div>
                      <div className="text-sm text-slate-900 font-medium">
                        {formData.livingAddress}
                      </div>
                    </div>
                    <div className="bg-white/80 p-3 rounded-lg">
                      <div className="text-xs font-medium text-slate-600 mb-1">
                        Juhiloa number
                      </div>
                      <div className="text-sm text-slate-900 font-medium">
                        {formData.driversLicenseNumber}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vehicle Information Section */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200/60">
                  <h3 className="text-base font-semibold text-green-900 mb-3 flex items-center gap-2">
                    <CarIcon className="w-4 h-4" />
                    Sõiduki andmed
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-white/80 p-3 rounded-lg">
                      <div className="text-xs font-medium text-slate-600 mb-1">
                        Mark/mudel
                      </div>
                      <div className="text-sm text-slate-900 font-medium">
                        {formData.makeModel}
                      </div>
                    </div>
                    <div className="bg-white/80 p-3 rounded-lg">
                      <div className="text-xs font-medium text-slate-600 mb-1">
                        Registreerimismärk
                      </div>
                      <div className="text-sm text-slate-900 font-medium">
                        {formData.registrationPlate}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rental Terms Section */}
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-4 rounded-lg border border-purple-200/60">
                  <h3 className="text-base font-semibold text-purple-900 mb-3 flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    Renditingimused
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-white/80 p-3 rounded-lg">
                      <div className="text-xs font-medium text-slate-600 mb-1">
                        Alguskuupäev
                      </div>
                      <div className="text-sm text-slate-900 font-medium">
                        {formData.startDate}
                      </div>
                    </div>
                    <div className="bg-white/80 p-3 rounded-lg">
                      <div className="text-xs font-medium text-slate-600 mb-1">
                        Lõppkuupäev
                      </div>
                      <div className="text-sm text-slate-900 font-medium">
                        {formData.endDate}
                      </div>
                    </div>
                    <div className="bg-white/80 p-3 rounded-lg">
                      <div className="text-xs font-medium text-slate-600 mb-1">
                        Tasu alus
                      </div>
                      <div className="text-sm text-slate-900 font-medium">
                        {formData.feeBasis}
                      </div>
                    </div>
                    <div className="bg-white/80 p-3 rounded-lg">
                      <div className="text-xs font-medium text-slate-600 mb-1">
                        Maksmise kord
                      </div>
                      <div className="text-sm text-slate-900 font-medium">
                        {formData.paymentProcedure}
                      </div>
                    </div>
                    <div className="bg-white/80 p-3 rounded-lg">
                      <div className="text-xs font-medium text-slate-600 mb-1">
                        Üleandmine rendivõtjale
                      </div>
                      <div className="text-sm text-slate-900 font-medium">
                        {formData.toLessee}
                      </div>
                    </div>
                    <div className="bg-white/80 p-3 rounded-lg">
                      <div className="text-xs font-medium text-slate-600 mb-1">
                        Tagastamine rendileandjale
                      </div>
                      <div className="text-sm text-slate-900 font-medium">
                        {formData.toLessor}
                      </div>
                    </div>
                    <div className="bg-white/80 p-3 rounded-lg">
                      <div className="text-xs font-medium text-slate-600 mb-1">
                        Kasutamise eesmärk
                      </div>
                      <div className="text-sm text-slate-900 font-medium">
                        {formData.purposeOfUse}
                      </div>
                    </div>
                    <div className="bg-white/80 p-3 rounded-lg">
                      <div className="text-xs font-medium text-slate-600 mb-1">
                        Kasutajad
                      </div>
                      <div className="text-sm text-slate-900 font-medium">
                        {formData.users}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => setCurrentStep("form")}
                className="flex items-center gap-2"
                size="sm"
              >
                <EditIcon className="w-4 h-4" />
                Muuda
              </Button>
              <Button className="flex items-center gap-2" size="sm">
                <PrinterIcon className="w-4 h-4" />
                Prindi PDF
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
