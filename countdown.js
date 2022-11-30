const storeOpening = new Date("Dec 19, 2022 17:00:00");

        setCountdown(storeOpening);
        setInterval(() => {
            setCountdown(storeOpening);
        }, 1000);
        function setCountdown(countingDownTime) {
            let now = new Date();
            let timeLeft = countingDownTime - now;

            let second = Math.floor(timeLeft / 1000);

            let minutes = Math.floor(second / 60);

            let hours = Math.floor(minutes / 60);

            let days = Math.floor(hours / 24);
            

            let daysToDisplay = days;
            let hoursToDisplay = hours % 24;
            let minutesToDisplay = minutes % 60;
            let secondsToDisplay = second % 60;

            const daysElement = document.getElementById("days");
            const hoursElement = document.getElementById("hours");
            const minutesElement = document.getElementById("minutes");
            const secondsElement = document.getElementById("seconds");

            daysElement.innerHTML = daysToDisplay;
            hoursElement.innerHTML = hoursToDisplay;
            minutesElement.innerHTML = minutesToDisplay;
            secondsElement.innerHTML = secondsToDisplay;
        }
