import React from 'react';
import ReactDOM from 'react-dom/client';
import { DigestApp } from '@/components';

class DigestTypeA extends HTMLElement {
  private root: ReactDOM.Root | null = null;

  static get observedAttributes() {
    return ['digest'];
  }

  connectedCallback() {
    console.log('connectedCallback');
    if (!this.root) {
      this.root = ReactDOM.createRoot(this);
    }
    this.updateDigest();
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    console.log('attributeChangedCallback');
    this.updateDigest();
  }

  updateDigest() {
    console.log('updateDigest');

    const digestAttribute = this.getAttribute('digest');
    console.log('digestAttribute', digestAttribute);

    if (!digestAttribute) {
      return;
    }

    this.parseAndRenderDigest(digestAttribute);

    //if (process.env.NODE_ENV === 'development') {
    //  this.loadDigest(digestAttribute);
    //} else {
    //  this.parseAndRenderDigest(digestAttribute);
    //}
  }

  loadDigest(fileName: string) {
    fetch(`digests/${fileName}`)
      .then((response) => response.json())
      .then((data) => {
        this.renderDigest(data);
      })
      .catch((error) => console.error('Error loading JSON:', error));
  }

  parseAndRenderDigest(digestAttribute: string | null) {
    console.log('parseAndRenderDigest');
    let parsedDigest;

    try {
      parsedDigest = typeof digestAttribute === 'string' ? JSON.parse(digestAttribute) : digestAttribute;

      if (typeof parsedDigest !== 'object') {
        throw new Error('Parsed digest is not an object');
      }

      console.info('Successfully parsed digest:', parsedDigest);
      this.renderDigest(parsedDigest);
    } catch (error) {
      console.error('Error parsing digest attribute:', error);
      this.renderDigest({ error: 'Failed to parse digest data' });
    }
  }

  renderDigest(data: any) {
    console.log('renderDigest');

    if (!this.root) {
      this.root = ReactDOM.createRoot(this);
    }
    this.root.render(<DigestApp digest={data} />);
  }

  disconnectedCallback() {
    console.log('disconnectedCallback');
    if (this.root) {
      this.root.unmount();
    }
  }
}

customElements.define('digest-type-a', DigestTypeA);
