export const internshalaAutomate = async () => {
  console.log("internshalaAutomate");
  const buttons = document.getElementsByClassName('button_easy_apply_t');
  console.log('Button', buttons);
  console.log('Button length', buttons.length);
  
  // Click only the first button
  // for (let i = 0; i < Math.min(1, buttons.length); i++) {
    const button = buttons[0] as HTMLAnchorElement;
    const href = button.href;
    console.log('href', href);
    if (href) {
      console.log('Inside if condition');
      chrome.tabs.create({ url: href }, (tab) => {
        console.log(tab)
        if (chrome.runtime.lastError) {
          console.error("Error creating new tab:", chrome.runtime.lastError.message);
        } else {
          console.log("New tab created with URL:", href);
          // Rest of your code to wait for the new tab to finish loading and click the button
        }
        console.log("New tab created with URL:", href);

        
        // Wait for the new tab to finish loading
        // chrome.tabs.onUpdated.addListener(function listener(tabId, changeInfo) {
        //   if (tabId === tab.id && changeInfo.status === 'complete') {
        //     console.log("New tab fully loaded");
            
        //     // Click on the "easy apply" button in the new tab
        //     chrome.scripting.executeScript({
        //       target: { tabId: tab.id },
        //       func: () => {
        //         const easyApplyButton = document.getElementById('easy_apply_button') as HTMLButtonElement;
        //         console.log('easyApplyButton', easyApplyButton);
        //         easyApplyButton?.click();
        //       }
        //     });
            
        //     // Remove the listener after the click
        //     chrome.tabs.onUpdated.removeListener(listener);
        //   }
        // });
      });
    // }
  }
}
