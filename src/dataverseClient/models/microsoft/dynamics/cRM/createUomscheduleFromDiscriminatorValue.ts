import {Uomschedule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUomscheduleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Uomschedule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Uomschedule();
}
