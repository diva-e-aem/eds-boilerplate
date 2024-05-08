import { Directive, directive } from 'lit/directive.js';
import { AttributePart, nothing } from 'lit';
import { SidekickElement } from 'Helpers/sidekick/extractSidekickLibraryId';
import { isSidekickLibraryActive } from 'Helpers/sidekick//isSidekickLibraryActive';

class SidekickLibraryId extends Directive {
  private part?: AttributePart;

  update(part: AttributePart, props: unknown[]) {
    this.part = part;
    const SidekickElement = props[0] as SidekickElement;
    return this.render(SidekickElement);
  }

  render(sidekickElement: SidekickElement) {
    if (isSidekickLibraryActive() === false) return nothing;

    const element = this.part?.element;
    const { dataLibraryId, href } = sidekickElement;
    if (dataLibraryId) element?.setAttribute('data-library-id', dataLibraryId);
    if (dataLibraryId) element?.setAttribute('contenteditable', 'true');
    if (href && element instanceof HTMLAnchorElement) element?.setAttribute('href', href);
    return nothing;
  }
}

export const getSidekickLibraryId = directive(SidekickLibraryId);
