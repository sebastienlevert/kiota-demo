import {Msdyn_analytics} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_analyticsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_analytics {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_analytics();
}
