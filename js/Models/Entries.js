export class Entries {
    constructor(entries, htmlListElement) {
        this.entries = entries.result.records;
        this.element = htmlListElement;
    }

    renderEntry( { buildingIndex, postalCode }) {
        return `<li><div>${buildingIndex}</div><div>${postalCode}</div></li>`;
    }

    renderList() {
        let html = "";

        for (let entry of this.entries) {
            html += this.renderEntry(entry);
        }

        this.element.innerHTML = html;
    }
}