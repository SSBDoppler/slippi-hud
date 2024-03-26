import { html, css } from 'lit';

import '@polymer/iron-icons/hardware-icons.js';
import '@polymer/iron-icons/iron-icons.js';

import '@vaadin/vaadin-template-renderer';
import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-combo-box';
import '@vaadin/vaadin-dialog';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-text-field/vaadin-integer-field.js';
import '@vaadin/vaadin-text-field/vaadin-number-field.js';
import '@vaadin/vaadin-text-field/vaadin-password-field.js';
import '@vaadin/vaadin-select';

export const style = function () {
return css`

:host {
}

#layoutTop {
  position: absolute;
  height: 100px;
  left: 180px;
  top: 1px;
}

#layoutMiddleLeft {
  position: absolute;
  width: 200px;
  height: 270px;
  top: 80px;
}

#layoutMiddleRight {
  position: absolute;
  width: 200px;
  height: 270px;
  right: 10px;
  top: 80px;
}

#layoutButtom {
  position: absolute;
  height: 100px;
  top: 370px;
}

#tournamentSlug {
  margin-left: auto;
  margin-right: auto;
}

#tournySyncEnabledCheckbox {
  margin-top: 9px;
}

#boAutomationCheckbox {
  margin-top: 40px;
}

#thresholdValue {
  width: 192px;
}

#updateButton {
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}

#generateTopButton {
  margin-left: auto;
  margin-right: auto;
  margin-top: 8px;
}

#standingsList {
  margin-top: 8px;
  min-height: 200px !important;
}
`;
}

export const template = function() {
return html`

  <vaadin-vertical-layout id="layoutTop">
    <vaadin-text-field id="tournamentSlug" theme="slippi-style" label="Tournament Slug" value=${this.tournamentSlug} clear-button-visible @change=${this._tournamentSlugChange}></vaadin-text-field>
  </vaadin-vertical-layout>

  <vaadin-vertical-layout id="layoutMiddleLeft">
	<vaadin-checkbox id="tournySyncEnabledCheckbox" theme="slippi-style" ?checked=${this.tourneySyncEnabled} @change=${this._tourneySyncEnabledCheckboxChange}>Sync Tournament</vaadin-checkbox>
	<vaadin-select id="selectedQueue" theme="slippi-style" label="Selected Stream Queue" ?disabled=${!this.tourneySyncEnabled} value=${this.selectedQueueIndex} @change=${this._selectedQueueChange}></vaadin-select>
	<vaadin-checkbox id="boAutomationCheckbox" theme="slippi-style" ?checked=${this.boAutomationEnabled} ?disabled=${!this.tourneySyncEnabled} @change=${this._boAutomationEnabledCheckboxChange}>Automate Best of #</vaadin-checkbox>
    <vaadin-integer-field id="thresholdValue" theme="slippi-style" label="Placement Threshold" ?disabled=${!this.boAutomationEnabled || !this.tourneySyncEnabled} value=${this.boIntegerThreshold} has-controls min="-1" max="255" @change=${this._boThresholdValueChange}></vaadin-integer-field>
    <vaadin-button id="updateButton" theme="primary" ?disabled=${!this.tourneySyncEnabled} @click=${this._forceUpdateButtonClicked}>Force Update</vaadin-button>
</vaadin-vertical-layout>

  <vaadin-vertical-layout id="layoutMiddleRight">
	<vaadin-select id="eventSelector" theme="slippi-style" label="Event" value=${this.topSelectedEventIndex} @change=${this._topSelectedEventChanged}></vaadin-select>
	<vaadin-button id="generateTopButton" theme="primary" ?disabled=${this.topStandingsGenerating} @click=${this._topGenerateButtonClicked}>${this.topStandingsGenerating ? "Generating..." : "Generate Top 8"}</vaadin-button>

    <vaadin-grid id="standingsList" .items=${this.availableStandingEntries} .activeItem=${this.selectedStandingEntries && this.selectedStandingEntries.length > 0 ? this.selectedStandingEntries[0] : null} .selectedItems=${this.selectedStandingEntries} @active-item-changed=${this._standingsSelectionChanged} theme="no-border">
      <vaadin-grid-column path="placement" header="#" width="3em" flex-grow="0"></vaadin-grid-column>
      <vaadin-grid-column path="name" auto-width flex-grow="1"></vaadin-grid-column>
    </vaadin-grid>
    <vaadin-dialog id="standingEditor" aria-label="Edit Standing" .opened=${this.standingEditDialogOpened} @opened-changed=${this._standingsEditOpenStatusChanged}></vaadin-dialog>
  </vaadin-vertical-layout>

  <vaadin-vertical-layout id="layoutButtom">
  </vaadin-vertical-layout>

`;
}
