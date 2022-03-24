import {Publisher} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPublisherFromDiscriminatorValue(parseNode: ParseNode | undefined) : Publisher {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Publisher();
}
