import { ColumnActionsMode, IColumn } from "@fluentui/react";
var startCase = require('lodash/startCase');

const MIN_COLUMN_WIDTH = 100; // this is the global min width

export function buildColumns(
    items: any[],
    canResizeColumns?: boolean,
    onColumnClick?: (ev: React.MouseEvent<HTMLElement>, column: IColumn) => void,
    sortedColumnKey?: string,
    isSortedDescending?: boolean,
    groupedColumnKey?: string,
    isMultiline?: boolean,
    columnActionsMode?: ColumnActionsMode,
    exlusions?: string[]
  ) {
    const columns: IColumn[] = [];
  
    if (items && items.length) {
      const firstItem = items[0];
  
      for (const propName in firstItem) {
        if (firstItem.hasOwnProperty(propName) && !exlusions?.find((excludion) => excludion == propName)) {
          columns.push({
            key: propName,
            name: startCase(propName),
            fieldName: propName,
            minWidth: MIN_COLUMN_WIDTH,
            maxWidth: 300,
            isCollapsable: !!columns.length,
            isCollapsible: !!columns.length,
            isMultiline: isMultiline === undefined ? false : isMultiline,
            isSorted: sortedColumnKey === propName,
            isSortedDescending: !!isSortedDescending,
            isRowHeader: false,
            columnActionsMode: columnActionsMode ?? ColumnActionsMode.clickable,
            isResizable: canResizeColumns,
            isGrouped: groupedColumnKey === propName,
          });
        }
      }
    }
  
    return columns;
  }