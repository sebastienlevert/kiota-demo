import {Quarterlyfiscalcalendar} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQuarterlyfiscalcalendarFromDiscriminatorValue(parseNode: ParseNode | undefined) : Quarterlyfiscalcalendar {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Quarterlyfiscalcalendar();
}
