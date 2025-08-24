document.addEventListener('DOMContentLoaded', function() {
    const quizContainer = document.querySelector('.quiz-container');
    const questionElement = document.querySelector('.question');
    const options = document.querySelectorAll('.options input');
    const labels = document.querySelectorAll('.options label');
    const resultElement = document.querySelector('.result');
    const timer = document.getElementById("timer");
    const username = localStorage.getItem("username");
    const greetUser = document.getElementById("greeting");
    greetUser.textContent = `Welcome ${username}`;

    const questions = [
        {
            question: '1. What is Microsoft Word primarily used for?',
            options: ['A) Creating spreadsheets', 'B) Creating presentations', 'C) Creating documents', 'D) Creating databases'],
            correct: 2
        },
        {
            question: '2. Which of the following is a feature of Microsoft Word?',
            options: ['A) Formulas', 'B) Chart', 'C) Table', 'D) Chart and Table'],
            correct: 3
        },
        {
            question: '3. What is the purpose of the "File" menu in Microsoft Word?',
            options: ['A) To format text', 'B) To edit documents', 'C) To insert images', 'D) To save and open documents'],
            correct: 3
        },
        {
            question: '4. How do you create a new document in Microsoft Word?',
            options: ['A) File > New', 'B) File > Open', 'C) File > Save', 'D) Home > New'],
            correct: 0
        },
        {
            question: '5. What is the function of the "Home" tab in Microsoft Word?',
            options: ['A) To insert tables and images', 'B) To format text and paragraphs', 'C) To save and print documents', 'D) To create headers and footers'],
            correct: 1
        },
        {
            question: '6. Which of the following is a way to select all text in a Microsoft Word document?',
            options: ['A) Ctrl + A', 'B) Ctrl + C', 'C) Ctrl + V', 'D) Ctrl + X'],
            correct: 0
        },
        {
            question: '7. What is the purpose of the "Undo" button in Microsoft Word?',
            options: ['A) To redo an action', 'B) To undo an action', 'C) To save a document', 'D) To print a document'],
            correct: 1
        },
        {
            question: '8. How do you save a Microsoft Word document?',
            options: ['A) File > Save', 'B) File > Open', 'C) Home > Save', 'D) Ctrl + save'],
            correct: 0
        },
        {
            question: '9. What is the file extension for Microsoft Word documents?',
            options: ['A) .xls', 'B) .docx', 'C) .pptx', 'D) .pdf'],
            correct: 1
        },
        {
            question: '10. How do you close a Microsoft Word document?',
            options: ['A) File > Cancel', 'B) File > Exit', 'C) Home > Close', 'D) Ctrl + W'],
            correct: 3
        },
        {
            question: '11. What is the purpose of the "Font" group in the Home tab?',
            options: ['A) To insert tables and images', 'B) To format text', 'C) To create headers and footers', 'D) To save and print documents'],
            correct: 1
        },
        {
            question: '12. How do you change the font size of selected text?',
            options: ['A) Home > Font group > Font Size', 'B) Insert > Font Size', 'C) File > Font Size', 'D) Ctrl + Shift + >'],
            correct: 0
        },
        {
            question: '13. What is the purpose of the "Alignment" buttons in the Home tab?',
            options: ['A) To format paragraphs', 'B) To insert tables and images', 'C) To create headers and footers', 'D) To save and print documents'],
            correct: 0
        },
        {
            question: '14. How do you apply bold formatting to selected text?',
            options: ['A) Ctrl + I', 'B) Ctrl + U', 'C) Ctrl + B', 'D) Ctrl + S'],
            correct: 2
        },
        {
            question: '15. What is the purpose of the "Line Spacing" button in the Home tab?',
            options: ['A) To format paragraphs', 'B) To adjust gap between text line', 'D) To create headers and footers', '3) To save and print documents'],
            correct: 1
        },
        {
            question: '16. How do you apply italic formatting to selected text?',
            options: ['A) Ctrl + I', 'B) Ctrl + B', 'C) Ctrl + U', 'D) Ctrl + S'],
            correct: 0
        },
        {
            question: '17. What is the purpose of the "Paragraph" group in the Home tab?',
            options: ['A) To insert tables and images', 'B) To format text', 'C) To format paragraphs', 'D) To create headers and footers'],
            correct: 2
        },
        {
            question: '18. How do you apply underline formatting to selected text?',
            options: ['A) Ctrl + B', 'B) Ctrl + I', '2C Ctrl + U', 'D) Ctrl + S'],
            correct: 2
        },
        {
            question: '19. What is the purpose of the "Styles" group in the Home tab?',
            options: ['A) To apply pre-designed styles', 'B) To format text', 'C) To format paragraphs', 'D) To create headers and footers'],
            correct: 0
        },
        {
            question: '20. How do you change the font color of selected text?',
            options: ['A) Insert > Font Color', 'B) Home > Font group > Font Color', 'C) File > Font Color', 'D) Ctrl + Shift + C'],
            correct: 1
        },
        {
            question: '21. What is the purpose of the "Find" feature in Microsoft Word?',
            options: ['A) To find specific text', 'B) To replace text', 'C) To format text', 'D) To insert images'],
            correct: 0
        },
        {
            question: '22. How do you use the "Replace" feature in Microsoft Word?',
            options: ['A) Home > Replace', 'B) Insert > Replace', 'C) File > Replace', 'D) Ctrl + H'],
            correct: 0
        },
        {
            question: '23. What is the purpose of the "Cut" button in Microsoft Word?',
            options: ['A) To copy selected text', 'B) To paste selected text', 'C) To cut selected text', 'D) To delete selected text'],
            correct: 2
        },
        {
            question: '24. How do you use the "Copy" feature in Microsoft Word?',
            options: ['A) Ctrl + C', 'B) Ctrl + X', 'C) Ctrl + V', 'D) Ctrl + A'],
            correct: 0
        },
        {
            question: '25. What is the purpose of the "Paste" button in Microsoft Word?',
            options: ['A) To copy selected text', 'B) To cut selected text', 'C) To paste copied text', 'D) To delete selected text'],
            correct: 2
        },
        {
            question: '26. How do you use the "Undo" feature multiple times in Microsoft Word?',
            options: ['A) Ctrl + Z', 'B) Ctrl + Y', 'C) Ctrl + Shift + Z', 'D) Clicking the "Undo" button multiple times'],
            correct: 0
        },
        {
            question: '27. What is the purpose of the "Redo" button in Microsoft Word?',
            options: ['A) To undo an action', 'B) To redo an action', 'C) To save a document', 'D) To print a document'],
            correct: 1
        },
        {
            question: '28. How do you insert a page break in Microsoft Word?',
            options: ['A) Insert > Page Break', 'B) Home > Page Break', 'C) File > Page Break', 'D) Ctrl + Enter'],
            correct: 0
        },
        {
            question: '29. What’s the default paper size in Word?',
            options: ['A) A4', 'B) Letter', 'C) Legal', 'D) Executive'],
            correct: 1
        },
        {
            question: '30. How can you protect a document with a password',
            options: ['A) To format paragraphs', 'B) To adjust gap between text line', 'C) To create headers and footers', 'D) To save and print documents'],
            correct: 1
        },
        {
            question: '31. What is the purpose of the "Line Spacing" button in the Home tab?',
            options: ['A) Review > Restrict Editing ', 'B) View > Protect', 'C) File > Info > Protect Document', 'D) Insert > Security'],
            correct: 1
        },
        {
            question: '32. What does "Justify" alignment do?',
            options: ['A) Aligns text left', 'B) Aligns text right', 'C) Aligns text both side', 'D) Centers text'],
            correct: 1
        },
        {
            question: '33. What is the keyboard shortcut to insert a hyperlink?',
            options: ['A) Ctrl + H ', 'B) Ctrl + K ', 'C) To  Ctrl + L', 'D) Ctrl + U  '],
            correct: 1
        },
        {
            question: '34. What does “Save As” allow you to do?',
            options: ['A) Save quickly ', 'B) Save a new copy  ', 'C) Update file ', 'D)  Save automatically  '],
            correct: 1
        },
        {
            question: '35. Which of these is NOT a text alignment option?',
            options: ['A) Left', 'B) Right', 'C) Center', 'D) Diagonal'],
            correct: 1
        },
        {
            question: '36. What happens when you press Ctrl + End?',
            options: ['A) Go to beginning of doc', 'B) Go to end of doc', 'C) Select whole doc', 'D) Print doc'],
            correct: 1
        },
        {
            question: '37. How do you insert a comment?',
            options: ['A) Insert > Note ', 'B) Review > Comment', 'C) Layout > Comment', 'D) File > Comment '],
            correct: 1
        },
        {
            question: '38. What does “AutoCorrect” do?',
            options: ['A) Replaces text', 'B) Checks grammar', 'C) Saves automatically', 'D) Aligns text'],
            correct: 1
        },
        {
            question: '39. What is the use of “Navigation Pane”?',
            options: ['A)Move between pages/headings', 'B) Add bookmarks', 'C) Search help', 'D) Format text'],
            correct: 1
        },
        {
            question: '40. What is the smallest unit of text formatting?',
            options: ['A) Font  ', 'B) Character', 'C) Line', 'D) Word'],
            correct: 1
        },
        {
            question: '41. Where do you insert symbols and special characters?',
            options: ['A) Insert > WordArt', 'B) Insert > Symbols', 'C) Layout > Text', 'D) Home > Font'],
            correct: 1
        },
        {
            question: '42. What is the maximum zoom level in Word?',
            options: ['A) 100% ', 'B)  200% ', 'C) 400%  ', 'D) 500%'],
            correct: 1
        },
        {
            question: '43. Which view is best for reading documents?',
            options: ['A) Print Layout', 'B) Read Mode', 'C) Web Layout', 'D) Draft'],
            correct: 1
        },
        {
            question: '44.What does Ctrl + F do?',
            options: ['A) Find', 'B)  Format', 'C) Font', 'D) Forward'],
            correct: 1
        },
        {
            question: '45. Where can you insert a watermark?',
            options: ['A) Insert tab', 'B) Review tab', 'C) Design tab ', 'D) Layout tab'],
            correct: 1
        },
        {
            question: '46. What does the shortcut Ctrl + P do?',
            options: ['A) Print', 'B) Paste', 'C) Preview', 'D) Protect'],
            correct: 1
        },
        {
            question: '47. What is the function of the Thesaurus tool?',
            options: ['A) Translate text', 'B) Check grammar', 'C) Find symbol', 'D) Count word'],
            correct: 1
        },
        {
            question: '48. What is the purpose of SmartArt in Word?',
            options: ['A)  Add graphs', 'B) Add pictures', 'C) Add diagrams', 'D) Add comments'],
            correct: 1
        },
        {
            question: '49. What is the shortcut for bold text?',
            options: ['A) Ctrl + U', 'B) Ctrl + I', 'C) Ctrl + D', 'D) Ctrl + B'],
            correct: 1
        },
        {
            question: '50. Which tab contains the “Margins” setting?',
            options: ['A) View', 'B) Insert', 'C) Layout', 'D) File'],
            correct: 1
        }
    ];


    let currentQuestion = 0;
    let score = 0;
    let userAnswers = new Array(questions.length).fill(null);

    function loadQuestion() {
        const current = questions[currentQuestion];
        questionElement.textContent = current.question;
        labels.forEach((label, index) => {
            label.textContent = current.options[index];
        });
        if (userAnswers[currentQuestion] !== null) {
            options.forEach((option, index) => {
                if (option.checked) {
                    userAnswers[currentQuestion] = index;
                }
            });
            options[userAnswers[currentQuestion]].checked = true;
        } else {
            options.forEach(option => option.checked = false);
        }
        resultElement.textContent = '';
    }

    loadQuestion();

    // Add previous and next buttons
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.classList.add('submit');
    quizContainer.appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.classList.add('submit');
    quizContainer.appendChild(nextButton);

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.classList.add('submit');
    quizContainer.appendChild(submitButton);

    prevButton.addEventListener('click', () => {
        if (currentQuestion > 0) {
            userAnswers[currentQuestion] = Array.from(options).findIndex(option => option.checked);
            currentQuestion--;
            loadQuestion();
        }
    });

    nextButton.addEventListener('click', () => {
        userAnswers[currentQuestion] = Array.from(options).findIndex(option => option.checked);
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            currentQuestion--;
        }
    });
    

    // Calculate and log the result
    function resultCal() {
        userAnswers[currentQuestion] = Array.from(options).findIndex(option => option.checked);
        score = 0;
        userAnswers.forEach((answer, index) => {
            if (answer === questions[index].correct) {
                score++;
            }
        });
        console.log(`Quiz finished! Your score is ${score}/${questions.length}`);
        prevButton.disabled = true;
        nextButton.disabled = true;
        submitButton.disabled = true;
        options.forEach(option => option.disabled = true);
        resultElement.textContent = '';

        clearInterval(countdown); /// stop timer when submitted
        window.open("../finish.html/finish.html", "_blank"); // Redirect to finish page
    }

    submitButton.addEventListener('click', resultCal);

    // Timer functionality

    let timeLeft = 30 * 60; // 30 minutes in seconds

    let countdown = setInterval(() => {
    timeLeft--;

    let minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    let seconds = String(timeLeft % 60).padStart(2, "0");

    timer.textContent = (`${minutes}:${seconds}`);

    if (timeLeft <= 0) {
        submitButton.click();
        clearInterval(countdown);

    }
    }, 1000); // run every 1 second

    // Initially disable previous button
    prevButton.disabled = true;

    // Enable/disable previous button based on current question
    function updatePrevButton() {
        if (currentQuestion === 0) {
            prevButton.disabled = true;
        } else {
            prevButton.disabled = false;
        }
    }

    // Call updatePrevButton after each question change
    prevButton.addEventListener('click', updatePrevButton);
    nextButton.addEventListener('click', updatePrevButton);
});