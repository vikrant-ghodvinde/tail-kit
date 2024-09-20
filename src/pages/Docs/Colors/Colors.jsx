import AppBreadcrumb from "@/components/AppBreadcrumb/AppBreadcrumb";
import AppLayout from "@/components/AppLayout/AppLayout";
import ColorCard from "./components/ColorCard";
import tailwindColors from "@/lib/json/tailwindColors.json";

const Colors = () => {
  return (
    <AppLayout>
      <section className="section">
        <div className="container">
          <AppBreadcrumb baseRoute="Docs" currentRoute="Colors" />

          <div className="grid grid-cols-1 gap-y-10">
            <div className="relative">
              <h1 className="text-3xl font-bold tracking-tight mb-2">
                Tailwind Colors
              </h1>
              <p>
                Tailwind CSS color palette available in HSL, RGB, and HEX
                formats—giving you the flexibility to use colors in the format
                that best suits your design and development needs.
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-1 gap-y-5">
                {tailwindColors?.map((color) => (
                  <div className="relative" key={color?.title}>
                    <div className="relative w-full p-2 border border-black/10 dark:border-white/20 rounded-lg">
                      <div className="relative text-sm font-medium capitalize mb-2">
                        {color?.title}
                      </div>
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                        {color?.colors.map((item, index) => (
                          <ColorCard
                            key={index}
                            background={item?.hex}
                            name={item?.name}
                            color={item?.className}
                            icon={index < 5 ? "#000" : "#fff"}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default Colors;
