import { SECTIONS_LIST } from "../constants/sections_list";

async function setupSections() {
    SECTIONS_LIST.forEach(section => {
        loadSection(section, `src/sections/${section}/index.html`);
    });
}

async function loadSection(id, path) {
    const response = await fetch(path);
    const data = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    const bodyContent = doc.body.innerHTML;

    document.getElementById(id).innerHTML = bodyContent;

    handlePanoramaSetup();

}

function handlePanoramaSetup() {
    var panorama = document.querySelector('.panorama');
    
    var left = panorama.getBoundingClientRect().left + window.pageXOffset;
    var width = panorama.offsetWidth;
    
    panorama.addEventListener('mousemove', function (e) {
        var offset = e.pageX - left;
        var percentage = (offset / width) * 100;
    
        panorama.style.backgroundPosition = percentage + '% 0';
    });
}

export { setupSections };