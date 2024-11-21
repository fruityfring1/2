//Setting 
function setting(value) {
    const setting = {
        sitename: 'TempKaew',
        sitedes: 'Shopping At TempKaew',
        keyword: 'shop, myshop, top shop',
        author: 'Kaew',
        file: 'data.csv'
    };
    return setting[value];
}

//Get Img + Title From CSV File
function boxproduct(id) {
    const file = require('fs').readFileSync(setting('file'), 'utf8').split('\n');
    const data = file[id].split(',');

    //First Data
    const title = data[0].replace(/"/g, '').trim();
    const link = data[1].replace(/"/g, '').trim();
    const img = data[2].replace(/"/g, '').trim();

    //Design your Box Product
    const box = `
    <div class="box">
        <div class="inbox">
            <p class="img">
                <img src="${img}">
            </p>
            <p class="title"><a href="product-${id}">${title}</a></p>
        </div>
    </div>`;

    return box;
}

//Check Max Line File data.csv
function maxline() {
    const maxline = require('fs').readFileSync(setting('file'), 'utf8').split('\n').length - 1;
    return maxline;
}

//Related Product
function relatedproduct(loop) {
    for (let i = 0; i < loop; i++) {
        const id = randid();
        console.log(boxproduct(id));
    }
}

//Loop Product
function loopproduct(min, max) {
    for (let i = min; i < max; i++) {
        console.log(boxproduct(i));
    }
}

//Random ID Product
function randid() {
    const id = Math.floor(Math.random() * maxline());
    return id;
}

//Landing Page in product.php
function landingpage(id) {
    const fs = require('fs');
    const mylp = fs.readdirSync("lp").filter(file => file.endsWith('.txt'));
    const randlp = Math.floor(Math.random() * mylp.length);

    const filelp = mylp[randlp];
    const getlp = fs.readFileSync(`lp/${filelp}`, 'utf8');

    //Product Data from data.csv
    const file = require('fs').readFileSync(setting('file'), 'utf8').split('\n');
    const data = file[id].split(',');
    const title = data[0].replace(/"/g, '').trim();
    const link = data[1].replace(/"/g, '').trim();
    const img = data[2].replace(/"/g, '').trim();

    let lp = getlp.replace("{get title}", title);
    lp = lp.replace("{get link}", link);
    lp = lp.replace("{get img}", img);

    return lp;
}

