## Discussion
Discussion of this challenge: 
I took somewhat longer than the allotted 60 minutes to complete, as a bug was preventing the main functionality of saving, loading, and switching texts, and I thought of using refs to solve it after the 60 minutes was up. At the 60 minute mark, I had implemented the main structure of editing text, saving, loading, etc. but it did not work properly until I added the useRef functionality. I unfortunately did not get to the Markdown editor, as I spent too much time on the plaintext editor.

The plaintext editor allows a user to edit text in a textbox, and buttons have been added for saving and loading functionality. This functionality is accomplished through session storage in the browser. This data, of course, will not persist after a browser session, nor will it persist accross browsers. An actual database would be needed to solve this. Alternatively, for running local javascript files, the node.js filesystem(fs) could be used to write text to a json file stored on the user's machine.

The other major improvement I would spend more time on (besides implementing the Markdown editor) would be actual frontend styling. For example, the buttons and text area could be much nicer, and the button centered. If I wanted to make it quickly look nice, I would probably have spent a bit of additional time to install either the Bootstrap or the Material UI Libraries, as they have good premade button and textarea components.

Lastly, the program could probably be optimized more. For example, one of the useEffect() functions I wrote is designed to change the textArea every time a new file is loaded, but it runs every time the InnerText variable changes. In other words, the function is probably running more often than it needs to. I did spend a bit of time thinking about the problem, and perhaps the function should only run when file.name changes. Given more time, I would probably implement these changes, clean up the code, do a bit of refactoring, add a few comments or docstrings, and perhaps add TypeScript.


# Rethink Plaintext Editing

This is our frontend coding challenge. It gives us a chance to see your abilities and how you approach problems. It is designed to give you unlimited creative freedom as you develop a solution. Feel free to use any packages/tools/etc. you'd like to edit text as elegantly as possible. There are a variety of different file types to experiment with as you see fit.

To run the challenge:

- FORK this repo
- Download forked repo and run `npm install && npm run dev`
- Open `localhost:3000` in your browser
- Enjoy

Once complete, please email us a link to your forked repo with clean, tested code. We will use Chrome to run it.

- Rethink Engineering
