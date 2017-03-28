define(function() {
    return {
        parseParams: function(str) {
            var tokens = str.split(':'),
                cols = tokens[1].split(',');

            return {
                labels: +tokens[0]-1,
                grouping: cols.map(function(stack) {
                    return stack.split('+').map(function(index) {
                        return +index-1;
                    });
                })
            }
        },
        parseData: function(str) {
            return str.replace(/;/g, '\n').split('\n').map(function(row, j) {
                return row.split(',').map(function(cell, i) {
                    return i && j ? cell.split('+').reduce(function(sum, term) {
                        return +term+sum;
                    }, 0) : cell;
                });
            });
        }
    };
});
