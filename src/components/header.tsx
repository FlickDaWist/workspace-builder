import CheckoutButton from "~/components/checkoutButton";

export default function CustomHeader() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-100 bg-white px-6 py-4 shadow-sm">
      <div>
        <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">
          Find Your Setup
        </span>
        <h1 className="text-xl font-extrabold text-slate-900">
          monis<span className="text-teal-500">.rent</span>
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <CheckoutButton />
      </div>
    </header>
  );
}
