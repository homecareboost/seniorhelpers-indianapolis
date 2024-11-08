document.addEventListener("DOMContentLoaded", () => {
    const bodyTemplateSource = document.getElementById("all").innerHTML;
    const template = Handlebars.compile(bodyTemplateSource);
    const compiledHtml = template(data);
    document.getElementById("all").innerHTML = compiledHtml;
});
