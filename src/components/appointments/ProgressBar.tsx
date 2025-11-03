import { ChevronRightIcon } from "lucide-react";
import React from "react";

const PROGRESS_STEP = ["Select Dentist", "Choose Time", "Confirm"];

function ProgressBar({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      {PROGRESS_STEP.map((stepName, index) => {
        const stepNumber = index + 1;
        const isActive = currentStep >= stepNumber;

        return (
          <div key={stepNumber} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {stepNumber}
            </div>
            <span className={``}>{stepName}</span>
            {stepNumber < PROGRESS_STEP.length && (
              <ChevronRightIcon className="w-4 h-4 text-muted-foreground" />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ProgressBar;
