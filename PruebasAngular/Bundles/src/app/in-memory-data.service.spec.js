"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var in_memory_data_service_1 = require("./in-memory-data.service");
describe('InMemoryDataService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [in_memory_data_service_1.InMemoryDataService]
        });
    });
    it('should be created', testing_1.inject([in_memory_data_service_1.InMemoryDataService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=in-memory-data.service.spec.js.map