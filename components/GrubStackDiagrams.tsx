// Diagrams for the GrubStack case study.

import { Flow, FlowStep } from "@/components/FlowDiagram";

const SUBDOMAINS = ["core", "api", "web", "terminal"];

export function ProvisioningFlow() {
  return (
    <Flow
      label="From sign-up to live"
      steps={[
        <FlowStep
          key="signup"
          number={1}
          title="Sign up & subscribe"
          body="The restaurant creates an account on grubstack.app and picks a subscription."
        />,
        <FlowStep
          key="payments"
          number={2}
          title="Connect payments"
          body="They link their own Stripe or Square account through OAuth, so customer payments go straight to them."
        />,
        <FlowStep
          key="deploy"
          number={3}
          title="Dedicated deployment"
          body="Their apps deploy into their own space in the Kubernetes cluster, each on its own subdomain:"
        >
          <ul className="mt-1 flex flex-col gap-1">
            {SUBDOMAINS.map((sub) => (
              <li
                key={sub}
                className="rounded-md bg-accent-tint px-2 py-1 font-mono text-xs text-ink"
              >
                {sub}-<span className="text-accent">slug</span>.grubstack.app
              </li>
            ))}
          </ul>
        </FlowStep>,
        <FlowStep
          key="menus"
          number={4}
          title="Build menus & go live"
          body="Once they add items and menus, their ordering app opens to the public and customers can start ordering."
        />,
      ]}
    />
  );
}

export function OrderFlow() {
  return (
    <Flow
      label="The life of an order"
      steps={[
        <FlowStep
          key="place"
          number={1}
          title="Customer orders"
          body="On the web ordering app, a status indicator stays on screen while the order processes."
        />,
        <FlowStep
          key="pay"
          number={2}
          title="API takes payment"
          body="The API charges the card through the restaurant's connected Stripe or Square account."
        />,
        <FlowStep
          key="kitchen"
          number={3}
          title="Kitchen picks it up"
          body="The order lands in the core dashboard or the terminal app, depending on the restaurant's setup."
        />,
        <FlowStep
          key="status"
          number={4}
          title="Status updates"
          body="The cook or operator moves the order through each stage as it's prepared."
        />,
        <FlowStep
          key="done"
          number={5}
          title="Completion email"
          body="When the order's ready, the customer receives a completion email."
        />,
      ]}
    />
  );
}

const EXAMPLE_TENANTS = ["bobs-burgers", "taco-truck"];

export function TenantArchitecture() {
  return (
    <figure className="flex flex-col gap-4 rounded-card border border-border bg-background p-4 md:p-6">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[220px_minmax(0,1fr)_200px] lg:items-stretch">
        <div className="flex flex-col gap-2 rounded-card border border-border bg-white p-5">
          <span className="text-xs font-bold tracking-wide text-muted-2 uppercase">
            Release pipeline
          </span>
          {["Jenkins builds", "Private Docker registry", "Helm deploys per tenant", "Flyway migrates the schema"].map(
            (item) => (
              <span
                key={item}
                className="rounded-md bg-background px-3 py-2 text-sm font-semibold text-ink"
              >
                {item}
              </span>
            ),
          )}
        </div>

        <div className="flex flex-col gap-3 rounded-card border-2 border-dashed border-accent-tint-strong bg-white p-5">
          <span className="text-xs font-bold tracking-wide text-accent uppercase">
            Kubernetes cluster
          </span>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {EXAMPLE_TENANTS.map((tenant) => (
              <div
                key={tenant}
                className="flex flex-col gap-2 rounded-btn border border-border bg-background p-3"
              >
                <span className="font-mono text-xs font-bold text-ink">
                  {tenant}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {SUBDOMAINS.map((sub) => (
                    <span
                      key={sub}
                      className="rounded-full bg-ink px-2.5 py-1 text-[11px] font-bold text-white"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <span className="text-sm text-muted-2">
            &hellip;one isolated set of apps for every restaurant.
          </span>
        </div>

        <div className="flex flex-col gap-2 rounded-card border border-border bg-white p-5">
          <span className="text-xs font-bold tracking-wide text-muted-2 uppercase">
            External server
          </span>
          <span className="rounded-md bg-background px-3 py-2 text-sm font-semibold text-ink">
            Uptime Kuma
          </span>
          <p className="text-sm leading-relaxed text-muted">
            Watches the cluster from outside, so an outage can&apos;t take
            down its own alerts.
          </p>
        </div>
      </div>
      <figcaption className="text-sm text-muted-2">
        Tenant names are examples.
      </figcaption>
    </figure>
  );
}
