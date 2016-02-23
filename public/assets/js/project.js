window.PROJECT = {"name":"Together We Listen @ NYPL","description":"A web app for fixing oral history transcripts that were automatically generated from speech-to-text software","logo":"/project/assets/img/logo.png","apiUrl":"","useVendorAudio":true,"adminEmails":["brianfoo@nypl.org","willaarmstrong@nypl.org","alexandrakelly@nypl.org"],"authProviders":[{"name":"google","label":"Google","path":"/auth/google_oauth2"}],"consensus":{"maxLineEdits":5,"minLinesForConsensus":3,"minPercentConsensus":0.34,"lineDisplayMehod":"guess","superUserHiearchy":50},"menus":{"header":[{"label":"Help","modal":"tutorial_edit"},{"label":"Browse","url":"/"},{"label":"About","url":"/#/page/about"}],"transcript_edit":[{"label":"Cheat Sheet","modal":"transcription_cheat_sheet"}],"footer":[]},"modals":{"transcription_cheat_sheet":{"title":"Transcription Cheat Sheet","doneLabel":"Close","page":{"file":"transcription-cheat-sheet.md"}},"tutorial_edit":{"title":"Transcript Editor Tutorial","displayMethod":"once","doneLabel":"Finished","pages":[{"label":"Editing","file":"ed_tutorial_1.md"},{"label":"Conventions","file":"ed_tutorial_2.md"},{"label":"Commands","file":"ed_tutorial_3.md"}]}},"controls":[{"id":"toggle-play","action":"lineToggle","label":"Play/Pause","keyCode":32,"key":"[Shift] + [Space]","keyLabel":"Shift + Space Bar","keyDescription":"Hold shift and press space bar to play, pause, or re-play a line","shift":true},{"id":"submit-line","action":"lineSubmit","label":"Submit \u0026amp; Continue","keyCode":13,"key":"enter","keyLabel":"Enter Key","keyDescription":"Press enter key to submit current line and continue"},{"id":"previous-line","action":"linePrevious","label":"Prev Line","keyCode":38,"key":"\u0026#8593;","keyLabel":"Up Arrow","keyDescription":"Press up arrow key to go to previous line"},{"id":"next-line","action":"lineNext","label":"Next Line","keyCode":40,"key":"\u0026#8595;","keyLabel":"Down Arrow","keyDescription":"Press down arrow key to go to next line"},{"id":"previous-word","action":"wordPrevious","label":"Prev Word","keyCode":37,"key":"[Shift] + [\u0026#8592;]","keyLabel":"Shift + Left Arrow","keyDescription":"Hold shift and press left arrow key to move to previous word","shift":true},{"id":"next-word","action":"wordNext","label":"Next Word","keyCode":39,"key":"[Shift] + [\u0026#8594;]","keyLabel":"Shift + Right Arrow","keyDescription":"Hold shift and press right arrow key to move to next word","shift":true}],"pages":{"about.md":"\u003ch1\u003eIntro\u003c/h1\u003e\n\n\u003cp\u003eToday thousands of libraries and public media organizations publish large digital audio collections online. Most of these, however, lack transcripts or basic metadata, rendering them invisible to search engines and impenetrable to prospective users. Recent advances in speech-to-text technologies have made great progress in opening audio to the web, but lack total accuracy, keywords, and qualitative, topic-based description.\u003c/p\u003e\n\n\u003cp\u003e\u003ca href=\"http://nypl.org/\"\u003eThe New York Public Library (NYPL)\u003c/a\u003e and \u003ca href=\"http://themoth.org/\"\u003eThe Moth\u003c/a\u003e — both curators of rich and ongoing personal storytelling archives — propose to combine the innovative auto-transcription services of \u003ca href=\"https://popuparchive.com/\"\u003ePop Up Archive\u003c/a\u003e with a community engagement model focused on correcting and enriching transcripts in collaboration with the public.\u003c/p\u003e\n\n\u003cp\u003eAudio will be transcribed using Pop Up Archive’s software and then presented to communities in an interactive editor developed by \u003ca href=\"http://www.nypl.org/collections/labs\"\u003eNYPL Labs\u003c/a\u003e. The Moth will engage its online listener base to edit transcripts of over 800 recorded stage stories; NYPL will build an in-person participation model at its branch libraries to work on 1,000+ stories from its ongoing \u003ca href=\"http://oralhistory.nypl.org/\"\u003eCommunity Oral History Project\u003c/a\u003e.\u003c/p\u003e\n\n\u003cp\u003eThe prototyping period will culminate in a public hackathon and oral storytelling celebration where participants can explore the enriched data sets and create new tools for discovery, analysis, and education.\u003c/p\u003e\n\n\u003ch1\u003eTool\u003c/h1\u003e\n\n\u003cp\u003eThis tool will allow you to listen to the oral history while you edit its transcript. The  transcript was \u003cb\u003ecomputer generated\u003c/b\u003e using speech-to-text software and \u003cb\u003eit will contain errors\u003c/b\u003e.\u003c/p\u003e\n\n\u003cp\u003eYou will listen to the audio one line at a time (the audio will automatically pause for you). Select the first line and to start editing the transcript directly in the browser. The tool bar at the top of the page displays shortcuts for navigating the tool.\u003c/p\u003e\n\n\u003c!-- \u003cdiv class=\"video-wrapper\"\u003e\n \u003cvideo loop autoplay src=\"/project/assets/img/transcribe-edit.mp4\" alt=\"Screenshot of a transcript being edited.\"\u003e\u003c/video\u003e\n\u003c/div\u003e --\u003e\n\n\u003cp\u003eThere are transcription conventions for reference. \u003cspan class=\"highlight\"\u003eAll your edits will be automatically saved.\u003c/span\u003e Once enough editors agree on a corrected transcript line, we\u0026#39;ll lock that line for editing and have it displayed in our official transcripts.\u003c/p\u003e\n\n\u003cp\u003eYou may log in using a Google account to keep track of all your edits. \u003ca href=\"http://twl-nypl.herokuapp.com/\"\u003eBrowse the Oral Histories\u003c/a\u003e and select one to get started.\u003c/p\u003e\n\n\u003c!--# Data\n\nBy editing transcripts, you're helping to create accurate transcripts helping to share 1,000+ stories from the ongoing [Community Oral History Project](http://oralhistory.nypl.org/). These transcripts improve accessibility options for patrons browsing the collected stories and provide material for future tools to create rich data sets. How? Take for example the interview of Frank Senior.\n\u003cdiv\u003e\u003cimg src=\"/project/assets/img/transcript_data_1.png\" alt=\"Screenshot of a transcript expert from Frank Senior's Oral History.\"\u003e\u003c/div\u003e\nOnce we have an accurate transcript. Someone could take the transcript and extract geographic information from the story.\n\u003cdiv\u003e\u003cimg src=\"/project/assets/img/transcript_data_2.png\" alt=\"Screenshot of a transcript expert from Frank Senior's Oral History.\"\u003e\u003c/div\u003e\nThat data could then be plotted on a map. A new way to interact with Senior's story and a new way of narratively mapping the city.\n\u003cdiv\u003e\u003cimg src=\"/project/assets/img/transcript_data_3.png\" alt=\"Screenshot of a transcript expert from Frank Senior's Oral History.\"\u003e\u003c/div\u003e--\u003e\n","ed_tutorial_1.md":"\u003ch1\u003eWelcome!\u003c/h1\u003e\n\n\u003cp\u003eThe following transcript you are about to read was generated using speech-to-text software, so there are probably errors. This tool will allow you to listen to the oral history while you edit its transcript.\u003c/p\u003e\n\n\u003cp\u003eYou will listen to one line at a time (the audio will automatically pause for you), which will last about 4 to 7 seconds each. Simply edit the text to match what you here.\u003c/p\u003e\n\n\u003c!-- \u003cdiv class=\"video-wrapper\"\u003e\n  \u003cvideo loop autoplay src=\"/project/assets/img/transcribe-edit.mp4\" alt=\"Screenshot of a transcript being edited.\"\u003e\u003c/video\u003e\n\u003c/div\u003e --\u003e\n\n\u003cp\u003e\u003cspan class=\"highlight\"\u003eAll your edits will be automatically saved\u003c/span\u003e but may not be immediately visible by others. Once enough editors agree on a corrected transcript line, we\u0026#39;ll lock that line for editing and have it displayed in our official transcripts.  You may log in using a Google account to keep track of all your edits.\u003c/p\u003e\n","ed_tutorial_2.md":"\u003ch1\u003eTranscription Conventions\u003c/h1\u003e\n\n\u003cp\u003eThere are many ways to transcribe an oral history, so if you\u0026#39;re unsure, we have one general guideline: \u003cstrong\u003eTranscribe as you hear it.\u003c/strong\u003e\u003c/p\u003e\n\n\u003cp\u003eIf an interviewer uses an abbreviation or a contraction, include those as you hear them. Examples: \u003cem\u003eshoulda\u003c/em\u003e, \u003cem\u003ecouldn\u0026#39;t\u003c/em\u003e\u003c/p\u003e\n\n\u003cp\u003eNumbers should be transcribed as numerals. Examples: \u003cem\u003e1 West 40th Street\u003c/em\u003e, \u003cem\u003eShe was 40 years old\u003c/em\u003e\u003c/p\u003e\n\n\u003cp\u003eNoises should be transcribed in brackets. Use descriptive language when transcribing noises (e.g. \u003cem\u003eAnd then we [door slam]\u003c/em\u003e, \u003cem\u003eSo cold! [Brrrrr]\u003c/em\u003e)\u003c/p\u003e\n\n\u003cp\u003eWe also have a handy \u003cstrong\u003e\u0026quot;Cheat Sheet\u0026quot;\u003c/strong\u003e which has guidelines for many tricky transcriptions which you can access in the toolbar in the top right side of this page\u003c/p\u003e\n","ed_tutorial_3.md":"\u003ch1\u003eCommands\u003c/h1\u003e\n\n\u003cp\u003eA number of commands allow you to navigate the interview\u0026#39;s audio and transcript. These appear at the top of the screen as buttons. You can also call these commands with the following keyboard shortcuts.\u003c/p\u003e\n\n\u003ctable class=\"table-commands\"\u003e\n    \u003c% _.each(project.controls, function(control) { %\u003e\n    \u003ctr\u003e\n        \u003ctd\u003e\u003c%= control.keyLabel %\u003e\u003c/td\u003e\n        \u003ctd\u003e\u003c%= control.keyDescription %\u003e\u003c/td\u003e\n    \u003c/tr\u003e\n    \u003c% }) %\u003e\n\u003c/table\u003e\n","home.md":"\u003ch1\u003eTogether We Listen @ NYPL\u003c/h1\u003e\n\n\u003cp\u003eHelp \u003ca href=\"http://www.nypl.org/\"\u003eThe New York Public Library\u003c/a\u003e fix computer-generated transcripts from 1,000+ hours of stories from the library\u0026#39;s \u003ca href=\"http://oralhistory.nypl.org/\"\u003eCommunity Oral History Project\u003c/a\u003e. Select an interview to get started.\u003c/p\u003e\n","transcript_edit.md":"\u003ch2\u003eYou are now editing a transcript:\u003c/h2\u003e\n\n\u003ch1\u003e\u003c%= transcript.title %\u003e\u003c/h1\u003e\n\n\u003cp\u003eThe following transcript was automatically generated using speech-to-text software, so there are probably errors. This tool will allow you to listen while you edit the transcript. For your convenience (we hope), the audio will automatically pause after each line.\u003c/p\u003e\n\n\u003cp\u003eUse the keyboard shortcuts or buttons in the toolbar above to navigate the transcript and audio. \u003cspan class=\"highlight\"\u003eAll your edits will be automatically saved\u003c/span\u003e but may not be immediately visible by others. Once enough people agree on the text of a particular line, that line will be visible to all and no longer editable.\u003c/p\u003e\n\n\u003cp class=\"text-center\"\u003e\u003ca class=\"button large start-play\"\u003eOkay, let's start\u003c/a\u003e\u003c/p\u003e\n","transcription-cheat-sheet.md":"\u003ch1\u003eCheat Sheet\u003c/h1\u003e\n\n\u003ctable class=\"cheat-sheet\"\u003e\n  \u003ctr\u003e\n    \u003cth\u003eSubject\u003c/th\u003e\n    \u003cth\u003eInstruction\u003c/th\u003e\n    \u003cth\u003eExamples\u003c/th\u003e\n  \u003c/tr\u003e\n  \u003ctr\u003e\n    \u003ctd\u003eContractions\u003c/td\u003e\n    \u003ctd\u003eTranscribe as you hear them\u003c/td\u003e\n    \u003ctd\u003e“Shoulda”, “Didn’t”\u003c/td\u003e\n  \u003c/tr\u003e\n  \u003ctr\u003e\n    \u003ctd\u003eNumbers\u003c/td\u003e\n    \u003ctd\u003eTranscribe as numerals\u003c/td\u003e\n    \u003ctd\u003e“11 West 40th Street”\u003cbr /\u003e“She was 40 years old.”\u003c/td\u003e\n  \u003c/tr\u003e\n  \u003ctr\u003e\n    \u003ctd\u003eFilled Pauses \u0026amp; Hesitations\u003c/td\u003e\n    \u003ctd\u003eIndicate with a % sign preceding the word\u003c/td\u003e\n    \u003ctd\u003e“%ah”, “%eh”, “%um”\u003c/td\u003e\n  \u003c/tr\u003e\n  \u003ctr\u003e\n    \u003ctd\u003eNoise\u003c/td\u003e\n    \u003ctd\u003eTranscribe in brackets; use descriptive language\u003c/td\u003e\n    \u003ctd\u003e“And then we [door slam]”\u003cbr /\u003e“So cold! [Brrrrr]”\u003c/td\u003e\n  \u003c/tr\u003e\n  \u003ctr\u003e\n    \u003ctd\u003ePartial words\u003c/td\u003e\n    \u003ctd\u003eIf someone stops speaking in the middle of a word, transcribe as much of the word as they say and follow it with a dash\u003c/td\u003e\n    \u003ctd\u003e“Tes- Testing”\u003cbr /\u003e“Absolu- Absolutely”\u003c/td\u003e\n  \u003c/tr\u003e\n  \u003ctr\u003e\n    \u003ctd\u003eHard-to-understand\u003c/td\u003e\n    \u003ctd\u003eFor speech that is difficult or impossible to understand, use double parentheses\u003c/td\u003e\n    \u003ctd\u003e“And she told me that ((I should just leave.))”\u003cbr /\u003e“Her name was ((inaudible))”\u003c/td\u003e\n  \u003c/tr\u003e\n\u003c/table\u003e\n"}};