import { ValuePropositionSection } from "./ValuePropositionSection";

export default function TipsterSection() {
  return (
    <ValuePropositionSection
      title="Bet with Confidence, Powered by Blockchain"
      text="
              Our platform connects you with verified Tipsters, ensuring that
              all data is transparent and trustworthy. Leverage the power of
              blockchain technology to make informed betting decisions."
      image="/placeholder.svg"
    >
      <div className="flex flex-col justify-center space-y-4">
        <ul className="grid gap-6">
          <li>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Verified Tips</h3>
              <p className="text-muted-foreground">
                Access tips from verified Tipsters, ensuring the information you
                receive is accurate and trustworthy.
              </p>
            </div>
          </li>
          <li>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Transparent Data</h3>
              <p className="text-muted-foreground">
                Leverage blockchain technology to view the complete history of
                tips and their performance, providing you with the confidence to
                make informed decisions.
              </p>
            </div>
          </li>
          <li>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Earn Rewards</h3>
              <p className="text-muted-foreground">
                Earn rewards when you follow successful tips and place winning
                bets.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </ValuePropositionSection>
  );
}
