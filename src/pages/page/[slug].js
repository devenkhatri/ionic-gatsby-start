import * as React from "react"
import ExploreContainer from "../../components/ExploreContainer";
import Layout from "../../components/layout";

export default function CommonPage({params}) {  
  
  return (
    <Layout>
      <ExploreContainer name={params.slug} />
    </Layout>
  );
  
}