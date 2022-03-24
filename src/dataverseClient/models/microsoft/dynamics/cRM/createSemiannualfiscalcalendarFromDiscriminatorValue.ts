import {Semiannualfiscalcalendar} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSemiannualfiscalcalendarFromDiscriminatorValue(parseNode: ParseNode | undefined) : Semiannualfiscalcalendar {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Semiannualfiscalcalendar();
}
