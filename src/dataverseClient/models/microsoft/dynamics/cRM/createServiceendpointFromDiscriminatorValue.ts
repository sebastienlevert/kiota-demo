import {Serviceendpoint} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceendpointFromDiscriminatorValue(parseNode: ParseNode | undefined) : Serviceendpoint {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Serviceendpoint();
}
