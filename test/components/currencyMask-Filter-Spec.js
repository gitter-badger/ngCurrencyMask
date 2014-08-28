(function () {
	'use strict';

	var MODULE_NAME = 'ngCurrencyMask/Filter/currencyMask',
	MODULE_DEPENDENCIES = [
		'ngCurrencyMask'
	],
	MODULE_CONTROLLERS = [],
	MODULE_DIRECTIVES = [],
	MODULE_FILTERS = [
		'currencyMask'
	];

	describe(MODULE_NAME + ' module', function () {
		beforeEach(module(MODULE_NAME));

		MODULE_DEPENDENCIES.forEach(function (dependency) {
			beforeEach(module(dependency));
		});

		describe('filters', function () {
			describe('currencyMask', function () {
				var $filter, currencyMaskFilter;

				beforeEach(inject(function ($injector) {
					$filter = $injector.get('$filter');
					currencyMaskFilter = $filter('currencyMask');
				}));

				it('should mask the input', function () {
					var maskedValue = currencyMaskFilter(1000, 'mask');

					expect(maskedValue).toBe('R$ 10,00');
				});

				it('should unmask the input', function () {
					var unmaskedValue = currencyMaskFilter('R$ 10,00', 'unmask');
					unmaskedValue = Number(unmaskedValue);

					expect(unmaskedValue).toBe(1000);
				});
			});
		});
	});
})();