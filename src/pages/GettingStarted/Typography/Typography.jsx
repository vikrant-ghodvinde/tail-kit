import AppBreadcrumb from "@/components/AppBreadcrumb/AppBreadcrumb";
import AppLayout from "@/components/AppLayout/AppLayout";
import H1Typography from "./components/H1Typography";
import H2Typography from "./components/H2Typography";
import H3Typography from "./components/H3Typography";
import H4Typography from "./components/H4Typography";
import H5Typography from "./components/H5Typography";
import H6Typography from "./components/H6Typography";
import PTypography from "./components/PTypography";
import SmallTypography from "./components/SmallTypography";
import LargeTypography from "./components/LargeTypography";
import BlockquoteTypography from "./components/BlockquoteTypography";

const Typography = () => {
  return (
    <AppLayout>
      <section className="section">
        <div className="container">
          <AppBreadcrumb baseRoute="Docs" currentRoute="Typography" />
          <div className="grid grid-cols-1 gap-y-10">
            <div className="relative">
              <h1 className="text-3xl font-bold tracking-tight mb-2">
                Typography
              </h1>
              <p>
                Styles for headings, paragraphs, lists and other text elements.
              </p>
            </div>
            <div className="relative">
              <H1Typography />
            </div>
            <div className="relative">
              <H2Typography />
            </div>
            <div className="relative">
              <H3Typography />
            </div>
            <div className="relative">
              <H4Typography />
            </div>
            <div className="relative">
              <H5Typography />
            </div>
            <div className="relative">
              <H6Typography />
            </div>
            <div className="relative">
              <PTypography />
            </div>
            <div className="relative">
              <LargeTypography />
            </div>
            <div className="relative">
              <SmallTypography />
            </div>
            <div className="relative">
              <BlockquoteTypography />
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default Typography;
