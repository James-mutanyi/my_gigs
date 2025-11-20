import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Smartphone, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface MpesaPaymentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const MpesaPaymentModal = ({ open, onOpenChange }: MpesaPaymentModalProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = async () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid M-Pesa phone number",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    // Simulate API call to Django backend
    // Replace with actual API call: POST /api/mpesa/initiate-payment/
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      toast({
        title: "Payment Initiated",
        description: "Please check your phone to complete the M-Pesa payment",
      });

      // Auto close after success
      setTimeout(() => {
        setIsSuccess(false);
        setPhoneNumber("");
        onOpenChange(false);
      }, 3000);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <Smartphone className="h-5 w-5 text-white" />
            </div>
            Become a Freelancer
          </DialogTitle>
          <DialogDescription>
            Pay KSh 250 annual registration fee via M-Pesa
          </DialogDescription>
        </DialogHeader>

        {!isSuccess ? (
          <div className="space-y-6 py-4">
            {/* Payment Details */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Registration Fee</span>
                <span className="font-semibold text-gray-900 dark:text-white">KSh 250</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Processing Fee</span>
                <span className="font-semibold text-gray-900 dark:text-white">Free</span>
              </div>
              <div className="border-t border-gray-300 dark:border-gray-700 pt-2 mt-2 flex justify-between">
                <span className="font-semibold text-gray-900 dark:text-white">Total Amount</span>
                <span className="text-lg font-bold text-blue-600">KSh 250</span>
              </div>
            </div>

            {/* Phone Number Input */}
            <div className="space-y-2">
              <Label htmlFor="phone">M-Pesa Phone Number</Label>
              <div className="flex gap-2">
                <div className="flex items-center px-3 bg-muted rounded-md">
                  <span className="text-sm font-medium">+254</span>
                </div>
                <Input
                  id="phone"
                  placeholder="712345678"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                  maxLength={9}
                  className="flex-1"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Enter your Safaricom M-Pesa number
              </p>
            </div>

            {/* Payment Instructions */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                <Smartphone className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                How it works
              </h4>
              <ol className="text-xs space-y-1 text-gray-600 dark:text-gray-400 list-decimal list-inside">
                <li>Enter your M-Pesa phone number</li>
                <li>Click "Pay with M-Pesa" button</li>
                <li>You'll receive an STK push on your phone</li>
                <li>Enter your M-Pesa PIN to complete payment</li>
              </ol>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="flex-1"
                disabled={isProcessing}
              >
                Cancel
              </Button>
              <Button
                variant="hero"
                onClick={handlePayment}
                className="flex-1"
                disabled={isProcessing || !phoneNumber}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Pay with M-Pesa"
                )}
              </Button>
            </div>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mx-auto">
              <CheckCircle className="h-10 w-10 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Payment Initiated!</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Check your phone and enter your M-Pesa PIN to complete the payment
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
