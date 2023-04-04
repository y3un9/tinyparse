export const tinyparse = (template: string, data: Object, thisObj?: any) => {
    if (!data || typeof data !== 'object') {
        data = {}
    }
    return new Function(...Object.keys(data), `return \`${template}\`;`).apply(thisObj, Object.values(data))
}
