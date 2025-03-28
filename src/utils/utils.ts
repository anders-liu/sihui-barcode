export function makeFileKey(file: File): string {
    const { name, lastModified, size } = file
    return `${name}__${lastModified}__${size}`
}
