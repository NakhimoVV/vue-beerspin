module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "~@/assets/style.scss";'
            },
            css: {
                prependData: '@import "~@/css/iconsfont.css";'
            }
        }
    }
};