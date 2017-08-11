//call on Enter key
$(document).ready(function () {

    var isProcessing = false;

    $('.prev').on('click', function () {
        loadingTable('example');
        getCityList('prev');
        setTimeout(function () {
            $('.table-loading-overlay').remove();
        }, 100);


    });

    $('.next').on('click', function () {
        loadingTable('example');
        getCityList('next');
        setTimeout(function () {
            $('.table-loading-overlay').remove();
        }, 100);

    });

    $("#txtSearchByTitle").keyup(function () {
        if (!isProcessing) {
            getCityList('');
        }

    });

    getCityList('');

    function getCityList(obj) {
        isProcessing = true;
        var pageIndex = Number($('#pageindex').val());;

        if (obj != undefined && obj != "" && pageIndex >= 0) {
            if (obj == "prev") {
                if (pageIndex == 0) {
                    return false;
                }
                pageIndex = pageIndex - 1;
            } else {
                pageIndex = pageIndex + 1;
            }
        }
        $('#pageindex').val(pageIndex);


        if ($.fn.dataTable.isDataTable('#example')) {
            var table = $('#example').DataTable();
            table.destroy();
        }

        var apigClient = apigClientFactory.newClient();
        var params = {};
        var body = {
            "CountryId": 0,
            "Id": 0,
            "LanguageCode": "en",
            "OrderBy": "Id",
            "Size": 10,
            "SortDirection": "asc",
            "Start": pageIndex == 0 ? 0 : (10 * pageIndex) + 1,
            "Title": $("#txtSearchByTitle").val()
        };
        var additionalParams = {};
        apigClient.cityListPost(params, body, additionalParams)
            .then(function (result) {

                var htmlResult = "";
                $('.datatableContent').html('');
                for (var i = 0; i < result.data.length; i++) {
                    htmlResult = htmlResult + "<tr>";
                    htmlResult = htmlResult + "<td class='sorting_1'>" + result.data[i].Id + "</td>";
                    htmlResult = htmlResult + "<td class='title-width'>" + result.data[i].Title + '</td>';
                    htmlResult = htmlResult + '<td>' + result.data[i].StateTitle + '</td>';
                    htmlResult = htmlResult + '<td>' + result.data[i].CountryTitle + '</td>';

                    if (!result.data[i].IsActive) {
                        htmlResult = htmlResult + "<td><input type='checkbox'></td>";
                    } else {
                        htmlResult = htmlResult + "<td><input type='checkbox' checked='checked' ></td>";
                    }

                    //htmlResult = htmlResult + '<td></td>';
                    htmlResult = htmlResult + '</tr>';
                    $('#example').append(htmlResult);
                    htmlResult = "";
                }


                $('#example')
                    .on('page.dt', function (e) { getCityList(); })
                    .on('length.dt', function (e, settings, len) {
                        console.log('New page length: ' + len);
                    })
                    .DataTable({
                        "paging": false,
                        "processing": true,
                        "serverSide": false,
                    });
                isProcessing = false;
            }).catch(function (result) {
                alert("Fail");
            });

    }

    function loadingTable(divId) {

        var html = " <div class='table-loading-overlay'>"
        + " <div class='table-loading-inner'>"
        + "<div class=\"col-xs-4 col-xs-offset-4\">"
        + "<div class=\"progress\"> "
        + "<div class=\"progress-bar progress-bar-striped progress-bar-streit active\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%\">"
        + "        <span class=\"sr-only\">Loading...</span>"
        + "    </div>"
        + "    </div>"
        + " </div>"
        + " </div>"
        + " </div>";

        $('#' + divId).append(html);
        $('.table-loading-overlay').css('height', $('#' + divId).height() + 'px');
        $('.table-loading-inner').css('padding-top', ($('#' + divId).height() / 2) + 'px');
    }

});