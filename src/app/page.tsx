"use client";
import { MousePointer2, X } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "~/components/ui/card";
import { ITEM_OPTIONS, SCENE_CONFIG, type Category } from "~/data/mockData";
import { useCartStore } from "~/store/useCartStore";

export default function StudioInteractive() {
  const [activeCategory, setActiveCategory] = useState<Category>(null);

  // const [selections, setSelections] = useState<Record<string, any[]>>({});
  const { selections, setSelections, removeItem } = useCartStore();

  const viewBox = "0 0 1365 653";

  const toggleSelection = (category: string, option: any) => {
    const currentItems = selections[category] || [];
    const isSelected = currentItems.some((item) => item.id === option.id);

    const updatedCategoryItems = isSelected
      ? currentItems.filter((item) => item.id !== option.id)
      : [...currentItems, option];

    setSelections({
      ...selections,
      [category]: updatedCategoryItems,
    });
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-4 p-4">
      {/* 1. IMAGE MAP CARD */}
      <div className="group relative w-full overflow-hidden rounded-2xl border bg-slate-100 shadow-2xl">
        <img
          src="img/studio-bg.png"
          className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.01]"
          alt="Studio"
        />

        <svg
          viewBox={viewBox}
          className="pointer-events-none absolute top-0 left-0 h-full w-full"
        >
          {SCENE_CONFIG.map((config) => {
            const categoryItems = selections[config.id] || [];
            return (
              <g
                key={config.id}
                className="pointer-events-auto cursor-pointer"
                onClick={() => setActiveCategory(config.id as Category)}
              >
                <polygon
                  points={config.points}
                  className={`transition-all duration-300 ${
                    activeCategory === config.id
                      ? "fill-primary/30 stroke-primary stroke-[3px]"
                      : "fill-transparent stroke-1 hover:fill-white/50 hover:stroke-white/40"
                  }`}
                />

                {/* Render multiple bubbles if multiple items are selected */}
                {categoryItems.map((item, index) => (
                  <PreviewBubble
                    key={item.id}
                    // Offset bubbles slightly if there are multiples
                    x={config.bubblePos.x + index * 15}
                    y={config.bubblePos.y - index * 10}
                    item={item}
                    onClear={(e: any) => {
                      e.stopPropagation();
                      removeItem(config.id, item.id);
                    }}
                  />
                ))}
              </g>
            );
          })}
        </svg>
      </div>

      {/* 2. SELECTION UI */}
      <Card
        className={`transition-all duration-500 ${activeCategory ? "border-primary/40 translate-y-0" : "translate-y-2 opacity-60"}`}
      >
        <CardContent className="p-6">
          {!activeCategory ? (
            <div className="text-muted-foreground flex h-24 items-center justify-center gap-3 rounded-xl border-2 border-dashed">
              <MousePointer2 className="h-5 w-5 animate-pulse" />
              <p className="font-medium">Click any object to customize</p>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-3">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">
                    Rent {activeCategory}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Select one or more
                  </p>
                </div>
                <button
                  onClick={() => setActiveCategory(null)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="scrollbar-hide flex gap-4 overflow-x-auto pb-4">
                {ITEM_OPTIONS[activeCategory]?.map((option) => {
                  const isSelected = (selections[activeCategory] || []).some(
                    (i) => i.id === option.id,
                  );
                  return (
                    <button
                      key={option.id}
                      onClick={() => toggleSelection(activeCategory, option)}
                      className={`w-48 flex-shrink-0 rounded-2xl border-2 p-6 transition-all ${
                        isSelected
                          ? "border-primary bg-primary/5 ring-primary/20 ring-2"
                          : "border-slate-100 bg-slate-50 hover:border-slate-200"
                      }`}
                    >
                      <img
                        src={option.img}
                        alt={option.name}
                        className="mx-auto mb-2 size-32 rounded-full object-cover"
                      />
                      <p className="font-bold">{option.name}</p>
                      <div
                        className={`mt-3 text-[10px] font-black uppercase ${isSelected ? "text-primary" : "text-slate-400"}`}
                      >
                        IDR {option.weeklyPrice.toLocaleString()} / week
                      </div>
                      {isSelected && (
                        <div className="text-primary bg-primary/10 mt-2 rounded-full py-1 text-[10px] font-bold uppercase">
                          Selected
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* <div className="flex flex-col items-center gap-4">
        <CheckoutButton />
      </div> */}
    </div>
  );
}

function PreviewBubble({ x, y, item, onClear }: any) {
  return (
    <foreignObject
      x={x}
      y={y}
      width="140"
      height="80"
      className="overflow-visible"
    >
      <div className="border-primary/20 animate-in zoom-in flex items-center gap-2 rounded-2xl border bg-white/90 px-3 py-2 shadow-2xl backdrop-blur-md duration-300">
        <img
          src={item.img}
          alt={item.name}
          className="size-12 rounded-full"
        ></img>
        <div className="mx-1 h-5 w-px bg-slate-200" />
        <button
          onClick={onClear}
          className="rounded-full bg-slate-950 p-1.5 text-white transition-all hover:bg-red-600 active:scale-90"
        >
          <X size={12} strokeWidth={4} />
        </button>
        {/* Little Tail */}
        <div className="border-primary/20 absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-r border-b bg-white/90" />
      </div>
    </foreignObject>
  );
}
