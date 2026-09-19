import { PlaneIcon, ShipIcon, TrainIcon, TruckIcon } from "../Icons";
import { stats } from "@/lib/site";

const icons = [ShipIcon, TruckIcon, PlaneIcon, TrainIcon];

export default function Stats() {
  return (
    <section className="bg-teal-deep py-14">
      <div className="container-x grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => {
          const Icon = icons[i];
          return (
            <div
              key={stat.label}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand/15 text-brand">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-3xl font-extrabold leading-none text-white">{stat.value}</p>
                <p className="mt-1.5 text-xs leading-snug text-teal-soft/70">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
