"use client";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { useCartStore } from "~/store/useCartStore";

export default function CheckoutButton() {
  const router = useRouter();
  const selections = useCartStore((state) => state.selections);

  const allItems = Object.values(selections).flat().filter(Boolean);
  const total = allItems.reduce(
    (acc, item) => acc + (item.weeklyPrice || 0),
    0,
  );

  return (
    <Button
      disabled={allItems.length === 0}
      onClick={() => router.push("/checkout")}
      className="h-14 w-full bg-slate-900"
    >
      <ShoppingCart className="mr-2 h-5 w-5" />
      IDR {total.toLocaleString()}/week
    </Button>
  );
}
