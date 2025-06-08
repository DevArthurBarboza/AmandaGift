function getDateDiff(fromDate, toDate) {
    let years = toDate.getFullYear() - fromDate.getFullYear();
    let months = toDate.getMonth() - fromDate.getMonth();
    let days = toDate.getDate() - fromDate.getDate();

    if (days < 0) {
        // Subtrai um mês e calcula o número de dias do mês anterior
        months--;
        const prevMonth = new Date(toDate.getFullYear(), toDate.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        months += 12;
        years--;
    }

    return { years, months, days };
}

// Suas datas
const firstDate = new Date('2/24/2024');
const officialStart = new Date('8/24/2024');
const now = new Date();

// Diferenças
const firstDateDiff = getDateDiff(firstDate, now);
const officialStartDiff = getDateDiff(officialStart, now);

// Exibindo os valores no HTML
const timeTogetherValueElement = document.getElementById('official-start-value');
const firstDateElement = document.getElementById('first-date-diff');

timeTogetherValueElement.innerText = `${officialStartDiff.years} anos, ${officialStartDiff.months} meses, ${officialStartDiff.days} dias`;
firstDateElement.innerText = `${firstDateDiff.years} anos, ${firstDateDiff.months} meses, ${firstDateDiff.days} dias`;
