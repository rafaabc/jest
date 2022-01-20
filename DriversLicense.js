function isAbleToDrive(age, hasValidDriversLicense) {
    const warningMessage = 'You are NOT able to drive';
    const successMessage = 'You are able to drive';

    if (age >= 18 && hasValidDriversLicense) {
        return successMessage;
    } else {
        return warningMessage
    }
}

module.exports = isAbleToDrive;