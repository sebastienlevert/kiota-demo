import {Reportcategory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReportcategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Reportcategory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Reportcategory();
}
