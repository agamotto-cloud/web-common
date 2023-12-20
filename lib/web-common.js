const modules = {
  web_main: { url: "/main/web-main.js", format: "esm", from: "vite" }
};


const initModule = () => ({});

async function getModule(name) {
  const module = modules[name];
  if (module.inited) {
    return module.lib;
  }
  return new Promise((resolve, reject) => {
    (typeof module.url === "function" ? module.url : () => Promise.resolve(module.url))().then((url) => {
      var urlS = url + "?t=" + Date.now();
      import(urlS).then((mod) => {
        if (!module.inited) {
          const init = initModule(module.from);
          mod.init(init);
          module.lib = mod;
          module.inited = true;
        }
        resolve(module.lib);
      }).catch(reject);
    });
  });

}

function normalizeModule(module, isESModule) {
  if (!module?.default && isESModule) {
    let normalizedModule = Object.create(null);
    normalizedModule.default = module;
    normalizedModule.__esModule = true;
    return normalizedModule;
  }
  return module;
}

function loadModule(name, path) {
  return getModule(name).then((mod) => mod.get(path).then((result) => result()));
}

export const loadMain = () => {
  loadModule("web_main", "./main").then((module) => normalizeModule(module, true));
}