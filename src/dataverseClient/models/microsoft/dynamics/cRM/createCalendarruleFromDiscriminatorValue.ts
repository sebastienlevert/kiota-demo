import {Calendarrule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalendarruleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Calendarrule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Calendarrule();
}
