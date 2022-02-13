# Meeting Reminders

This project is still under active changes, the following description of use may change in the near future.

## Usage

The webpage contents are restricted to 16:9 aspect ratio based off the width. This is done to help standardize the size
meeting to meeting. Just make sure to adjust your window to show all the page, but not more than the gray box.

### Parameters

`h` hour: (defaults to an hour later than your device) What hour the meeting starts.

`m` minute: (defaults to 0) What minute the meeting starts.

`s` second: (optional, defaults to 0) The second the meeting starts. Honestly not sure why this would be needed, but hey
here it is if needed.

`mgap` minute gap: (optional, defaults to 60) Helps create the pie chart timer. Without it there is nothing to start the rotation
against.

`smgab` short minute gap: (optional, defaults to 1) Minutes before start time when the last minute information should be shown.
Recommended not to change, 1 minute is preferred by the branch.
