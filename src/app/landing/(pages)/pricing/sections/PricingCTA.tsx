import Button from "@/components/ui/Button";

export default function PricingCTA() {
  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-[linear-gradient(to_right,#eff6ff,#ecfeff,#eff6ff)] rounded-3xl p-8 sm:p-12 border-2 border-blue-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              ¿No estás seguro qué plan elegir?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              Agenda una demo personalizada y te ayudamos a encontrar el plan ideal para tu proyecto.
            </p>
            <Button
              href="https://app.parcydigital.com"
              variant="primary"
              size="lg"
              className="bg-[linear-gradient(to_right,#06b6d4,#3b82f6)] hover:bg-[linear-gradient(to_right,#0891b2,#2563eb)]"
            >
              Agendar demo gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
