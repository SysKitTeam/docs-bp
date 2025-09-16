import React, {type ReactNode} from 'react';
import Heading from '@theme/Heading';
import type {Props} from '@theme/MDXComponents/Heading';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import BrowserOnly from '@docusaurus/BrowserOnly';

// Define PageDescription component inline to avoid import issues
function PageDescription({ description }: { description: string }) {
  if (!description || description.trim() === '' || description === "Description will go into a meta tag in <head />") {
    return null;
  }
  
  return (
    <div 
      className="article-description" 
      style={{
        marginTop: '1rem',
        color: '#666',
        fontSize: '1.1rem',
        lineHeight: '1.5'
      }}
    >
      {description}
    </div>
  );
}

// Component that uses the hook safely
function DescriptionAfterH1() {
  try {
    const { metadata } = useDoc();
    if (metadata?.description) {
      return <PageDescription description={metadata.description} />;
    }
  } catch (error) {
    // Hook not available in this context
  }
  return null;
}

export default function MDXHeading(props: Props): ReactNode {
  const isH1 = props.as === 'h1';

  return (
    <>
      <Heading {...props} />
      {isH1 && (
        <BrowserOnly>
          {() => <DescriptionAfterH1 />}
        </BrowserOnly>
      )}
    </>
  );
}
