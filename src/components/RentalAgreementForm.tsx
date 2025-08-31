"use client";

import { ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useRentalAgreement } from "@/context/RentalAgreementContext";

export default function RentalAgreementForm() {
  const { formData, updateField, submitAgreement } = useRentalAgreement();

  const handleInputChange = (field: string, value: string) => {
    updateField(field as keyof typeof formData, value);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    updateField("odometerImage", file);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    submitAgreement();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section 1: Renter */}
        <Card className="bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-gray-950/70 dark:via-slate-950/50 dark:to-gray-950/70 dark:border-gray-900/40">
          <CardHeader>
            <CardTitle>1. Renter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter driver's full name"
                  className="placeholder-gray"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="Enter driver's phone number"
                  className="placeholder-gray"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    handleInputChange("phoneNumber", e.target.value)
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter driver's email address"
                  className="placeholder-gray"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="personalID">
                  Personal ID / Registration Code
                </Label>
                <Input
                  id="personalID"
                  type="text"
                  placeholder="Enter driver's personal ID or registration code"
                  className="placeholder-gray"
                  value={formData.personalID}
                  onChange={(e) =>
                    handleInputChange("personalID", e.target.value)
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) =>
                    handleInputChange("dateOfBirth", e.target.value)
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="livingAddress">Living Address</Label>
                <Input
                  id="livingAddress"
                  type="text"
                  placeholder="Enter driver's exact address"
                  className="placeholder-gray"
                  value={formData.livingAddress}
                  onChange={(e) =>
                    handleInputChange("livingAddress", e.target.value)
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="countryOfBirth">Country of Birth</Label>
                <Input
                  id="countryOfBirth"
                  type="text"
                  placeholder="Enter driver's country of birth"
                  className="placeholder-gray"
                  value={formData.countryOfBirth}
                  onChange={(e) =>
                    handleInputChange("countryOfBirth", e.target.value)
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="driversLicenseNumber">
                  Driver&apos;s License Number
                </Label>
                <Input
                  id="driversLicenseNumber"
                  type="text"
                  placeholder="Enter driver's license number"
                  className="placeholder-gray"
                  value={formData.driversLicenseNumber}
                  onChange={(e) =>
                    handleInputChange("driversLicenseNumber", e.target.value)
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Vehicle */}
        <Card className="bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-gray-950/70 dark:via-slate-950/50 dark:to-gray-950/70 dark:border-gray-900/40">
          <CardHeader>
            <CardTitle>2. Vehicle</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="makeModel">Make and Model</Label>
                <Input
                  id="makeModel"
                  type="text"
                  placeholder="e.g., Toyota Camry 2020"
                  className="placeholder-gray"
                  value={formData.makeModel}
                  onChange={(e) =>
                    handleInputChange("makeModel", e.target.value)
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="registrationPlate">
                  Registration Plate Number
                </Label>
                <Input
                  id="registrationPlate"
                  type="text"
                  placeholder="Enter license plate number"
                  className="placeholder-gray"
                  value={formData.registrationPlate}
                  onChange={(e) =>
                    handleInputChange("registrationPlate", e.target.value)
                  }
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Rental Period */}
        <Card className="bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-gray-950/70 dark:via-slate-950/50 dark:to-gray-950/70 dark:border-gray-900/40">
          <CardHeader>
            <CardTitle>3. Rental Period</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date</Label>
                <div className="flex gap-2">
                  <Input
                    id="startDate"
                    type="datetime-local"
                    value={formData.startDate}
                    onChange={(e) =>
                      handleInputChange("startDate", e.target.value)
                    }
                    required
                    className="flex-1"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const now = new Date();
                      const localDateTime = new Date(
                        now.getTime() - now.getTimezoneOffset() * 60000,
                      )
                        .toISOString()
                        .slice(0, 16);
                      handleInputChange("startDate", localDateTime);
                    }}
                  >
                    Now
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="endDate">End Date</Label>
                <Input
                  id="endDate"
                  type="text"
                  placeholder="e.g., In the future, 2024-12-31, etc."
                  className="placeholder-gray"
                  value={formData.endDate}
                  onChange={(e) => handleInputChange("endDate", e.target.value)}
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Fee */}
        <Card className="bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-gray-950/70 dark:via-slate-950/50 dark:to-gray-950/70 dark:border-gray-900/40">
          <CardHeader>
            <CardTitle>4. Fee</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="feeBasis">Fee Basis</Label>
                <Input
                  id="feeBasis"
                  type="text"
                  placeholder="e.g., €50 per day, €300 per week"
                  className="placeholder-gray"
                  value={formData.feeBasis}
                  onChange={(e) =>
                    handleInputChange("feeBasis", e.target.value)
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="paymentProcedure">Payment Procedure</Label>
                <Input
                  id="paymentProcedure"
                  type="text"
                  placeholder="e.g., Bank transfer, Cash on pickup"
                  className="placeholder-gray"
                  value={formData.paymentProcedure}
                  onChange={(e) =>
                    handleInputChange("paymentProcedure", e.target.value)
                  }
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Car Handing Over */}
        <Card className="bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-gray-950/70 dark:via-slate-950/50 dark:to-gray-950/70 dark:border-gray-900/40">
          <CardHeader>
            <CardTitle>5. Car Handing Over</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="toLessee">To the Lessee</Label>
                <Input
                  id="toLessee"
                  type="text"
                  placeholder="Date nd location of handover"
                  className="placeholder-gray"
                  value={formData.toLessee}
                  onChange={(e) =>
                    handleInputChange("toLessee", e.target.value)
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="toLessor">To the Lessor</Label>
                <Input
                  id="toLessor"
                  type="text"
                  placeholder="Date and location of return"
                  value={formData.toLessor}
                  onChange={(e) =>
                    handleInputChange("toLessor", e.target.value)
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 6: Use */}
        <Card className="bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-gray-950/70 dark:via-slate-950/50 dark:to-gray-950/70 dark:border-gray-900/40">
          <CardHeader>
            <CardTitle>6. Use</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="purposeOfUse">Purpose of Use</Label>
                <Input
                  id="purposeOfUse"
                  type="text"
                  placeholder="e.g., Personal transportation, Business use"
                  value={formData.purposeOfUse}
                  onChange={(e) =>
                    handleInputChange("purposeOfUse", e.target.value)
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="users">
                  Users (Name, ID, Driver&apos;s License Number)
                </Label>
                <div className="space-y-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const renterInfo = `${formData.fullName} (${formData.personalID}) - ${formData.driversLicenseNumber};`;
                      handleInputChange("users", renterInfo);
                    }}
                    disabled={
                      !formData.fullName ||
                      !formData.personalID ||
                      !formData.driversLicenseNumber
                    }
                  >
                    Renter
                  </Button>
                  <Textarea
                    id="users"
                    placeholder="List all authorized drivers with their details"
                    value={formData.users}
                    onChange={(e) => handleInputChange("users", e.target.value)}
                    rows={3}
                    required
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 7: Odometer Image */}
        <Card className="bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-gray-950/70 dark:via-slate-950/50 dark:to-gray-950/70 dark:border-gray-900/40">
          <CardHeader>
            <CardTitle>7. Odometer Image</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="odometerImage">Upload Odometer Image</Label>
              <Input
                id="odometerImage"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="cursor-pointer"
              />
              {formData.odometerImage && (
                <p className="text-sm text-green-600">
                  Selected: {formData.odometerImage.name}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Section 8: Additional Information */}
        <Card className="bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-gray-950/70 dark:via-slate-950/50 dark:to-gray-950/70 dark:border-gray-900/40">
          <CardHeader>
            <CardTitle>8. Additional Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Notes</Label>
              <Textarea
                id="additionalInfo"
                placeholder="Any additional terms, conditions, or special notes"
                className="placeholder-gray"
                value={formData.additionalInfo}
                onChange={(e) =>
                  handleInputChange("additionalInfo", e.target.value)
                }
                rows={4}
              />
            </div>
          </CardContent>
        </Card>

        <Separator />

        <div className="flex justify-end space-x-4">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit">Submit Agreement</Button>
        </div>
      </form>
    </div>
  );
}
