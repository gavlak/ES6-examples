export class Towns {
    constructor (domElement) {
        this.element = domElement;
    }

    renderTown( { districtName }) {
        return `<li>${districtName}</li>`;
    }

    addBulkDataToTowns(towns) {
        let nextIndexOfElement = this.records == null ? 0 : this.records.length;

        this.records = this.records == null ? towns.result.records : [...this.records, ...towns.result.records];
        this.renderList(nextIndexOfElement);
    }

    renderList(nextIndexOfElement) {
        let html = "";

        for (let i = nextIndexOfElement; i < this.records.length; i++) {
            html += this.renderTown(this.records[i]);
        }

        this.element.innerHTML += html;
    }

    getIdOfLastTown() {
        return (this.records == null ? -1 : (this.records.length === 0 ? -1 : this.records[this.records.length - 1]._id));
    }
}