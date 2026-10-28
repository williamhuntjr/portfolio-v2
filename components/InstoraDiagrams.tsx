// Diagrams for the Instora case study.

import { Flow, FlowStep } from "@/components/FlowDiagram";

export function GenerationFlow() {
  return (
    <Flow
      label="How a marketing kit is generated"
      steps={[
        <FlowStep
          key="submit"
          number={1}
          title="Agent submits"
          body="The listing is saved straight away with the status “generating”, and the request returns its ID."
        />,
        <FlowStep
          key="write"
          number={2}
          title="Claude writes the kit"
          body="After the response is sent, the server asks Claude for the whole kit as one JSON object."
        />,
        <FlowStep
          key="check"
          number={3}
          title="Check and fix"
          body="Copy that won't parse gets one retry. Copy that fails the fair housing screen gets one rewrite."
        />,
        <FlowStep
          key="poll"
          number={4}
          title="Agent watches progress"
          body="Meanwhile, the page checks the listing's status every two seconds and shows each stage of the kit."
        />,
        <FlowStep
          key="ready"
          number={5}
          title="Kit ready"
          body="The page refreshes with the finished kit, and an email lets the agent know in case they've left."
        />,
      ]}
    />
  );
}
