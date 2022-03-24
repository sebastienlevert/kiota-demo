import {Service} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Service {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Service();
}
