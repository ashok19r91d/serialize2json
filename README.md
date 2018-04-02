# Serialize2JSON
Serialize standatd HTML table to JSON string using data-* attributes.

# How to Implement and Configure:-
 For any table requires JSON serialization add class `json-table`
 * .json-table must contain following attribute `data-target="jQuerySelector"`
 * .json-table must defined `<tbody>` tag.
 * .json-table rows (tr tags) should define json attributes and respective value using html5 data-* attributes.
 * .json-table may include data-ignore attribute to specify which are all data attribute which required to exclude from serialization.
 * Inside java script call `SerializeHtmlToJson()`;

# Sample Code HTML:-
    <table class="json-table" data-target="#jsonData" data-ignore="sortable,attr3">
        <tbody>
            <tr data-attr1="1.1" data-attr2="2.1" data-attr3="3.1">
                <td>Column1.1</td>
                <td>Column2.1</td>
            </tr>
            <tr data-attr1="1.2" data-attr2="2.2" data-attr3="3.2" data-attr4="4.2" data-sortable="true">
                <td>Column1.2</td>
                <td>Column2.2</td>
            </tr>
        </tbody>
    </table>

# Output:-
    [
        { "attr1" : "1.1", "attr2" : "2.1"},
        { "attr1" : "1.2", "attr2" : "2.2", "attr4" : "4.2"}
    ]

# Limitations:-
If you need to extend this plugin for table plugins (other than DataTable) you may need to destroy plugins before calling function.

# Where Results stored:-
Serialized JSON Output to set as value to jQuery control specified in `data-target = ""`;
for example's case it's saved in object `$('#jsonData')`; can be retrieved with following code `$('#jsonData').val()`

