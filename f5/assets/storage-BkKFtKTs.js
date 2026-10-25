function a(r,t){try{const e=localStorage.getItem(r);return e?JSON.parse(e):t}catch{return t}}function c(r,t){try{localStorage.setItem(r,JSON.stringify(t))}catch{}}export{a as r,c as w};
