import AppBreadcrumb from "@/components/AppBreadcrumb/AppBreadcrumb";
import AppLayout from "@/components/AppLayout/AppLayout";

const Avatar = () => {
  return (
    <AppLayout>
      <section className="section">
        <div className="container">
          <AppBreadcrumb baseRoute="Docs" currentRoute="Avatar" />
          <div className="grid grid-cols-1 gap-y-10">
            <div className="relative">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Avatar</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, repudiandae.</p>
            </div>
            <div className="relative"></div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default Avatar;
