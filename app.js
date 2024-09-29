const ageCalculate = () => {
    const today = new Date();
    const inputDate = new Date(document.getElementById("date-input").value);

    const birthDetails = {
        date: inputDate.getDate(),
        month: inputDate.getMonth() + 1,
        year: inputDate.getFullYear(),
    };
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDate = today.getDate();


    if (isFututreData(birthDetails, currentYear, currentMonth, currentDate)) {
        alert("It cant be empty");
        displayResult("-", "-", "-");
        return;
    }
    const { years, months, days } = calculateAge(
        birthDetails,
        currentYear,
        currentMonth,
        currentDate
    );

    displayResult(days, months, years);

};
const isFututreData = (birthDetails,
    currentYear,
    currentMonth,
    currentDate
) => {
    return (
        birthDetails.year > currentYear ||
        (birthDetails.year === currentYear && (
            birthDetails.month
        ))
    )

}

document.getElementById("calc-age-btn").
    addEventListener("click", ageCalculate);