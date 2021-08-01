import { mainBody } from "./component/main-body.js";
import { Navigation } from "./component/navigation.js";
import { footer } from "./component/footer.js";

const dataUrl = "https://niravkpatel28.github.io/json-data-server/blogs/blogs.json";
const navFooterUrl = "https://saima422.github.io/Image-JSON-Data-Repo/json-data/blog-rendering.json";

const root = document.getElementById('root');

fetch(navFooterUrl)
    .then((response) => {
        return response.json();
    }).then(async (data) => {
        root.appendChild(Navigation(data.NavData));
        await fetch(dataUrl)
            .then((response) => {
                return response.json();
            }).then((data) => {
                let index = Math.floor(Math.random()*data.length);
                root.appendChild(mainBody(data[index].id, data));
            }).catch((err)=>{
                console.log(err);
            });
        return root.appendChild(footer(data.FooterData));
    }).catch((err) => {
            console.log(err);
        });


    // .then((data) => {
    //     console.log(data.FooterData);
    //     root.appendChild(footer(data.FooterData));
    // }).catch((err) => {
    //     console.log(err);
    // });
