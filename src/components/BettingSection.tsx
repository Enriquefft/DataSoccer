import { ValuePropositionSection } from "./ValuePropositionSection";

export default function BettingSection() {
  return (
    <ValuePropositionSection
      title="Become a Tipster, Reach a Wider Audience"
      text="Our platform empowers betting experts to share their valuable tips
              with a large audience. Leverage blockchain technology to ensure
              your tips are verifiable and trustworthy.
              blockchain technology to make informed betting decisions."
      image="/placeholder.svg"
    >
      <div className="flex flex-col justify-center space-y-4">
        <ul className="grid gap-6">
          <li>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Verified Tips</h3>
              <p className="text-muted-foreground">
                Leverage blockchain technology to ensure your tips are
                verifiable and trustworthy.
              </p>
            </div>
          </li>
          <li>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Reach a Wider Audience</h3>
              <p className="text-muted-foreground">
                Share your expertise with a large and engaged audience of
                bettors.
              </p>
            </div>
          </li>
          <li>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Earn Commissions</h3>
              <p className="text-muted-foreground">
                Earn commissions when bettors follow your tips and place
                successful bets.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </ValuePropositionSection>
  );
}
