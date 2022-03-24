import {Msdyusd_sessioninformation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyusd_sessioninformationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyusd_sessioninformation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyusd_sessioninformation();
}
