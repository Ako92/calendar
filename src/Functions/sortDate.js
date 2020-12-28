export function sortDateComparator(a, b) {
    var dateA = a.currentDate.getTime();
    var dateB = b.currentDate.getTime();
    return dateA > dateB ? 1 : -1;
  }
  