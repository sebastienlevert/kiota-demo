import {Entityrelationship} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEntityrelationshipFromDiscriminatorValue(parseNode: ParseNode | undefined) : Entityrelationship {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Entityrelationship();
}
