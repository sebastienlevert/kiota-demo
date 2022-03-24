import {Msdyusd_entityassignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyusd_entityassignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyusd_entityassignment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyusd_entityassignment();
}
