function dayOfProgrammer(year) {
    let isLeap = false, calendarType = '', result = '';

    if (year === 1918) {
        result = "26.09.1918";

    } else {
        if (year < 1918) {
            calendarType = 'julian';
        } else if (year > 1918) {
            calendarType = 'gregorian';
        };

        function leapChecker() {
            if (calendarType === 'julian') {
                if (year % 4 === 0) {
                    isLeap = true;
                };
            } else {
                if (year % 400 === 0) {
                    isLeap = true;
                } else if ((year % 4 === 0) && (year % 100 !== 0)) {
                    isLeap = true;
                };
            };
            return isLeap;
        };

        if (leapChecker() === true) {
            result = `12.09.${year}`;
        } else if (leapChecker() === false) {
            result = `13.09.${year}`;
        };
    };

    console.log(result);
}
