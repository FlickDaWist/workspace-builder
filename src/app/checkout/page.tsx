"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import { ChevronLeft, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { useCartStore } from "~/store/useCartStore";

export default function CheckoutPage() {
  const { selections, removeItem, updateQuantity } = useCartStore();

  const items = useMemo(() => {
    return Object.entries(selections).flatMap(([category, detailsArray]) =>
      detailsArray.map((item) => ({
        ...item,
        category,
        quantity: item.quantity || 1,
      })),
    );
  }, [selections]);

  const subtotal = useMemo(
    () =>
      items.reduce((acc, item) => acc + item.weeklyPrice * item.quantity, 0),
    [items],
  );

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="text-muted-foreground hover:text-primary mb-6 flex items-center text-sm transition-colors"
        >
          <ChevronLeft className="mr-1 h-4 w-4" /> Back to Studio
        </Link>

        <h1 className="mb-8 text-3xl font-bold tracking-tight text-slate-900">
          Review Your Rental
        </h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {items.length > 0 ? (
              items.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden border-none shadow-sm ring-1 ring-slate-200"
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-20 w-20 rounded-xl border bg-white object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="text-primary text-[10px] font-black tracking-widest uppercase">
                        {item.category}
                      </p>
                      <h3 className="truncate font-bold text-slate-800">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        IDR {item.weeklyPrice.toLocaleString()} / week
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                      <div className="flex items-center overflow-hidden rounded-xl border bg-slate-50">
                        {/* UPDATE QUANTITY IN STORE */}
                        <button
                          onClick={() =>
                            updateQuantity(item.category, item.id, -1)
                          }
                          className="p-2 transition-colors hover:bg-white"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.category, item.id, 1)
                          }
                          className="p-2 transition-colors hover:bg-white"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.category, item.id)}
                        className="hover:text-destructive flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase transition-colors"
                      >
                        <Trash2 className="h-3.5 w-3.5" /> Remove
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <EmptyCart />
            )}
          </div>

          <div className="space-y-6">
            <SummaryCard subtotal={subtotal} hasItems={items.length > 0} />
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyCart() {
  return (
    <Card className="flex flex-col items-center justify-center border-2 border-dashed bg-transparent py-16">
      <p className="text-muted-foreground mb-6 text-lg font-medium">
        Your workspace is currently empty.
      </p>
      <Link href="/">
        <Button className="rounded-full px-8">Browse the Studio</Button>
      </Link>
    </Card>
  );
}

function SummaryCard({
  subtotal,
  hasItems,
}: {
  subtotal: number;
  hasItems: boolean;
}) {
  return (
    <Card className="border-none shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground font-medium">
            Weekly Subtotal
          </span>
          <span className="font-bold">IDR {subtotal.toLocaleString()}</span>
        </div>
        <Separator className="bg-slate-100" />
        <div className="flex justify-between text-xl font-black">
          <span>Total / week</span>
          <span className="text-primary">IDR {subtotal.toLocaleString()}</span>
        </div>
        <Button
          className="mt-4 h-14 w-full rounded-2xl text-lg font-bold shadow-lg"
          disabled={!hasItems}
        >
          Proceed to Payment <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </CardContent>
    </Card>
  );
}
