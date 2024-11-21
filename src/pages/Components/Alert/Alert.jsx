import AppBreadcrumb from "@/components/AppBreadcrumb/AppBreadcrumb";
import AppLayout from "@/components/AppLayout/AppLayout";
import PrimaryAlert from "./components/PrimaryAlert";

const Alert = () => {
  return (
    <AppLayout>
      <section className="section">
        <div className="container">
          <AppBreadcrumb baseRoute="Docs" currentRoute="Alert" />
          <div className="grid grid-cols-1 gap-y-10">
            <div className="relative">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Alert</h1>
              <p>Display alerts in your design for user attention.</p>
            </div>
            <div className="relative">
              <PrimaryAlert />
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default Alert;
