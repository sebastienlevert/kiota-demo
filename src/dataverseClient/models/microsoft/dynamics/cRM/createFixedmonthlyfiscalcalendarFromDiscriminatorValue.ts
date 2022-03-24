import {Fixedmonthlyfiscalcalendar} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFixedmonthlyfiscalcalendarFromDiscriminatorValue(parseNode: ParseNode | undefined) : Fixedmonthlyfiscalcalendar {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Fixedmonthlyfiscalcalendar();
}
