import AppBreadcrumb from "@/components/AppBreadcrumb/AppBreadcrumb";
import AppLayout from "@/components/AppLayout/AppLayout";

const NextInstallation = () => {
  return (
    <AppLayout>
      <section className="section">
        <div className="container">
          <AppBreadcrumb
            baseRoute="Docs"
            midRoute="Installation"
            currentRoute="Next.js"
          />
          <div className="grid grid-cols-1 gap-y-10"></div>
        </div>
      </section>
    </AppLayout>
  );
};

export default NextInstallation;
