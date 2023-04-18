
export function getFromLocal() {
    let previousLocal = localStorage.getItem("isClicked");
     let localParsed = JSON.parse(previousLocal);
    return localParsed;
  }
  export let localData = getFromLocal();
  if (localData == null) {
localData = [];
  }



export function removeFromLocal(item) {

  if (localData.includes(item)) {
    let index = localData.indexOf(item);
    console.log(index);
    localData.splice(index, 1);
    localStorage.setItem("isClicked", JSON.stringify(localData));
    console.log(localStorage);
  } 
  }
