document.cookie = 'happy=yes';
document.cookie = 'key=value; max-age=3600';
document.cookie = 'font=Arial; max-age=10000';
console.log(document.cookie);

// получение всех Cookies в виде объекта

// let cookieObj = {};
// let cookieArr = document.cookie.split('; ');
// console.log(cookieArr);

// for (let pair of cookieArr ) {
//     let tmp = pair.split('=');
//     cookieObj[tmp[0]] = tmp[1];

// }

// console.log(cookieObj.font);

//Объект для удобной работы с Cookie

const Cookie = {
    set(key, value, properties={}) {
        let result = `${key}=${value}`;
        for (let field in properties) {
            result += `;  ${field}=${properties[field]}`;
        }
        document.cookie = result;
    },
    get(key) {
        for (let el of document.cookie.split('; ')) {
            const pair = el.split('=');
            if (pair[0] == key) {
                return pair[1];
            }
        }
    },
    remove(key) {
        this.set(key, '', {'max-age': 0});
    }
};

Cookie.set('logged', 'yes', {'max-age':1000});
console.log(document.cookie);
Cookie.remove('logged');
console.log(document.cookie);

// программа для переключения цветовой темы

const switchBtn = document.querySelector('#switch-theme');
let lightTheme = true;

switchBtn.addEventListener('click', () => {
    const root = document.querySelector(':root');
    lightTheme = !lightTheme;
    for (let variable in CSSVariables) {
        if (lightTheme) {
            root.style.setProperty(variable, CSSVariables[variable].light);
        }
        else
        root.style.setProperty(variable, CSSVariables[variable].dark);
    }
});


const CSSVariables = {
    '--bg-color': {
        light: '#FFF',
        dark: '#000'
    },
    '--font-color': {
        light: '#000',
        dark: '#FFF'
    },
    '--select-color': {
        light: '#5D0254',
        dark: '#F195E8'
    }
};


