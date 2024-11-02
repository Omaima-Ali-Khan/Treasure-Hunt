function checkAnswer(answer, location) {
    let correctAnswer;

    switch (location) {
        case 'ruins':
            correctAnswer = 'The Valley of Snakes';
            break;
        case 'cave':
            correctAnswer = 'The Lost Relic';
            break;
        case 'desert':
            correctAnswer = 'The Forgotten Tomb';
            break;
    }

    if (answer === correctAnswer) {
        document.getElementById('effect').innerText = "🎉 Correct! Moving to the next adventure...";
        document.getElementById('effect').style.display = 'block';
        setTimeout(() => {
            // Redirect to the next location or question page
            if (location === 'ruins') {
                window.location.href = 'cave.html';
            } else if (location === 'cave') {
                window.location.href = 'desert.html';
            } else {
                window.location.href = 'index.html'; // Restart or finish
            }
        }, 2000);
    } else {
        document.getElementById('effect').innerText = "🚪🚪 Incorrect answer! Try again.";
        document.getElementById('effect').style.display = 'block';
        setTimeout(() => {
            document.getElementById('effect').style.display = 'none';
        }, 3000);
    }
}
