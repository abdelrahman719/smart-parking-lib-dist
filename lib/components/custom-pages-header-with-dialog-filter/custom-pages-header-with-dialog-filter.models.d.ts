export type { AppliedFilterChip as MainPagesModalFilterChip, FilterChange as MainPagesModalFilterChange, FilterConfigItem as MainPagesModalFilterConfigItem, FilterCustomTemplateContext as MainPagesModalFilterCustomTemplateContext, FilterInputType as MainPagesModalFilterInputType, FilterSelections as MainPagesModalFilterSelections, FilterValue as MainPagesModalFilterValue, } from './filter/custom-main-pages-modal-filter.models';
export interface CustomPagesHeaderResultSummary {
    shownCount: number;
    totalCount: number;
    itemLabel?: string;
    showWhenZero?: boolean;
    showingLabel?: string;
    ofLabel?: string;
}
