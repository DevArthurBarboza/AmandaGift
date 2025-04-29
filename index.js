const firstDate = new Date(2024, 2, 24);
const officialStart = new Date(2024, 8, 24);

const firstDateToNow = new Date(firstDate.getTime() - (new Date()).getTime());
const officialStartToNow = new Date(officialStart.getTime() - (new Date()).getTime());