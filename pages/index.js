import React from 'react';
import { EmptyState, Layout, Page } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

class Index extends React.Component {
  render() {
    return (
      <Page>
        <TitleBar
          primaryAction={{
            content: "Select products"
          }}
        />

        <Layout>
          <EmptyState
            heading="Discount your products temporarily"
            action={{
              content: "Select products"
            }}
            image={img}
          >
            <p>Select products to change their price temporarily.</p>
          </EmptyState>
        </Layout>
      </Page>
    );
  }
}

export default Index;
