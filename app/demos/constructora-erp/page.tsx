import dynamic from "next/dynamic";

const ConstructoraErpDemo = dynamic(() => import("@/components/Demos/ConstructoraERP/ConstructoraErpDemo"));

export default function ConstructoraErpDemoPage() {
  return <ConstructoraErpDemo />;
}
