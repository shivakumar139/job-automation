export const internshalaAutomate = async () => {
  console.log("internshalaAutomate");
  const buttons = document.getElementsByClassName('easy_apply');

  // Extract the href of the first button
  const button = buttons[0] as HTMLDivElement;
  // let href: string = button.href;
  console.log('buttons:', buttons);
  console.log('buttons.length:', buttons.length);
  await button?.click();

   // click on continue button using requestAnimationFrame

   const clickContinueButton = () => {
    console.log("clickContinueButton");
    const continueButton = document.getElementById('continue_button') as HTMLButtonElement;
    if (continueButton) {
      continueButton.click();
      console.log('continue button clicked');
    } else {
      requestAnimationFrame(clickContinueButton);
    }
  }
  
  clickContinueButton();


  // copy_cover_letter_button
  const clickCoverLetterButton = () => {
    console.log("clickSubmitButton");
    const coverLetter = document.getElementsByClassName('copy_cover_letter_button') as HTMLCollectionOf<Element>;
    const coverLetterButton = coverLetter[0] as HTMLDivElement;
    if (coverLetterButton) {
      coverLetterButton.click();
      console.log('Cover Letter button clicked');
    } else {
      requestAnimationFrame(clickCoverLetterButton);
    }
  }

  clickCoverLetterButton();

  const clickSubmitButton = () => {
    console.log("clickSubmitButton");
    const submitButton = document.getElementById('submit') as HTMLInputElement;
    if (submitButton) {
      submitButton.click();
      console.log('Submit button clicked');
    } else {
      requestAnimationFrame(clickSubmitButton);
    }
  }

  clickSubmitButton();


  


  
}

