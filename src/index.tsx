import React from 'react';
import ReactDOM from 'react-dom/client';
import { Digest } from '@/components';

class DigestTypeA extends HTMLElement {
  private root: ReactDOM.Root | null = null;

  connectedCallback() {
    if (process.env.NODE_ENV === 'development') {
      this.loadDigest(this.getAttribute('digest') || 'digest-1.json');

      document.getElementById('jsonSelector')?.addEventListener('change', (event) => {
        const target = event.target as HTMLSelectElement;
        this.loadDigest(target.value);
      });
    } else {
      const digest = this.getAttribute('digest') || '{}';
      const parsedDigest = JSON.parse(digest);
      this.renderDigest(parsedDigest);
    }
  }

  loadDigest(fileName: string) {
    fetch(`digests/${fileName}`)
      .then((response) => response.json())
      .then((data) => {
        this.renderDigest(data);
      })
      .catch((error) => console.error('Error loading JSON:', error));
  }

  renderDigest(data: any) {
    if (!this.root) {
      this.root = ReactDOM.createRoot(this);
    }
    this.root.render(<Digest digest={data} />);
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
    }
  }
}

customElements.define('digest-type-a', DigestTypeA);

