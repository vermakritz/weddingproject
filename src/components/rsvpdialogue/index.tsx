import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Check } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { toast } from "sonner";

interface RSVPDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RSVPDialog({ isOpen, onClose }: RSVPDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "1",
    attending: "yes",
    dietary: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("RSVP submitted successfully! We can't wait to celebrate with you!");
    
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        guests: "1",
        attending: "yes",
        dietary: "",
      });
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Dialog */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto pointer-events-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <X size={20} />
              </button>

              {!submitted ? (
                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Heart className="text-pink-600 mx-auto mb-4" size={48} fill="currentColor" />
                    </motion.div>
                    <h2 className="text-3xl mb-2 text-gray-900">RSVP</h2>
                    <p className="text-gray-600">We'd love to have you join us!</p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="mt-2 bg-pink-50 border-pink-200 focus:border-pink-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="mt-2 bg-pink-50 border-pink-200 focus:border-pink-500"
                      />
                    </div>

                    <div>
                      <Label>Will you be attending?</Label>
                      <RadioGroup
                        value={formData.attending}
                        onValueChange={(value) => setFormData({ ...formData, attending: value })}
                        className="mt-2 space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="yes" />
                          <Label htmlFor="yes" className="cursor-pointer">
                            Yes, I'll be there! 🎉
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="no" />
                          <Label htmlFor="no" className="cursor-pointer">
                            Sorry, can't make it 😢
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {formData.attending === "yes" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <div className="space-y-6">
                          <div>
                            <Label htmlFor="guests">Number of Guests</Label>
                            <Input
                              id="guests"
                              type="number"
                              min="1"
                              max="5"
                              value={formData.guests}
                              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                              className="mt-2 bg-pink-50 border-pink-200 focus:border-pink-500"
                            />
                          </div>

                          <div>
                            <Label htmlFor="dietary">Dietary Restrictions</Label>
                            <Input
                              id="dietary"
                              value={formData.dietary}
                              onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                              placeholder="Any allergies or preferences?"
                              className="mt-2 bg-pink-50 border-pink-200 focus:border-pink-500"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white h-12 shadow-lg"
                    >
                      Submit RSVP
                    </Button>
                  </form>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                  >
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check size={40} className="text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your RSVP has been submitted successfully.</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
