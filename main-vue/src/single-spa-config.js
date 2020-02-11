// single-spa方案配置
// /* eslint-disable */
// import * as singleSpa from 'single-spa';
// import axios from 'axios';


// /*
// * runScript：一个promise同步方法。可以代替创建一个script标签，然后加载服务
// * */
// const runScript = async (url) => {
//     return new Promise((resolve, reject) => {
//         const script = document.createElement('script');
//         script.src = url;
//         script.onload = resolve;
//         script.onerror = reject;
//         const firstScript = document.getElementsByTagName('script')[0];
//         firstScript.parentNode.insertBefore(script, firstScript);
//     });
// };


// /*
// * getManifest：远程加载manifest.json 文件，解析需要加载的js
// * */
// const getManifest = (publicPath, url) => new Promise(async (resolve) => {
//     const response = await axios.get(url);
//     const result = response.data;
//     const assets = [];

//     for (let filename in result) {
//         if (filename.match(/\.js$/)) {
//             assets.push(result[filename]);
//         }
//     }

//     for (let i = 0; i < assets.length; i++) {
//         await runScript(publicPath + assets[i]).then(() => {
//             if (i === assets.length - 1) {
//                 resolve()
//             }
//         })
//     }

//     // 
//     console.log('manifest.json --filter [.js]', JSON.stringify(assets, 0, 4));
// });


// singleSpa.registerApplication('react-app', async () => {
//     await getManifest('http://localhost:3000/', '/asset-manifest.json?t=' + Date.now());
//     return window.singleReact;
// }, location => location.pathname.startsWith('/react'));


// singleSpa.start();
