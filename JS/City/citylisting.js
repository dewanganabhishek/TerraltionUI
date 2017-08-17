//call on Enter key
$(document).ready(function () {

    var isProcessing = false;
    $(document).on("click", ".editCity", function (e) {
        var cityId = $(this).closest('.cityEdit').find('.cityId').text();
        getCityDetails(cityId);
    });

    $(document).on("change", "#ddlCountry", function () {
        $(this).val();
        populateStateDropdDown("en", 3, $(this).val());

    });

    $(document).on("click", "#btnCityCancel", function (e) {
        cancelEdit();
    });

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
                    htmlResult = htmlResult + "<tr class='cityEdit'>";
                    htmlResult = htmlResult + "<td class='sorting_1 cityId'>" + result.data[i].Id + "</td>";
                    htmlResult = htmlResult + "<td class='title-width'>" + result.data[i].Title + '</td>';
                    htmlResult = htmlResult + '<td>' + result.data[i].StateTitle + '</td>';
                    htmlResult = htmlResult + '<td>' + result.data[i].CountryTitle + '</td>';

                    if (!result.data[i].IsActive) {
                        htmlResult = htmlResult + "<td><input type='checkbox'></td>";
                    } else {
                        htmlResult = htmlResult + "<td><input type='checkbox' checked='checked' ></td>";
                    }

                    htmlResult = htmlResult + '<td><span style="cursor:pointer" class="editCity glyphicon glyphicon-pencil"></span>&nbsp;&nbsp;<span style="cursor:pointer" class="glyphicon glyphicon-globe"></span></td>';
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
                        "searching": false,
                        "bInfo": false
                    });
                isProcessing = false;
            }).catch(function (result) {
                alert("Fail");
            });

    }

    function getCityDetails(cityid) {

        var apigClient = apigClientFactory.newClient();
        var body = {};
        var params = {
            fields: "all",
            id: Number(cityid),
            languagecode: "en"
        };
        var additionalParams = {};
        apigClient.cityDetailsGet(params, body, additionalParams)
            .then(function (result) {
            console.log(result);
                $('#cityTitle').val(result.data.Title);
                $('#displayTitle').val(result.data.CountryTitle + ", " + result.data.Title);
                $('#lattitude').val(result.data.Latitude);
                $('#longitude').val(result.data.Longitude);

                $('#example').hide(); $('.w3-bar').hide();
                $('#dataTables_info').hide();
                $('.divEdit').show();
                $('#isActive').prop('checked', result.data.IsActive);
                $("#altertnateNames").tagsinput('removeAll');
                $.each(result.data.AlternetNames, function (index, value) {
                    $('#altertnateNames').tagsinput('add', value);
                });

                $('#ddlCountryId').val(result.data.CountryId);
                $('#ddlStateId').val(result.data.StateId);
                
                populateCountryDropdDown("en", 2, cityid);
                populateStateDropdDown("en", 3, 0);

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

    function cancelEdit() {
        $('#example').show(); $('.w3-bar').show();
        $('#dataTables_info').show();
        $('.divEdit').hide();
    }

    function populateCountryDropdDown(languageCode, regiontype, regionId) {

        $("#ddlCountry").html('');
        $("#ddlCountry").append($("<option></option>").val('-1').html('--Select--'));

        var countrylist = populateRegionDropDown(languageCode, regiontype, regionId);
        if (countrylist != null) {
            countrylist.forEach(function (e) {
                if (Number(e.Id) === Number($('#ddlCountryId').val())) {
                    $("#ddlCountry").append($("<option selected=true></option>").val(e.Id).html(e.Title_en));
                } else {
                    $("#ddlCountry").append($("<option></option>").val(e.Id).html(e.Title_en));
                }
            });
        }
    }


    function populateStateDropdDown(languageCode, regiontype, regionId) {
        $("#ddlState").html('');
        $("#ddlState").append($("<option selected=true></option>").val('-1').html('--Select--'));
        
        var citylist = populateRegionDropDown(languageCode, regiontype, regionId);
        if (citylist != null) {
            citylist.forEach(function (e) {
                if (Number(e.Id) === Number($('#ddlStateId').val())) {
                    $("#ddlState").append($("<option selected=true></option>").val(e.Id).html(e.Title_en));
                } else {
                    $("#ddlState").append($("<option></option>").val(e.Id).html(e.Title_en));
                }
            });
        }
    }

    function populateRegionDropDown(languageCode, regiontype, regionId) {

        var baseUrl = "https://5ztzfhb2f6.execute-api.ap-south-1.amazonaws.com/Dev/lookup?";
        var region = Number(regiontype) == 1 ? "continent" : regiontype == 2 ? "country" : regiontype == 3 ? "state" : "city";
        var data = [{}];
        //alert(baseUrl + "region=" + region + "&regionId=" + regionId + "&languagecode=" + languageCode);

        $.ajax({
            url: baseUrl + "region=" + region + "&regionId=" + regionId + "&languagecode=" + languageCode,
            cache: false,
            type: "GET",
            async : false,
            success: function (response) {
                if (response.RegionList != null) {
                   data = response.RegionList;
                } 
            },
            error: function (xhr) {
                console.log("error:" + xhr);
            }
        });
        return data;
    }

});