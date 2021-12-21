export default class TableToCsv {
    constructor(props) {
        this.fileName = props.fileName || "";
        this.table = props.table;
        this.hiddenColumns = props.hiddenColumns || [];
    }

    getHeaders() {
        const tableHeaders = this.table.getElementsByTagName("thead")[0].children[0].children;
        const headers = [];
        for(let i = 0; i < tableHeaders.length; i++) {
            if (!this.hiddenColumns.includes(i)) {
                headers.push(tableHeaders[i].innerHTML);
            }
        }
        return `${headers.join(",")}\n`;
    }

    getRows() {
        const tableRows = this.table.getElementsByTagName("tBody")[0].children;
        const rows = [];
        for(let i = 0; i < tableRows.length; i++) {
            let row = [];
            for(let j = 0; j < tableRows[i].children.length; j++) {
                if (!this.hiddenColumns.includes(j)) {
                    row.push(tableRows[i].children[j].innerHTML);
                }
            }
            if (row.length > 0) {
                rows.push(`${row.join(",")}`);
            }
        }
        return rows.join("\n");
    }

    buildCsv() {
        return `${this.getHeaders()}${this.getRows()}`;
    }

    downloadCsv() {
        const downloadElement = document.createElement("a");
        downloadElement.href = `data:text/csv;charset=utf-8,${encodeURI(this.buildCsv())}`;
        downloadElement.target = "_blank";
        downloadElement.download = `${this.fileName}.csv`;
        downloadElement.click();
    }
}