
const byAlphabeticalURLOrder = (tab1, tab2) => {
  if (tab1.url < tab2.url) {
    return -1;
  } else if (tab1.url > tab2.url) {
    return 1;
  }
  return 0;
}

const describeResult = (tabs) => {
  document.write(`<h3>Tabs ordered as below:</h3>`);
  document.write('<ul>');
  tabs.forEach((tab) => {
    document.write(`<li>${tab.url}</li>`);
  });
  document.write('</ul>');
}

document.querySelector('#sort').addEventListener('click', () => {
  chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => { 
  
    tabs.sort(byAlphabeticalURLOrder);
  
    for (let i = 0; i < tabs.length; i++) {
      
      chrome.tabs.move(tabs[i].id, {index: i});
    }
  
    tabs.forEach((tab, i) => {
      chrome.tabs.move(tab.id, {index: i});
    });
    
    tabs.forEach((tab, i) => {
      chrome.tabs.move(tab.id, {index: i});
    });
    
    describeResult(tabs)
  });
})