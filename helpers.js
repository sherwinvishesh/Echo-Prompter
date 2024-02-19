
function rgbToLum(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  return r * 0.2126 + g * 0.7152 + b * 0.0722;
}

function arrToColor(r, g, b, a) {
  if (typeof a !== 'undefined')
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  return `rgb(${r}, ${g}, ${b})`;
}

function classSet(className, properties, propval) {
  const elems = document.getElementsByClassName(className);
  for (let i = 0; i < elems.length; i++) {
    if (typeof propval === 'string')
      elems[i].style[properties] = propval;
    else {
      for (prop in properties) {
        if (properties.hasOwnProperty(prop))
          elems[i].style[prop] = properties[prop];
      }
    }
  }
}

function max(a, b) {
  return a > b ? a : b;
}

function min(a, b) {
  return a > b ? b : a;
}

function simplify(word) {
  word = word.toLowerCase();
  word = word.replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss');
  word = word.replace(/é/g, 'e').replace(/è/g, 'e').replace(/ê/g, 'e').replace(/á/g, 'a');
  word = word.replace(/à/g, 'a').replace(/â/g, 'a').replace(/ô/g, 'o').replace(/î/g, 'i');
  word = word.replace(/ù/g, 'u').replace(/û/g, 'u').replace(/ë/g, 'e').replace(/ï/g, 'i');
  word = word.replace(/ç/g, 'c').replace(/œ/g, 'oe').replace(/æ/g, 'ae');
  return word;
}

function escapeHtml(word) {
  return word.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/ /g, '&nbsp;')
    .replace(/\r?\n/g, '&#8203;<br />&#8203;');
}

function lcs(stra, strb) {
  const l = [];
  for (let i = 0; i <= stra.length; i++) {
    l[i] = [];
    for (let j = 0; j <= strb.length; j++)
      l[i][j] = [0, 0, 0];
  }
  for (let i = 0; i <= stra.length; i++) {
    for (let j = 0; j <= strb.length; j++) {
      if (i == 0 || j == 0) l[i][j] = [-1, -1, 0];
      else if (stra[i - 1] == strb[j - 1]) l[i][j] = [i - 1, j - 1, l[i - 1][j - 1][2] + 1];
      else {
        if (l[i - 1][j][2] > l[i][j - 1][2])
          l[i][j] = [i - 1, j, l[i - 1][j][2]];
        else
          l[i][j] = [i, j - 1, l[i][j - 1][2]];
      }
    }
  }
  let res = '';
  let i = stra.length, j = strb.length;
  let cur = l[i][j];
  while (cur[2] > 0) {
    if (cur[0] < i && cur[1] < j) res = stra[ cur[0] ] + res;
    i = cur[0]; j = cur[1];
    cur = l[i][j];
  }
  return res;
}

function cmpScore(stra, strb) {
  const maxlen = max(stra.length, strb.length);
  const lenfac = (maxlen < 4) ? Math.sqrt(maxlen / 4) : 1;
  if (stra == strb) return lenfac * 1;
  if (stra.length < strb.length)
    [stra, strb] = [strb, stra];
  if (stra.includes(strb)) return lenfac * strb.length / stra.length;
  const lcstr = lcs(stra, strb);
  const fac = stra.includes(lcstr) ? (strb.includes(lcstr) ? 1 : 0.9) : (strb.includes(lcstr) ? 0.9 : 0.8);
  return lenfac * fac * lcstr.length / stra.length;
}

function splitResult(result) {
  const regex = /[\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\xd7\xf7]+/gm;
  const res = result.split(regex);
  for (let i = res.length - 1; i >= 0; i--) {
    res[i] = simplify(res[i]);
    if (res[i] == '')
      res.splice(i, 1);
  }
  return res;
}

function ceilIndex(tail, l, r, val) {
  while (r - l > 1) {
    m = l + Math.floor((r - l) / 2);
    if (val <= tail[m]) r = m;
    else l = m;
  }
  return r;
}

function lis(seq) {
  if (seq.length == 0) return [];
  let tail = []; let idxTail = []; let p = []; let length = 1;
  for (let i = 0; i < seq.length; i++) {
    tail.push(0); idxTail.push(0); p.push(-1);
  }
  tail[0] = seq[0]; idxTail[0] = 0; p[0] = -1;
  for (let i = 1; i < seq.length; i++) {
    if (seq[i] < tail[0]) {
      tail[0] = seq[i]; idxTail[0] = i; p[i] = -1;
    } else if (seq[i] > tail[length - 1]) {
      tail[length++] = seq[i]; idxTail[length - 1] = i; p[i] = idxTail[length - 2];
    } else {
      const ci = ceilIndex(tail, -1, length - 1, seq[i]);
      tail[ci] = seq[i]; idxTail[ci] = i; p[i] = ci > 0 ? idxTail[ci - 1] : -1;
    }
  }
  let res = []; let cpos = idxTail[length - 1];
  while (cpos >= 0) { res.push(cpos); cpos = p[cpos]; }
  res.reverse();
  if (res.length != length) throw new Error('fatal');
  return res;
}

function matchText(recText, currentPosition, currentRecording, speechPosition, currentMatchArray) {
  let newPosition = currentPosition;
  if (speechPosition > currentRecording.length) {
    newPosition -= speechPosition - currentRecording.length;
    speechPosition = currentRecording.length;
  }

  const mWord = i => currentMatchArray[i][0];
  const firstIdx = (i, val) => {
    if (typeof val === 'undefined') return currentMatchArray[i][1][0];
    currentMatchArray[i][1][0] = val;
  };
  const firstScore = (i, val) => {
    if (typeof val === 'undefined') return currentMatchArray[i][1][1];
    currentMatchArray[i][1][1] = val;
  };
  const secondIdx = (i, val) => {
    if (typeof val === 'undefined') return currentMatchArray[i][2][0];
    currentMatchArray[i][2][0] = val;
  };
  const secondScore = (i, val) => {
    if (typeof val === 'undefined') return currentMatchArray[i][2][1];
    currentMatchArray[i][2][1] = val;
  };

  let maxScore = -1;
  for (let i = max(0, speechPosition - 10); i < currentRecording.length; i++) {
    while (i >= currentMatchArray.length) currentMatchArray.push(['PLACEHOLDER WORD', [-1, -1], [-1, -1]]);
    if (mWord(i) != currentRecording[i] || firstIdx(i) == -1 || bestScore(i) < 0.7) {
      const targetIdx = newPosition + i - speechPosition;
      firstIdx(i, -1); firstScore(i, -1); secondIdx(i, -1); secondScore(i, -1);
      for (let j = max(0, targetIdx - 3); j < min(recText.length, targetIdx + 9); j++) {
        const score = cmpScore(recText[j].word, currentRecording[i]);
        if (score > firstScore(i) || (score == firstScore(i) && Math.abs(j - targetIdx) < Math.abs(firstIdx(i) - targetIdx))) {
          secondScore(i, firstScore(i)); secondIdx(i, firstIdx(i));
          firstScore(i, score); firstIdx(i, j);
        }
      }
      let setnew = false, fIdx = firstIdx(i), fScore = firstScore(i);
      if (fIdx == -1) setnew = true;
      else if (Math.abs(fIdx - targetIdx) > 3 && fScore < 0.5) setnew = true;
      else if (Math.abs(fIdx - targetIdx) > 5 && fScore < 0.7) setnew = true;
      else if (Math.abs(fIdx - targetIdx) > 7 && fScore < 0.9) setnew = true;
      else if (Math.abs(fIdx - targetIdx) > 9 && fScore < 1) setnew = true;
      if (setnew) {
        firstScore(i, secondScore(i)); firstIdx(i, secondIdx(i));
        secondScore(i, -1); secondIdx(i, -1);
      }
      setnew = false; fIdx = firstIdx(i); fScore = firstScore(i);
      if (fIdx == -1) setnew = true;
      else if (Math.abs(fIdx - targetIdx) > 3 && fScore < 0.5) setnew = true;
      else if (Math.abs(fIdx - targetIdx) > 5 && fScore < 0.7) setnew = true;
      else if (Math.abs(fIdx - targetIdx) > 7 && fScore < 0.9) setnew = true;
      else if (Math.abs(fIdx - targetIdx) > 9 && fScore < 1) setnew = true;
      if (setnew) {
        firstIdx(i, max(0, min(targetIdx, recText.length - 1)));
        firstScore(i, cmpScore(recText[max(0, min(targetIdx, recText.length - 1))].word, currentRecording[i]));
      }
      maxScore = max(maxScore, firstScore(i));
    }
  }
  let idxMaxArr = [], idxMatchArr = [];
  for (let i = max(0, speechPosition - 10); i < currentRecording.length; i++) {
    if (firstScore(i) >= maxScore - 1e-6) {
      idxMaxArr.push(i); idxMatchArr.push(firstIdx(i));
    }
  }
  let lisequ = lis(idxMatchArr).map(i => idxMaxArr[i]);

  const recBestMatch = (leftBoundary, rightBoundary, lowerBound, upperBound, liseq) => {
    for (let maxIdx = 0; maxIdx <= liseq.length; maxIdx++) {
      let rangeStart = (maxIdx == 0) ? leftBoundary : liseq[maxIdx - 1] + 1;
      let rangeEnd = (maxIdx == liseq.length) ? rightBoundary : liseq[maxIdx];
      let lower = lowerBound, upper = upperBound;
      if (maxIdx > 0) lower = firstIdx(liseq[maxIdx - 1]);
      if (maxIdx < liseq.length) upper = firstIdx(liseq[maxIdx]);
      if (rangeEnd - rangeStart > 0) {
        maxScore = -1;
        for (let i = rangeStart; i < rangeEnd; i++) {
          if (firstIdx(i) <= lower || firstIdx(i) >= upper) {
            if (secondIdx(i) > lower && secondIdx(i) < upper) {
              firstScore(i, secondScore(i)); firstIdx(i, secondIdx(i));
              secondScore(i, -1); secondIdx(i, -1);
            } else if (upper - lower >= 2) {
              const newIdx = Math.floor(lower + (upper - lower - 1) * (i + 1 - rangeStart) / (rangeEnd - rangeStart));
              firstScore(i, cmpScore(currentRecording[i], recText[newIdx].word)); firstIdx(i, newIdx);
              secondScore(i, -1); secondIdx(i, -1);
            } else {
              firstScore(i, -1); firstIdx(i, -1);
              secondScore(i, -1); secondIdx(i, -1);
            }
          }
          maxScore = max(maxScore, firstScore(i));
        }
        if (rangeEnd - rangeStart > 1 && maxScore >= 0) {
          idxMaxArr = []; idxMatchArr = [];
          for (let i = rangeStart; i < rangeEnd; i++) {
            if (firstScore(i) >= maxScore - 1e-6 && firstIdx(i) >= 0) {
              idxMaxArr.push(i); idxMatchArr.push(firstIdx(i));
            }
          }
          let lisequ2 = lis(idxMatchArr).map(i => idxMaxArr[i]);
          recBestMatch(rangeStart, rangeEnd, lower, upper, lisequ2);
        }
      }
    }
  };
  recBestMatch(
    max(0, speechPosition - 10),
    currentRecording.length,
    max(-1, firstIdx(lisequ[0]) - 6),
    min(recText.length, firstIdx(lisequ[lisequ.length - 1])
                        + min(1 + 2 * (currentRecording.length - lisequ[lisequ.length - 1] - 1), 6)),
    lisequ);

  maxScore = -1; let maxPos = -1, foundPos = false;
  for (let i = currentRecording.length - 1; i >= max(0, currentRecording.length - 5); i--) {
    if (firstScore(i) >= 0.8) {
      speechPosition = i + 1; foundPos = true; break;
    } else if (firstScore(i) > maxScore) {
      maxScore = firstScore(i);
      maxPos = i + 1;
    }
  }
  if (!foundPos && maxPos >= 1) speechPosition = maxPos;
  if (speechPosition >= 1 && firstIdx(speechPosition - 1) >= 0) newPosition = firstIdx(speechPosition - 1) + 1;
  else if (speechPosition < currentRecording.length && firstIdx(speechPosition) >= 0) newPosition = firstIdx(speechPosition);
  if (newPosition < currentPosition && currentPosition - newPosition == 1) {
    newPosition = currentPosition;
    speechPosition++;
  }
  let match = [[], []]; let lastUpperIdx = -1;
  for (let i = max(0, speechPosition - 10); i < currentRecording.length; i++) {
    if (firstIdx(i) == -1) {
      match[0].push(' ');
      match[1].push(currentRecording[i]);
    } else {
      while (lastUpperIdx >= 0 && lastUpperIdx + 1 < firstIdx(i)) {
        lastUpperIdx++;
        match[0].push(recText[lastUpperIdx].word);
        match[1].push(' ');
      }
      lastUpperIdx = firstIdx(i);
      match[0].push(recText[lastUpperIdx].word);
      match[1].push(currentRecording[i]);
    }
  }
  for (let j = lastUpperIdx + 1; j < min(lastUpperIdx + 6, recText.length); j++) {
    match[0].push(recText[j].word);
    match[1].push(' ');
  }
  while (currentMatchArray.length > currentRecording.length)
    currentMatchArray.pop();
  return [newPosition, speechPosition, currentMatchArray, match];
}
