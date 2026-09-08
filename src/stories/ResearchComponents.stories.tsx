import type { Meta, StoryObj } from "@storybook/react-vite"
import { DossierHeader } from "../components/dossier-header"
import { EvidenceMatrix } from "../components/evidence-matrix"
import { ObservatorySectionNav } from "../components/observatory-section-nav"
import { ProvenanceRail } from "../components/provenance-rail"

function ResearchComponentsPreview() {
  return (
    <div className="min-h-screen bg-background p-6 text-foreground">
      <ObservatorySectionNav items={[{id:"dossier",label:"Dossier"},{id:"matrix",label:"Evidence"},{id:"rail",label:"Provenance"}]} className="top-0" offset={48} />
      <div id="dossier" className="pt-6">
        <DossierHeader
          eyebrow="MFTL / STORY"
          title="Inana’s Descent to the Netherworld"
          summary="A reusable dossier header keeps title, provenance metadata and status live in HTML while the editorial asset remains decorative."
          recordId="MYTH-MES-INANA-DESCENT-000001"
          status={{label:"supported",variant:"supported"}}
          metadata={[{label:"Region",value:"Mesopotamia / Sumer"},{label:"Attestation",value:"Old Babylonian witnesses"}]}
        />
      </div>
      <div id="matrix" className="pt-12">
        <EvidenceMatrix rows={[
          {id:"c1",label:"Textual attestation exists",context:"Inana dossier",epistemic:"supported_as_textual_attestation",sourceCount:3,values:{support:3,context:1}},
          {id:"c2",label:"Narrative implies literal underworld travel",context:"Interpretive claim",epistemic:"unresolved",sourceCount:2,values:{support:1,counter:1,alternative:2}},
        ]}/>
      </div>
      <div id="rail" className="pt-12">
        <ProvenanceRail nodes={[
          {id:"story",kind:"story",label:"Inana’s Descent",active:true},
          {id:"claim",kind:"claim",label:"Textual attestation"},
          {id:"evidence",kind:"evidence",label:"Tablet witness"},
          {id:"source",kind:"source",label:"Primary edition",external:true},
        ]}/>
      </div>
    </div>
  )
}

const meta={title:"02 Components/Research Observatory",component:ResearchComponentsPreview,parameters:{layout:"fullscreen"}} satisfies Meta<typeof ResearchComponentsPreview>
export default meta
type Story=StoryObj<typeof meta>
export const Default:Story={}
