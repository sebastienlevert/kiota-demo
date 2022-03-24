import {Monthlyfiscalcalendar} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMonthlyfiscalcalendarFromDiscriminatorValue(parseNode: ParseNode | undefined) : Monthlyfiscalcalendar {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Monthlyfiscalcalendar();
}
