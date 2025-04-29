import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import companylogo from "../../images/companylogo.png";
import accountdetails1 from "../../images/CheckoutPage/accountdetails-1.png";
import accountdetails2 from "../../images/CheckoutPage/accountdetails-2.png";
import payment1 from "../../images/CheckoutPage/payment-1.png";
import payment2 from "../../images/CheckoutPage/payment-2.png";
import review1 from "../../images/CheckoutPage/review-1.png";
import summary from "../../images/CheckoutPage/summary.png";
import progress1 from "../../images/CheckoutPage/progress-1.png";
import progress2 from "../../images/CheckoutPage/progress-2.png";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function DelayedLink({ step, children }) {
  if (step < 3) return <Link>{children}</Link>;

  return <Link to="/payment">{children}</Link>;
}

export default function Checkout() {
  // STEP STATE
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  // FORM DATA
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [company, setCompany] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");

  // ERROR MESSAGES
  const [errors, setErrors] = useState({});
  const { register, registeredUsers } = useAuth();

  const query = useQuery();

  const currency = query.get("currency") || "$";
  const amount = query.get("amount") || "100";
  const role = query.get("role") || "individual";

  // DYNAMIC PROGRESS (1 -> 3)
  const totalSteps = 3;
  const progressPercent = Math.round((currentStep / totalSteps) * 100);

  // VALIDATION FUNCTIONS
  const validateStepOne = () => {
    let tempErrors = {};

    if (!firstName.trim()) {
      tempErrors.firstName = "First Name is required";
    } else if (firstName.trim().length < 2) {
      tempErrors.firstName = "First Name must be at least 2 characters";
    }

    if (!lastName.trim()) {
      tempErrors.lastName = "Last Name is required";
    } else if (lastName.trim().length < 2) {
      tempErrors.lastName = "Last Name must be at least 2 characters";
    }

    if (!email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email.trim())) {
      tempErrors.email = "Email is invalid";
    } else {
      const emailAddress = email.trim();
      const emailExists = registeredUsers.some(
        (user) => user.email.toLowerCase() === emailAddress
      );
      if (emailExists) {
        tempErrors.email = "Email ID already exists!";
      }
    }

    if (!password.trim()) {
      tempErrors.password = "Password is required";
    } else if (password.trim().length < 8) {
      tempErrors.password = "Password must be at least 8 characters";
    } else if (!/[A-Z]/.test(password)) {
      tempErrors.password =
        "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(password)) {
      tempErrors.password =
        "Password must contain at least one lowercase letter";
    } else if (!/[0-9]/.test(password)) {
      tempErrors.password = "Password must contain at least one number";
    } else if (!/[!@#$%^&*]/.test(password)) {
      tempErrors.password =
        "Password must contain at least one special character";
    }

    if (!confirmPassword.trim()) {
      tempErrors.confirmPassword = "Confirm Password is required";
    } else if (confirmPassword !== password) {
      tempErrors.confirmPassword = "Passwords do not match";
    }

    if (role === "business") {
      const companyName = company.trim();
      if (!companyName) tempErrors.company = "Company Name is required";
      else if (companyName.length < 2)
        tempErrors.company = "Company Name must be at least 2 characters";
      else if (companyName.length > 50)
        tempErrors.company = "Company Name must be less than 50 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const validateStepTwo = () => {
    let tempErrors = {};

    if (!cardNumber.trim()) {
      tempErrors.cardNumber = "Card Number is required";
    } else if (cardNumber.replace(/\s+/g, "").length < 16) {
      tempErrors.cardNumber = "Card Number must be at least 16 digits";
    }

    if (!expiryDate.trim()) {
      tempErrors.expiryDate = "Expiry Date is required";
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate.trim())) {
      tempErrors.expiryDate = "Use format MM/YY";
    }

    if (!cvv.trim()) {
      tempErrors.cvv = "CVV is required";
    } else if (!/^\d{3,4}$/.test(cvv.trim())) {
      tempErrors.cvv = "CVV must be 3 or 4 digits";
    }

    if (!cardName.trim()) {
      tempErrors.cardName = "Name on Card is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleUserRegistration = () => {
    if (currentStep < 3) return;
    const user = { email, firstName, lastName, role, password };
    const isRegistered = register(user);
    if (!isRegistered) {
      setErrors((prev) => ({ ...prev, login: "Invalid email or password!" }));
    }
  };

  // STEP HANDLERS
  const handleNext = () => {
    if (currentStep === 1) {
      // Validate step 1 (account details)
      if (validateStepOne()) {
        setCurrentStep(2);
      }
    } else if (currentStep === 2) {
      // Validate step 2 (payment)
      if (validateStepTwo()) {
        setCurrentStep(3);
      }
    } else {
      // Step 3 => place order or finalize
      handleUserRegistration();
      navigate("/payment");
      // ... any final submit logic
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 p-4 flex flex-col relative">
      {errors.login && (
        <div className="fixed top-4 inset-x-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 z-50">
          <span className="font-medium">{errors.login}</span>
          <button
            onClick={() => setErrors((prev) => ({ ...prev, login: undefined }))}
            className="ml-4 text-white hover:text-gray-200 focus:outline-none"
            aria-label="Dismiss error"
          >
            ✕
          </button>
        </div>
      )}
      <header>
        <div className="flex">
          <img src={companylogo} alt="Company Logo" className="w-20 h-20" />
          <section className="flex flex-col justify-center ml-2 text-[#4F1869] tracking-wide">
            <p className="text-4xl font-bold">NexusHive</p>
            <p className="text-[0.9rem] uppercase font-bold">
              keep learning, keep buzzing
            </p>
          </section>
        </div>
      </header>
      <main className="max-w-6xl self-center w-full">
        {/* PROGRESS BAR */}
        <div className="flex items-center mb-6 max-w-xl mx-auto">
          <div className="flex-1 h-2 bg-gray-300 rounded-full relative">
            <div
              className="absolute h-2 rounded-full bg-purple-grad transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <span className="ml-4 text-sm text-gray-600">
            Step {currentStep} of {totalSteps}
          </span>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex flex-col justify-center md:flex-row gap-6">
          {/* LEFT SIDE: 3 Step Panels */}
          <div className="flex-1 space-y-6">
            {/* STEP 1: ACCOUNT DETAILS */}
            <section
              className={`bg-white p-4 rounded-md shadow transition-all duration-300 ${
                currentStep >= 1 ? "opacity-100" : "opacity-40"
              }`}
            >
              {/* Header (always visible) */}
              <h2 className="text-lg font-semibold mb-2 flex items-center">
                <span
                  className={`inline-block w-8 h-8 flex justify-center items-center text-white rounded-full mr-2 ${
                    currentStep === 1
                      ? "bg-purple-grad"
                      : currentStep > 1
                      ? "bg-purple-700"
                      : "bg-gray-400"
                  }`}
                >
                  1
                </span>
                Account Details
              </h2>
              {currentStep === 1 && (
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {/* FIRST NAME */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  {/* LAST NAME */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                  {/* EMAIL */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  {/* COMPANY (OPTIONAL) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name{" "}
                      {role !== "business" && <span>(Optional)</span>}
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                      placeholder="Company or Organization"
                    />
                    {errors.company && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.company}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <input
                      type="text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                    />
                    {errors.password && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </section>

            {/* STEP 2: PAYMENT */}
            <section
              className={`bg-white p-4 rounded-md shadow transition-all duration-300 ${
                currentStep >= 2 ? "opacity-100" : "opacity-40"
              }`}
            >
              <h2 className="text-lg font-semibold mb-2 flex items-center">
                <span
                  className={`inline-block w-8 h-8 flex justify-center items-center text-white rounded-full mr-2 ${
                    currentStep === 2
                      ? "bg-purple-grad"
                      : currentStep > 2
                      ? "bg-purple-700"
                      : "bg-gray-400"
                  }`}
                >
                  2
                </span>
                Payment
              </h2>
              {currentStep === 2 && (
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {/* CARD NUMBER */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                      placeholder="1234 5678 9012 3456"
                    />
                    {errors.cardNumber && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.cardNumber}
                      </p>
                    )}
                  </div>
                  {/* EXPIRY DATE */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry Date (MM/YY)
                    </label>
                    <input
                      type="text"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                      placeholder="MM/YY"
                    />
                    {errors.expiryDate && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.expiryDate}
                      </p>
                    )}
                  </div>
                  {/* CVV */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                      placeholder="3 or 4 digits"
                    />
                    {errors.cvv && (
                      <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>
                    )}
                  </div>
                  {/* NAME ON CARD */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name on Card
                    </label>
                    <input
                      type="text"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                      placeholder="John Doe"
                    />
                    {errors.cardName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.cardName}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </section>

            {/* STEP 3: REVIEW & SUBMIT */}
            <section
              className={`bg-white p-4 rounded-md shadow transition-all duration-300 ${
                currentStep >= 3 ? "opacity-100" : "opacity-40"
              }`}
            >
              <h2 className="text-lg font-semibold mb-2 flex items-center">
                <span
                  className={`inline-block w-8 h-8 flex justify-center items-center text-white rounded-full mr-2 ${
                    currentStep === 3 ? "bg-purple-grad" : "bg-gray-400"
                  }`}
                >
                  3
                </span>
                Review & Submit
              </h2>
              {currentStep === 3 && (
                <div className="mt-4 space-y-4 text-sm text-gray-700">
                  <div>
                    <strong>Name:</strong> {firstName} {lastName}
                  </div>
                  <div>
                    <strong>Email:</strong> {email}
                  </div>
                  {company && (
                    <div>
                      <strong>Company:</strong> {company}
                    </div>
                  )}
                  <hr className="my-2" />
                  <div>
                    <strong>Card Number:</strong> ending in{" "}
                    {cardNumber.slice(-4) || "****"}
                  </div>
                  <div>
                    <strong>Name on Card:</strong> {cardName}
                  </div>
                  <div>
                    <strong>Expiry Date:</strong> {expiryDate || "MM/YY"}
                  </div>
                </div>
              )}
            </section>

            {/* NAVIGATION BUTTONS */}
            <div className="flex justify-between">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="bg-purple-grad text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors"
                >
                  Back
                </button>
              ) : (
                <div />
              )}
              <button
                type="button"
                onClick={handleNext}
                className="bg-purple-grad text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors"
              >
                {currentStep < 3 ? "Next" : "Place Order"}
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: ORDER SUMMARY (ALWAYS SHOWN) */}
          <aside className="w-full md:w-1/3 lg:w-1/4 bg-white p-4 rounded-md shadow h-fit">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="border-b border-gray-200 pb-4 mb-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700">Subtotal</span>
                <span className="font-medium">
                  {currency} {amount}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Tax</span>
                <span className="font-medium">{currency} 8.35</span>
              </div>
            </div>
            <div className="flex justify-between text-base font-semibold mb-4">
              <span>Total</span>
              <span>
                {currency} {Number(amount.replace(/,/g, "")) + 8.35}
              </span>
            </div>
            <DelayedLink step={currentStep}>
              <button
                type="button"
                className={`w-full text-white py-2 rounded-md text-sm ${
                  currentStep < 3
                    ? "bg-gray-400"
                    : " bg-purple-grad hover:bg-purple-700 transition-colors"
                }`}
                onClick={handleUserRegistration}
              >
                Proceed to Payment
              </button>
            </DelayedLink>
          </aside>
        </div>
      </main>
      <footer className="flex gap-8 text-gray-500 text-sm border-t-2 pt-4 w-1/2 self-center fixed bottom-8">
        <p>Copyright © 2024-{new Date().getFullYear()} Marln LMS. All rights reserved.</p>
        <Link className="hover:text-purple-grad">Privacy Policy</Link>
        <Link className="hover:text-purple-grad">Terms of Use</Link>
      </footer>
    </div>
  );
}

// export default CheckoutPage;
