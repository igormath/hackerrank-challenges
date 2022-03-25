const timeConversion = (s) => {
    let amPm = '', slicedHour = '', sliceWithoutHour = '', formatedHour = '', sliceInt, hourPM, hourWithoutAMPM = '';
    amPm = s.slice(8);
    slicedHour = s.slice(0, 2);
    sliceWithoutHour = s.slice(2);

    if ((amPm === 'AM') && (slicedHour === '12')) {
        formatedHour = ('00' + sliceWithoutHour);
        hourWithoutAMPM = formatedHour.slice(0, 8);
        return hourWithoutAMPM;
    }
    else if (amPm === 'AM') {
        hourWithoutAMPM = s.slice(0, 8);
        return hourWithoutAMPM;
    }
    else if ((amPm === 'PM') && (slicedHour === '12')) {
        hourWithoutAMPM = s.slice(0, 8);
        return hourWithoutAMPM;
    }
    else if (amPm === 'PM') {
        sliceInt = parseInt(slicedHour, 10);
        hourPM = sliceInt + 12;
        formatedHour = (hourPM + sliceWithoutHour);
        hourWithoutAMPM = formatedHour.slice(0, 8);
        return hourWithoutAMPM;
    }
}
