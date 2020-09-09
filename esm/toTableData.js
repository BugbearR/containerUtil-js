/**
 * Convert to table data.
 * @param {Object[]} rows
 * @param {Object} opts
 * @param {String[]} opts.pick include field names
 * @param {String[]} opts.omit exclude field names
 * @returns {Object} table data
 */
export default function toTableData(rows, opts) {
    if (rows === undefined || rows === null) {
        return rows;
    }
    if (!Array.isArray(rows)) {
        return undefined;
    }

    let fields = undefined;
    if (opts && opts.pick && Array.isArray(opts.pick)) {
        fields = opts.pick;
    }
    else {
        if (rows.length === 0) {
            return { fields: [], rows: [] };
        }
        fields = Object.getOwnPropertyNames(rows[0]);
    }

    if (opts && opts.omit && Array.isArray(opts.omit)) {
        const omitSet = new Set(opts.omit);
        fields = fields.filter((field) => {
            return !omitSet.has(field);
        });
    }

    const newRows = rows.map((row) => {
        return fields.map((field) => {
            return row[field];
        });
    });

    return {
        fields: fields,
        rows: newRows
    };
}
