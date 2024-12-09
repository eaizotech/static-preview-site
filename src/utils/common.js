// const SITE_BASE_PATH = "/static-preview-site"
const SITE_BASE_PATH = ""

export const getAssetPath = (path) => {
    return `${SITE_BASE_PATH}${path}`
}