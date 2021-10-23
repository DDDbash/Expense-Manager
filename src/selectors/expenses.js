import moment from 'moment';

const selectExpenses = (expenses, { text, categorizedBy, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAt = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAt, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAt, 'day') : true;
        const category = categorizedBy.toLowerCase() === 'all category' ? true : expense.category === categorizedBy;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch && category;
    }).sort((i, j) => {
        if (sortBy === 'dateAscending') {
            return i.createdAt < j.createdAt ? -1 : 1;
        } else if (sortBy === 'dateDescending') {
            return i.createdAt < j.createdAt ? 1 : -1;
        } else if (sortBy === 'amountDescending') {
            return i.amount < j.amount ? 1 : -1;
        } else if (sortBy === 'amountAscending') {
            return i.amount < j.amount ? -1 : 1;
        }
    });
};

export default selectExpenses;