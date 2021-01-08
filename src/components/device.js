export const size = {
    watch: '224px',
    phoneS: '320px',
    phoneL: '414px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1920px'
}

export const device = {
    watch: `(max-width: ${size.watch})`,
    phoneS: `(min-width: ${size.phoneS})`,
    phoneL: `(min-width: ${size.phoneL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`
};