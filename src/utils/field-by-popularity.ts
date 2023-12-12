export const getFieldByPopularity = (value?: string) => {
    if (value === 'minor_price') return {field: "price_in_cents", order: "ASC"}
    if (value === 'biggest_price') return {field: "price_in_cents", order: "DSC"}
    if (value === 'news') return {field: "created_at", order: "ASC"}
    if (value === 'sales') return {field: "sales", order: "DSC"}
}