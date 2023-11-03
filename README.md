<h1 align="center">Assessment for Credit One Bank</h1>

## Goals
- Build the “Application Approved” page as shown in this Figma document.
- Build the Credit Protection drawer that slides in when the user chooses to enroll, by clicking the “Enroll Today” button.
- Include a checkbox that will open a section for the user to add initials for signup. The input for the initials should  accept a maximum of 2 letters (no special characters or numbers).

## Parameters
- This should be a single page application.
- Include text, icons and images from the mockup provided.
- Please create at least two reusable components; the button and the input for the user’s initials.
- If a user bypasses the initials input, an error state should be triggered by:
  - Checking the ‘I want to protect my new account’ checkbox
  - Bypassing the initials input
  - Clicking the ‘Confirm Enrollment’ button
- Triggering the error state should:
  - Show error text
  - An error alert panel as shown in the mockup
  - Red border for the input
  - Red excalamation icon in the error alert panel
- Footer links shown in Figma file need not link out to real pages.
- Add unit tests for both your reuable components.
- Fully responsive at desktop and mobile breakpoints.
- Make sure to write your styles in a separate file from your js/jsx files.

## Extra Credit
- Add animation to icon in the ‘Are you protected?’ section.
- Add animation to the Credit Protection Drawer.
- Add accessibility testing to your unit tests.
