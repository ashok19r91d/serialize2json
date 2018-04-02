/*

    Title:          Serialize 2 json
    Author:         Ashok. RD. (ashok19r91d@gmail.com; in.linkedin.com/in/ashok-rd-296a47103)
    Date Release:   02 Apr 2018
    Date Updated:   02 Apr 2018
    Remarks:        Serialize HTML table to JSON object notation
    https://github.com/ashok19r91d/serialize2json
    
*/

function SerializeHtmlToJson() {
    // HTML Table
    $('table.json-table:not(.data-table)').each(function () {
        var result = "[";
        var table = $(this);
        var ignore = $(table).data('ignore');
        ignore = "," + ignore + ",";
        $(table).find('>tbody>tr').each(function () {
            var row = $(this);
            if (!$(row).hasClass('hidden')) {
                result += " {";
                var data = $(row).data();
                for (var dataattr in data)
                    if (!ignore.includes(dataattr))
                        result += "'" + dataattr + "' : '" + data[dataattr] + "', ";
                result += "}, ";
                result = result.replace(", }", " }");
            }
        });
        result += "]";
        result = result.replace(", ]", "]");
        $($(table).data('target')).val(result);
    });
    // DataTable - HTML5 & JS Plugin
    $('table.data-table.json-table:not(.limit-selected)').each(function () {
        var result = "[";
        var target = $(this).data('target');
        var table = $(this).DataTable();
        var ignore = $(this).data('ignore');
        ignore = "," + ignore + ",";
        table.rows().each(function (value, index) {
            $.each(value, function (ind, val) {
                var row = table.row(val).node();
                if (!$(row).hasClass('hidden')) {
                    result += " {";
                    var data = $(row).data();
                    for (var dataattr in data)
                        if (!ignore.includes(dataattr))
                            result += "'" + dataattr + "' : '" + data[dataattr] + "', ";
                    result += "}, ";
                    result = result.replace(", }", " }");
                }
            });
        });
        result += "]";
        result = result.replace(", ]", "]");
        $($(this).data('target')).val(result);
    });
    $('table.data-table.json-table.limit-selected').each(function () {
        var result = "[";
        var selclass = "selected";
        var target = $(this).data('target');
        var table = $(this).DataTable();
        var ignore = $(this).data('ignore');
        ignore = "," + ignore + ",";
        table.rows().each(function (value, index) {
            $.each(value, function (ind, val) {
                var row = table.row(val).node();
                if ($(row).hasClass(selclass) && !$(row).hasClass('hidden')) {
                    result += " {";
                    var data = $(row).data();
                    for (var dataattr in data)
                        if (!ignore.includes(dataattr))
                            result += "'" + dataattr + "' : '" + data[dataattr] + "', ";
                    result += "}, ";
                    result = result.replace(", }", " }");
                }
            });
        });
        result += "]";
        result = result.replace(", ]", "]");
        $($(this).data('target')).val(result);
    });
    // HTML Table
    $('table.json-col-table').each(function () {
        var result = "[";
        var table = $(this);
        var ignore = "," + $(table).data('ignore') + ",";
        var ignorecols = "," + $(table).data('ignore-cols') + ",";
        $(table).find('>tbody>tr').each(function () {
            var row = $(this); // Each Row
            if (!$(row).hasClass('hidden')) {
                $(row).find('>td').each(function () {
                    var col = $(this); // Each Column
                    var Index = ',' + ($(row).find('>td').index(col) + 1) + ',';
                    if (!ignorecols.includes(Index)) {
                        result += " {"; // Columns Not Ignored
                        var data = $(col).data();
                        for (var dataattr in data) // Each Attributes
                            if (!ignore.includes(dataattr))
                                result += "'" + dataattr + "' : '" + data[dataattr] + "', ";
                        result += "}, ";
                        result = result.replace(", }", " }");
                    }  // Each Column
                });
            }  // Each Row
        });
        result += "]";
        result = result.replace(", ]", "]");
        $($(table).data('target')).val(result);
    });
}
