import {Msdyusd_customizationfiles} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyusd_customizationfilesFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyusd_customizationfiles {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyusd_customizationfiles();
}
