import {Msdyusd_scripttasktrigger} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyusd_scripttasktriggerFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyusd_scripttasktrigger {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyusd_scripttasktrigger();
}
