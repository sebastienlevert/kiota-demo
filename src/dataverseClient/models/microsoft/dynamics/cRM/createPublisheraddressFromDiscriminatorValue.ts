import {Publisheraddress} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPublisheraddressFromDiscriminatorValue(parseNode: ParseNode | undefined) : Publisheraddress {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Publisheraddress();
}
