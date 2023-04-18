
export function initAuthors(author) {
  if (!author) {
    return "";
  } else if (author.length > 1) {
    let authorsSplit = author.join(", ");
    return authorsSplit;
  }
  else return author;
}
export function initTitles(title) {
  if (!title) {
    return "";
  } else if (title.length <= 40) {
    return title;
  } else return title.substr(0, 40) + "...";
}

export function initDescription(descr) {
  if (!descr) {
    return "";
  } else if (descr.length <= 80) {
    return descr;
  } else {
    return descr.substr(0, 80) + "...";
  }
}

export function initRate(rate) {
  if (!rate) return;
  let newWidth = rate / 5 * 100;
  return `${+newWidth}%`;
}

export function initPrice(price) {
  if (!price) return "";
  return `${price.amount} ${price.currencyCode}`;
}

export function initImages(img) {
  if (!img) {
    let newImg = "https://орфографика.рф/800/600/http/i.pinimg.com/originals/11/56/95/115695b0016cd7c8a29f5e252ba917a7.jpg";
    return newImg;
  } else {
    return img;
  }
}


