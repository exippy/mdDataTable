angular.module("mdtTemplates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/main/templates/generateTable.html","<md-virtual-repeat-container class=\"md-virtual-repeat-container\" ng-if=\"virtualRepeat\">\n    <table cellpadding=\"0\" cellspacing=\"0\">\n        <thead mdt-generated-header-row></thead>\n        <tbody ng-include src=\"\'/main/templates/rows/generateRowsVirtualRepeat.html\'\"></tbody>\n    </table>\n</md-virtual-repeat-container>\n\n<table ng-if=\"!virtualRepeat\" cellpadding=\"0\" cellspacing=\"0\">\n    <thead mdt-generated-header-row></thead>\n    <tbody ng-include src=\"\'/main/templates/rows/generateRows.html\'\"></tbody>\n</table>\n");
$templateCache.put("/main/templates/largeEditDialog.html","<md-dialog style=\"min-width: 300px;\" layout-padding>\n    <md-dialog-content style=\"margin-left:16px;margin-right:16px;\" layout-align=\"column\">\n        <form ng-submit=\"saveRow()\" name=\"editFieldForm\">\n            <h2>{{cellData.attributes.editableFieldTitle}}</h2>\n            <md-input-container md-no-float style=\"margin-bottom:0;width:100%\">\n\n                <!-- TODO getting placeholder -->\n                <input type=\"text\"\n                       ng-model=\"cellData.value\"\n                       placeholder=\"\"\n                       md-maxlength=\"{{cellData.attributes.editableFieldMaxLength}}\" />\n            </md-input-container>\n        </form>\n    </md-dialog-content>\n\n    <md-dialog-actions>\n        <md-button class=\"md-raised md-primary\" ng-click=\"saveRow()\">{{mdtTranslations.largeEditDialog.saveButtonLabel}}</md-button>\n        <md-button class=\"md-raised\" ng-click=\"cancel()\">{{mdtTranslations.largeEditDialog.cancelButtonLabel}}</md-button>\n    </md-dialog-actions>\n</md-dialog>\n");
$templateCache.put("/main/templates/mdtAlternateHeaders.html","<div class=\"mdt-header-alternate\" layout=\"row\" layout-align=\"start center\">\n    <span class=\"alternate-text\" flex>{{getNumberOfSelectedRows()}} item selected</span>\n    <md-button class=\"md-icon-button md-primary\" ng-click=\"deleteSelectedRows()\" aria-label=\"Delete selected rows\">\n        <ng-md-icon icon=\"delete\" size=\"24\"></ng-md-icon>\n    </md-button>\n\n    <md-button class=\"md-icon-button md-primary\" aria-label=\"More options\">\n        <ng-md-icon icon=\"more_vert\" size=\"24\"></ng-md-icon>\n    </md-button>\n</div>");
$templateCache.put("/main/templates/mdtCardFooter.html","<div class=\"mdt-footer\" layout=\"row\" ng-show=\"isPaginationEnabled()\">\n    <div class=\"mdt-pagination\"\n         layout=\"row\"\n         layout-align=\"end center\"\n         flex>\n\n        <span layout-margin>{{mdtTranslations.rowsPerPage}}</span>\n        <md-input-container>\n            <md-select ng-model=\"rowsPerPage\" aria-label=\"rows per page\">\n                <md-option ng-value=\"pageSize\" ng-repeat=\"pageSize in mdtPaginationHelper.rowsPerPageValues\">{{pageSize}}</md-option>\n            </md-select>\n        </md-input-container>\n\n        <span layout-margin>\n            <span ng-if=\"mdtPaginationHelper.getTotalRowsCount() != 0\" style=\"margin:0;\">{{mdtPaginationHelper.getStartRowIndex()+1}}-</span>{{mdtPaginationHelper.getEndRowIndex()+1}} of {{mdtPaginationHelper.getTotalRowsCount()}}\n        </span>\n\n        <md-button class=\"md-icon-button md-primary\" ng-class=\"{\'md-inactive\': !mdtPaginationHelper.hasPreviousPage()}\" aria-label=\"Previous page\" ng-click=\"mdtPaginationHelper.previousPage()\">\n            <ng-md-icon icon=\"keyboard_arrow_left\" size=\"24\"></ng-md-icon>\n        </md-button>\n\n        <md-button class=\"md-icon-button md-primary\" ng-class=\"{\'md-inactive\': !mdtPaginationHelper.hasNextPage()}\" aria-label=\"Next page\" ng-click=\"mdtPaginationHelper.nextPage()\">\n            <ng-md-icon icon=\"keyboard_arrow_right\" size=\"24\"></ng-md-icon>\n        </md-button>\n    </div>\n</div>");
$templateCache.put("/main/templates/mdtCardHeader.html","<div class=\"mdt-header\" layout=\"row\" layout-align=\"start center\" ng-show=\"isTableCardEnabled\">\n    <span flex>{{tableCard.title}}</span>\n<!--\n    <md-button class=\"md-icon-button md-primary\" aria-label=\"Filter\">\n        <ng-md-icon icon=\"filter_list\" size=\"24\"></ng-md-icon>\n    </md-button>\n    <md-button class=\"md-icon-button md-primary\" aria-label=\"More options\">\n        <ng-md-icon icon=\"more_vert\" size=\"24\"></ng-md-icon>\n    </md-button>\n-->\n\n    <!-- columnSelectorFeature -->\n    <md-button class=\"md-icon-button md-primary mdt-column-chooser-button\"\n               aria-label=\"Choose columns\"\n               ng-if=\"::columnSelectorFeature.isEnabled\"\n               ng-click=\"handleColumnChooserButtonClick()\">\n        <ng-md-icon icon=\"settings\" size=\"24\"></ng-md-icon>\n    </md-button>\n\n    <mdt-column-selector ng-if=\"columnSelectorFeature.isEnabled && columnSelectorFeature.isActive\"></mdt-column-selector>\n</div>");
$templateCache.put("/main/templates/mdtCheckboxColumnFilter.html","<div class=\"filter-dropdown\">\n    <div class=\"md-whiteframe-z2\">\n        <md-content class=\"md-body-1\">\n            <div layout=\"row\" layout-align=\"end center\" class=\"b-b p-smd md-caption\" ng-if=\"::headerRowData.columnSort.isEnabled\">\n                <a href=\"#\" ng-click=\"sortingCallback($event, sortingData)\">Sort A-Z <mdt-sorting-icons size=\"20\" data=\"sortingData\" class=\"p-l-sm\"></mdt-sorting-icons></a>\n            </div>\n\n            <div layout=\"row\" layout-align=\"start center\" class=\"selectall_clearall p-l-md p-t-md p-b-sm\">\n                <a href=\"#\" ng-click=\"selectAll($event)\" ng-class=\"{\'disabled\' : selectedItems.length === selectableItems.length}\">Select all</a> <span>-</span> <a href=\"#\" ng-class=\"{\'disabled\' : selectedItems.length === 0}\" ng-click=\"clearAll($event)\">Clear</a>\n\n                <div class=\"selected_items p-r-md\" flex ng-if=\"selectedItems.length\">{{selectedItems.length}} Selected</div>\n            </div>\n\n            <div layout=\"column\" class=\"p-b-n p-t-sm p-l-md p-r-md filter__scroll\">\n                <md-checkbox class=\"md-primary\"\n                             ng-repeat=\"item in selectableItems\"\n                             ng-checked=\"exists(item)\"\n                             ng-click=\"toggle(item)\">\n                    {{ transformChip(item) }}\n                </md-checkbox>\n            </div>\n\n            <div class=\"p-b-sm p-t-sm p-l-sm\" layout=\"row\" layout-align=\"start center\">\n                <md-button class=\"md-raised md-primary\" ng-click=\"confirmCallback({selectedItems: selectedItems, sortingData: sortingData, event: $event})\">Ok</md-button>\n                <md-button class=\"md-raised\" ng-click=\"cancelCallback({event: $event})\">Cancel</md-button>\n            </div>\n        </md-content>\n    </div>\n</div>\n");
$templateCache.put("/main/templates/mdtChipsColumnFilter.html","<div class=\"filter-dropdown\">\n    <div class=\"md-whiteframe-z2\">\n        <md-content class=\"md-body-1\">\n            <div layout=\"row\" layout-align=\"end center\" class=\"b-b p-smd md-caption\" ng-if=\"::headerRowData.columnSort.isEnabled\">\n                <a href=\"#\" ng-click=\"sortingCallback($event, sortingData)\">Sort A-Z <mdt-sorting-icons size=\"20\" data=\"sortingData\" class=\"p-l-sm\"></mdt-sorting-icons></a>\n            </div>\n\n            <div class=\"p-md filter__scroll\">\n                <md-chips ng-model=\"selectedItems\"\n                          md-require-match=\"true\">\n\n                    <md-autocomplete md-delay=\"300\"\n                                     md-autofocus=\"true\"\n                                     md-search-text=\"searchText\"\n                                     md-items=\"item in headerRowData.columnFilter.valuesProviderCallback(searchText)\"\n                                     md-item-text=\"transformChip(item)\"\n                                     placeholder=\"{{placeholderText}}\">\n\n                        <span md-highlight-text=\"searchText\">{{transformChip(item)}}</span>\n\n                        <md-not-found>\n                            No results found.\n                        </md-not-found>\n                    </md-autocomplete>\n\n                    <md-chip-template>\n                        <span>\n                          <strong>{{transformChip($chip)}}</strong>\n                        </span>\n                    </md-chip-template>\n\n                </md-chips>\n            </div>\n\n            <div class=\"p-b-sm p-t-sm p-l-sm\" layout=\"row\" layout-align=\"start center\">\n                <md-button class=\"md-raised md-primary\" ng-click=\"confirmCallback({selectedItems: selectedItems, sortingData: sortingData, event: $event})\">Ok</md-button>\n                <md-button class=\"md-raised\" ng-click=\"cancelCallback({event: $event})\">Cancel</md-button>\n            </div>\n        </md-content>\n    </div>\n</div>\n");
$templateCache.put("/main/templates/mdtColumnSelector.html","<!-- TODO: change classname -->\n<div class=\"mdt-column-selector\">\n    <div class=\"md-whiteframe-z2\">\n        <md-content class=\"md-body-1\">\n            <div class=\"md-subhead p-t-md p-l-md mdt-column-selector-title\" layout=\"row\">\n                Columns\n            </div>\n            <div layout=\"row\" layout-align=\"start center\" class=\"selectall_clearall p-l-md p-t-md p-b-sm\">\n                <a href=\"#\" ng-click=\"selectAll($event)\" ng-class=\"{\'disabled\' : isAllSelected()}\">Select all</a> <span>-</span> <a href=\"#\" ng-class=\"{\'disabled\' : isNothingSelected()}\" ng-click=\"clearAll($event)\">Clear</a>\n\n                <div class=\"selected_items p-r-md\" flex ng-if=\"selectedItems.length\">{{selectedItems.length}} Selected</div>\n            </div>\n\n            <div layout=\"column\" class=\"p-b-n p-t-sm p-l-md p-r-md filter__scroll\">\n                <md-checkbox class=\"md-primary mdt-checbox-column-items\"\n                             ng-if=\"item.isExcluded == false\"\n                             ng-repeat=\"item in headerRowsData\"\n                             ng-checked=\"checked(item)\"\n                             ng-click=\"toggle(item)\">\n                    {{item.columnName}}\n                </md-checkbox>\n            </div>\n\n            <div class=\"p-b-sm p-t-sm p-l-sm\" layout=\"row\" layout-align=\"start center\">\n                <md-button class=\"md-raised md-primary\" ng-click=\"confirmCallback({paginator: mdtPaginationHelper})\">Ok</md-button>\n                <md-button class=\"md-raised\" ng-click=\"cancelCallback()\">Cancel</md-button>\n            </div>\n        </md-content>\n    </div>\n</div>\n");
$templateCache.put("/main/templates/mdtDropdownColumnFilter.html","<div class=\"filter-dropdown\">\n    <div class=\"md-whiteframe-z2\">\n        <md-content class=\"md-body-1\">\n            <div layout=\"row\" layout-align=\"end center\" class=\"b-b p-smd md-caption\" ng-if=\"::headerRowData.columnSort.isEnabled\">\n                <a href=\"#\" ng-click=\"sortingCallback($event, sortingData)\">Sort A-Z <mdt-sorting-icons size=\"20\" data=\"sortingData\" class=\"p-l-sm\"></mdt-sorting-icons></a>\n            </div>\n\n            <div class=\"p-md\">\n                <md-input-container class=\"md-block\" flex-gt-sm>\n                    <md-select ng-model=\"oneSelectedItem\" placeholder=\"{{placeholderText}}\" ng-change=\"selectedItem()\">\n                        <md-option ng-repeat=\"item in selectableItems\" value=\"{{transformChip(item)}}\">\n                            {{transformChip(item)}}\n                        </md-option>\n                    </md-select>\n                </md-input-container>\n            </div>\n\n            <div class=\"p-b-sm p-t-sm p-l-sm\" layout=\"row\" layout-align=\"start center\">\n                <md-button class=\"md-raised md-primary\" ng-click=\"confirmCallback({selectedItems: selectedItems, sortingData: sortingData, event: $event})\">Ok</md-button>\n                <md-button class=\"md-raised\" ng-click=\"cancelCallback({event: $event})\">Cancel</md-button>\n            </div>\n        </md-content>\n    </div>\n</div>\n");
$templateCache.put("/main/templates/mdtGeneratedHeaderCellContent.html","<div class=\"p-r no-outline column-header-content\" ng-class=\"{\'clickable\': headerRowData.columnSort.isEnabled}\" ng-click=\"columnClickHandler()\">\n    <mdt-chips-column-filter\n        ng-if=\"headerRowData.columnFilter.isActive && headerRowData.columnFilter.type === \'chips\'\"\n        confirm-callback=\"columnFilterFeature.confirmFilterDialog\"\n        cancel-callback=\"columnFilterFeature.cancelFilterDialog(event)\"\n        header-row-data=\"headerRowData\">\n    </mdt-chips-column-filter>\n\n    <mdt-dropdown-column-filter\n        ng-if=\"headerRowData.columnFilter.isActive && headerRowData.columnFilter.type === \'dropdown\'\"\n        confirm-callback=\"columnFilterFeature.confirmFilterDialog\"\n        cancel-callback=\"columnFilterFeature.cancelFilterDialog(event)\"\n        header-row-data=\"headerRowData\">\n    </mdt-dropdown-column-filter>\n\n\n    <mdt-checkbox-column-filter\n        ng-if=\"headerRowData.columnFilter.isActive && headerRowData.columnFilter.type === \'checkbox\'\"\n        confirm-callback=\"columnFilterFeature.confirmFilterDialog\"\n        cancel-callback=\"columnFilterFeature.cancelFilterDialog(event)\"\n        header-row-data=\"headerRowData\">\n    </mdt-checkbox-column-filter>\n\n    <div ng-if=\"headerRowData.columnSort.isEnabled\">\n        <md-tooltip ng-show=\"headerRowData.columnDefinition\">{{headerRowData.columnDefinition}}</md-tooltip>\n\n        <mdt-sorting-icons size=\"16\" data=\"headerRowData\" ng-show=\"headerRowData.alignRule == \'right\' && !headerRowData.columnFilter.isEnabled\"></mdt-sorting-icons>\n\n        <span ng-include src=\"\'/main/templates/cells/generateCellValue.html\'\"></span>\n\n        <mdt-sorting-icons size=\"16\" data=\"headerRowData\" ng-show=\"headerRowData.alignRule == \'left\' && !headerRowData.columnFilter.isEnabled\"></mdt-sorting-icons>\n    </div>\n    <div ng-if=\"!headerRowData.columnSort.isEnabled\">\n        <md-tooltip ng-show=\"headerRowData.columnDefinition\">{{headerRowData.columnDefinition}}</md-tooltip>\n\n        <span ng-include src=\"\'/main/templates/cells/generateCellValue.html\'\" class=\"no-outline\"></span>\n    </div>\n</div>");
$templateCache.put("/main/templates/mdtGeneratedHeaderRow.html","<tr class=\"theadTrRow\"\n    mdt-animate-sort-icon-handler>\n\n    <!-- TODO: fix text-align:left, in theory it should not be there to make it work -->\n    <th class=\"checkboxCell\"\n        style=\"text-align:left;\"\n        ng-show=\"selectableRows\"\n        mdt-select-all-rows-handler>\n\n        <md-checkbox aria-label=\"select all\" ng-model=\"selectAllRows\" ng-change=\"onCheckboxChange()\"></md-checkbox>\n    </th>\n\n    <th class=\"column\"\n        ng-repeat=\"headerRowData in dataStorage.header track by $index\"\n        ng-if=\"!headerRowData.columnSelectorFeature || headerRowData.columnSelectorFeature.isVisible\"\n\n        mdt-add-align-class=\"headerRowData.alignRule\"\n        ng-click=\"clickHandler($index, headerRowData)\"\n        md-ink-ripple=\"{{ rippleEffectCallback() }}\">\n\n        <mdt-generated-header-cell-content index=\"{{$index}}\"></mdt-generated-header-cell-content>\n    </th>\n</tr>\n");
$templateCache.put("/main/templates/mdtTable.html","<md-content class=\"mdtTableContainer md-whiteframe-z1\" ng-cloak>\n    <!-- table card -->\n    <mdt-card-header ng-hide=\"alternateHeaders && dataStorage.isAnyRowSelected()\"></mdt-card-header>\n\n    <!-- alternate headers -->\n    <mdt-alternate-headers ng-show=\"alternateHeaders && dataStorage.isAnyRowSelected()\"></mdt-alternate-headers>\n    <!-- alternate headers end -->\n\n    <md-content class=\"mdtTable\" layout=\"column\">\n        <!-- parsing transcluded content in order to be executed -->\n        <div class=\"mdtTable-reader\" style=\"display:none;\"></div>\n\n        <md-progress-linear md-mode=\"indeterminate\" class=\"loading-indicator\" ng-class=\"{\'loading-is-active\': mdtPaginationHelper.isLoading}\"></md-progress-linear>\n\n        <ng-include src=\"\'/main/templates/generateTable.html\'\"></ng-include>\n    </md-content>\n\n    <!-- table card -->\n    <mdt-card-footer></mdt-card-footer>\n    <!-- table card end -->\n</md-content>\n\n<style ng-if=\"::mdtLoadingIndicator\">\n    md-progress-linear.loading-indicator .md-bar{\n        background: {{mdtLoadingIndicator[\'color\']}};\n    }\n</style>");
$templateCache.put("/main/templates/smallEditDialog.html","<md-dialog aria-label=\"edit field modal\" layout-padding>\n    <md-dialog-content style=\"margin-left:16px;margin-right:16px;\">\n        <form ng-submit=\"saveRow()\" name=\"editFieldForm\">\n            <md-input-container md-no-float style=\"margin-bottom:0;width:100%;\">\n\n                <!-- TODO getting placeholder -->\n                <input type=\"text\"\n                       ng-model=\"cellData.value\"\n                       placeholder=\"\"\n                       md-maxlength=\"{{cellData.attributes.editableFieldMaxLength}}\" />\n            </md-input-container>\n        </form>\n    </md-dialog-content>\n</md-dialog>\n");
$templateCache.put("/main/templates/cells/generateCell.html","<!-- editable field -->\n<ng-md-icon icon=\"edit\" size=\"16\"\n            style=\"cursor:pointer;float:right;height:16px;padding-left:5px;outline: none;\"\n            ng-if=\"cellData.attributes.editableField\"\n            ng-click=\"showEditDialog($event, cellData, rowData)\"></ng-md-icon>\n\n<span mdt-add-html-content-to-cell=\"cellData\"\n      style=\"cursor:pointer;outline: none;\"\n      ng-if=\"cellData.attributes.editableField\"\n      ng-click=\"showEditDialog($event, cellData, rowData)\"></span>\n\n<!-- non editable field -->\n<span mdt-add-html-content-to-cell=\"cellData\" ng-if=\"cellData.attributes.editableField == false\"></span>\n");
$templateCache.put("/main/templates/cells/generateCellValue.html","<span ng-if=\"!headerRowData.columnFilter.isEnabled\">\n    {{headerRowData.columnName}}\n</span>\n\n<span ng-if=\"headerRowData.columnFilter.isEnabled\"\n      class=\"filter-select\"\n      ng-class=\"{\'is-active\': headerRowData.columnFilter.filtersApplied.length}\">\n     {{headerRowData.columnName}}\n     <ng-md-icon icon=\"arrow_drop_down\" size=\"24\"></ng-md-icon>\n</span>");
$templateCache.put("/main/templates/cells/generateCheckboxCell.html","<md-checkbox aria-label=\"select\" ng-model=\"rowData.optionList.selected\" ng-change=\"onCheckboxChange()\"></md-checkbox>\n");
$templateCache.put("/main/templates/cells/generateSortingIcons.html","<span class=\"hoverSortIcons\" ng-if=\"data.columnSort.sort == false\">\n    <ng-md-icon icon=\"arrow_forward\" size=\"{{size}}\"></ng-md-icon>\n</span>\n\n<span class=\"sortedColumn\" ng-if=\"data.columnSort.sort !== false\" ng-class=\"data.columnSort.sort === ColumnSortDirectionProvider.ASC ? \'ascending\' : \'descending\'\">\n    <ng-md-icon icon=\"arrow_forward\" size=\"{{size}}\"></ng-md-icon>\n</span>");
$templateCache.put("/main/templates/rows/errorIndicator.html","<td colspan=\"999\" class=\"errorMessage\">\n    <ng-bind-html ng-bind-html=\"mdtPaginationHelper.mdtRowPaginatorErrorMessage\"></ng-bind-html>\n</td>\n");
$templateCache.put("/main/templates/rows/generateRows.html","<tr class=\"tbodyTrRow\"\n    ng-repeat=\"rowData in mdtPaginationHelper.getRows() track by $index\"\n    ng-class=\"{\'selectedRow\': rowData.optionList.selected, \'{{rowData.optionList.className}}\': rowData.optionList.className }\"\n    ng-show=\"(isPaginationEnabled() === false || rowData.optionList.visible === true) && rowData.optionList.deleted === false\"\n    ng-click=\"clickRowHandler({row:rowData})\"\n>\n    <td class=\"checkboxCell\" ng-show=\"selectableRows\"\n        ng-include=\"\'/main/templates/cells/generateCheckboxCell.html\'\"></td>\n    <td class=\"column\"\n        ng-repeat=\"cellData in rowData.data track by $index\"\n        ng-if=\"!dataStorage.header[$index].columnSelectorFeature || dataStorage.header[$index].columnSelectorFeature.isVisible\"\n        mdt-add-align-class=\"dataStorage.header[$index].alignRule\"\n        style=\"position:relative;\"\n        ng-include src=\"\'/main/templates/cells/generateCell.html\'\">\n        <!-- generate cell content -->\n    </td>\n</tr>\n\n<tr ng-show=\"mdtPaginationHelper.isLoadError\"\n    ng-include src=\"\'/main/templates/rows/errorIndicator.html\'\"></tr>\n\n<tr ng-show=\"mdtPaginationHelper.isNoResults && !mdtPaginationHelper.isLoadError\"\n    ng-include src=\"\'/main/templates/rows/noResultIndicator.html\'\"></tr>\n");
$templateCache.put("/main/templates/rows/generateRowsVirtualRepeat.html","<tr md-virtual-repeat=\"rowData in mdtPaginationHelper.getRows()\"\n    ng-class=\"{\'selectedRow\': rowData.optionList.selected}\"\n    ng-show=\"(isPaginationEnabled() === false || rowData.optionList.visible === true) && rowData.optionList.deleted === false\"\n    ng-click=\"clickRowHandler({row:rowData})\"\n> \n    <td class=\"checkboxCell\" ng-show=\"selectableRows\"\n        ng-include=\"\'/main/templates/cells/generateCheckboxCell.html\'\"></td>\n\n    <td class=\"column\"\n        ng-repeat=\"cellData in rowData.data track by $index\"\n        mdt-add-align-class=\"dataStorage.header[$index].alignRule\"\n        style=\"position:relative;\"\n        ng-include src=\"\'/main/templates/cells/generateCell.html\'\">\n\n        <!-- generate cell content -->\n    </td>\n</tr>\n\n<tr ng-show=\"mdtPaginationHelper.isLoadError\"\n    ng-include src=\"\'/main/templates/rows/errorIndicator.html\'\"></tr>\n\n<tr ng-show=\"mdtPaginationHelper.isNoResults && !mdtPaginationHelper.isLoadError\"\n    ng-include src=\"\'/main/templates/rows/noResultIndicator.html\'\"></tr>\n");
$templateCache.put("/main/templates/rows/noResultIndicator.html","<td colspan=\"999\" class=\"noResultMessage\">\n    <ng-bind-html ng-bind-html=\"mdtPaginationHelper.mdtRowPaginatorNoResultsMessage\"></ng-bind-html>\n</td>\n");}]);