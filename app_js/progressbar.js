
    const input = document.querySelector('.input');
    const progress = document.querySelector('.progress-done');

    const changewidth = () => {
        // Get the value from the input field and ensure it's between 0 and 100
        let finalvalue = parseFloat(input.value);
        finalvalue = isNaN(finalvalue) ? 0 : Math.max(0, Math.min(100, finalvalue));

        // Update the width and innerText of the progress bar
        progress.style.width = `${finalvalue}%`;
        progress.innerText = finalvalue === 0 ? '' : `${Math.round(finalvalue)}%`;

    };

    input.addEventListener('input', changewidth);
