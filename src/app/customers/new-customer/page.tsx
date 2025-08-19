"use client";
import {
  CustomerFormData,
  customerFormSchema,
} from "@/validators/customerFormValidator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { ResidencyStep } from "@/app/customers/new-customer/ResidencyStep";
import { DetailsStep } from "@/app/customers/new-customer/DetailsStep";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { toast } from "react-toastify";

const CustomerFormPage = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const sendNotification = (type: string, message: string) => {
    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    }
  };

  const form = useForm<CustomerFormData>({
    resolver: zodResolver(customerFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      personalID: "",
      phone: "",
      email: "",
      address: "",
      driversLicense: "",
    },
    mode: "onChange",
  });

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const isStep1Valid = form.watch("isEstonianResident") !== undefined;
  const canProceedToStep2 = isStep1Valid;

  const handleNext = () => {
    if (current === 0 && canProceedToStep2) {
      api?.scrollNext();
    }
  };

  const handlePrev = () => {
    if (current > 0) {
      api?.scrollPrev();
    }
  };

  const onSubmit = async (data: CustomerFormData) => {
    try {
      console.log("Form submitted:", JSON.stringify(data, null, 2));
      sendNotification("success", "Form submitted successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      sendNotification("error", "Failed to submit form. Please try again.");
    }
  };

  return (
    <div className="container mx-auto min-h-screen flex flex-col items-center">
      <div className="space-y-6 mt-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 drop-shadow-[0_0_20px_rgba(0,0,0,0.6)] dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] text-center sm:text-left filter brightness-125 animate-pulse">
          Customer Registration
        </h1>
        <div className="flex items-center justify-center space-x-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Step {current + 1} of {count}
          </span>
          <div className="flex space-x-1">
            {Array.from({ length: count }).map((_, index) => (
              <div
                key={index}
                className={`h-2 w-8 rounded-full ${index <= current ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-700"}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 w-full max-w-2xl">
        <Card>
          <CardContent className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <Carousel
                  setApi={setApi}
                  className="w-full"
                  opts={{ align: "start", loop: false }}
                >
                  <CarouselContent>
                    <CarouselItem>
                      <ResidencyStep form={form} />
                    </CarouselItem>
                    <CarouselItem>
                      <DetailsStep form={form} />
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>

                <div className="flex justify-between mt-8">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrev}
                    disabled={current === 0}
                    // className="flex items-center"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </Button>

                  {current === count - 1 ? (
                    <Button
                      type="submit"
                      disabled={!form.formState.isValid}
                      // className="flex items-center"
                    >
                      Submit Form
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={handleNext}
                      disabled={!canProceedToStep2}
                      className="flex items-center"
                    >
                      Next
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CustomerFormPage;
