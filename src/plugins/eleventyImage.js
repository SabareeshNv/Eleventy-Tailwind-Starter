// Images (https://github.com/Ewan-D/beginnersBase11ty)

const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {

    let metadata = await Image(src, {
        widths: [300, 600, 800],
        formats: ["avif", "webp", "jpeg"],
        outputDir: "./_site/img/"
    });

    let imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes);
}

module.exports = { imageShortcode }