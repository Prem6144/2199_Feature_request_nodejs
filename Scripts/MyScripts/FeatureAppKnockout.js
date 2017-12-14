/// <reference path="../jquery-1.9.1.intellisense.js" />
/// <reference path="../bootstrap-datetimepicker.js" />
/// <reference path="../knockout-3.4.2.js" />

$(document).ready(function () {
    ko.applyBindings(new FeatureAppModel());
});

function FeatureAppModel(items) {
    var self = this;
    self.title = ko.observable("");
    self.clients = ko.observableArray(GetClients());
    self.selectedClient = ko.observable("");
    self.productAreas = ko.observableArray(GetProductAreas());
    self.selectedProductArea = ko.observable("");
    self.priority = ko.observableArray(GetPriorities());
    self.selectedPriority = ko.observable("");
    self.targetDate = ko.observable("");
    self.description = ko.observable("");
    self.featuresList = ko.observableArray([]);

    self.createPage = function () {
        window.location.href = "CreateFeature.htm";
    }
    function getFeatures() {
        self.featuresList(featureAppJson);
    }
    getFeatures();
}

