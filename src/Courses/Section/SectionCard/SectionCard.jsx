import { Panel } from "primereact/panel";

export const SectionCard = ({ section }) => {
  return (
    <Panel style={{ margin: "10pt" }} header={section.title}>
      <div key={section.id}>
        <p>{section.description}</p>
      </div>
    </Panel>
  );
};
