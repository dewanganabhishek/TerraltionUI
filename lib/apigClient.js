/*
 * Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

var apigClientFactory = {};
apigClientFactory.newClient = function (config) {
    var apigClient = { };
    if(config === undefined) {
        config = {
            accessKey: '',
            secretKey: '',
            sessionToken: '',
            region: '',
            apiKey: undefined,
            defaultContentType: 'application/json',
            defaultAcceptType: 'application/json'
        };
    }
    if(config.accessKey === undefined) {
        config.accessKey = '';
    }
    if(config.secretKey === undefined) {
        config.secretKey = '';
    }
    if(config.apiKey === undefined) {
        config.apiKey = '';
    }
    if(config.sessionToken === undefined) {
        config.sessionToken = '';
    }
    if(config.region === undefined) {
        config.region = 'us-east-1';
    }
    //If defaultContentType is not defined then default to application/json
    if(config.defaultContentType === undefined) {
        config.defaultContentType = 'application/json';
    }
    //If defaultAcceptType is not defined then default to application/json
    if(config.defaultAcceptType === undefined) {
        config.defaultAcceptType = 'application/json';
    }

    
    // extract endpoint and path from url
    var invokeUrl = 'https://5ztzfhb2f6.execute-api.ap-south-1.amazonaws.com/Dev';
    var endpoint = /(^https?:\/\/[^\/]+)/g.exec(invokeUrl)[1];
    var pathComponent = invokeUrl.substring(endpoint.length);

    var sigV4ClientConfig = {
        accessKey: config.accessKey,
        secretKey: config.secretKey,
        sessionToken: config.sessionToken,
        serviceName: 'execute-api',
        region: config.region,
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var authType = 'NONE';
    if (sigV4ClientConfig.accessKey !== undefined && sigV4ClientConfig.accessKey !== '' && sigV4ClientConfig.secretKey !== undefined && sigV4ClientConfig.secretKey !== '') {
        authType = 'AWS_IAM';
    }

    var simpleHttpClientConfig = {
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var apiGatewayClient = apiGateway.core.apiGatewayClientFactory.newClient(simpleHttpClientConfig, sigV4ClientConfig);
    
    
    
    apigClient.airportAddPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var airportAddPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/airport/add').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(airportAddPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.airportAddOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var airportAddOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/airport/add').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(airportAddOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.airportDetailsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['id', 'languagecode', 'fields'], ['body']);
        
        var airportDetailsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/airport/details').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['id', 'languagecode', 'fields']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(airportDetailsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.airportDetailsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var airportDetailsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/airport/details').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(airportDetailsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.airportListPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var airportListPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/airport/list').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(airportListPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.airportListOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var airportListOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/airport/list').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(airportListOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.airportPublishPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var airportPublishPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/airport/publish').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(airportPublishPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.airportPublishOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var airportPublishOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/airport/publish').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(airportPublishOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.airportUpdatePost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var airportUpdatePostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/airport/update').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(airportUpdatePostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.airportUpdateOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var airportUpdateOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/airport/update').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(airportUpdateOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.areaAddPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var areaAddPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/area/add').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(areaAddPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.areaAddOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var areaAddOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/area/add').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(areaAddOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.areaDetailsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['fields', 'id', 'languagecode'], ['body']);
        
        var areaDetailsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/area/details').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['fields', 'id', 'languagecode']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(areaDetailsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.areaDetailsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var areaDetailsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/area/details').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(areaDetailsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.areaListPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var areaListPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/area/list').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(areaListPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.areaListOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var areaListOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/area/list').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(areaListOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.areaPublishPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var areaPublishPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/area/publish').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(areaPublishPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.areaPublishOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var areaPublishOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/area/publish').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(areaPublishOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.areaUpdatePost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var areaUpdatePostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/area/update').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(areaUpdatePostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.areaUpdateOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var areaUpdateOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/area/update').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(areaUpdateOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cityAddPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var cityAddPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/city/add').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cityAddPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cityAddOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var cityAddOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/city/add').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cityAddOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cityDetailsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['fields', 'id', 'languagecode'], ['body']);
        
        var cityDetailsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/city/details').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['fields', 'id', 'languagecode']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cityDetailsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cityDetailsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var cityDetailsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/city/details').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cityDetailsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cityListPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var cityListPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/city/list').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cityListPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cityListOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var cityListOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/city/list').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cityListOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cityPublishPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var cityPublishPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/city/publish').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cityPublishPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cityPublishOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var cityPublishOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/city/publish').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cityPublishOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cityUpdatePost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var cityUpdatePostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/city/update').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cityUpdatePostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cityUpdateOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var cityUpdateOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/city/update').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cityUpdateOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.continentAddPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var continentAddPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/continent/add').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(continentAddPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.continentAddOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var continentAddOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/continent/add').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(continentAddOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.continentDetailsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var continentDetailsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/continent/details').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(continentDetailsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.continentDetailsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var continentDetailsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/continent/details').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(continentDetailsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.continentListPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var continentListPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/continent/list').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(continentListPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.continentListOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var continentListOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/continent/list').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(continentListOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.continentPublishPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var continentPublishPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/continent/publish').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(continentPublishPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.continentPublishOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var continentPublishOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/continent/publish').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(continentPublishOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.continentUpdatePost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var continentUpdatePostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/continent/update').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(continentUpdatePostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.continentUpdateOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var continentUpdateOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/continent/update').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(continentUpdateOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.countryAddPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var countryAddPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/country/add').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(countryAddPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.countryAddOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var countryAddOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/country/add').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(countryAddOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.countryDetailsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['fields', 'id', 'languagecode'], ['body']);
        
        var countryDetailsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/country/details').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['fields', 'id', 'languagecode']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(countryDetailsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.countryDetailsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var countryDetailsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/country/details').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(countryDetailsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.countryListPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var countryListPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/country/list').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(countryListPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.countryListOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var countryListOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/country/list').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(countryListOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.countryPublishPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var countryPublishPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/country/publish').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(countryPublishPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.countryPublishOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var countryPublishOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/country/publish').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(countryPublishOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.countryUpdatePost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var countryUpdatePostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/country/update').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(countryUpdatePostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.countryUpdateOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var countryUpdateOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/country/update').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(countryUpdateOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.lookupGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['region', 'languagecode', 'id'], ['body']);
        
        var lookupGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/lookup').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['region', 'languagecode', 'id']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(lookupGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.lookupOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var lookupOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/lookup').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(lookupOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.poiAddPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var poiAddPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/poi/add').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(poiAddPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.poiAddOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var poiAddOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/poi/add').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(poiAddOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.poiDetailsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['fields', 'id', 'languagecode'], ['body']);
        
        var poiDetailsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/poi/details').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['fields', 'id', 'languagecode']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(poiDetailsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.poiDetailsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var poiDetailsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/poi/details').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(poiDetailsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.poiListPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var poiListPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/poi/list').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(poiListPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.poiListOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var poiListOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/poi/list').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(poiListOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.poiPublishPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var poiPublishPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/poi/publish').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(poiPublishPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.poiPublishOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var poiPublishOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/poi/publish').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(poiPublishOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.poiUpdatePost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var poiUpdatePostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/poi/update').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(poiUpdatePostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.poiUpdateOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var poiUpdateOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/poi/update').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(poiUpdateOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.stateAddPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var stateAddPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/state/add').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(stateAddPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.stateAddOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var stateAddOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/state/add').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(stateAddOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.stateDetailsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['fields', 'id', 'languagecode'], ['body']);
        
        var stateDetailsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/state/details').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['fields', 'id', 'languagecode']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(stateDetailsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.stateDetailsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var stateDetailsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/state/details').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(stateDetailsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.stateListPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var stateListPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/state/list').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(stateListPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.stateListOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var stateListOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/state/list').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(stateListOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.statePublishPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var statePublishPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/state/publish').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(statePublishPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.statePublishOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var statePublishOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/state/publish').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(statePublishOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.stateUpdatePost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var stateUpdatePostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/state/update').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(stateUpdatePostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.stateUpdateOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var stateUpdateOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/state/update').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(stateUpdateOptionsRequest, authType, additionalParams, config.apiKey);
    };
    

    return apigClient;
};
