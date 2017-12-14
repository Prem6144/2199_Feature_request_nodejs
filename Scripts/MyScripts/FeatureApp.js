/// <reference path="../jquery-1.9.1.intellisense.js" />
/// <reference path="../bootstrap-datetimepicker.js" />
/// <reference path="../knockout-3.4.2.js" />
var productJson = [
        { 'id': 1, 'name': 'Policies' },
        { 'id': 2, 'name': 'Billing' },
        { 'id': 3, 'name': 'Claims' },
        { 'id': 4, 'name': 'Reports' }
];

var priorityJson = [
        { 'id': 1, 'name': '1' },
        { 'id': 2, 'name': '2' },
        { 'id': 3, 'name': '3' },
        { 'id': 4, 'name': '4' }
];

var clientJson = [
    { 'id': 1, 'name': 'Client A' },
    { 'id': 2, 'name': 'Client B' },
    { 'id': 3, 'name': 'Client C' },
    { 'id': 4, 'name': 'Client D' }
];

var featureAppJson = [
    { 'id': 1, 'title': 'Test Feature1', 'description': 'We are testing the request feature api 1', 'client': 'Client A', 'client_priority': '1', 'target_date': '2017-12-25', 'product_area': 'Policies' },
    { 'id': 2, 'title': 'Test Feature2', 'description': 'We are testing the request feature api 2', 'client': 'Client B', 'client_priority': '2', 'target_date': '2017-12-24', 'product_area': 'Billing' },
    { 'id': 3, 'title': 'Test Feature3', 'description': 'We are testing the request feature api 3', 'client': 'Client C', 'client_priority': '3', 'target_date': '2017-12-23', 'product_area': 'Claims' },
    { 'id': 4, 'title': 'Test Feature4', 'description': 'We are testing the request feature api 4', 'client': 'Client D', 'client_priority': '4', 'target_date': '2017-12-22', 'product_area': 'Reports' },
    { 'id': 5, 'title': 'Test Feature5', 'description': 'We are testing the request feature api 5', 'client': 'Client A', 'client_priority': '5', 'target_date': '2017-12-21', 'product_area': 'Policies' },
    { 'id': 6, 'title': 'Test Feature6', 'description': 'We are testing the request feature api 6', 'client': 'Client B', 'client_priority': '6', 'target_date': '2017-12-20', 'product_area': 'Billing' },
    { 'id': 7, 'title': 'Test Feature7', 'description': 'We are testing the request feature api 7', 'client': 'Client C', 'client_priority': '7', 'target_date': '2017-12-19', 'product_area': 'Claims' },
    { 'id': 8, 'title': 'Test Feature8', 'description': 'We are testing the request feature api 8', 'client': 'Client D', 'client_priority': '8', 'target_date': '2017-12-18', 'product_area': 'Reports' },
    { 'id': 9, 'title': 'Test Feature9', 'description': 'We are testing the request feature api 9', 'client': 'Client A', 'client_priority': '9', 'target_date': '2017-12-17', 'product_area': 'Policies' },
    { 'id': 10, 'title': 'Test Feature10', 'description': 'We are testing the request feature api 10', 'client': 'Client B', 'client_priority': '10', 'target_date': '2017-12-16', 'product_area': 'Billing' }
];

$(document).ready(function () {
    init();
});

function init() {
    initializeControls();

}

function initializeControls() {
    initializeDatePicker();
    initilaizeGridWithDefaultData();
}

function initializeDatePicker() {
    $('#dvTargetDate').datepicker({
        autoclose: true,
        format: "dd/mm/yyyy"
    });
}

function initilaizeGridWithDefaultData() {
  
}

function initFeatureApp() {
    var emptyJson = {
        'id': 1, 'title': 'Test Feature Request', 'description': 'We are testing the request feature api', 'client': 'Client A',
        'client_priority': '1', 'target_date': '2017-12-25', 'product_area': 'Policies'
    };
}


function GetClients() {
    return clientJson;
};


function GetProductAreas() {
    return productJson;
}

function GetPriorities() {
    return priorityJson;
}