const quotes_bib: HTMLElement = document.getElementById("bibquotes")!;
const lyrics_bib: HTMLElement = document.getElementById("biblyrics")!;
const images_bib: HTMLElement = document.getElementById("bibimages")!;

const quotes: NodeListOf<HTMLElement> = document.querySelectorAll(".quote");
const lyrics: NodeListOf<HTMLElement> = document.querySelectorAll(".lyrics");
const images: NodeListOf<HTMLElement> = document.querySelectorAll(".image");

const quotes_cite_map: {[key: string]: number} = {};
const images_cite_map: {[key: string]: number} = {};

let cite_index: number = 0;

for(let i = 0; i < quotes.length; i++) {

    const quote: HTMLElement = quotes[i];

    const cite: string = quote.dataset.cite ?? "";
    const bib: string = quote.dataset.bib ?? "";
    const link: string = quote.dataset.link ?? "";

    let idx = quotes_cite_map[link];

    if(idx === undefined) {

        cite_index++;
        quotes_cite_map[link] = cite_index;
        idx = cite_index;

        const bib_item: HTMLElement = document.createElement("li");

        bib_item.innerHTML = `
            <li id="cite-${idx}">
                <a href="${link}">
                    <cite>
                        ${bib}
                    </cite>
                    <img src="./src/img/link.svg" /> 
                </a>
            </li>
        `;

        quotes_bib.appendChild(bib_item);

    }

    quote.children[0].innerHTML += `<a href="#cite-${idx}"><cite>${cite}</cite></a>`;

}

for(let i = 0; i < lyrics.length; i++) {

    cite_index++;

    const _lyrics: HTMLElement = lyrics[i];

    const cite: string = _lyrics.dataset.cite ?? "";
    const bib: string = _lyrics.dataset.bib ?? "";

    const bib_item: HTMLElement = document.createElement("li");

    bib_item.innerHTML = `
        <li id="cite-${cite_index}">
            <cite>
                ${bib}
            </cite>
        </li>
    `;

    lyrics_bib.appendChild(bib_item);

    const innerHTML: string = _lyrics.children[1].innerHTML;

    _lyrics.children[1].innerHTML = `<a href="#cite-${cite_index}"><cite>${cite}</cite></a>` + innerHTML;

}

for(let i = 0; i < images.length; i++) {

    const image: HTMLElement = images[i];

    const cite: string = image.dataset.cite ?? "";
    const bib: string = image.dataset.bib ?? "";
    const link: string = image.dataset.link ?? "";

    let idx = quotes_cite_map[link];

    if(idx === undefined) {

        cite_index++;
        images_cite_map[link] = cite_index;
        idx = cite_index;

        const bib_item: HTMLElement = document.createElement("li");

        bib_item.innerHTML = `
            <li id="cite-${idx}">
                <a href="${link}">
                    <cite>
                        ${bib}
                    </cite>
                    <img src="./src/img/link.svg" /> 
                </a>
            </li>
        `;

        images_bib.appendChild(bib_item);

    }

    image.innerHTML += `<a href="#cite-${idx}"><cite>${cite}</cite></a>`;

}

// let len: number = 0;
// let end: number = 0;

// const bar: HTMLDivElement = document.querySelector("#progress-bar")!;
// const articles: NodeListOf<HTMLElement> = document.querySelectorAll("article");

// const observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {        
//     entries.forEach(entry => {

//         const idx: number = parseInt(entry.target.className);

// 		if(entry.isIntersecting) {
//             end = idx;
//         }

//         // const top: number = 0;
//         const height: number = (end + 1) / len * 100;

//         bar.setAttribute('style', `height: ${height}%;`);


// 	});
// });

// for(let i = 0; i < articles.length; i++) {

//     const sections = articles[i].children;

//     len += sections.length;

//     for(let j = 0; j < sections.length; j++) {

//         const str = (len - sections.length + j).toString();

//         sections[j].className = str.toString();

//         observer.observe(sections[j]);
//     }

// }
