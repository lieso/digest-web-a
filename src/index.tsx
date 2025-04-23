import React from 'react';
import ReactDOM from 'react-dom/client';
import { Digest } from '@/components';

class DigestTypeA extends HTMLElement {
  private root: ReactDOM.Root | null = null;

  connectedCallback() {
    const digest = this.getAttribute('digest') || '{}';
    const parsedDigest = JSON.parse(digest);

    if (!this.root) {
      this.root = ReactDOM.createRoot(this);
    }

    this.root.render(<Digest digest={parsedDigest} />);
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
    }
  }
}

customElements.define('digest-type-a', DigestTypeA);
