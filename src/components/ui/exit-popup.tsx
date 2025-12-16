"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if already shown this session
    if (typeof window !== "undefined") {
      const alreadyShown = sessionStorage.getItem("exitPopupShown");
      if (alreadyShown) {
        setHasShown(true);
        return;
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves through top of viewport
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
        sessionStorage.setItem("exitPopupShown", "true");
      }
    };

    // Add delay before enabling exit intent (don't annoy immediate bounces)
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000); // 5 second delay

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'exit-popup' }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setShowPopup(false), 2000);
      } else {
        alert('Something went wrong. Please try again!');
      }
    } catch (error) {
      console.error('Subscribe error:', error);
      alert('Something went wrong. Please try again!');
    }
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[100]"
            onClick={() => setShowPopup(false)}
          />
          
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[90%] max-w-md"
          >
            <div 
              className="bg-white p-6 md:p-8 border-4 border-black shadow-brutal relative"
              style={{ fontFamily: "var(--font-caveat), cursive" }}
            >
              {/* Close button */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-2xl hover:bg-gray-100 rounded-full transition-colors"
              >
                ×
              </button>

              {!submitted ? (
                <>
                  <h2 
                    className="text-2xl md:text-3xl font-black uppercase text-center mb-2"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    WAIT! 🤖
                  </h2>
                  
                  <p className="text-xl md:text-2xl text-center mb-4">
                    Before you go...
                  </p>

                  <div className="bg-yellow-200 p-4 border-2 border-black -rotate-1 mb-4">
                    <p className="text-lg md:text-xl text-center">
                      Get our <strong>FREE Automation Checklist</strong><br/>
                      <span className="text-base">50+ tasks you can automate today!</span>
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full p-3 border-2 border-black text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      style={{ fontFamily: "var(--font-space), sans-serif" }}
                    />
                    <button
                      type="submit"
                      className="w-full bg-black text-white p-3 text-xl font-black uppercase border-2 border-black shadow-brutal-sm hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                      style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                    >
                      SEND IT! 📧
                    </button>
                  </form>

                  <p className="text-sm text-center mt-3 opacity-60">
                    No spam. Unsubscribe anytime. We're nice people.
                  </p>
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="text-5xl mb-4">🎉</div>
                  <h2 
                    className="text-2xl font-black uppercase"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    YOU'RE IN!
                  </h2>
                  <p className="text-xl">Check your inbox soon!</p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

